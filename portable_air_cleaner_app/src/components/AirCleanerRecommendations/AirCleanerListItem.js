import './AirCleanerListItem.css';

export function AirCleanerListItem(props) {

    return (
        <div id='air-cleaner-list-item'>
            <div id='air-cleaner-image-container'>
                <div id='air-cleaner-image'>
                    <img src={props.airCleaner.imageSrc} alt={props.airCleaner.name} width='300' height='200'/>
                </div>
            </div>
            <div id='air-cleaner-details'>
                <p id='air-cleaner-name'>{props.airCleaner.name}</p>
                <p>Price: ${props.airCleaner.price}</p>
                <p>Air changes per hour for your space: {props.airCleaner.ach}</p>
                <p>Noise Level: {props.airCleaner.noise < 0 ? 'Not available' : props.airCleaner.noise + ' dB'}</p>
                <button onClick={() => {props.detailsClick(props.airCleaner)}}>Details</button>
            </div>
        </div>
    );
}