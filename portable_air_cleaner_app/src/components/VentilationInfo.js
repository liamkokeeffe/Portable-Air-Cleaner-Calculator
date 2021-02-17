import React, { Component } from 'react';
import "./Ventilation.css"
import PoorVentilation from "../images/PoorVentilation.png"

export function VentilationInfo(props) {
    let ventilationInfo = "";
    let imageTitle = "";

    if (props.type === "Low") {
        ventilationInfo = "Select this if your environment has poor ventilation or you're not sure (for reference, a typical  U.S. home is 0.5 ACH)";
        imageTitle = "Example Room Size: 146ft^2 x 9ft";
    }

    return (
        <div className="calculator-ventilation" id="calculator-ventilation-info">
            <div className="ventilation-info" id="ventilation-info-text">
                <p className="calculator-input-title">{props.type}</p>
                <p>{ventilationInfo}</p>
            </div>
            <div className="ventilation-info" id="ventilation-info-image">
                <p id="ventilation-image-title">{imageTitle}</p>
                <img src={PoorVentilation} alt="Poor ventilation room image" id="ventilation-image"/>
            </div>
        </div>
    )
}