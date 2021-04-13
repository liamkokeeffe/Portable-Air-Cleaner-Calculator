import { useState, useEffect } from 'react';
import { Calculator } from './Calculator/Calculator.js';
import {RoomSizeRec} from './RoomSizeRec/RoomSizeRec.js';
import {AirCleanerRecommendations} from './AirCleanerRecommendations/AirCleanerRecommendations.js';
import { LandingPage } from './LandingPage/LandingPage.js';

import data from '../air_cleaner_list.csv';
import * as d3 from 'd3';

export function Home(props) {
    let roomInfoInit = {
        roomWidth : 0,
        roomLength: 0,
        floorArea: 0,
        ceilingHeight : 0,
        units : 'feet',
        outdoorVentilation : 'Poor',
        cadr : 0
    }

    const [roomInfo, setRoomInfo] = useState(roomInfoInit);
    const [calculatorType, setCalculatorType] = useState(null);
    const [resultType, setResultType] = useState(null);
    // props.airCleaners will always be undefined in production, but this allows us to pass in specific air cleaners for testing.
    const [airCleaners, setAirCleaners] = useState(props.airCleaners === undefined ? null : props.airCleaners);

    useEffect(() => {
        async function getAirCleaners() {
            const result = await d3.csv(data, (d) => {
                return {
                    name: d['Name'],
                    cadr: +d['CADR'],
                    price: d['Price (USD)'] === '' ? -1 : +d['Price (USD)'],
                    noise: d['Noise Rating (db)'] === '' ? -1 : +d['Noise Rating (db)'],
                    power: d['Power (W)'] === '' ? -1 : +d['Power (W)'],
                    size: d['Size (in)'],
                    maxRoomSize: d['Room Size (sq ft)'] === '' ? -1 : +d['Room Size (sq ft)'],
                    link: d['Where to Buy?']
                }
            });
            console.log(result);
            setAirCleaners(result);
        }
        if (airCleaners === null) {
            getAirCleaners();
        }
    });

    function showResults(type) {
        setResultType(type);
        setCalculatorType('hidden_' + calculatorType);
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
        setCalculatorType(calculatorType.substring(7));
    }

    return (
        <div>
            {calculatorType === null && resultType === null && <LandingPage setCalculatorType={setCalculatorType}/>}
            {(calculatorType === 'find' || calculatorType === 'test') && 
                <Calculator calculatorType={calculatorType} roomInfo={roomInfo} unitSelectionMade={unitSelectionMade}
                roomWidthEntered={roomWidthEntered} roomLengthEntered={roomLengthEntered} floorAreaEntered={floorAreaEntered} ceilingHeightEntered={ceilingHeightEntered} cadrEntered={cadrEntered} onShowResult={showResults} updateOutdoorVentilation={updateOutdoorVentilation} />}
            {resultType === 'find' && airCleaners !== null && <AirCleanerRecommendations roomInfo={roomInfo} backToCalculator={backToCalculator} airCleaners={airCleaners}/>}
            {resultType === 'test' && <RoomSizeRec roomInfo={roomInfo} backToCalculator={backToCalculator} />}
        </div>
    );
}