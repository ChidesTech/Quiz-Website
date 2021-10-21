import { Button, MenuItem, TextField } from "@material-ui/core";
import { useState } from "react";
import { useHistory } from "react-router";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import Categories from "../../Data/Categories";
import "./Home.css";

const Home = ({number, setNumber, fetchQuestions }) => {
  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [error, setError] = useState(false);

  const history = useHistory();

  const handleSubmit = () => {
    if (!category || !difficulty || !number ) {
      setError(true);
      return;
    } else {
      setError(false);
      fetchQuestions(category, difficulty, number);
      history.push("/questions");
    }
  };

  return (<>
   <div className="animation">
    <div className="wrapper">
      <ul className="dynamic">
          <li><span>IT's Challenging</span></li>
          <li><span>''</span></li>
          <li><span>IT'S Educating</span></li>
          <li><span>''</span></li>
          <li><span> IT's F U N </span></li>
          <li><span>''</span></li>
          <li><span>IT's Chides Trivia</span></li>
          
      </ul>
  </div>
  </div>
    <div className="content">
      <img src="/image.png" className="banner img" alt="quiz app" />

      <div className="settings">
        <span style={{ fontSize: 30 }}>SELECT YOUR OPTIONS</span>
        <div className="settings__select">
          {error && <ErrorMessage>Select An Option For Both</ErrorMessage>}
         
          <TextField
            select
            label="Select A Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            variant="outlined"
            style={{ marginBottom: 30 }}
          >
            {Categories.map((cat) => (
              <MenuItem key={cat.category} value={cat.value}>
                {cat.category}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            select
            label="Choose Level"
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
            variant="outlined"
            style={{ marginBottom: 30 }}
          >
            <MenuItem key="Easy" value="easy">
             Beginner
            </MenuItem>
            <MenuItem key="Medium" value="medium">
             Intermediate
            </MenuItem>
            <MenuItem key="Hard" value="hard">
             Expert
            </MenuItem>
          </TextField>
          <TextField
            select
            label="Number Of Questions"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            variant="outlined"
            style={{ marginBottom: 30 }}
          >
            <MenuItem key="10" value="10">
             10 Questions
            </MenuItem>
            <MenuItem key="15" value="15">
             15 Questions
            </MenuItem>
            <MenuItem key="20" value="20">
             20 Questions
            </MenuItem>
            <MenuItem key="25" value="25">
             25 Questions
            </MenuItem>
            <MenuItem key="30" value="30">
             30 Questions
            </MenuItem>
          </TextField>
          <Button
            variant="contained"
           style={{backgroundColor: "navy", color: "white"}}
            size="large"
            onClick={handleSubmit}
          >
            Start
          </Button>
        </div>
      </div>
    </div>
    </>
  );
};

export default Home;
