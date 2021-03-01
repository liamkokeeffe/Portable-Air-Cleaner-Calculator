import './AirCleanerList.css';
import { AirCleanerListItem } from './AirCleanerListItem';
import {useEffect, useState} from 'react';

const unsortedAirCleaners = [
    {name:'Levoit Vital 100 True HEPA Purifier', imageSrc: 'https://i5.walmartimages.com/asr/85569bb9-9ba5-44cc-97d6-bb67681dbe34.71db55e05471e0e951f0cb7582391a71.jpeg?odnWidth=612&odnHeight=612&odnBg=ffffff', price: 119.99, minNoise: 23, maxNoise: 23, cadr: 130, minPower: 55, maxPower: 55, maxRoomSize: 0, filterType: '', dimensions: '12.8 x 6.4 x 16.1', frequency: 60, manafacturer: '', link:''},

    {name:'Whirlpool® WPT80 Whispure™ Large Tower Air Purifier', imageSrc: 'https://www.whirlpoolairpurifiers.com/wp-content/uploads/2018/05/WPT80B-9-01-100x100.png', price: 167.99, minNoise: -1, maxNoise: -1, cadr: 142, minPower: 43, maxPower: 43, maxRoomSize: 0, filterType: '', dimensions: '8.46 x 6.93 x 23', frequency: 60, manafacturer: '', link:''},

    {name:'Oransi OV200 Air Purifier', imageSrc: 'https://cdn.shopify.com/s/files/1/0488/2877/6600/products/ys4mulijrxffglnignja_large.jpg', price: 329.0, minNoise: 30, maxNoise: 54, cadr: 150, minPower: 60, maxPower:60, maxRoomSize: 0, filterType: '', dimensions: '13 x 23 x 7', frequency: 60, manafacturer: '', link:''},

    {name:'Coway Airmega 150', imageSrc: 'https://cdn.accentuate.io/35302008225951/1614359585901/airmega00083-47re2.jpg', price: 189.99, minNoise: -1, maxNoise: 48.3, cadr: 219, minPower: 60, maxPower:60, maxRoomSize: 0, filterType: '', dimensions: '13.4 x 6.5 x 18.5', frequency: 0, manafacturer: '', link:''},

    {name:'BioGS 2.0 Ultra Quiet Air Purifier SPA- 550A', imageSrc: 'https://cdn.shopify.com/s/files/1/0260/5699/files/biogs2_home_chest_ukulele_couch_720x.jpg', price: 369.95, minNoise: 22.8, maxNoise: 48.6, cadr: 162, minPower: 5, maxPower: 29, maxRoomSize: 0, filterType: '', dimensions: '22.2 x 16.6 x 9.8', frequency: 0, manafacturer: '', link:''}];

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
        <div >
           <div>
              {airCleanerComponents}
           </div>
        </div>
    );
}