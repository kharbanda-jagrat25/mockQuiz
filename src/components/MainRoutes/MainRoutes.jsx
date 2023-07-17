import React, { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import StartQuiz from "../StartQuiz/StartQuiz";

const Quiz = lazy(() => import("../Quiz/Quiz"));
const Result = lazy(() => import("../Result/Result"));
const Question = lazy(() => import("../Quiz/Question/Question"));
const QuestionWithImage = lazy(() => import("../Quiz/QuestionWithImage/QuestionWithImage"));
const QuestionWithSelection = lazy(() => import("../Quiz/QuestionWithSelection/QuestionWithSelection"));


export default function MainRoutes() {
  return (
    <Routes>
      <Route path="/" exact element={<StartQuiz />} />
      <Route path="/quiz" element={<Quiz />}>
        <Route path="question" element={<Question />} />
        <Route path="question-with-image" element={<QuestionWithImage />} />
        <Route path="question-with-selection" element={<QuestionWithSelection />} />
      </Route>
      <Route path="/quiz/result" element={<Result />} />
    </Routes>
  );
}
