import {useState} from 'react';
import {SortKeyChoice} from './SortKeyChoice.js';
import {FilterOptions} from './FilterOptions.js';
import {AirCleanerList} from './AirCleanerList.js';
import {AirCleanerDetails} from './AirCleanerDetails.js';
import './AirCleanerRecommendations.css';

export function AirCleanerRecommendations(props) {
    const filterOptionsInit = {
        maxPrice : -1,
        maxNoise : -1,
        maxWidth : -1,
        maxLength : -1,
        maxHeight : -1,
        maxPower : -1,
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
            <button id='back-button' onClick={() => {props.backToCalculator()}}>{'< Go Back'}</button>
            <div id='air-cleaner-recommendations'>
                <FilterOptions filterOptions={filterOptions} setFilterOptions={setFilterOptions} />
                <div id='air-cleaner-recommendations-page-center-container'>
                    <div id='air-cleaner-recommendations-page-center'>                        
                        <div id='air-cleaner-recommendations-title-container'>
                            <h2 id='air-cleaner-recommendations-title'>Recommended Portable Air Cleaners</h2>
                        </div>
                        <SortKeyChoice updateSortKey={setSortKey} />
                        
                        { selectedAirCleaner === null &&
                             <AirCleanerList roomInfo={props.roomInfo} sortKey={sortKey} filterOptions={filterOptions} detailsClick={detailsClick} airCleaners={props.airCleaners} />}
                        { selectedAirCleaner !== null && <AirCleanerDetails airCleaner={selectedAirCleaner} closeDetailsClick={closeDetailsClick} /> }
                    </div>
                </div>
            </div>
        </div>
    );
}