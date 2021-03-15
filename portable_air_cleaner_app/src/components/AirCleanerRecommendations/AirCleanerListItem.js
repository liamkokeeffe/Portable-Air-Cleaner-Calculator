import './AirCleanerListItem.css';

export function AirCleanerListItem(props) {

    return (
        <div className='air-cleaner-list-item'>
            <div className='air-cleaner-image-container'>
                <div className='air-cleaner-image'>
                    <img src={props.airCleaner.imageSrc} alt={props.airCleaner.name} width='300' height='200'/>
                </div>
            </div>
            <div className='air-cleaner-high-level-details'>
                <p className='air-cleaner-name'>{props.airCleaner.name}</p>
                <p data-testid='air-cleaner-price'>Price: ${props.airCleaner.price}</p>
                <p data-testid='air-cleaner-ach'>Estimated air changes per hour for your space: {props.airCleaner.ach}</p>
                <p data-testid='air-cleaner-noise'>Noise Level: {props.airCleaner.noise < 0 ? 'Not available' : props.airCleaner.noise + ' dB'}</p>
                <button onClick={() => {props.detailsClick(props.airCleaner)}}>Details</button>
            </div>
        </div>
    );
}