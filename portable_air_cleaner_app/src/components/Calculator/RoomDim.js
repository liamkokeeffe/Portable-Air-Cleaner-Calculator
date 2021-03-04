import './Calculator.css';
import { useState } from "react";

export function RoomDim(props) {
    const [roomWidth, setRoomWidth] = useState(props.roomInfo.roomWidth === 0 ? "" : props.roomInfo.roomWidth);
    const [roomLength, setRoomLength] = useState(props.roomInfo.roomLength === 0 ? "" : props.roomInfo.roomLength);
    const [ceilingHeight, setCeilingHeight] = useState(props.roomInfo.ceilingHeight === 0 ? "" : props.roomInfo.ceilingHeight);

    return (
        <div className="input-wrapper" id="roomdim-wrapper">
            <div className="input-container">
                <p className="input-title">Units</p>
                <select className="user-input" onChange={(e) => props.unitSelectionMade(e.target.value)} value={props.roomInfo.units}>
                    <option value="feet">Feet</option>
                    <option value="meters">Meters</option>
                </select>
            </div>
            <div className="input-container">
                <p className="input-title">Room Width</p>
                <input className="user-input" onChange={(e) => { 
                    setRoomWidth(e.target.value);
                    props.roomWidthEntered(parseInt(e.target.value))
                }} value={roomWidth} />
            </div>
            <div className="input-container">
                <p className="input-title">Room Length</p>
                <input className="user-input" onChange={(e) => {
                    setRoomLength(e.target.value);
                    props.roomLengthEntered(parseInt(e.target.value));
                }} value={roomLength} />
            </div>
            <div className="input-container">
                <p className="input-title">Ceiling Height</p>
                <input className="user-input" onChange={(e) => { 
                    setCeilingHeight(e.target.value);
                    props.ceilingHeightEntered(parseInt(e.target.value));
                    }} value={ceilingHeight} />
            </div>
        </div>
    )
}