import {useState} from 'react';
import {SortKeyChoice} from './SortKeyChoice';
import {FilterOptions} from './FilterOptions';
import {AirCleanerList} from './AirCleanerList';
import './AirCleanerRecommendations.css';

export function AirCleanerRecommendations(props) {
    const [sortKey, setSortKey] = useState('price');
    const [filterOptions, setFilterOptions] = useState(null);

    return (
        <div>
            <h2 id='air-cleaner-recommendations-title'>Recommended Portable Air Cleaners</h2>
            <SortKeyChoice updateSortKey={setSortKey} />
            <div id='air-cleaner-recommendations-list-and-filter-options'>
                <FilterOptions />
                <AirCleanerList outdoorVentilation={props.outdoorVentilation} sortKey={sortKey} filterOptions={filterOptions} />
            </div>
        </div>
    );
}