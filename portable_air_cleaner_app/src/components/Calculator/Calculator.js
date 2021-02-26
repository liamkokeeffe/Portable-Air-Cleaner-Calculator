import React, { useState } from 'react';
import "./Calculator.css"
import { FloorAreaSelection } from '../RoomDim/FloorAreaSelection.js';
import {UnitsSelection} from '../RoomDim/UnitsSelection.js';
import {CeilingHeightSelection} from '../RoomDim/CeilingHeightSelection.js';
import {CalculatorStep} from './CalculatorStep.js';
import { NextStepArrow } from './NextStepArrow';
import { PreviousStepArrow } from './PreviousStepArrow';
import {VentilationInput} from '../Ventilation/VentilationInput';
import {VentilationInfo} from "../Ventilation/VentilationInfo";
import {CADR} from "../CADR/CADR"

export function Calculator(props) {
    const [step, updateStep] = useState(1);
    const [nextStepArrowText, setNextStepArrowText] = useState("Next Step");

    function nextStepArrowClick() {
        if (step === 1) {
            if (props.roomInfo.floorArea === 0 || props.roomInfo.ceilingHeight === 0) {
                console.log('Please fill out all fields to continue');
                return;
            } else if (props.calculatorType === "find") {
                setNextStepArrowText("Result");
            }
        } else if (step === 2) {
            if (props.calculatorType === "find") {
                console.log("return find result");
                props.onShowResult("find");
            } else {
                setNextStepArrowText("Result");
            }
        } else if (step === 3) {
            if (props.roomInfo.cadr === 0) {
                console.log("Please fill out the CADR Parameter")
                return;
            } else {
                props.onShowResult('test');
            }
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
            props.floorAreaEntered(0);
            props.ceilingHeightEntered(0);
            props.cadrEntered(0);
        }
    }

    function getTitle() {
        if (props.calculatorType === "find") {
            return "Find Air Cleaner";
        }
        return "Test Air Cleaner Efficiency";
    }

    return (
        <div className="calculator-wrapper">
            <h2 id="calculator-title">
                {getTitle()}
            </h2>
            <div id="calculator-box">
                    {step === 1 && 
                    [<div className="step-header">
                        <CalculatorStep step="Step 1: Room Size"/>
                    </div>,
                    <div className="user-input-boxes">
                        <UnitsSelection unitSelectionMade={props.unitSelectionMade} />
                        <FloorAreaSelection floorAreaEntered={props.floorAreaEntered} />
                        <CeilingHeightSelection ceilingHeightEntered={props.ceilingHeightEntered} />
                    </div>]
                    }

                    {step === 2 &&
                    [<div className="step-header">
                        <CalculatorStep step="Step 2: Outdoor Ventilation"/>
                    </div>,
                    <div className="user-input-boxes">
                        <VentilationInput updateOutdoorVentilation = {props.updateOutdoorVentilation} />
                        <VentilationInfo type = {props.ventilationType} />
                    </div>]
                    }

                    {step === 3 && props.calculatorType === "test" &&
                    [<div className="step-header">
                        <CalculatorStep step="Step 3: Clean Air Delivery Rate"/>
                    </div>,
                    <div className="user-input-boxes">
                        <CADR cadrEntered = {props.cadrEntered} /> 
                    </div>]
                    }

                {step > 1 && <PreviousStepArrow previousStepArrowClick={previousStepArrowClick} />}
                <NextStepArrow text={nextStepArrowText} nextStepArrowClick={nextStepArrowClick} />
            </div>
        </div>
    )
}
