import './Calculator.css'

export function RoomDim(props) {
    return (
        <div className="input-wrapper" id="roomdim-wrapper">
            <div className="input-container">
                <p className="input-title">Units</p>
                <select className="user-input" onChange={(e) => props.unitSelectionMade(e.target.value)}>
                    <option value="feet">Feet</option>
                    <option value="meters">Meters</option>
                </select>
            </div>
            <div className="input-container">
                <p className="input-title">Room Width</p>
                <input className="user-input" onChange={(e) => props.roomWidthEntered(e.target.value)} />
            </div>
            <div className="input-container">
                <p className="input-title">Room Length</p>
                <input className="user-input" onChange={(e) => props.roomLengthEntered(e.target.value)} />
            </div>
            <div className="input-container">
                <p className="input-title">Ceiling Height</p>
                <input className="user-input" onChange={(e) => props.ceilingHeightEntered(e.target.value)} />
            </div>
        </div>
    )
}