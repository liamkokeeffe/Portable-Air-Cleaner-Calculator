import './UnitsSelection.css';
import '../Calculator/Calculator.css';

export function CeilingHeightSelection(props) {

    return (
        <div className='user-input-box'>
            <p className='title'>Ceiling Height</p>
            <input className="user-input" onChange={(e) => props.ceilingHeightEntered(e.target.value)} />
        </div>
    )
}
