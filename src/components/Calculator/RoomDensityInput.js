import './Calculator.css';
import { useState } from 'react';
import densityClipArt from '../../images/density_clipart.png'
import React from "react"

export function RoomDensityInput(props) {
    const [roomType, setRoomType] = useState(props.roomInfo.roomType === "" ? "" : props.roomInfo.roomType);
    const [usableSpace, setUsableSpace] = useState(props.roomInfo.usableSpace === 0 ? "" : props.roomInfo.usableSpace);
    const [maxOccupancy, setMaxOccupancy] = useState(props.roomInfo.maxOccupancy === 0 ? "" : props.roomInfo.maxOccupancy);
    const [aveOccupancy, setAveOccupancy] = useState(props.roomInfo.aveOccupancy === 0 ? "" : props.roomInfo.aveOccupancy); 

    function checkIfNumber(value) {
        const re = /^[0-9\b]+$/
        if (value === '' || re.test(value)) { 
            return true;
        }
        return false;
    }

    return (
        <div>
            <p className="helptext">Occupant density determines the optimal amount of people that should be in your room for clean air</p>
            <div className="step-wrapper">
                <div className="input-wrapper">
                    <label htmlFor="room-type-selection" className="input-title">Room Type</label>
                    <select id="room-type-selection" className="user-input" value={roomType} onChange={(e) => { 
                        setRoomType(e.target.value)
                        props.updateRoomType(e.target.value);
                    }}>
                        <option disabled selected value=""> -- select an option -- </option>
                        <option value="eating-drinking">{'Eating & Drinking Area'}</option>
                        <option value="gym">{'Gyms & Fitness Center'}</option>
                        <option value="common-area">{'Lobby, Hallway, Common Area'}</option>
                        <option value="library">{'Library'}</option>
                    </select>
                    <label htmlFor="usable-space-selection" className="input-title">Usable Space</label>
                    <select id="usable-space-selection" className="user-input" value={usableSpace} onChange={(e) => {
                        setUsableSpace(parseFloat(e.target.value));
                        props.updateUsableSpace(parseFloat(e.target.value));
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
                    <label htmlFor="average-occupancy" className="input-title">Average Number of <br />People in Room</label>
                    <input id="average-occupancy" className="user-input" onChange={(e) => {
                        let value = e.target.value;
                        if (checkIfNumber(value)) {
                            setAveOccupancy(parseFloat(value));
                            props.updateAveOccupancy(parseFloat(value));
                        }
                    }} value={isNaN(aveOccupancy) ? '' : aveOccupancy} />
                    <label htmlFor="maximum-occupancy" className="input-title">Maximum Occupancy</label>
                    <input id="maximum-occupancy" className="user-input" onChange={(e) => {
                        let value = e.target.value;
                        if (checkIfNumber(value)) {
                            setMaxOccupancy(parseFloat(value));
                            props.updateMaxOccupancy(parseFloat(value));
                        }
                    }} value={isNaN(maxOccupancy) ? '' : maxOccupancy} />
                </div>
                <img src={densityClipArt} id="img-density" alt="density clip art"/>
            </div>
            <p className="extra-text" id="density-extra-text"><span className="extra-text-title">Usable space: </span>The percentage of space in your room 
            not occupied by furniture or household goods. The percentage of space that is usually occupied by employees, customers or family members.</p>
        </div>
    );
}