import './UnitsSelection.css';
import '../Calculator/Calculator.css';

export function FloorAreaSelection(props) {
    return (
        <div className='user-input-box'>
            <p className='title'>Floor Area</p>
            <input className="user-input"onChange={(e) => props.floorAreaEntered(e.target.value)} />
        </div>
    )
}
