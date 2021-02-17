import React, { Component, useState } from 'react';
import {VentilationInput} from './VentilationInput';
import "./Calculator.css";
import {VentilationInfo} from "./VentilationInfo";
import {CADR} from "./CADR"

export function Calculator(props) {
    const [roomArea, setRoomArea] = useState(0);
    const [roomHeight, setRoomHeight] = useState(0);
    const [units, setUnits] = useState(0);
    const [ventilationType, setVentilationType] = useState("Low");
    const [cadr, setCadr] = useState(0);

    function updateVentilationType(type) {
        setVentilationType(type);
    }

    let calculatorTitle = ""
    if (props.title === "find") {
        calculatorTitle = "Find Air Cleaner"
    } else {
        calculatorTitle = "Test Air Cleaner Efficiency"
    }

    return (
        <div id="calculator-wrapper">
            <h2 id="calculator-title">{calculatorTitle}</h2>
            <div id="calculatorBox">
                <VentilationInput updateVentilationType = {updateVentilationType} />
                <VentilationInfo type = {ventilationType} />
                {/* <CADR /> */}
            </div>
        </div>
    )
}