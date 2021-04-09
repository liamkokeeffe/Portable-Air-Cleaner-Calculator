import "./Calculator.css"
import {RoomDim} from "./RoomDim.js"
import {Ventilation} from "./Ventilation.js"
import {CADR} from "./CADR.js"

export function Calculator(props) {
    function getTitle() {
        document.body.style.background = "linear-gradient(180deg, rgba(234, 95, 20, 0.25) 0%, rgba(234, 95, 20, 0.25) 41.15%, rgba(234, 95, 20, 0.25) 76.56%, rgba(226, 167, 0, 0.25) 100%)";
        return props.calculatorType === "find" ? "Find Air Cleaner" : "Test Air Cleaner Efficiency";
    }

    function showResults() {
        if (inputIsValid()) {
            props.onShowResult(props.calculatorType);
        } 
        window.scrollTo(0, 0);
    }

    function inputIsValid() {
        if (props.calculatorType === "find" && (props.roomInfo.roomWidth === 0 || props.roomInfo.roomLength === 0 || props.roomInfo.ceilingHeight === 0)) {
            console.log("Please fill out all fields to continue");
            return false;
        } else if (props.calculatorType === "test" && (props.roomInfo.roomWidth === 0 || props.roomInfo.roomLength === 0 || props.roomInfo.ceilingHeight === 0 || props.roomInfo.cadr === 0)) {
            console.log("Please fill out all fields to continue");
            return false;
        } else {
            props.floorAreaEntered(props.roomInfo.roomWidth * props.roomInfo.roomLength);
            return true;
        }
    }

    return (
        <div id="calculator-wrapper">
            <h2 id="calculator-title">{getTitle()}</h2>   
            <div className="step-wrapper"> 
                <h3 className="step-title">Step 1: Room Dimension</h3>
                <RoomDim unitSelectionMade={props.unitSelectionMade} roomWidthEntered={props.roomWidthEntered} roomLengthEntered={props.roomLengthEntered} ceilingHeightEntered={props.ceilingHeightEntered} roomInfo={props.roomInfo} />
            </div>
            <div className="step-wrapper">
                <h3 className="step-title">Step 2: Ventilation Rating</h3>
                <Ventilation updateOutdoorVentilation={props.updateOutdoorVentilation} type={props.roomInfo.outdoorVentilation}/>
            </div>
            {props.calculatorType === "test" && <div className="step-wrapper">
                <h3 className="step-title">Step 3: Clean Air Delivery Rate (CADR)</h3>
                <CADR cadrEntered={props.cadrEntered} roomInfo={props.roomInfo} />
            </div>}
            <div id="button-wrapper">
                <button id="results-btn" onClick={() => showResults()}>VIEW RESULTS</button>
            </div>
        </div>
    )
}