import './AirCleanerDetails.css';

export function AirCleanerDetails(props) {
    return(
        <div id='air-cleaner-details-container'>
            <h3>{props.airCleaner != null ? props.airCleaner.name : 'test'}</h3>
        </div>
    );
}