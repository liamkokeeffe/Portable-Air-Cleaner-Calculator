import { useState } from 'react';
import './FilterOptions.css';

export function FilterOptions(props) {

    const [filterOptions, setFilterOptions] = useState({});

    return (
        <div id='filter-options'>
            <p>Filter by:</p>
            <hr />
            <p>Max Price (U.S dollars)</p>
            <div className='filter-option'>
                <p className='filter-option-unit-dollar'>$</p>
                <input className='filter-option-input' onChange={(e) => {
                    let newFilterOptions = {
                        maxPrice: parseInt(e.target.value),
                        maxNoise: props.filterOptions.maxNoise,
                        maxPower: props.filterOptions.maxPower,
                    };
                    setFilterOptions(newFilterOptions);
                }} />
            </div>
            <hr />
            <p>Max Noise (decibels)</p>
            <div className='filter-option'>
                <input className='filter-option-input' onChange={(e) => {
                    let newFilterOptions = {
                        maxPrice: props.filterOptions.maxPrice,
                        maxNoise: parseInt(e.target.value),
                        maxPower: props.filterOptions.maxPower,
                    };
                    setFilterOptions(newFilterOptions);
                }} />
                <p className='filter-option-unit-other'>dB</p>
            </div>
            <hr />
            <p>Max Size (dimensions in inches)</p>
            <div className='filter-option'>
                <input className='filter-option-input'/>
                <p className='filter-option-unit-inch'>" x</p>
                <input className='filter-option-input'/>
                <p className='filter-option-unit-inch'>" x</p>
                <input className='filter-option-input'/>
                <p id='filter-option-unit-final-inch'>"</p>
            </div>
            <hr />
            <p>Max Power Usage (Watts)</p>
            <div className='filter-option'>
                <input className='filter-option-input' onChange={(e) => {
                    let newFilterOptions = {
                        maxPrice: props.filterOptions.maxPrice,
                        maxNoise: props.filterOptions.maxNoise,
                        maxPower: parseInt(e.target.value)
                    };
                    setFilterOptions(newFilterOptions);
                }} />
                <p className='filter-option-unit-other'>W</p>
            </div>
            <button onClick={() => {props.setFilterOptions(filterOptions)}}>Submit</button>
        </div>
    );
}