import './AirCleanerListItem.css';

export const numAirCleanersNeededLabel = 'Number of air cleaners of this type you would need to properly ventilate your space: ';

export function AirCleanerListItem(props) {

    let estimatedACHLabel = `Estimated air changes per hour ${props.airCleaner.numAirCleaners} of these air cleaners would give your space: `;
    let priceLabel = `Price for ${props.airCleaner.numAirCleaners} air cleaners of this type: `;

    if (props.airCleaner.numAirCleaners === 1) {
        estimatedACHLabel = 'Estimated air changes per hour this air cleaner would give your space: ';
        priceLabel = 'Price: ';
    }

    return (
        <div className='air-cleaner-list-item'>
            <div className='air-cleaner-image-container'>
                <img className='air-cleaner-image' src={props.airCleaner.imageLink} alt={props.airCleaner.name}/>
            </div>
            <div className='air-cleaner-high-level-details'>
                <p className='air-cleaner-name'>{props.airCleaner.name}</p>
                <p className='air-cleaner-list-item-detail'>{numAirCleanersNeededLabel}<strong>{props.airCleaner.numAirCleaners}</strong></p>
                <p className='air-cleaner-list-item-detail' data-testid='air-cleaner-price'>{priceLabel}<strong> ${props.airCleaner.price}</strong></p>
                <p className='air-cleaner-list-item-detail' data-testid='air-cleaner-ach'>{estimatedACHLabel}<strong>{props.airCleaner.ach}</strong></p>
                <p className='air-cleaner-list-item-detail' data-testid='air-cleaner-noise'>Noise Level: <strong>{props.airCleaner.noise < 0 ? 'Not available' : props.airCleaner.noise + ' dB'}</strong></p>
                <div className='air-cleaner-details-button-container'>
                    <button className='air-cleaner-details-button' onClick={() => {props.detailsClick(props.airCleaner)}}>Details</button>
                </div>
            </div>
        </div>
    );
}