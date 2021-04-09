import './AirCleanerList.css';
import { AirCleanerListItem } from './AirCleanerListItem';
import {useEffect, useState} from 'react';

export function AirCleanerList(props) {
    const [recommendedAirCleaners, setRecommendedAirCleaners] = useState([]);

    const airCleanerComponents = recommendedAirCleaners.map((item) => 
    <AirCleanerListItem key={item.name} airCleaner={item} detailsClick={props.detailsClick} />
    );

    useEffect(() => {
        function calculate() {
            let outdoorVentilation = 1;
            if (props.roomInfo.outdoorVentilation === 'Typical') {
                outdoorVentilation = 1.5
            } else if (props.roomInfo.outdoorVentilation === 'Good') {
                outdoorVentilation = 3;
            } else if (props.roomInfo.outdoorVentilation === 'Enhanced') {
                outdoorVentilation = 4;
            }
            
            let airCleaners = props.airCleaners;
            airCleaners.forEach((airCleaner) => {
                if (props.roomInfo.units === 'feet') {
                    airCleaner.ach = Math.round((airCleaner.cadr * 60) / (props.roomInfo.floorArea * props.roomInfo.ceilingHeight) * 100) / 100.0 + outdoorVentilation;
                } else {
                    airCleaner.ach = Math.round((airCleaner.cadr / 0.58) / (props.roomInfo.floorArea * props.roomInfo.ceilingHeight) * 100) / 100.0 + outdoorVentilation;
                }
            });

            let filteredUnsortedAirCleaners = [...airCleaners].filter((airCleaner) => {
                if (airCleaner.ach < 4) { // "good" ACH or better
                    return false;
                }

                if ((props.filterOptions.maxPrice > -1) && (props.filterOptions.maxPrice < airCleaner.price)) {
                    return false;
                }
                if ((props.filterOptions.maxNoise > -1) && ((props.filterOptions.maxNoise < airCleaner.noise) || airCleaner.noise === -1)) {
                    return false;
                }
                if ((props.filterOptions.maxPower > -1) && (props.filterOptions.maxPower < airCleaner.power)) {
                    return false;
                }

                return true;
            });
        
            let sortedAirCleaners = filteredUnsortedAirCleaners.sort((a, b) => {
                if (a[props.sortKey] === -1 && b[props.sortKey] !== -1) {
                    return 1;
                }
                if (b[props.sortKey] === -1 && a[props.sortKey] !== -1) {
                    return -1;
                }
                
                if (props.sortKey === 'ach') {
                    return b[props.sortKey] - a[props.sortKey];
                }
                return a[props.sortKey] - b[props.sortKey];
            });
            
            setRecommendedAirCleaners(sortedAirCleaners);
        }
        calculate();
        
    }, [props]);

    return (
        <div id='air-cleaner-list'>
            {airCleanerComponents.length > 0 ? airCleanerComponents :
                <div id='no-air-cleaners-found-message-container'>
                    <p>Sorry, but there were no portable air cleaners found.</p>
                </div>
            }
        </div>
    );
}