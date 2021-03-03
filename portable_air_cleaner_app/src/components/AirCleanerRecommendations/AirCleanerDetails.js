import './AirCleanerDetails.css';

export function AirCleanerDetails(props) {
    return(
        <div id='air-cleaner-details-container'>
            <div id='air-cleaner-details-header'>
                <h3>{props.airCleaner.name}</h3>
                <button id='close-air-cleaner-details-button' onClick={() => {props.closeDetailsClick()}}>Close</button>
            </div>
            <div id='air-cleaner-details-body'>
                <img src={props.airCleaner.imageSrc} alt={props.airCleaner.name} width='240' height='200' />
                <div>
                <p><strong>Price:</strong> ${props.airCleaner.price}</p>
                <p><strong>Noise:</strong> {props.airCleaner.noise === -1 ? 'Not available' : props.airCleaner.noise + ' dB'}</p>
                <p><strong>Power Requirement:</strong> {props.airCleaner.power === -1 ? 'Not available' : props.airCleaner.power + ' W'}</p>
                <p><strong>Clean Air Delivery Rate (CADR):</strong> {props.airCleaner.cadr}</p>
                <p><strong>Dimensions:</strong> {props.airCleaner.dimensions}</p>
                <p><strong>Frequency:</strong> {props.airCleaner.frequency} Hz</p>
                <p><strong>Maximum Room Size:</strong> {props.airCleaner.maxRoomSize} square feet</p>
                </div>
            </div>
        </div>
    );
}