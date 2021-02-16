import React, { useState } from 'react';
import "./Calculator.css"
import { FloorAreaSelection } from './FloorAreaSelection.js';
import {UnitsSelection} from './UnitsSelection.js';
import {CeilingHeightSelection} from './CeilingHeightSelection.js';
import {CalculatorStep} from './CalculatorStep.js';
import { NextStepArrow } from './NextStepArrow';
import { PreviousStepArrow } from './PreviousStepArrow';

export function Calculator(props) {
    const [floorArea, setFloorArea] = useState(0);
    const [ceilingHeight, setCeilingHeight] = useState(0);
    const [units, setUnits] = useState('feet');
    const [ventilationType, setVentilationType] = useState(0);
    const [cadr, setCadr] = useState(0);
    const [step, updateStep] = useState(1);
    const [nextStepArrowText, setNextStepArrowText] = useState('Next Step');

    function unitSelectionMade(unitType) {
        setUnits(unitType);
    }

    function floorAreaEntered(area) {
        setFloorArea(area);
    }

    function ceilingHeightEntered(height) {
        setCeilingHeight(height);
    }

    function nextStepArrowClick() {
        if (props.calculatorType === 'find' && step === 1) {
            setNextStepArrowText('Result');
        }
        updateStep(step + 1);


        // if find and current step === 1, set next arrow text to result.
        // if test and current step === 2, set next arrow text to result.
    }

    function previousStepArrowClick() {
        updateStep(step - 1);
    }

    return (
        <div>
            <h2>{props.title}</h2>

            <div id="calculator-box">
            
                    {step === 1 && 
                    [<CalculatorStep step="Step 1: Room Size"/>,
                    <div className="user-input-boxes">
                        <UnitsSelection unitSelectionMade={unitSelectionMade} />
                        <FloorAreaSelection floorAreaEntered={floorAreaEntered} />
                        <CeilingHeightSelection ceilingHeightEntered={ceilingHeightEntered} />
                    </div>]
                    }

                    {step === 2 &&
                    [<CalculatorStep step="Step 2: Outdoor Ventilation"/>,
                    <div className="user-input-boxes">
                    </div>]
                    }

                    {step === 3 &&
                    [<CalculatorStep step="Step 3: Clean Air Delivery Rate"/>,
                    <div className="user-input-boxes">
                    </div>]
                    }

                {step > 1 && (<PreviousStepArrow previousStepArrowClick={previousStepArrowClick} />)}
                <NextStepArrow nextStepArrowClick={nextStepArrowClick} />
            </div>
        </div>
    )
}
