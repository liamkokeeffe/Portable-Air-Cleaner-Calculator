import React, { Component } from "react";
import "../Home.css";
import HelpIcon from "../images/helperIcon.png";

export function Subheader(props) {
  function showHelpPopup(id) {
    var popup = document.getElementById(id);
    popup.classList.toggle("show");
  }

  return (
    <div className="subheader">
      <h2 id="subheader--title">Portable Air Cleaner Calculator</h2>
      <button className="subheader--btn" id="subheader--btn-find" onClick={() => props.updateDisplay("find")}>
        Find Air Cleaner
      </button>
      <div class="subheader--popup-container">
        <button
          className="subheader--btn-img"
          onClick={() => this.showHelpPopup("help--popup-find")}
        >
          <span className="help--popup" id="help--popup-find">
            Choose this option to find an air cleaner that matches your room
            dimensions.
          </span>
          <img src={HelpIcon} alt="help icon" />
        </button>
      </div>
      <span id="subheader--text">OR</span>
      <button className="subheader--btn" id="subheader--btn-test" onClick={() => props.updateDisplay("test")}>
        Test Air Cleaner
      </button>
      <div class="subheader--popup-container">
        <button
          className="subheader--btn-img"
          onClick={() => this.showHelpPopup("help--popup-test")}
        >
          <span className="help--popup" id="help--popup-test">
            Choose this option to test if your air cleaner is sufficient for
            your building.
          </span>
          <img src={HelpIcon} alt="help icon" />
        </button>
      </div>
    </div>
  );
}
