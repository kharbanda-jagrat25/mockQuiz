import React, { useContext, useEffect, useState } from "react";
import RadioButton from "../../RadioButton/RadioButton";
import Button from "../../Button/Button";
import RightArrow from "../../../assets/icons/rightArrow.svg"
import { MyContext } from "../../../Context";
import data from '../../../apiService/data';
import { useNavigate } from "react-router-dom";

const Question = () => {
  const navigate = useNavigate();
  const [currentSelectedOption, setCurrentSelectedOption] = useState('');
  const [isSubmittingAnswer, setIsSubmittingAnswer] = useState(false);
  const { currentQuestionNo, setCurrentQuestionNo, questions, setQuestions, setResult } = useContext(MyContext);

  useEffect(() => {
    fetchQuestions();
  }, []);

  const fetchQuestions = () => {
    setTimeout(() => {
      setQuestions(data.questions);
    }, [300]);
  };

  const handleRadioClick = (option) => {
    setCurrentSelectedOption(prevCurrentSelectedOption => prevCurrentSelectedOption === option ? '' : option);
  };

  const submitAnswer = () => {
    setIsSubmittingAnswer(true);
    setTimeout(() => {
      setQuestions(prevQuestions => {
        prevQuestions[currentQuestionNo - 1].submittedAnswer = currentSelectedOption;
        return prevQuestions;
      });
      if (currentSelectedOption) setCurrentSelectedOption('');
      setIsSubmittingAnswer(false);
    },300);
    if (currentQuestionNo + 1 <= questions.length) setCurrentQuestionNo(currentQuestionNo + 1);
    else {
      calcResult();
      navigate("/quiz/result");
    }
  }

  const calcResult = () => {
    let noOfCorrectAnswers = 0;
    for (let question of questions) {
      if (question.answer === question.submittedAnswer) noOfCorrectAnswers++;
    }
    setResult({
      noOfCorrectAnswers,
      totalNoOfQuestions: questions.length
    });
  }

  if (currentQuestionNo && questions) return (
    <div>
      {questions[currentQuestionNo - 1].options.map((option, idx) => (
        <RadioButton
          key={idx}
          title={option}
          checked={currentSelectedOption === option}
          onClick={() => handleRadioClick(option)}
        />
      ))}
      <Button
        type="submit"
        title="Next"
        buttonIcon={<img src={RightArrow} alt="" />}
        onClick={submitAnswer}
        disabled={isSubmittingAnswer || !currentSelectedOption}
      />
    </div>
  );
  return null;
};

export default Question;
