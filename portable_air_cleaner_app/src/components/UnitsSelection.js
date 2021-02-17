import './UnitsSelection.css';
import './Calculator.css';

export function UnitsSelection(props) {

    return (
        <div className='user-input-box'>
            <p className='title'>Units</p>
            <select onChange={(e) => props.unitSelectionMade(e.target.value)}>
                <option value='feet'>Feet</option>
                <option value='meters'>Meters</option>
            </select>
        </div>
    )
}
