import {useState} from 'react';
import {SortKeyChoice} from './SortKeyChoice.js';
import {FilterOptions} from './FilterOptions.js';
import {AirCleanerList} from './AirCleanerList.js';
import {AirCleanerDetails} from './AirCleanerDetails.js';
import './AirCleanerRecommendations.css';
import VariousPortableAirCleaners from '../../images/various_portable_air_cleaners.png';

export function AirCleanerRecommendations(props) {
    const filterOptionsInit = {
        maxPrice: -1,
        maxNoise: -1,
        maxPower: -1,
        maxNumAirCleaners: 5
    }

    const [sortKey, setSortKey] = useState('price');
    const [filterOptions, setFilterOptions] = useState(filterOptionsInit);
    const [selectedAirCleaner, setSelectedAirCleaner] = useState(null);

    function detailsClick(airCleaner) {
        setSelectedAirCleaner(airCleaner);
    }

    function closeDetailsClick() {
        setSelectedAirCleaner(null);
    }

    return (
        <div id='air-cleaner-recommendations-container'>
            {selectedAirCleaner === null &&
            <div>
                <button id='back-button' onClick={() => {props.backToCalculator()}}>{'< Go Back'}</button>
                <div id='air-cleaner-recommendations'>
                    <FilterOptions setFilterOptions={setFilterOptions} />
                    <div id='air-cleaner-recommendations-page-center-container'>
                        <div id='air-cleaner-recommendations-page-center'>
                            <div id='various-air-cleaners-image-container'>
                                <img id='various-air-cleaners-image' src={VariousPortableAirCleaners} alt='Various portable air cleaners' />
                            </div>
                            <h2 id='air-cleaner-recommendations-title'>Recommended Portable Air Cleaners</h2>
                            <SortKeyChoice updateSortKey={setSortKey} />
                            <div id='disclaimer-message'>
                                <p>Note: Your space's average density is higher than the recommended maximum amount of x. You may want to prioritize choosing an air cleaner with a high ACH (air changes per hour) level or purchase more air cleaners than are recommended.</p>
                            </div>
                            <AirCleanerList roomInfo={props.roomInfo} sortKey={sortKey} filterOptions={filterOptions} detailsClick={detailsClick} airCleaners={props.airCleaners} />
                        </div>
                    </div>
                </div>
            </div>}
            { selectedAirCleaner !== null && <AirCleanerDetails airCleaner={selectedAirCleaner} closeDetailsClick={closeDetailsClick} /> }
        </div>
    );
}