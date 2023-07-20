import React, { useContext } from "react";

import Button from "../Button/Button";
import QuizBanner from "../../assets/icons/quizBanner.svg";

import "./result.scss";
import { MyContext } from "../../Context";
import { useNavigate } from "react-router-dom";
import CircularProgressBar from "../CircularProgressBar/CircularProgressBar";

export default function Result() {
  const navigate = useNavigate();
  const { result, setResult, setCurrentQuestionNo } = useContext(MyContext);

  const getPercentage = () => {
    if (result) {
      return (result.noOfCorrectAnswers / result.totalNoOfQuestions) * 100;
    }
    return 0;
  };

  const getNeedleDegrees = () => {
    const inDegrees = (180 * getPercentage()) / 100;
    return (-90 + inDegrees);
  };

  return (
    <div className="result-main-container page-content container">
      <img src={QuizBanner} alt="" />
      <div className="result-container">
        <h4>Your result</h4>
        <div className="circular-progress-bar-container">
          <CircularProgressBar />
          <div className="speedometer" style={{ transform: `rotate(${getNeedleDegrees()}deg)` }}>
           <div className="outer-circle">
              <div className="inner-circle"></div>
              <div className="needle"></div>
           </div>
          </div>
          <div className="percent">{getPercentage()}%</div>
        </div>
        <div className="ans-container">
          <div className="right-ans-container">
            <div className="indicator"></div>
            {result ? result.noOfCorrectAnswers : 0}
            <span className="text">Correct</span>
          </div>

          <div className="wrong-ans-container">
            <div className="indicator"></div>
            {(result ? result.totalNoOfQuestions : 0) -
              (result ? result.noOfCorrectAnswers : 0)}
            <span className="text">Incorrect</span>
          </div>
        </div>
        <Button
          type="submit"
          title="Start again"
          onClick={() => {
            setResult(null);
            setCurrentQuestionNo(1);
            navigate("/quiz/question");
          }}
        />
      </div>
    </div>
  );
}
