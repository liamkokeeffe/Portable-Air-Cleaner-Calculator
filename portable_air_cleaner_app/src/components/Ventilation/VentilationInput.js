import React, { Component } from 'react';
import "./Ventilation.css"

export function VentilationInput(props) {

  function handleInputChange(event) {
    props.updateOutdoorVentilation(event.target.value);
  }

  return (
    <div className="calculator-ventilation" id="calculator-ventilation-input">
      <span className="calculator-input-title">Ventilation Rating: </span>
      <select id='ventilation-rating-dropdown' onChange={handleInputChange} >
        <option value="Low" selected>Low</option>
        <option value="Typical">Typical</option>
        <option value="Good">Good</option>
        <option value="Enhanced">Enhanced</option>
      </select>
    </div>
  );
}