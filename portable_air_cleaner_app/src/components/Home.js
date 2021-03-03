import { useState } from 'react'
import { Calculator } from './Calculator/Calculator.js';
import {RoomSizeRec} from './RoomSizeRec/RoomSizeRec.js'
import {AirCleanerRecommendations} from './AirCleanerRecommendations/AirCleanerRecommendations.js';
import { LandingPage } from './LandingPage/LandingPage.js';

export function Home() {

    let roomInfoInit = {
        roomWidth : 0,
        roomLength: 0,
        floorArea: 0,
        ceilingHeight : 0,
        units : "feet",
        outdoorVentilation : "Low",
        cadr : 0
    }

    const [roomInfo, setRoomInfo] = useState(roomInfoInit);
    const [calculatorType, setCalculatorType] = useState(null);
    const [resultType, setResultType] = useState(null);
    const [displayProductDetails, setProductDetails] = useState(false);

    function showResults(type) {
        setResultType(type);
        setCalculatorType(null);
    }
    
    function unitSelectionMade(unitType) {
        let newRoomInfo = {
            roomWidth : roomInfo.roomWidth,
            roomLength : roomInfo.roomLength,
            floorArea : roomInfo.floorArea,
            ceilingHeight : roomInfo.ceilingHeight,
            units : unitType,
            outdoorVentilation : roomInfo.outdoorVentilation,
            cadr : roomInfo.cadr
        }
        setRoomInfo(newRoomInfo)
    }

    function roomWidthEntered(width) {
        let newRoomInfo = {
            roomWidth : width,
            roomLength : roomInfo.roomLength,
            floorArea : roomInfo.floorArea,
            ceilingHeight : roomInfo.ceilingHeight,
            units : roomInfo.units,
            outdoorVentilation : roomInfo.outdoorVentilation,
            cadr : roomInfo.cadr
        }
        setRoomInfo(newRoomInfo);
    }

    function roomLengthEntered(length) {
        let newRoomInfo = {
            roomWidth : roomInfo.roomWidth,
            roomLength : length,
            floorArea : roomInfo.floorArea,
            ceilingHeight : roomInfo.ceilingHeight,
            units : roomInfo.units,
            outdoorVentilation : roomInfo.outdoorVentilation,
            cadr : roomInfo.cadr
        }
        setRoomInfo(newRoomInfo);
    }

    function floorAreaEntered(area) {
        let newRoomInfo = {
            roomWidth : roomInfo.roomWidth,
            roomLength : roomInfo.roomLength,
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
            roomWidth : roomInfo.roomWidth,
            roomLength : roomInfo.roomLength,
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
            roomWidth : roomInfo.roomWidth,
            roomLength : roomInfo.roomLength,
            floorArea : roomInfo.floorArea,
            ceilingHeight : roomInfo.ceilingHeight,
            units : roomInfo.units,
            outdoorVentilation : roomInfo.outdoorVentilation,
            cadr : cadr
        }
        setRoomInfo(newRoomInfo);
    }

    function updateOutdoorVentilation(ventilationLevel) {
        let newRoomInfo = {
            roomWidth : roomInfo.roomWidth,
            roomLength : roomInfo.roomLength,
            floorArea : roomInfo.floorArea,
            ceilingHeight : roomInfo.ceilingHeight,
            units : roomInfo.units,
            outdoorVentilation : ventilationLevel,
            cadr : roomInfo.cadr
        }
        setRoomInfo(newRoomInfo);
    }

    function backToCalculator() {
        setResultType(null);
        // setCalculatorType(old vals)
    }

    return (
        <div>
            {calculatorType === null && resultType === null && <LandingPage setCalculatorType={setCalculatorType}/>}
            {calculatorType !== null && <Calculator calculatorType={calculatorType} roomInfo={roomInfo} unitSelectionMade={unitSelectionMade}
                            roomWidthEntered={roomWidthEntered} roomLengthEntered={roomLengthEntered} floorAreaEntered={floorAreaEntered} ceilingHeightEntered={ceilingHeightEntered} cadrEntered={cadrEntered} 
                            onShowResult={showResults} updateOutdoorVentilation={updateOutdoorVentilation} />}
            {resultType !== null && 
                (resultType === 'find' ? <AirCleanerRecommendations roomInfo={roomInfo} backToCalculator={backToCalculator} /> : <RoomSizeRec roomInfo={roomInfo}/>)}
        </div>
    )
}