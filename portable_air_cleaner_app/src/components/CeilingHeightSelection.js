import './UnitsSelection.css';
import './Calculator.css';

export function CeilingHeightSelection(props) {

    return (
        <div className='user-input-box'>
            <p className='title'>Ceiling Height</p>
            <input onChange={(e) => props.ceilingHeightEntered(e.target.value)} />
        </div>
    )
}
