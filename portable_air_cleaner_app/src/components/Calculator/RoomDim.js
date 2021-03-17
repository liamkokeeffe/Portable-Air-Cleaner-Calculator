import './Calculator.css';
import { useState } from "react";

export function RoomDim(props) {
    const [roomWidth, setRoomWidth] = useState(props.roomInfo.roomWidth === 0 ? "" : props.roomInfo.roomWidth);
    const [roomLength, setRoomLength] = useState(props.roomInfo.roomLength === 0 ? "" : props.roomInfo.roomLength);
    const [ceilingHeight, setCeilingHeight] = useState(props.roomInfo.ceilingHeight === 0 ? "" : props.roomInfo.ceilingHeight);

    return (
        <div className="input-wrapper" id="roomdim-wrapper">
            <div className="input-container">
                <label htmlFor="unit-selection-dropdown" className="input-title">Units</label>
                <select id="unit-selection-dropdown" className="user-input" onChange={(e) => props.unitSelectionMade(e.target.value)} value={props.roomInfo.units}>
                    <option value="feet">Feet</option>
                    <option value="meters">Meters</option>
                </select>
            </div>
            <div className="input-container">
                <label htmlFor="room-width-input" className="input-title">Room Width</label>
                <input id="room-width-input" className="user-input" onChange={(e) => { 
                    setRoomWidth(e.target.value);
                    props.roomWidthEntered(parseFloat(e.target.value))
                }} value={roomWidth} />
            </div>
            <div className="input-container">
                <label htmlFor="room-length-input" className="input-title">Room Length</label>
                <input id="room-length-input" className="user-input" onChange={(e) => {
                    setRoomLength(e.target.value);
                    props.roomLengthEntered(parseFloat(e.target.value));
                }} value={roomLength} />
            </div>
            <div className="input-container">
                <label htmlFor="ceiling-height-input" className="input-title">Ceiling Height</label>
                <input id="ceiling-height-input" className="user-input" onChange={(e) => { 
                    setCeilingHeight(e.target.value);
                    props.ceilingHeightEntered(parseFloat(e.target.value));
                    }} value={ceilingHeight} />
            </div>
        </div>
    )
}