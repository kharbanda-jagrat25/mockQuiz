import "./App.scss";
import React, { Suspense, useState } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { MyContext } from './Context';
import MainRoutes from "./components/MainRoutes/MainRoutes";

function App() {
  const [currentQuestionNo, setCurrentQuestionNo] = useState(1);
  const [questions, setQuestions] = useState();
  const [result, setResult] = useState();

  const contextValue = {
    result,
    setResult,
    questions,
    setQuestions,
    currentQuestionNo,
    setCurrentQuestionNo,
  };

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <MyContext.Provider value={contextValue}>
        <div className="main-container">
          <Router>
            <MainRoutes />
          </Router>
        </div>
      </MyContext.Provider>
    </Suspense>
  );
}

export default App;
