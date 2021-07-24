import React, { useState } from 'react';

import { fetchQuizQuestions } from './API';

import QuestionCard from './Components/QuestionCard';

import { QuestionState, Difficulty } from './API'

import { GlobalStyle, Warper } from './App.style';

export type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
}

const TOTAL_Questions = 10;

function App() {

  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswer] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);


  const starTrivia = async () => {
    setLoading(true);
    setGameOver(false);

    const newQuestions = await fetchQuizQuestions(
      TOTAL_Questions,
      Difficulty.EASY
    );

    setQuestions(newQuestions);
    setScore(0);
    setUserAnswer([]);
    setNumber(0);
    setLoading(false);
  };

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!gameOver) {
      //user answer
      const answer = e.currentTarget.value;
      //check answer against correct answer
      const correct = questions[number].correct_answers === answer;
      //add answer if answer is correct
      if (correct) setScore(prev => prev + 1);
      //save answer in the array for user answers
      const answerObject = {
        question: questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correct_answers,

      };
      setUserAnswer((prev) => [...prev, answerObject]);
    }
  };

  const nextQuestion = () => {
    
    const nextQuestion = number + 1;

    if(nextQuestion === TOTAL_Questions) {
      setGameOver(true);
    } else {
      setNumber(nextQuestion);
    }
  }

  return (
    <>
    <GlobalStyle/>
    <Warper>
      <h1>ASH Quiz</h1>
      {gameOver || userAnswers.length === TOTAL_Questions ? (
        <button className="start" onClick={starTrivia}>Start
        </button>) : null}

      {!gameOver ? <p className="score">Score: {score}</p> : null}
      {loading &&
        <p>Loading Questions ...</p>}
      {!loading && !gameOver && (
        <QuestionCard
          questionNr={number + 1}
          totalQuestions={TOTAL_Questions}
          question={questions[number].question}
          answers={questions[number].answers}
          userAnswer={userAnswers ? userAnswers[number] : undefined}
          callback={checkAnswer}
        />
      )}
      {!gameOver && !loading && userAnswers.length === number + 1 && number !== TOTAL_Questions - 1 ? (
        <button className="next" onClick={nextQuestion}>
          Next Question
        </button>
      ) : null}
    
    </Warper>
    </>
  );
}

export default App;
