import "./Calculator.css"
import {RoomDimensionsInput} from "./RoomDimensionsInput.js"
import {RoomVentilationInput} from "./RoomVentilationInput.js"
import {AirCleanerCADRInput} from "./AirCleanerCADRInput.js"
import {RoomDensityInput} from "./RoomDensityInput.js"

export function Calculator(props) {
    function getTitle() {
        document.body.style.background = "linear-gradient(180deg,rgba(234, 95, 20, 0.25) 0%,rgba(226, 167, 0, 0.25) 25%, rgba(226, 165, 0, 0.25) 50%, rgba(155, 0, 89, 0.25) 75%)";
        return props.calculatorType === "find" ? "Find Air Cleaner" : "Test Air Cleaner Efficiency";
    }

    function showResults() {
        if (inputIsValid()) {
            props.onShowResult(props.calculatorType);
        } 
        window.scrollTo(0, 0);
    }

    // Not the best way to do this ... should clean this up
    function inputIsValid() {
        console.log(props.roomInfo)
        let foundError = false;
        if (props.roomInfo.floorArea === 0) {
            document.getElementById("error-floor-area").style.display = "block";
            foundError = true;
        } else {
            document.getElementById("error-floor-area").style.display = "none";
        }

        if (props.roomInfo.ceilingHeight === 0) {
            document.getElementById("error-ceiling-height").style.display = "block";
            foundError = true;
        } else {
            document.getElementById("error-ceiling-height").style.display = "none";
        }

        if (props.roomInfo.outdoorVentilation === '') {
            document.getElementById("error-ventilation").style.display = "block";
            foundError = true;
        } else {
            document.getElementById("error-ventilation").style.display = "none";
        }

        if (props.calculatorType === "test") {
            if (props.airCleanerInfo.cadr === 0) {
                document.getElementById("error-cadr").style.display = "block";
                foundError = true;
            } else {
                document.getElementById("error-cadr").style.display = "none";
            }
        }
        if (foundError) {
            return false;
        }
        return true;
    }

    return (
        <div id="calculator-wrapper">
            <h2 id="calculator-title">{getTitle()}</h2>
            <h3 className="step-title">Step 1: Room Dimension</h3>
            <div> 
                <RoomDimensionsInput unitSelectionMade={props.unitSelectionMade} roomWidthEntered={props.roomWidthEntered} roomLengthEntered={props.roomLengthEntered} 
                ceilingHeightEntered={props.ceilingHeightEntered} floorAreaEntered={props.floorAreaEntered} roomInfo={props.roomInfo} />
            </div>
            <h3 className="step-title">Step 2: Ventilation Rating</h3>
            <div>
                <RoomVentilationInput updateOutdoorVentilation={props.updateOutdoorVentilation} type={props.roomInfo.outdoorVentilation}/>
            </div>
            {props.calculatorType === "test" &&
            <div>
                <h3 className="step-title">Step 3: Clean Air Delivery Rate (CADR)</h3>
                <div>
                    <AirCleanerCADRInput updateCADR={props.updateCADR} updateModelName={props.updateModelName} cadr={props.airCleanerInfo.cadr} airCleaners={props.airCleaners}/>
                </div>
            </div>}
            <h3 className="step-title"> {props.calculatorType === "find" ? "Step 3: Occupant Density" : "Step 4: Occupant Density"}</h3>
            <div>
                <RoomDensityInput updateRoomType={props.updateRoomType} updateMaxOccupancy={props.updateMaxOccupancy} updateAveOccupancy={props.updateAveOccupancy} 
                updateCurrOccupancy={props.updateCurrOccupancy} updateCurrPhase={props.updateCurrPhase} roomInfo={props.roomInfo}/>
            </div>
            <div id="button-wrapper">
                <button id="results-btn" onClick={() => showResults()}>VIEW RESULTS</button>
            </div>
        </div>
    )
}