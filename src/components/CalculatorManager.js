import { useState, useEffect } from 'react';
import { Calculator } from './Calculator/Calculator.js';
import { RoomSizeRec } from './RoomSizeRec/RoomSizeRec.js';
import { AirCleanerRecommendations } from './AirCleanerRecommendations/AirCleanerRecommendations.js';
import './CalculatorManager.css';
import phase_data from '../phase_data.json'

import data from '../air_cleaner_list.csv';
import * as d3 from 'd3';

export function CalculatorManager(props) {
    let roomInfoInit = {
        roomWidth : 0,
        roomLength: 0,
        floorArea: 0,
        ceilingHeight : 0,
        units : 'feet',
        outdoorVentilation : '',
        roomType : '',
        maxOccupancy : 0,
        aveOccupancy : 0,
        currPhase : '',
        currOccupancy : 0,
        recOccupancy : 0
    };
    let airCleanerInfoInit = {
        modelName : '',
        cadr : 0
    };
    const hideComponentPrefix = 'hidden_';

    const [roomInfo, setRoomInfo] = useState(roomInfoInit);
    const [airCleanerInfo, setAirCleanerInfo] = useState(airCleanerInfoInit);
    const [resultType, setResultType] = useState(null);
    const [calculatorType, setCalculatorType] = useState(props.location.state === undefined ? null : props.location.state.calculatorType);
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

    function findRoomTypeData(roomType, phase) {
        let occupancyCol = "phase" + phase + "Occupancy";
        let maxCol = "phase" + phase + "Max";
        let phaseData = phase_data["phase_data"];
        for (let i = 0; i < phaseData.length; i++) {
            console.log(phaseData[i].name)
            if (phaseData[i].name === roomType) {
                return [phaseData[i][occupancyCol], phaseData[i][maxCol]];
            }
        }
    }

    function getOccupancyNumber() {
        let recOccupancy = 0;
        if (roomInfo.roomType === "" || roomInfo.aveOccupancy === 0 || roomInfo.maxOccupancy === 0 || (roomInfo.currPhase === "" && roomInfo.currOccupancy === 0)) {
            return -1;
        }
        if (roomInfo.currPhase !== "") {
            let roomData;
            if (roomInfo.currPhase === "1") {
                roomData = findRoomTypeData(roomInfo.roomType, "1");
            } else if (roomInfo.currPhase === "2") {
                roomData = findRoomTypeData(roomInfo.roomType, "2");
            } else if (roomInfo.currPhase === "3") {
                roomData = findRoomTypeData(roomInfo.roomType, "3");
            } else {
                return roomInfo.maxOccupancy;
            }
            console.log(roomData)
            if (roomData[1] !== undefined) {
                let occupancyPercentCalc = (roomData[0] / 100) * roomInfo.maxOccupancy;
                if (occupancyPercentCalc < roomData[1] ? recOccupancy = occupancyPercentCalc : recOccupancy = roomData[1]);
            } else {
                recOccupancy = (roomData[0] / 100) * roomInfo.maxOccupancy;
            }
        } else {
            recOccupancy = (roomInfo.currOccupancy / 100) * roomInfo.maxOccupancy;
        }
        console.log(recOccupancy)
        return Math.floor(recOccupancy);
    }


    function showResults(type) {
        updateRecOccupancy(getOccupancyNumber());
        setResultType(type);
        setCalculatorType(hideComponentPrefix + calculatorType);
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

    function updateCurrPhase(currPhase) {
        let newRoomInfo = roomInfo;
        newRoomInfo.currPhase = currPhase;
        setRoomInfo(newRoomInfo);
    }

    function updateCurrOccupancy(currOccupancy) {
        let newRoomInfo = roomInfo;
        newRoomInfo.currOccupancy = currOccupancy;
        setRoomInfo(newRoomInfo);
    }

    function updateRecOccupancy(recOccupancy) {
        let newRoomInfo = roomInfo;
        newRoomInfo.recOccupancy = recOccupancy;
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
        if (calculatorType.substring(7) === "hidden_test") {
            setCalculatorType("find");
        } else {
            setCalculatorType(calculatorType.substring(hideComponentPrefix.length));
        }
    }

    return (
        <div>
            {(calculatorType === 'find' || (airCleaners !== null && calculatorType === 'test')) && 
                <Calculator calculatorType={calculatorType} roomInfo={roomInfo} airCleanerInfo={airCleanerInfo} unitSelectionMade={unitSelectionMade}
                roomWidthEntered={roomWidthEntered} roomLengthEntered={roomLengthEntered} floorAreaEntered={floorAreaEntered} ceilingHeightEntered={ceilingHeightEntered}
                 updateCADR={updateCADR} onShowResult={showResults} updateOutdoorVentilation={updateOutdoorVentilation} updateRoomType={updateRoomType} 
                 updateMaxOccupancy={updateMaxOccupancy} updateAveOccupancy={updateAveOccupancy} updateCurrPhase={updateCurrPhase} updateCurrOccupancy={updateCurrOccupancy}
                 updateModelName={updateModelName} airCleaners={airCleaners}/>}
            {resultType === 'find' && airCleaners !== null && <AirCleanerRecommendations roomInfo={roomInfo} setCalculatorType={setCalculatorType} backToCalculator={backToCalculator} airCleaners={airCleaners}/>}
            {resultType === 'test' && <RoomSizeRec roomInfo={roomInfo} airCleanerInfo={airCleanerInfo} showResults={showResults} backToCalculator={backToCalculator} />}
        </div>
    );
}