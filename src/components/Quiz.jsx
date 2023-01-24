import React, { useEffect, useState } from "react";
import "./css/Quiz.css";
import logo from "../assets/images/logo.png";
import { HiOutlineXMark, HiOutlineCheck } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import { formatQuestion } from "../utils/utils";

const Quiz = () => {
  const [data, setData] = useState(null);
  const [number, setNumber] = useState(1);
  const [questions, setQuestions] = useState(getRandomNumbers());
  const [answers, setAnswers] = useState([]);

  const navigate = useNavigate();

  // fetch data from json
  useEffect(() => {
    fetch(`http://localhost:3001/questions`)
      .then((res) => res.json())
      .then((res) => setData(res.results));
  }, []);
  console.log(data);

  console.log("Q", questions);

  // get Random Numbers
  function getRandomNumbers() {
    const numbers = Array.from({ length: 30 }, (_, i) => i + 1);
    const randomNumbers = [];

    while (randomNumbers.length < 10) {
      const randomIndex = Math.floor(Math.random() * numbers.length);
      const randomNumber = numbers[randomIndex];
      if (!randomNumbers.includes(randomNumber)) {
        randomNumbers.push(randomNumber - 1);
      }
    }
    return randomNumbers;
  }

  function handleSubmit(choice) {
    const newAnswers = [...answers, choice];
    setAnswers(newAnswers);
    if (number === 10) {
      navigate("/endscreen", {
        state: {
          data,
          questions,
          answers: newAnswers,
        },
      });
    }
    setNumber(number + 1);
  }

  // if data is null
  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="Quiz">
      <div className="quiz-card">
        <div className="quiz-header">
          <div className="quiz-logo-container">
            <img className="quiz-logo" src={logo} alt="" />
          </div>
          <div className="quiz-category">
            <h1>Category: {data[questions[number - 1]]?.category}</h1>
            <p>{number}/10</p>
          </div>
        </div>
        <div className="quiz-question">
          <p>{formatQuestion(data[questions[number - 1]]?.question)}</p>
        </div>
        <div className="quiz-buttons">
          <button onClick={() => handleSubmit("True")} className="button-true">
            <HiOutlineCheck
              style={{
                fontSize: "25px",
              }}
            />
            TRUE
          </button>
          <button
            onClick={() => handleSubmit("False")}
            className="button-false"
          >
            <HiOutlineXMark style={{ fontSize: "25px" }} />
            FALSE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
