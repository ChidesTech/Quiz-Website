import axios from "axios";
import { useState } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import NotFound from "./components/NotFound";
import Home from "./Pages/Home/Home";
import Quiz from "./Pages/Quiz/Quiz";
import Result from "./Pages/Result/Result";

function App() {
  const [questions, setQuestions] = useState();
  const [score, setScore] = useState(0);
 const [number , setNumber] = useState();
  const fetchQuestions = async (category = "", difficulty = "", number="") => {
    const { data } = await axios.get(
      `https://opentdb.com/api.php?amount=${number}${
        category && `&category=${category}`
      }${difficulty && `&difficulty=${difficulty}`}&type=multiple`
    );

    setQuestions(data.results);
  };

  return (
    <HashRouter>
      <div className="app" >
        <Header />
        <Switch>
          <Route path="/" exact>
            <Home
             number={number}
             setNumber={setNumber}
              fetchQuestions={fetchQuestions}
            />
          </Route>
          <Route path="/questions">
            <Quiz
              questions={questions}
              score={score}
              setScore={setScore}
              setQuestions={setQuestions}
              number={number}
              setNumber={setNumber}
            />
          </Route>
          <Route path="/score">
            <Result  score={score} 
              number={number}
              />
          </Route>
          <Route component={NotFound}/>
        </Switch>
      </div>
      <Footer />
    </HashRouter>
  );
}

export default App;
