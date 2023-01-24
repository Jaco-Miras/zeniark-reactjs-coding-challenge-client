import React, { useContext } from "react";
import logo from "../assets/images/zeniark-logo.png";
import "./css/MainMenu.css";
import { Link } from "react-router-dom";

const MainMenu = () => {
  return (
    <div className="Menu">
      <div className="menu-card">
        <div className="menu-header">
          <img src={logo} alt="" />
        </div>
        <div className="menu-title">
          <h1>Welcome to the Trivia Challenge!</h1>
        </div>
        <div className="menu-body">
          <p>You will be presented with 10 True or False questions.</p>
        </div>
        <div className="menu-body1">
          <p>Can you score 10/10?</p>
        </div>
        <div className="menu-button">
          <Link className="button" to="/quiz">
            {" "}
            <p>LET'S START!</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MainMenu;
