import { useState } from 'react'
import { Calculator } from './Calculator/Calculator.js';
import {Subheader} from './Subheader/Subheader.js'
import {RoomSizeRec} from './RoomSizeRec/RoomSizeRec.js'
import {AirCleanerRecommendations} from './AirCleanerRecommendations/AirCleanerRecommendations.js';
import { LandingPage } from './LandingPage/LandingPage.js';

export function Home() {

    let roomInfoInit = {
        floorArea : 0,
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

    function updateOutdoorVentilation(ventilationLevel) {
        let newRoomInfo = {
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
                            floorAreaEntered={floorAreaEntered} ceilingHeightEntered={ceilingHeightEntered} cadrEntered={cadrEntered} 
                            onShowResult={showResults} updateOutdoorVentilation={updateOutdoorVentilation} />}
            {resultType !== null && 
                (resultType === 'find' ? <AirCleanerRecommendations roomInfo={roomInfo} backToCalculator={backToCalculator} /> : <RoomSizeRec roomInfo={roomInfo}/>)}
        </div>
    )
}