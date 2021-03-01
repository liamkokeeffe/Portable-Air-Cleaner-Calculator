import { useState } from 'react';
import './FilterOptions.css';

export function FilterOptions(props) {

    const [filterOptions, setFilterOptions] = useState({});

    return (
        <div id='filter-options'>
            <div id='filter-options-title-container'>
                <p id='filter-options-title'>Filter by:</p>
                <button id='filter-options-clear-all-button'>clear all</button>
            </div>

            <div className='filter-option-container'>
                <p className='filter-option-title'>Max Price (U.S dollars)</p>                
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
                    <button className='submit-filter-options-button' onClick={() => {props.setFilterOptions(filterOptions)}}>Submit</button>
                </div>
            </div>
            <div className='filter-option-container'>
                <p className='filter-option-title'>Max Noise (decibels)</p>
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
                    <button className='submit-filter-options-button' onClick={() => {props.setFilterOptions(filterOptions)}}>Submit</button>
                </div>
            </div>
            <div id='last-filter-option-container' className='filter-option-container'>
                <p className='filter-option-title'>Max Power Usage (Watts)</p>
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
                    <button className='submit-filter-options-button' onClick={() => {props.setFilterOptions(filterOptions)}}>Submit</button>
                </div>
            </div>
        </div>
    );
}