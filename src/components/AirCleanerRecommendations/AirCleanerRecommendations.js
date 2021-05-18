import {useEffect, useState} from 'react';
import {SortKeyChoice} from './SortKeyChoice.js';
import {FilterOptions} from './FilterOptions.js';
import {AirCleanerList} from './AirCleanerList.js';
import {AirCleanerDetails} from './AirCleanerDetails.js';
import './AirCleanerRecommendations.css';
import VariousPortableAirCleaners from '../../images/various_portable_air_cleaners.png';

export function AirCleanerRecommendations(props) {
    const defaultMaxNumAirCleaners = 5;
    const filterOptionsInit = {
        maxPrice: -1,
        maxNoise: -1,
        maxPower: -1,
        maxNumAirCleaners: defaultMaxNumAirCleaners
    }

    const [sortKey, setSortKey] = useState('price');
    const [filterOptions, setFilterOptions] = useState(filterOptionsInit);
    const [selectedAirCleaner, setSelectedAirCleaner] = useState(null);
    // windowYPosition represents the vertical position the user is at in the air cleaner list when
    // they click an air cleaner's "Details" button to open the air cleaner's details window.
    // It is used to return the user to the same position in the air cleaner list after they close
    // the details window.
    const [windowYPosition, setWindowYPosition] = useState(0);
    // shouldScroll is used because there needs to be another state value that is updated
    // on closeDetailsClick() in order to return the user to their previous air cleaner list
    // position when they close the details window. The value of shouldScroll is irrelevant.
    const [shouldScroll, setShouldScroll] = useState(0);

    function detailsClick(airCleaner) {
        setWindowYPosition(window.pageYOffset);
        setSelectedAirCleaner(airCleaner);
    }

    function closeDetailsClick() {
        setSelectedAirCleaner(null);
        setShouldScroll(1);
    }

    useEffect(() => {
        window.scrollTo(0, windowYPosition);
        setShouldScroll(0);
    }, [shouldScroll, windowYPosition]);
    
    // Returns either what phase the user is in or the maximum percent occupancy for their space depending on their
    // input in Step 3 of the calculator form.
    function getDynamicOccupancyDisclaimerInfo() {
        if (props.roomInfo.currPhase !== '') {
            return "Phase " + props.roomInfo.currPhase + " ";
        }
        return props.roomInfo.currOccupancy + "% occupancy ";
    }

    return (
        <div id='air-cleaner-recommendations-container'>
            {selectedAirCleaner === null &&
            <div>
                <button id='back-button' onClick={() => {
                    props.setCalculatorType("find");
                    props.backToCalculator();
                }}>{'< Go Back'}</button>
                <div id='air-cleaner-recommendations'>
                    <FilterOptions defaultFilterOptions={filterOptionsInit} setFilterOptions={setFilterOptions} />
                    <div id='air-cleaner-recommendations-page-center-container'>
                        <div id='air-cleaner-recommendations-page-center'>
                            <div id='various-air-cleaners-image-container'>
                                <img id='various-air-cleaners-image' src={VariousPortableAirCleaners} alt='Various portable air cleaners' />
                            </div>
                            <h2 id='air-cleaner-recommendations-title'>Recommended Portable Air Cleaners</h2>
                            <SortKeyChoice updateSortKey={setSortKey} />
                            {props.roomInfo.recOccupancy !== -1 && props.roomInfo.aveOccupancy > props.roomInfo.recOccupancy &&
                            <div id='occupancy-disclaimer'>
                                <p><span>Note: </span>Your space's average occupancy is greater than
                                the recommended occupancy based on <span>{getDynamicOccupancyDisclaimerInfo()}</span> 
                                guidelines for your space. The recommended air cleaners below are being
                                recommended with the assumption that your room's occupancy meets current occupancy
                                guidelines. For more information about occupancy guidelines for your type of space,
                                click <a href='https://www.governor.wa.gov/issues/issues/covid-19-resources/covid-19-reopening-guidance'>here</a>.
                                </p>
                            </div>
                            }
                            <AirCleanerList roomInfo={props.roomInfo} sortKey={sortKey} filterOptions={filterOptions} detailsClick={detailsClick} airCleaners={props.airCleaners} />
                        </div>
                    </div>
                </div>
            </div>}
            { selectedAirCleaner !== null && <AirCleanerDetails airCleaner={selectedAirCleaner} closeDetailsClick={closeDetailsClick} /> }
        </div>
    );
}