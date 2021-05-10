import './AirCleanerList.css';
import './AirCleanerRecommendations.css';
import { AirCleanerListItem } from './AirCleanerListItem';
import {useEffect, useState} from 'react';

export function AirCleanerList(props) {
    const [recommendedAirCleaners, setRecommendedAirCleaners] = useState([]);

    const airCleanerComponents = recommendedAirCleaners.map((item, index) => 
    <AirCleanerListItem key={item.name} id={index} airCleaner={item} detailsClick={props.detailsClick} />
    );
    const minACHLevelToRecommend = 5;

    useEffect(() => {
        function getOutdoorVentilation() {
            let outdoorVentilation = 1;
            if (props.roomInfo.outdoorVentilation === 'Typical') {
                outdoorVentilation = 1.5
            } else if (props.roomInfo.outdoorVentilation === 'Good') {
                outdoorVentilation = 3;
            } else if (props.roomInfo.outdoorVentilation === 'Enhanced') {
                outdoorVentilation = 4;
            }
            return outdoorVentilation;
        }
        
        function addAdditionalAttributesToAirCleaner(airCleaner) {
            let outdoorVentilation = getOutdoorVentilation();
            let ach;
            if (props.roomInfo.units === 'feet') {
                ach = (airCleaner.cadr * 60) / (props.roomInfo.floorArea * props.roomInfo.ceilingHeight) + outdoorVentilation;
            } else {
                ach = (airCleaner.cadr / 0.58) / (props.roomInfo.floorArea * props.roomInfo.ceilingHeight) + outdoorVentilation;
            }

            airCleaner.achFromOneAirCleaner = Math.round(ach * 100) / 100.0;
            let numAirCleaners = 1;
            if (ach < minACHLevelToRecommend) {
                for (let i = 1; i < props.filterOptions.maxNumAirCleaners; i++) {
                        ach += airCleaner.achFromOneAirCleaner;
                        numAirCleaners++;
                
                        if (ach >= minACHLevelToRecommend) {
                            break;
                        }
                }
            }

            airCleaner.ach = Math.round(ach * 100) / 100.0;
            airCleaner.numAirCleaners = numAirCleaners;
            airCleaner.price = Math.round(airCleaner.priceOfOneAirCleaner * numAirCleaners * 100) / 100.0;
        }

        function filterAirCleaners(airCleaners) {
            return [...airCleaners].filter((airCleaner) => {
                if (airCleaner.ach < minACHLevelToRecommend) {
                    return false;
                }
                if ((props.filterOptions.maxPrice > -1) && (props.filterOptions.maxPrice < airCleaner.price)) {
                    return false;
                }
                if ((props.filterOptions.maxNoise > -1) && ((props.filterOptions.maxNoise < airCleaner.noise) || airCleaner.noise === -1)) {
                    return false;
                }
                if ((props.filterOptions.maxPower > -1) && ((props.filterOptions.maxPower < airCleaner.power) || airCleaner.power === -1)) {
                    return false;
                }

                return true;
            });
        }

        function sortAirCleaners(filteredUnsortedAirCleaners) {
            return filteredUnsortedAirCleaners.sort((a, b) => {
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
        }

        let airCleaners = props.airCleaners;
        airCleaners.forEach((airCleaner) => {
            addAdditionalAttributesToAirCleaner(airCleaner)
        });

        let filteredUnsortedAirCleaners = filterAirCleaners(airCleaners);
        let sortedAirCleaners = sortAirCleaners(filteredUnsortedAirCleaners);
        
        setRecommendedAirCleaners(sortedAirCleaners);
    }, [props]);

    return (
        <div id='air-cleaner-list'>
            {airCleanerComponents.length > 0 ? airCleanerComponents :
                <div id='no-air-cleaners-found-message-container'>
                    <p>Sorry, but there were no portable air cleaners found. You may be using filtering options that are too specific, or your space may be too large to be properly ventilated with the portable air cleaners we are recommending.</p>
                </div>
            }
        </div>
    );
}