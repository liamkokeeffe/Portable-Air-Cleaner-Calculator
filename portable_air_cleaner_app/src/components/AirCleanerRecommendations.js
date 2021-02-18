import {useState} from 'react';
import {SortKeyChoice} from './SortKeyChoice';
import {FilterOptions} from './FilterOptions';
import {AirCleanerList} from './AirCleanerList';
import './AirCleanerRecommendations.css';

export function AirCleanerRecommendations() {
    const [sortKey, setSortKey] = useState('price');
    const [filterOptions, setFilterOptions] = useState(null); // object? we're going to have a lot of fields otherwise

    return (
        <div>
            <h2 id='air-cleaner-recommendations-title'>Recommended Portable Air Cleaners</h2>
            <SortKeyChoice updateSortKey={setSortKey} />
            <FilterOptions />
            {/*<AirCleanerList sortKey={sortKey}/>*/}
        </div>
    );
}