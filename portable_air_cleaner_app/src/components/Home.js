import { useState } from 'react'
import { Calculator } from './Calculator/Calculator.js';
import {Subheader} from './Subheader/Subheader.js'
import {RoomSizeRec} from './RoomSizeRec/RoomSizeRec.js'
import {AirCleanerRecommendations} from './AirCleanerRecommendations';

export function Home() {

    let roomInfoInit = {
        floorArea : 0,
        ceilingHeight : 0,
        units : "feet",
        outdoorVentilation : "",
        cadr : 0
    }

    const [roomInfo, setRoomInfo] = useState(roomInfoInit);
    const [calculatorType, setCalculatorType] = useState(null);
    const [resultType, setResultType] = useState(null);
    const [displayProductDetails, setProductDetails] = useState(false);
    
    function updateCalculatorType(type) {
        setCalculatorType(type);
    }

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

    return (
        <div>
            {resultType === null && <Subheader updateCalculatorType={updateCalculatorType} />}
            {calculatorType !== null && <Calculator calculatorType={calculatorType} roomInfo={roomInfo} unitSelectionMade={unitSelectionMade}
                            floorAreaEntered={floorAreaEntered} ceilingHeightEntered={ceilingHeightEntered} cadrEntered={cadrEntered} 
                            onShowResult={showResults} updateOutdoorVentilation={updateOutdoorVentilation} />}
            {resultType !== null && (resultType === 'find' ? <AirCleanerRecommendations roomInfo={roomInfo} /> : <RoomSizeRec roomInfo={roomInfo}/>)}
        </div>
    )
}