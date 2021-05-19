import './Calculator.css';
import { useState } from "react";
import roomDimPic from '../../images/roomdim-img.png';
import React from "react";

export function RoomDimensionsInput(props) {
    const [roomWidth, _setRoomWidth] = useState(props.roomInfo.roomWidth === 0 ? "" : props.roomInfo.roomWidth);
    const [roomLength, _setRoomLength] = useState(props.roomInfo.roomLength === 0 ? "" : props.roomInfo.roomLength);
    const [ceilingHeight, setCeilingHeight] = useState(props.roomInfo.ceilingHeight === 0 ? "" : props.roomInfo.ceilingHeight);
    const [floorArea, _setFloorArea] = useState(props.roomInfo.floorArea === 0 ? "" : props.roomInfo.floorArea);
    const [units, _setUnits] = useState(props.roomInfo.units === "" ? "" : props.roomInfo.units);

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
    const unitsRef = React.useRef(units);
    const setUnits = data => {
        unitsRef.current = data;
        _setUnits(data);
    }

    function calculateFloorArea() {
        if (roomWidthRef.current !== 0 && roomLengthRef.current !== 0) {    
            let floorArea = roomWidthRef.current * roomLengthRef.current;
            if (props.calculatorType === "find" && floorArea > 3000) {
                document.getElementById("error-max-area").style.display = "block"
                return false;
            }
            document.getElementById("error-max-area").style.display = "none"
            setFloorArea(roomWidthRef.current * roomLengthRef.current);
            props.floorAreaEntered(floorAreaRef.current, roomLengthRef.current, roomWidthRef.current)
            return true;
        }
        return false;
    }

    return (
        <div>
            <p className="helptext">Please enter your room's width and length or floor area. Then enter your room's ceiling height (the average ceiling height is 8-10 feet).</p>
            <div className="step-wrapper">
                <div className="input-wrapper">
                    <label htmlFor="unit-selection" className="input-title">Units</label>
                    <select id="unit-selection" className="user-input" onChange={(e) => {
                        setUnits(e.target.value);
                        props.unitSelectionMade(e.target.value)
                    }} value={props.roomInfo.units}>
                        <option value="feet">Feet</option>
                        <option value="meters">Meters</option>
                    </select>
                    <label htmlFor="room-width-input" className="input-title">Room Width</label>
                    <div className="input-line-wrapper">
                        <input id="room-width-input" className="user-input" onChange={(e) => {
                            let value = e.target.value;
                            setRoomWidth(value);
                            if (!calculateFloorArea()) {
                                props.roomWidthEntered(parseFloat(value))
                            }    
                        }} value={roomWidth} type="number" />
                        <p className="unit-text">{unitsRef.current === "feet" ? "ft" : "m"}</p>
                    </div>
                    <label htmlFor="room-length-input" className="input-title">Room Length</label>
                    <div className="input-line-wrapper">
                        <input id="room-length-input" className="user-input" onChange={(e) => {
                            let value = e.target.value;
                            setRoomLength(value);
                            if (!calculateFloorArea()) {
                                props.roomLengthEntered(parseFloat(value));
                            }
                        }} value={roomLength} type="number" />
                        <p className="unit-text">{unitsRef.current === "feet" ? "ft" : "m"}</p>
                    </div>
                    <label htmlFor="floor-area-input" className="input-title">Floor Area <span class="required">*</span></label>
                    <div className="input-line-wrapper">
                        <input id="floor-area-input" className="user-input" onChange={(e) => {
                            let value = e.target.value;
                            if ((props.calculatorType === "find" && value <= 3000) || props.calculatorType === "test") {
                                document.getElementById("error-max-area").style.display = "none"
                                setFloorArea(value);
                                props.floorAreaEntered(parseFloat(value));
                            } else {
                                document.getElementById("error-max-area").style.display = "block";
                            }
                        }} value={floorArea} type="number" />
                        <p className="unit-text">{unitsRef.current === "feet" ? "ft" : "m"}<sup>2</sup></p>
                    </div>
                    <p className="error-message" id="error-floor-area">Please enter a floor area.</p>
                    <p className="error-message" id="error-max-area">The max floor area our <br /> calculator will handle is {unitsRef.current === "feet" ? "3000 ft" : "914 m"}<sup>2</sup></p>
                    <label htmlFor="ceiling-height-input" className="input-title">Ceiling Height <span class="required">*</span></label>
                    <div className="input-line-wrapper">
                        <input id="ceiling-height-input" className="user-input" onChange={(e) => { 
                            let value = e.target.value;
                            setCeilingHeight(value);
                            props.ceilingHeightEntered(parseFloat(value));
                            }} value={ceilingHeight} type="number" />
                        <p className="unit-text">{unitsRef.current === "feet" ? "ft" : "m"}</p>
                    </div>
                    <p className="error-message" id="error-ceiling-height">Please enter a ceiling height.</p>
                </div>
                <img src={roomDimPic} alt="Room Dimension ClipArt" id="img-roomdim"/>
            </div>
        </div>
    )
}