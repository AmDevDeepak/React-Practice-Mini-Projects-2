import React from "react";

const Quiz = () => {
  const questions = [
    {
      question: "What is the primary purpose of React?",
      correctAnswer: "Building user interfaces",
      options: [
        "Building user interfaces",
        "Managing databases",
        "Handling server requests",
        "Styling web pages",
      ],
    },
    {
      question:
        "Which method is used to update the state in a React component?",
      correctAnswer: "setState",
      options: ["setState", "updateState", "changeState", "modifyState"],
    },
    {
      question: "What is JSX?",
      correctAnswer: "A syntax extension for JavaScript",
      options: [
        "A new programming language",
        "A syntax extension for JavaScript",
        "A library for managing state",
        "A tool for testing React components",
      ],
    },
    {
      question:
        "Which hook is used to manage side effects in functional components?",
      correctAnswer: "useEffect",
      options: ["useState", "useEffect", "useContext", "useReducer"],
    },
    {
      question: "What is the output of 'typeof null' in JavaScript?",
      correctAnswer: "object",
      options: ["null", "undefined", "object", "string"],
    },
    {
      question: "Which of the following is a JavaScript framework?",
      correctAnswer: "Angular",
      options: ["React", "Vue", "Angular", "Sass"],
    },
    {
      question: "What does the 'this' keyword refer to in JavaScript?",
      correctAnswer: "The object from which it was called",
      options: [
        "The global object",
        "The object from which it was called",
        "The parent object",
        "The function itself",
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  const [score, setScore] = React.useState(0);
  const [answers, setAnswers] = React.useState(
    new Array(questions.length).fill(null)
  );
  const [selectedOptions, setSelectedOptions] = React.useState(
    new Array(questions.length).fill(null)
  );

  const [showResult, setShowResult] = React.useState(false);

  const handleClickNext = (ev) => {
    if (ev.target.innerText === "Next") {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion((prevQuestion) => prevQuestion + 1);
      }
    }
    if (ev.target.innerText === "See Result") {
      setShowResult(true);
    }
  };

  const handleClickPrevious = () => {
    setCurrentQuestion((prevQuestion) => prevQuestion - 1);
  };

  const handleAnswer = (questionIdx, answer) => {
    if (selectedOptions[questionIdx] !== null) {
      return;
    }
    const { correctAnswer } = questions[questionIdx];
    setAnswers((prevAnswers) => {
      const newAsnwers = [...prevAnswers];
      newAsnwers[questionIdx] =
        correctAnswer === answer ? "correct" : "incorrect";
      return newAsnwers;
    });

    if (correctAnswer === answer) {
      setScore((prevScore) => prevScore + 1);
    } else {
      setScore((prevScore) => Math.max(prevScore - 1, 0));
    }

    setSelectedOptions((prevOptions) =>
      prevOptions.map((option, index) =>
        index === questionIdx ? answer : option
      )
    );
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
    setAnswers(new Array(questions.length).fill(null));
    setSelectedOptions(new Array(questions.length).fill(null));
  };

  return (
    <div className="w-full h-[100vh] bg-pink-300 flex items-center justify-center">
      {!showResult ? (
        <div className="bg-pink-500 w-1/3 flex flex-col py-3 px-2 rounded-md">
          <h2 className="text-2xl font-semibold text-white font-mono">
            Question {currentQuestion + 1}
          </h2>
          <p className="text-xl font-medium text-yellow-200">
            {questions[currentQuestion].question}
          </p>
          <div className="flex flex-col items-start gap-2 mt-2">
            {questions[currentQuestion].options.map((option, index) => {
              const isSelected = selectedOptions[currentQuestion] === option;
              const isCorrect = answers[currentQuestion] === "correct";
              const isIncorrect = answers[currentQuestion] === "incorrect";

              return (
                <button
                  key={index}
                  onClick={() => handleAnswer(currentQuestion, option)}
                  className={`option-button px-2 py-3 w-full font-bold ${
                    isSelected && isCorrect
                      ? "bg-green-500 text-white"
                      : isSelected && isIncorrect
                      ? "bg-red-500 text-white"
                      : "bg-white text-gray-700"
                  }`}
                >
                  {option}
                </button>
              );
            })}
          </div>
          <div
            className={`flex font-semibold items-center gap-3 justify-end mt-2 text-white`}
          >
            <button
              className={`px-3 py-2 rounded-md ${
                currentQuestion === 0
                  ? "bg-yellow-200 cursor-not-allowed"
                  : "bg-yellow-500"
              }`}
              disabled={currentQuestion === 0}
              onClick={handleClickPrevious}
            >
              Previous
            </button>
            <button
              onClick={handleClickNext}
              className="px-3 py-2 bg-blue-500 rounded-md"
            >
              {" "}
              {currentQuestion < questions.length - 1 ? "Next" : "See Result"}
            </button>
          </div>
        </div>
      ) : (
        <div className="bg-pink-500 w-1/3 flex flex-col py-3 px-2 rounded-md">
          <h3 className=" text-white font-mono text-3xl">Quiz Completed</h3>
          <p className="mt-2 text-xl font-semibold text-yellow-200">
            Your Score is : {score}
          </p>
          <button
            className="px-3 py-2 bg-blue-500 text-white font-semibold rounded-md w-fit mt-3"
            onClick={handleRestart}
          >
            Restart
          </button>
        </div>
      )}
    </div>
  );
};

export default Quiz;
