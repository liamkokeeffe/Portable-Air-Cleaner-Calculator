import './AirCleanerListItem.css';

export function AirCleanerListItem(props) {

    return (
        <div id='air-cleaner-list-item'>
            <div id='air-cleaner-image-container'>
                <div id='air-cleaner-image'>image</div>
            </div>
            <div id='air-cleaner-details'>
                <p id='air-cleaner-name'>{props.airCleaner.name}</p>
                <p>Price: ${props.airCleaner.price}</p>
                <p>Air Changes per Hour: {props.airCleaner.ach}</p>
                <p>Noise Level: {props.airCleaner.noise} dB</p>
            </div>
        </div>
    );
}