import React from "react";
import RadioButton from "../../RadioButton/RadioButton";
import Button from "../../Button/Button";
import RightArrow from "../../../assets/icons/rightArrow.svg"
import QuizProcess from "../../../assets/images/quizProcess.png";

const QuestionWithImage = () => {
  return (
    <div>
     <img src={QuizProcess} alt="" style={{ height: "300px", width: "300px"}} />
      <RadioButton title="Data Analysis" />
      <Button
        type="submit"
        title="Next"
        buttonIcon={<img src={RightArrow} alt="" />}
        onClick={() => {}}
      />
    </div>
  );
};

export default QuestionWithImage;
