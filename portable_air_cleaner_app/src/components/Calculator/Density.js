import './Calculator.css';
import { useState } from 'react';
import densityClipArt from '../../images/density_clipart.png'
import React from "react"

export function Density(props) {

    const [occupancyText, setOccupancyText] = useState("");
    const [roomType, _setRoomType] = useState(props.roomInfo.roomType === "" ? "" : props.roomInfo.roomType);
    const [usableSpace, _setUsableSpace] = useState(props.roomInfo.usableSpace === 0 ? 0 : props.roomInfo.usableSpace);
    const [maxOccupancy, _setMaxOccupancy] = useState(props.roomInfo.maxOccupancy === 0 ? 0 : props.roomInfo.maxOccupancy);

    const roomTypeRef = React.useRef(roomType);
    const setRoomType = data => {
      roomTypeRef.current = data;
      _setRoomType(data);
    };

    const usableSpaceRef = React.useRef(usableSpace);
    const setUsableSpace = data => {
        usableSpaceRef.current = data;
        _setUsableSpace(data);
    };
    
    const maxOccupancyRef = React.useRef(maxOccupancy);
    const setMaxOccupancy = data => {
        maxOccupancyRef.current = data;
        _setMaxOccupancy(data);
    };
    const OCCUPANCYLIMIT = .5;

    const roomTypeToPersonUsableSpace = {
        "eating-drinking" : 40,
        "gym" : 50,
        "library" : 50,
        "common-area" : 40
    }

    function getOccupancyNumber(roomInfo) {
        console.log(maxOccupancyRef.current + " " + roomTypeRef.current + " " + usableSpaceRef.current)
        let occupancyText = "";
        if (roomTypeRef.current === "" || usableSpaceRef.current === 0 || roomInfo.roomWidth === 0 || roomInfo.roomLength === 0) {
            occupancyText = "";
            document.getElementById("density-recommendation").style.visibility = "hidden";
        } else {
            let roomUsableSpace = (roomInfo.roomLength * roomInfo.roomWidth) * (usableSpaceRef.current / 100);
            let method1Calc = roomUsableSpace / roomTypeToPersonUsableSpace[roomTypeRef.current];
            let method2Calc = 0.0;
            if (isNaN(maxOccupancyRef.current)|| maxOccupancyRef.current === 0) {
                occupancyText = method1Calc;
            } else {
                method2Calc = maxOccupancyRef.current * OCCUPANCYLIMIT; 
                occupancyText = method1Calc < method2Calc ? method1Calc : method2Calc;
            }
            document.getElementById("density-recommendation").style.visibility = "visible";
        }
        return Math.floor(occupancyText);
    }

    return (
        <div id="density-wrapper">
            <div id="density-left-container">
                <div className="input-wrapper">
                    <label htmlFor="roomtype-selection" className="input-title">RoomType</label>
                    <select id="roomtype-selection" className="user-input" onChange={(e) => { 
                        setRoomType(e.target.value)
                        props.updateRoomType(e.target.value);
                        setOccupancyText(getOccupancyNumber(props.roomInfo));
                    }}>
                        <option disabled selected value=""> -- select an option -- </option>
                        <option value="eating-drinking">{'Eating & Drinking Area'}</option>
                        <option value="gym">{'Gyms & Fitness Center'}</option>
                        <option value="common-area">{'Lobby, Hallway, Common Area'}</option>
                        <option value="library">{'Library'}</option>
                    </select>
                    <label htmlFor="space-selection" className="input-title" id="density-bottom-title">Usable Space</label>
                    <select id="roomtype-selection" className="user-input" onChange={(e) => {
                        // setUsableSpace(() => parseFloat(e.target.value));
                        setUsableSpace(parseFloat(e.target.value));
                        props.updateUsableSpace(parseFloat(e.target.value));
                        setOccupancyText(getOccupancyNumber(props.roomInfo));
                    }}>
                        <option disabled selected value=""> -- select an option -- </option>
                        <option value="10">10%</option>
                        <option value="20">20%</option>
                        <option value="30">30%</option>
                        <option value="40">40%</option>
                        <option value="50">50%</option>
                        <option value="60">60%</option>
                        <option value="70">70%</option>
                        <option value="80">80%</option>
                        <option value="90">90%</option>
                        <option value="100">100%</option>
                    </select>
                    <label htmlFor="maximum-occupancy" className="input-title" id="density-middle-title">Maximum Occupancy</label>
                    <input className="user-input" onChange={(e) => {
                        setMaxOccupancy(parseFloat(e.target.value))
                        props.updateOccupancy(parseFloat(e.target.value));
                        setOccupancyText(getOccupancyNumber(props.roomInfo));
                    }} />
                </div>
                <p id="density-recommendation"><span className="density-bold">Occupancy Recommendation: </span>Based on your room type and usable space, the recommended occupancy of your room is <span className="density-bold">{occupancyText + " persons"}</span></p>
            </div>
            <img src={densityClipArt} id="img-density" alt="density clip art"/>
            <p id="density-help-text" className="help-text">Occupant density determines the optimal amount of people that should be in your room for clean air</p>
        </div>
    )
}