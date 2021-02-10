import React, { Component } from "react";
import "../Home.css";

class Subheader extends Component {
  showHelpPopup(id) {
    var popup = document.getElementById(id);
    popup.classList.toggle("show");
  }

  render() {
    return (
      <div className="subheader">
        <h2 id="subheader--title">Portable Air Cleaner Calculator</h2>
        <div className="subheader-btncontainer">
          <button className="subheader--btn" id="subheader--btn-find">
            Find Air Cleaner
          </button>
          <button
            className="subheader--btn-img"
            onClick={() => this.showHelpPopup("help--popup-find")}
          >
            <span className="help--popup" id="help--popup-find">
              Choose this option to find an air cleaner that matches your room
              dimensions.
            </span>
            <img src="images/helperIcon.png" alt="help icon" />
          </button>
          <span>OR</span>
          <button className="subheader--btn" id="subheader--btn-test">
            Test Air Cleaner
          </button>
          <button
            className="subheader--btn-img"
            onClick={() => this.showHelpPopup("help--popup-test")}
          >
            <span className="help--popup" id="help--popup-test">
              Choose this option to test if your air cleaner is sufficient for
              your building.
            </span>
            <img src="images/helperIcon.png" alt="help icon" />
          </button>
        </div>
      </div>
    );
  }
}

export default Subheader;
