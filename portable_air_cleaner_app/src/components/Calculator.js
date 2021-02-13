import React, { Component, useState } from 'react';
import "./Calculator.css"

export function Calculator(props) {
    const [roomArea, setRoomArea] = useState(0);
    const [roomHeight, setRoomHeight] = useState(0);
    const [units, setUnits] = useState(0);
    const [ventilationType, setVentilationType] = useState(0);
    const [cadr, setCadr] = useState(0);



    return (
        <div>
            <h2>{props.title}</h2>
            <div id="calculatorBox"></div>
        </div>
    )
}