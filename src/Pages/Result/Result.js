import { Button } from "@material-ui/core";
import { useHistory } from "react-router";
import "./Result.css";

const Result = ({  score, number }) => {
const percentage = Math.ceil(score*100/number);
const history = useHistory();
if(!number){
  history.push("/");
  
}
  return (
    <div className="result">
      <span className="score ">Final Score : {score} / {number}</span>
      <br/>
      <span className="score ">({percentage}%)</span>
      <br/>
      <span className="score comment">
  {percentage <40 ? <div className='red'>Very Poor</div>: percentage >= 40 && percentage < 50 ?<div className='red'>Poor</div>:
        percentage >= 50 && percentage  < 60 ? <div className='green' >Average</div> : 
        percentage >= 60 && percentage  < 65 ?<div className='green' >Good</div>: percentage >= 65 && percentage  < 75?
         <div className='green' >Very Good</div>  : <div className='blue'>Excellent!!!</div>}
      </span>
      <Button
        variant="contained"
        size="large"
        style={{ alignSelf: "center", marginTop: 20, backgroundColor:"green" , color:"white"}}
        href="/"
      >
       Play Again
      </Button>
    </div>
  );
};

export default Result;
