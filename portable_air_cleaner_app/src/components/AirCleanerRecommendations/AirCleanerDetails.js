import './AirCleanerDetails.css';

export function AirCleanerDetails(props) {

    function sizeWithInchMarks(airCleanerSize) {
        const firstInchMarkInsertionLocation = airCleanerSize.indexOf('x') - 1;
        const secondInchMarkInsertionLocation = airCleanerSize.lastIndexOf('x') - 1;
        return airCleanerSize.slice(0, firstInchMarkInsertionLocation) + '"' + 
               airCleanerSize.slice(firstInchMarkInsertionLocation, secondInchMarkInsertionLocation) + '"' +
               airCleanerSize.slice(secondInchMarkInsertionLocation) + '"';   
    }

    return(
        <div id='air-cleaner-details-container'>
            <div id='air-cleaner-details'>
                <div id='air-cleaner-details-header'>
                    <h3>{props.airCleaner.name}</h3>
                    <button id='close-air-cleaner-details-button' onClick={() => {console.log(props.airCleaner); props.closeDetailsClick()}}>Close</button>
                </div>
                <div id='air-cleaner-details-body'>
                    <img src={props.airCleaner.imageSrc} alt={props.airCleaner.name} width='240' height='200' />
                    <div>
                    <p><strong>Link to buy:</strong> <a href={props.airCleaner.link}>Here</a></p>
                    <p><strong>Price:</strong> ${props.airCleaner.price}</p>
                    <p><strong>Noise:</strong> {props.airCleaner.noise === -1 ? 'Not available' : props.airCleaner.noise + ' dB'}</p>
                    <p><strong>Power Requirement:</strong> {props.airCleaner.power === -1 ? 'Not available' : props.airCleaner.power + ' W'}</p>
                    <p><strong>Clean Air Delivery Rate (CADR):</strong> {props.airCleaner.cadr + ' m^3/min'}</p>
                    <p><strong>Size:</strong> {props.airCleaner.size === '' ? 'Not available' : sizeWithInchMarks(props.airCleaner.size)}</p>
                    <p><strong>Maximum Room Size:</strong> {props.airCleaner.maxRoomSize === -1 ? 'Not available' : props.airCleaner.maxRoomSize + ' square feet'}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}