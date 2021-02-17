import React, { useState } from 'react';
import "./Calculator.css"
import { FloorAreaSelection } from './FloorAreaSelection.js';
import {UnitsSelection} from './UnitsSelection.js';
import {CeilingHeightSelection} from './CeilingHeightSelection.js';
import {CalculatorStep} from './CalculatorStep.js';
import { NextStepArrow } from './NextStepArrow';
import { PreviousStepArrow } from './PreviousStepArrow';
import {VentilationInput} from './VentilationInput';
import {VentilationInfo} from "./VentilationInfo";
import {CADR} from "./CADR"

export function Calculator(props) {
    const [floorArea, setFloorArea] = useState(0);
    const [ceilingHeight, setCeilingHeight] = useState(0);
    const [units, setUnits] = useState('feet');
    const [ventilationType, setVentilationType] = useState("Low");
    const [cadr, setCadr] = useState(0);
    const [step, updateStep] = useState(1);
    const [nextStepArrowText, setNextStepArrowText] = useState("Next Step");

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
        if (step === 1) {
            if (floorArea === 0 || ceilingHeight === 0) {
                console.log('Please fill out all fields to continue');
                return;
            } else if (props.calculatorType === "find") {
                setNextStepArrowText("Result");
            }
        } else if (step === 2) {
            if (props.calculatorType === "find") {
                console.log("return find result");
            } else {
                setNextStepArrowText("Result");
            }
        } else {
            console.log('return test result')
        }
        updateStep(step + 1);
    }

    function previousStepArrowClick() {
        if (step > 1) {
            if ((step === 2 && props.calculatorType === "find") || step === 3) {
                setNextStepArrowText("Next step");
                updateStep(step - 1);
            }
            updateStep(step - 1);
            setFloorArea(0);
            setCeilingHeight(0);
        }
    }

    function getTitle() {
        if (props.calculatorType === "find") {
            return "Find Air Cleaner";
        }
        return "Test Air Cleaner Efficiency";
    }

    function updateVentilationType(type) {
        setVentilationType(type);
    }

    return (
        <div className="calculator-wrapper">
            <h2 id="calculator-title">
                {getTitle()}
            </h2>
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
                        <VentilationInput updateVentilationType = {updateVentilationType} />
                        <VentilationInfo type = {ventilationType} />
                    </div>]
                    }

                    {step === 3 &&
                    [<CalculatorStep step="Step 3: Clean Air Delivery Rate"/>,
                    <div className="user-input-boxes">
                        <CADR /> 
                    </div>]
                    }

                {step > 1 && (<PreviousStepArrow previousStepArrowClick={previousStepArrowClick} />)}
                <NextStepArrow text={nextStepArrowText} nextStepArrowClick={nextStepArrowClick} />
            </div>
        </div>
    )
}
