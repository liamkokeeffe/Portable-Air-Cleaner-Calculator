import {useState} from 'react';
import {SortKeyChoice} from './SortKeyChoice';
import {FilterOptions} from './FilterOptions';
import {AirCleanerList} from './AirCleanerList';
import './AirCleanerRecommendations.css';

export function AirCleanerRecommendations(props) {
    let filterOptionsInit = {
        maxPrice : -1,
        maxNoise : -1,
        maxWidth : -1,
        maxLength : -1,
        maxHeight : -1,
        maxPower : -1,
    }

    const [sortKey, setSortKey] = useState('price');
    const [filterOptions, setFilterOptions] = useState(filterOptionsInit);

    return (
        <div>
            <h2 id='air-cleaner-recommendations-title'>Recommended Portable Air Cleaners</h2>
            <SortKeyChoice updateSortKey={setSortKey} />
            <div id='air-cleaner-recommendations-list-and-filter-options'>
                <FilterOptions filterOptions={filterOptions} setFilterOptions={setFilterOptions} />
                <AirCleanerList roomInfo={props.roomInfo} sortKey={sortKey} filterOptions={filterOptions} />
            </div>
        </div>
    );
}