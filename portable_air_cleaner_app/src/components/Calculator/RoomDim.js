import './Calculator.css';
import { useState } from "react";
import roomDimPic from '../../images/roomdim-img.png'
import React from "react"

export function RoomDim(props) {
    const [roomWidth, _setRoomWidth] = useState(props.roomInfo.roomWidth === 0 ? "" : props.roomInfo.roomWidth);
    const [roomLength, _setRoomLength] = useState(props.roomInfo.roomLength === 0 ? "" : props.roomInfo.roomLength);
    const [ceilingHeight, setCeilingHeight] = useState(props.roomInfo.ceilingHeight === 0 ? "" : props.roomInfo.ceilingHeight);
    const [floorArea, _setFloorArea] = useState(props.roomInfo.floorArea === 0 ? "" : props.roomInfo.floorArea);

    const roomWidthRef = React.useRef(roomWidth);
    const setRoomWidth = data => {
      roomWidthRef.current = data;
      _setRoomWidth(data);
    };
    const roomLengthRef = React.useRef(roomLength);
    const setRoomLength = data => {
      roomLengthRef.current = data;
      _setRoomLength(data);
    };
    const floorAreaRef = React.useRef(floorArea);
    const setFloorArea = data => {
      floorAreaRef.current = data;
      _setFloorArea(data);
    };

    function checkIfNumber(value) {
        const re = /^[0-9\b]+$/
        if (value === '' || re.test(value)) { 
            return true;
        }
        return false;
    }

    function calculateFloorArea() {
        if (roomWidthRef.current !== 0 && roomLengthRef.current !== 0) {    
            setFloorArea(roomWidthRef.current * roomLengthRef.current);
            props.floorAreaEntered(floorAreaRef.current, roomLengthRef.current, roomWidthRef.current)
            return true;
        }
        return false;
    }

    return (
        <div className="step-wrapper">
            <div className="input-wrapper">
                <label htmlFor="unit-selection-dropdown" className="input-title">Units</label>
                <select className="user-input" onChange={(e) => props.unitSelectionMade(e.target.value)} value={props.roomInfo.units}>
                    <option value="feet">Feet</option>
                    <option value="meters">Meters</option>
                </select>
                <label htmlFor="room-width-input" className="input-title">Room Width</label>
                <input className="user-input" onChange={(e) => {
                    let value = e.target.value
                    if (checkIfNumber(value)) {
                        setRoomWidth(value);
                        if (!calculateFloorArea()) {
                            props.roomWidthEntered(parseFloat(value))
                        }
                    }
                }} value={roomWidth} />
                <label htmlFor="room-length-input" className="input-title">Room Length</label>
                <input className="user-input" onChange={(e) => {
                    let value = e.target.value
                    if (checkIfNumber(value)) {
                        setRoomLength(value);
                        if (!calculateFloorArea()) {
                            props.roomLengthEntered(parseFloat(value));
                        }
                    }
                }} value={roomLength} />
                <label htmlFor="floor-area-input" className="input-title">Floor Area</label>
                <input className="user-input" onChange={(e) => {
                    let value = e.target.value
                    if (checkIfNumber(value)) {
                        setFloorArea(value);
                        props.floorAreaEntered(parseFloat(value));
                    }
                }} value={floorArea} />
                <label htmlFor="ceiling-height-input" className="input-title">Ceiling Height</label>
                <input className="user-input" onChange={(e) => { 
                    let value = e.target.value
                    if (checkIfNumber(value)) {
                        setCeilingHeight(value);
                        props.ceilingHeightEntered(parseFloat(value));
                    }
                    }} value={ceilingHeight} />
            </div>
            <img src={roomDimPic} alt="Room Dimmension ClipArt" id="img-roomdim"/>
        </div>
    )
}