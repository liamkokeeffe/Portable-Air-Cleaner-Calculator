import "./Calculator.css"
import {StepTitle} from "./StepTitle.js"
import {RoomDim} from "./RoomDim.js"
import {Ventilation} from "./Ventilation.js"
import {CADR} from "./CADR.js"

export function Calculator(props) {
    function getTitle() {
        document.body.style.background = "rgb(234,95,20,0.25)";
        return props.calculatorType === "find" ? "Find Air Cleaner" : "Test Air Cleaner Efficiency";
    }

    function getStepCount() {
        return props.calculatorType === "find" ? "2" : "3";
    }

    function changeScreens() {
        if (inputIsValid()) {
            props.onShowResult(props.calculatorType);
        } 
    }

    function inputIsValid() {
        if (props.calculatorType === "find" && (props.roomInfo.roomWidth === 0 || props.roomInfo.roomLength === 0 || props.roomInfo.ceilingHeight === 0)) {
            console.log("Please fill out all fields to continue");
            return false
        } else if (props.calculatorType === "test" && (props.roomInfo.roomWidth === 0 || props.roomInfo.roomLength === 0 || props.roomInfo.ceilingHeight === 0 || props.roomInfo.cadr === 0)) {
            console.log("Please fill out all fields to continue");
            return false
        } else {
            props.floorAreaEntered(props.roomInfo.roomWidth * props.roomInfo.roomLength);
            return true;
        }
    }

    return (
        <div id="calculator-wrapper">
            <h2 id="calculator-title">{getTitle()}</h2>   
            <div className="step-wrapper"> 
                <StepTitle title = "Room Size" currentStep = "1" totalSteps = {getStepCount()} />
                <RoomDim unitSelectionMade={props.unitSelectionMade} roomWidthEntered={props.roomWidthEntered} roomLengthEntered={props.roomLengthEntered} ceilingHeightEntered={props.ceilingHeightEntered} />
            </div>
            <div className="step-wrapper">
                <StepTitle title = "Rate Your Current Ventilation" currentStep = "2" totalSteps = {getStepCount()} />
                <Ventilation updateOutdoorVentilation={props.updateOutdoorVentilation} type={props.roomInfo.outdoorVentilation}/>
            </div>
            {props.calculatorType === "test" && <div className="step-wrapper">
                <StepTitle title = "Clean Air Delivery Rate" currentStep = "3" totalSteps = "3" />
                <CADR cadrEntered={props.cadrEntered} />
            </div>}
            <div id="button-wrapper">
                <button id="results-btn" onClick={(e) => changeScreens()}>VIEW RESULTS</button>
            </div>
        </div>
    )
}