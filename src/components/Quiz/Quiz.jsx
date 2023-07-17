import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import { CircularProgressbarWithChildren, buildStyles } from "react-circular-progressbar";

import QuizBanner from "../../assets/icons/quizBanner.svg";

import "./quiz.scss";
import "react-circular-progressbar/dist/styles.css";
import { MyContext } from "../../Context";

export default function Quiz() {
  const { currentQuestionNo, questions } = useContext(MyContext);

  return (
    <div className="quiz-container page-content container">
      <img src={QuizBanner} alt="" />
      <div className="question-container">
        <div className="progress-bar-container">
          <CircularProgressbarWithChildren
            minValue={1}
            maxValue={questions ? questions.length : 5}
            value={currentQuestionNo}
            background="#ffffff"
            styles={buildStyles({
              textColor: "#000000",
              backgroundColor: "#ffffff",
              trailColor: '#F3F4FA',
            })}
          >
              <div>
                <em className="step">{currentQuestionNo}</em>
                <em className="max-step">/{questions ? questions.length : 5}</em>
              </div>
            </CircularProgressbarWithChildren>
        </div>
       <div className="question">
       <h6 className="question-text">
          {(currentQuestionNo && questions) ? questions[currentQuestionNo - 1].q : ''}
        </h6>
        <Outlet />
       </div>
      </div>
    </div>
  );
}
