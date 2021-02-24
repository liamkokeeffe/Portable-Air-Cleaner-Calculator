import './AirCleanerListItem.css';

export function AirCleanerListItem(props) {

    return (
        <div id='air-cleaner-list-item'>
            <div id='air-cleaner-image'>image</div>
            <div id='air-cleaner-details'>
                <p id='air-cleaner-name'>{props.airCleaner.name}</p>
                <p>${props.airCleaner.price}</p>
                <p>{props.airCleaner.ach} ACH</p>
                <p>{props.airCleaner.noise} dB</p>
            </div>
        </div>
    );
}