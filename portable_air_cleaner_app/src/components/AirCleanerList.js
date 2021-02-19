import './AirCleanerList.css';
import { AirCleanerListItem } from './AirCleanerListItem';
import {useEffect, useState} from 'react';

let unsortedAirCleaners = [{name:'Levoit Vital 100 True HEPA Purifier', image_src: 'hello', price: 100, noise: 20, cadr: 500, power: 20},
                           {name:'Whirlpool Vital 100 True HEPA Purifier', image_src: 'hello', price: 50, noise: 30, cadr: 500, power: 30},
                           {name:'Conway Vital 100 True HEPA Purifier', image_src: 'hello', price: 1000, noise: 39, cadr: 1000, power: 40}];

export function AirCleanerList(props) {
    const [airCleaners, setAirCleaners] = useState([]);

    useEffect(() => {
        unsortedAirCleaners.forEach((airCleaner) => {
            airCleaner.ach = Math.round((airCleaner.cadr * 60) / (props.roomInfo.floorArea * props.roomInfo.ceilingHeight));            
        });
        
        let outdoorVentilation = 1;
        if (props.roomInfo.outdoorVentilation === 'Typical') {
            outdoorVentilation = 1.5
        } else if (props.roomInfo.outdoorVentilation === 'Good') {
            outdoorVentilation = 3;
        } else {
            outdoorVentilation = 4;
        }
        
        let filteredUnsortedAirCleaners = [...unsortedAirCleaners].filter((airCleaner) => {
            if (airCleaner.ach + outdoorVentilation < 4) { // "good" ACH or better
                return false;
            }
            if ((props.filterOptions.maxPrice > -1) && (props.filterOptions.maxPrice < airCleaner.price)) {
                return false;
            }
            if ((props.filterOptions.maxNoise > -1) && (props.filterOptions.maxNoise < airCleaner.noise)) {
                return false;
            }
            if ((props.filterOptions.maxPower > -1) && (props.filterOptions.maxPower < airCleaner.power)) {
                return false;
            }
            return true;
        });
        let sortedAirCleaners = filteredUnsortedAirCleaners.sort((a, b) => a[props.sortKey] - b[props.sortKey]);
        setAirCleaners(sortedAirCleaners);
    
    }, [props])

    const airCleanerComponents = airCleaners.map((item) => 
        <AirCleanerListItem airCleaner={item} />
    );

    return (
       <div>
           {airCleanerComponents}
       </div>
    );
}