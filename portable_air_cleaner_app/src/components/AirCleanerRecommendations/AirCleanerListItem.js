import './AirCleanerListItem.css';

export function AirCleanerListItem(props) {

    return (
        <div className='air-cleaner-list-item'>
            <div className='air-cleaner-image-container'>
                <img className='air-cleaner-image' src={props.airCleaner.imageLink} alt={props.airCleaner.name}/>
            </div>
            <div className='air-cleaner-high-level-details'>
                <p className='air-cleaner-name'>{props.airCleaner.name}</p>
                <p data-testid='air-cleaner-price'><strong>Price:</strong> ${props.airCleaner.price}</p>
                <p data-testid='air-cleaner-ach'><strong> Estimated air changes per hour for your space:</strong>  {props.airCleaner.ach}</p>
                <p data-testid='air-cleaner-noise'><strong> Noise Level:</strong>  {props.airCleaner.noise < 0 ? 'Not available' : props.airCleaner.noise + ' dB'}</p>
                <button className='air-cleaner-details-button' onClick={() => {props.detailsClick(props.airCleaner)}}>Details</button>
            </div>
        </div>
    );
}