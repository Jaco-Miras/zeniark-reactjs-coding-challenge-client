import React, { useContext } from "react";
import "./css/EndScreen.css";
import logo from "../assets/images/logo.png";

import { HiOutlineXMark, HiOutlineCheck } from "react-icons/hi2";

import { Link, useLocation, useNavigate } from "react-router-dom";
import { formatQuestion } from "../utils/utils";

const EndScreen = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Destructure location
  const { data, answers, questions } = location.state;

  // if data is null
  if ((!data, !answers, !questions)) {
    navigate("/");
  }

  function getQuestion(index) {
    return data[questions[index]];
  }

  function getScore() {
    let score = 0;

    answers.forEach((answer, index) => {
      if (answer === getQuestion(index).correct_answer) {
        score++;
      }
    });
    return score;
  }

  console.log(questions);
  return (
    <div className="Endscreen">
      <div className="endscreen-card">
        <div className="endscreen-header">
          <div className="endscreen-logo-container">
            <img className="endscreen-logo" src={logo} alt="" />
          </div>
          <div className="endscreen-result">
            <h1>Final Results</h1>
          </div>
        </div>
        <div className="endscreen-score">{getScore()}/10</div>
        <div className="endscreen-yourscore">
          <p>Your Score</p>
        </div>
        <div className="endscreen-results">
          <div className="endscreen-questions">
            {questions.map((question, index) => (
              <div className="endscreen-question">
                <div>
                  <p className="p">
                    <span className="span">{index + 1}. </span>
                  </p>
                </div>
                <div className="endscreen-question-middle">
                  <h5>{formatQuestion(getQuestion(index).question)}</h5>
                  <p className="desc-p">
                    The correct answer is{" "}
                    <span
                      className="desc-span1"
                      style={{
                        color:
                          getQuestion(index).correct_answer === "True"
                            ? "green"
                            : "red",
                      }}
                    >
                      {getQuestion(index).correct_answer}
                    </span>
                    . You answered{" "}
                    <span
                      className="desc-span2"
                      style={{
                        color: answers[index] === "True" ? "green" : "red",
                      }}
                    >
                      {answers[index]}
                    </span>
                  </p>
                </div>
                <div className="endscreen-icon">
                  <div className="desc-icon">
                    {getQuestion(index).correct_answer === "True" ? (
                      <HiOutlineCheck
                        style={{
                          fontSize: "40px",
                          fontWeight: "900",
                          color: "green",
                        }}
                      />
                    ) : (
                      <HiOutlineXMark
                        style={{
                          fontSize: "40px",
                          fontWeight: "900",
                          color: "red",
                        }}
                      />
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="endscreen-button">
            <Link className="button" to="/">
              {" "}
              <p>PLAY AGAIN</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EndScreen;
