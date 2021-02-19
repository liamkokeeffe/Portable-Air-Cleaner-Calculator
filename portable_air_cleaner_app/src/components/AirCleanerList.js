import './AirCleanerList.css';
import { AirCleanerListItem } from './AirCleanerListItem';
import {useEffect, useState} from 'react';

const unsortedAirCleaners = [{name:'Levoit Vital 100 True HEPA Purifier', image_src: 'hello', price: 100, ach: 5.5, noise: 20},
{name:'Whirlpool Vital 100 True HEPA Purifier', image_src: 'hello', price: 50, ach: 5.1, noise: 30},
{name:'Conway Vital 100 True HEPA Purifier', image_src: 'hello', price: 1000, ach: -2.0, noise: 39}];

export function AirCleanerList(props) {
    const [airCleaners, setAirCleaners] = useState([]);

    useEffect(() => {
        let filteredUnsortedAirCleaners = [...unsortedAirCleaners].filter((airCleaner) => airCleaner.ach + props.outdoorVentilation > 2);
        let sortedAirCleaners = filteredUnsortedAirCleaners.sort((a, b) => a[props.sortKey] - b[props.sortKey]);
        setAirCleaners(sortedAirCleaners);
    
    }, [props])

    const airCleanerComponents = airCleaners.map((item) => 
        <AirCleanerListItem airCleaner={item} />
    );

    return (
       <div id='air-cleaner-list'>
           {airCleanerComponents}
       </div>
    );
}