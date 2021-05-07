import { useState, useEffect } from 'react';
import { Calculator } from './Calculator/Calculator.js';
import {RoomSizeRec} from './RoomSizeRec/RoomSizeRec.js';
import {AirCleanerRecommendations} from './AirCleanerRecommendations/AirCleanerRecommendations.js';
import { LandingPage } from './LandingPage/LandingPage.js';
import './CalculatorManager.css';

import data from '../air_cleaner_list.csv';
import * as d3 from 'd3';

export function CalculatorManager(props) {
    let roomInfoInit = {
        roomWidth : 0,
        roomLength: 0,
        floorArea: 0,
        ceilingHeight : 0,
        units : 'feet',
        outdoorVentilation : 'Poor',
        roomType : '',
        usableSpace : 0,
        maxOccupancy : 0,
        aveOccupancy : 0
    };

    let airCleanerInfoInit = {
        modelName : '',
        cadr : 0
    };

    const [roomInfo, setRoomInfo] = useState(roomInfoInit);
    const [airCleanerInfo, setAirCleanerInfo] = useState(airCleanerInfoInit);
    const [resultType, setResultType] = useState(null);
    const [calculatorType, setCalculatorType] = useState(props.location.state === undefined ? null : props.location.state.type);
    // props.airCleaners will always be undefined in production, but this allows us to pass in specific air cleaners for testing.
    const [airCleaners, setAirCleaners] = useState(props.airCleaners === undefined ? null : props.airCleaners);

    useEffect(() => {
        async function getAirCleaners() {
            const result = await d3.csv(data, (d) => {
                return {
                    name: d['Name'],
                    cadr: +d['CADR'],
                    priceOfOneAirCleaner: d['Price (USD)'] === '' ? -1 : +d['Price (USD)'],
                    noise: d['Noise Rating (db)'] === '' ? -1 : +d['Noise Rating (db)'],
                    power: d['Power (W)'] === '' ? -1 : +d['Power (W)'],
                    size: d['Size (in)'],
                    maxRoomSize: d['Room Size (sq ft)'] === '' ? -1 : +d['Room Size (sq ft)'],
                    link: d['Link'],
                    imageLink: d['Image Link']
                }
            });
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
        let newRoomInfo = roomInfo; 
        newRoomInfo.units = unitType;
        setRoomInfo(newRoomInfo)
    }

    function roomWidthEntered(width) {
        let newRoomInfo = roomInfo;
        newRoomInfo.roomWidth = width;
        setRoomInfo(newRoomInfo);
    }

    function roomLengthEntered(length) {
        let newRoomInfo = roomInfo;
        newRoomInfo.roomLength = length;
        setRoomInfo(newRoomInfo);
    }

    function floorAreaEntered(area, length, width) {
        let newRoomInfo = roomInfo;
        newRoomInfo.roomWidth = width;
        newRoomInfo.roomLength = length;
        newRoomInfo.floorArea = area;
        setRoomInfo(newRoomInfo);
    }

    function ceilingHeightEntered(height) {
        let newRoomInfo = roomInfo;
        newRoomInfo.ceilingHeight = height;
        setRoomInfo(newRoomInfo);
    }

    function updateOutdoorVentilation(ventilationLevel) {
        let newRoomInfo = roomInfo;
        newRoomInfo.outdoorVentilation = ventilationLevel;
        setRoomInfo(newRoomInfo);
    }

    function updateRoomType(roomType) {
        let newRoomInfo = roomInfo;
        newRoomInfo.roomType = roomType;
        setRoomInfo(newRoomInfo);
    }

    function updateUsableSpace(usableSpace) {
        let newRoomInfo = roomInfo;
        newRoomInfo.usableSpace = usableSpace;
        setRoomInfo(newRoomInfo);
    }

    function updateMaxOccupancy(maxOccupancy) {
        let newRoomInfo = roomInfo;
        newRoomInfo.maxOccupancy = maxOccupancy;
        setRoomInfo(newRoomInfo);
    }

    function updateAveOccupancy(aveOccupancy) {
        let newRoomInfo = roomInfo;
        newRoomInfo.aveOccupancy = aveOccupancy;
        setRoomInfo(newRoomInfo);
    }

    function updateCADR(cadr) {
        let newAirCleanerInfo = airCleanerInfo;
        newAirCleanerInfo.cadr = cadr;
        setAirCleanerInfo(newAirCleanerInfo);
    }

    function updateModelName(modelName, cadr) {
        let newAirCleanerInfo = airCleanerInfo;
        newAirCleanerInfo.modelName = modelName;
        newAirCleanerInfo.cadr = cadr;
        setAirCleanerInfo(newAirCleanerInfo);
    }

    function backToCalculator() {
        setResultType(null);
        console.log(calculatorType.substring(7))
        setCalculatorType(calculatorType.substring(7));
    }

    return (
        <div>
            {/* {calculatorType === null && resultType === null && <LandingPage setCalculatorType={setCalculatorType}/>} */}
            {(calculatorType === 'find' || (airCleaners !== null && calculatorType === 'test')) && 
                <Calculator calculatorType={calculatorType} roomInfo={roomInfo} airCleanerInfo={airCleanerInfo} unitSelectionMade={unitSelectionMade}
                roomWidthEntered={roomWidthEntered} roomLengthEntered={roomLengthEntered} floorAreaEntered={floorAreaEntered} ceilingHeightEntered={ceilingHeightEntered}
                 updateCADR={updateCADR} onShowResult={showResults} updateOutdoorVentilation={updateOutdoorVentilation} updateRoomType={updateRoomType} 
                 updateUsableSpace={updateUsableSpace} updateMaxOccupancy={updateMaxOccupancy} updateAveOccupancy={updateAveOccupancy} 
                 updateModelName={updateModelName} airCleaners={airCleaners}/>}
            {resultType === 'find' && airCleaners !== null && <AirCleanerRecommendations roomInfo={roomInfo} backToCalculator={backToCalculator} airCleaners={airCleaners}/>}
            {resultType === 'test' && <RoomSizeRec roomInfo={roomInfo} airCleanerInfo={airCleanerInfo} showResults={showResults} backToCalculator={backToCalculator} />}
        </div>
    );
}