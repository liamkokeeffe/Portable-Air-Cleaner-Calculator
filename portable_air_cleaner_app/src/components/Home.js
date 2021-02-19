import { useState } from 'react'
import { Calculator } from './Calculator/Calculator.js';
import {Subheader} from './Subheader/Subheader.js'
import {RoomSizeRec} from './RoomSizeRec/RoomSizeRec.js'

export function Home() {

    let roomInfoInit = {
        floorArea : 0,
        ceilingHeight : 0,
        units : "feet",
        outdoorVentilation : "",
        cadr : 0
    }

    const [roomInfo, setRoomInfo] = useState(roomInfoInit);

    const [calculatorType, setCalculatorType] = useState("find");
    const [displayResults, setDisplayResults] = useState(false);
    const [displayProductDetails, setProductDetails] = useState(false);
    const [displayAirCleanerEffectiveness, setAirCleanerEffectiveness] = useState(false);
    
    function updateCalculatorType(type) {
        setCalculatorType(type);
    }

    function showAirCleanerEffectiveness(state) {
        setAirCleanerEffectiveness(state);
    }

    function unitSelectionMade(unitType) {
        let newRoomInfo = {
            floorArea : roomInfo.floorArea,
            ceilingHeight : roomInfo.ceilingHeight,
            units : unitType,
            outdoorVentilation : roomInfo.outdoorVentilation,
            cadr : roomInfo.cadr
        }
        setRoomInfo(newRoomInfo)
    }

    function floorAreaEntered(area) {
        let newRoomInfo = {
            floorArea : area,
            ceilingHeight : roomInfo.ceilingHeight,
            units : roomInfo.units,
            outdoorVentilation : roomInfo.outdoorVentilation,
            cadr : roomInfo.cadr
        }
        setRoomInfo(newRoomInfo);
    }

    function ceilingHeightEntered(height) {
        let newRoomInfo = {
            floorArea : roomInfo.floorArea,
            ceilingHeight : height,
            units : roomInfo.units,
            outdoorVentilation : roomInfo.outdoorVentilation,
            cadr : roomInfo.cadr
        }
        setRoomInfo(newRoomInfo);
    }

    function cadrEntered(cadr) {
        let newRoomInfo = {
            floorArea : roomInfo.floorArea,
            ceilingHeight : roomInfo.ceilingHeight,
            units : roomInfo.units,
            outdoorVentilation : roomInfo.outdoorVentilation,
            cadr : cadr
        }
        setRoomInfo(newRoomInfo);
    }

    function updateVentilationType(type) {
        let newRoomInfo = {
            floorArea : roomInfo.floorArea,
            ceilingHeight : roomInfo.ceilingHeight,
            units : roomInfo.units,
            outdoorVentilation : type,
            cadr : roomInfo.cadr
        }
        setRoomInfo(newRoomInfo);
    }

    return (
        <div>
            {!displayAirCleanerEffectiveness && [<Subheader updateCalculatorType={updateCalculatorType} />, 
                <Calculator calculatorType={calculatorType} roomInfo={roomInfo} 
                    unitSelectionMade={unitSelectionMade} floorAreaEntered={floorAreaEntered} ceilingHeightEntered={ceilingHeightEntered} cadrEntered={cadrEntered} 
                    showAirCleanerEffectiveness={showAirCleanerEffectiveness} updateVentilationType={updateVentilationType} />]}
            {displayAirCleanerEffectiveness && <RoomSizeRec roomInfo={roomInfo}/>}
        </div>
    )
}