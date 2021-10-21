import { CircularProgress } from "@material-ui/core";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import Question from "../../components/Question/Question";
import "./Quiz.css";

const Quiz = ({number, questions, score, setScore, setQuestions }) => {
  const [options, setOptions] = useState();
  const [currQues, setCurrQues] = useState(0);
  
  const history = useHistory();
  if(!number){
    history.push("/");
    
}
  useEffect(() => {
    setOptions(
      questions &&
        handleShuffle([
          questions[currQues]?.correct_answer,
          ...questions[currQues]?.incorrect_answers,
        ])
    );
    
  }, [currQues, questions]);

 

  const handleShuffle = (options) => {
    return options.sort(() => Math.random() - 0.5);
  };

  

  return (
    <div className="quiz">
      <span className="subtitle">GOODLUCK</span>

      {questions ? (
        <>
          <div className="quizInfo">
            <span>{questions[currQues].category}</span>
            <span>
              {/* {questions[currQues].difficulty} */}
              Score :{" "}{score}{" "}/{number}
            </span>
          </div>
          <Question
            currQues={currQues}
            setCurrQues={setCurrQues}
            questions={questions}
            options={options}
            correct={questions[currQues]?.correct_answer}
            score={score}
            setScore={setScore}
            setQuestions={setQuestions}
            number={number}
          />
        </>
      ) : (
        <CircularProgress
          style={{ margin: 100 }}
          color="inherit"
          size={150}
          thickness={1}
        />
      )}
    </div> 
  );
};

export default Quiz;
