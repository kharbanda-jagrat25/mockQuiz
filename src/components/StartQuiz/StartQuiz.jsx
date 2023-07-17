import React from "react";
import { useNavigate } from "react-router-dom";

import Logo from "../../assets/icons/logo.svg";
import Button from "../Button/Button";

import "./startQuiz.scss";

export default function StartQuiz() {
  const navigate = useNavigate();

  const onStartButtonClick = () => navigate("/quiz/question");

  return (
    <div className="page-content container">
      <img src={Logo} className="logo" alt="" />
      <div className="heading">
        <div className="quiz">Quiz</div>
      </div>

      <Button
        type="submit"
        title="Start"
        className="start-button"
        onClick={onStartButtonClick}
      />
    </div>
  );
}
