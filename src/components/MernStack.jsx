import React, { useState } from "react";
// import "./App.css";
import { Navigate } from "react-router-dom";

const quizQuestions = [
  {
    question: "What does React primarily use for building UI?",
    options: ["HTML", "CSS", "JavaScript", "React"],
    answer: "JavaScript",
  },
  {
    question: "Which hook is used to manage state in functional components?",
    options: ["useState", "useEffect", "useReducer", "useContext"],
    answer: "useState",
  },
  {
    question: "What is JSX?",
    options: [
      "A JavaScript library",
      "A template language",
      "Syntax extension for JavaScript",
      "A styling method",
    ],
    answer: "Syntax extension for JavaScript",
  },

  {
    question: "What command is used to manage different NodeJS veresions?",
    options: ["NPM", "NVM", "NODE", "JS"],
    answer: "NVM",
  },
  {
    question:
      "Which of the following routes is considered a RESTful configuration for ExpressJS?",
    options: ["/{id}", "/:id", "/?id=val", "/?id=val"],
    answer: "/:id",
  },
  {
    question:
      "Asynchronous functions can trigger the callback of the catch part using what keyword?",
    options: ["return", "await", "throw", "export"],
    answer: "throw",
  },
  {
    question:
      "What global variable is used to access the environment variables of a NodeJS application?",
    options: ["env", "process.env", "ENV", "PROCESS.ENV"],
    answer: "process.env",
  },
  {
    question: "Collection is a group of MongoDB ___________?",
    options: ["Document", "Table", "Database", "Row"],
    answer: "Document",
  },
  {
    question:
      "Filters the document stream to allow only matching documents to pass unmodified into the next pipeline stage",
    options: ["$regex", "$reg", "$match", "none of the mentioned"],
    answer: "$match",
  },
  {
    question: "What is Mongoose?",
    options: [
      "An object document mapping",
      "An object-relational mapping",
      "A small terrestrial carnivorous",
      "A document Object",
    ],
    answer: "An object document mapping",
  },

  {
    question: "BSON is a binary representation of .............. documents?",
    options: ["JSON", "XML", "JScript", "All the mentioned"],
    answer: "JSON",
  },
  {
    question: "ReactJs cover",
    options: [
      "User Interface layer in an application",
      "Data layer in an application",
      "Both A & B",
      "None of the above",
    ],
    answer: "User Interface layer in an application",
  },
];

const MernStack = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0); // To track the current question
  const [userAnswers, setUserAnswers] = useState([]); // To store user-selected answers
  const [score, setScore] = useState(null); // To store score once the quiz is submitted
  const [isQuizFinished, setIsQuizFinished] = useState(false); // To track whether quiz is finished

  // Function to handle answer selection
  const handleAnswerClick = (answer) => {
    const updatedAnswers = [...userAnswers];
    updatedAnswers[currentQuestion] = answer;
    setUserAnswers(updatedAnswers);
  };

  // Function to move to the next question
  const nextQuestion = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  // Function to calculate and display the score
  const submitQuiz = () => {
    let calculatedScore = 0;
    quizQuestions.forEach((question, index) => {
      if (userAnswers[index] === question.answer) {
        calculatedScore++;
      }
    });
    setScore(calculatedScore);
    setIsQuizFinished(true);
  };

  // Restart the quiz
  const restartQuiz = () => {
    setCurrentQuestion(0);
    setUserAnswers([]);
    setScore(null);
    setIsQuizFinished(false);
  };

  return (
    <div className="quiz-container">
      {!isQuizFinished ? (
        <div className="quiz-box">
          <h2>{quizQuestions[currentQuestion].question}</h2>
          <div className="options">
            {quizQuestions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                className={`option ${
                  userAnswers[currentQuestion] === option ? "selected" : ""
                }`}
                onClick={() => handleAnswerClick(option)}
              >
                {option}
              </button>
            ))}
          </div>

          <button
            className="next-btn"
            onClick={
              currentQuestion === quizQuestions.length - 1
                ? submitQuiz
                : nextQuestion
            }
          >
            {currentQuestion === quizQuestions.length - 1
              ? "Submit Quiz"
              : "Next Question"}
          </button>
        </div>
      ) : (
        <div className="result-box">
          <h2>
            Your Score: {score}/{quizQuestions.length}
          </h2>{" "}
          <button onClick={restartQuiz} className="restart">
            Restart Quiz
          </button>
        </div>
      )}
      <Navigate to="/mernstack-quiz"></Navigate>
    </div>
  );
};

export default MernStack;
