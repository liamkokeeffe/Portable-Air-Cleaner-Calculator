import "./Calculator.css"
import {RoomDim} from "./RoomDim.js"
import {Ventilation} from "./Ventilation.js"
import {CADR} from "./CADR.js"
import {Density} from "./Density.js"

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
        if (props.calculatorType === "find" && (props.roomInfo.floorArea === 0 || props.roomInfo.ceilingHeight === 0)) {
            console.log("Please fill out all fields to continue");
            return false;
        } else if (props.calculatorType === "test" && (props.roomInfo.floorArea === 0 || props.roomInfo.ceilingHeight === 0 || props.roomInfo.cadr === 0)) {
            console.log("Please fill out all fields to continue");
            console.log(props.roomInfo)
            return false;
        } else {
            return true;
        }
    }

    return (
        <div id="calculator-wrapper">
            <h2 id="calculator-title">{getTitle()}</h2>
            <h3 className="step-title">Step 1: Room Dimension</h3>
            <div> 
                <RoomDim unitSelectionMade={props.unitSelectionMade} roomWidthEntered={props.roomWidthEntered} roomLengthEntered={props.roomLengthEntered} 
                ceilingHeightEntered={props.ceilingHeightEntered} floorAreaEntered={props.floorAreaEntered} roomInfo={props.roomInfo} />
            </div>
            <h3 className="step-title">Step 2: Ventilation Rating</h3>
            <div>
                <Ventilation updateOutdoorVentilation={props.updateOutdoorVentilation} type={props.roomInfo.outdoorVentilation}/>
            </div>
            {props.calculatorType === "test" &&
            <div>
                <h3 className="step-title">Step 3: Clean Air Delivery Rate (CADR)</h3>
                <div>
                    <CADR updateCADR={props.updateCADR} updateModelName={props.updateModelName} cadr={props.airCleanerInfo.cadr} airCleaners={props.airCleaners}/>
                </div>
            </div>}
            <h3 className="step-title">Step 4: Occupant Density</h3>
            <div>
                <Density updateRoomType={props.updateRoomType} updateUsableSpace={props.updateUsableSpace} updateMaxOccupancy={props.updateMaxOccupancy} updateAveOccupancy={props.updateAveOccupancy} roomInfo={props.roomInfo}/>
            </div>
            <div id="button-wrapper">
                <button id="results-btn" onClick={() => showResults()}>VIEW RESULTS</button>
            </div>
        </div>
    )
}