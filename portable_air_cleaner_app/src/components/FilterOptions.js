import { useRef, useState } from 'react';
import './FilterOptions.css';

export function FilterOptions(props) {

    const [filterOptions, setFilterOptions] = useState({});
    const maxPriceInput = useRef(null);
    const maxNoiseInput = useRef(null);
    const maxPowerInput = useRef(null);

    function clearFilterOptions() {
        maxPriceInput.current.value = null;
        let newFilterOptions = {
            maxPrice: -1,
            maxNoise: -1,
            maxPower: -1,
        };
        props.setFilterOptions(newFilterOptions);
    }

    function updateFilterOptions() {
        const newFilterOptions = {
            maxPrice: maxPriceInput.current.value !== '' ? maxPriceInput.current.value : -1,
            maxNoise: maxNoiseInput.current.value !== '' ? maxNoiseInput.current.value : -1,
            maxPower: maxPowerInput.current.value !== '' ? maxPowerInput.current.value : -1
        };
        setFilterOptions(newFilterOptions);
    }

    return (
        <div id='filter-options'>
            <div id='filter-options-title-container'>
                <p id='filter-options-title'>Filter by:</p>
                <button id='filter-options-clear-all-button' onClick={clearFilterOptions}>clear all</button>
            </div>

            <div className='filter-option-container'>
                <p className='filter-option-title'>Max Price (U.S dollars)</p>                
                <div className='filter-option'>
                    <p className='filter-option-unit-dollar'>$</p>
                    <input className='filter-option-input' onChange={() => updateFilterOptions()} ref={maxPriceInput} />
                    <button className='submit-filter-options-button' onClick={() => {props.setFilterOptions(filterOptions)}}>Submit</button>
                </div>
            </div>
            <div className='filter-option-container'>
                <p className='filter-option-title'>Max Noise (decibels)</p>
                <div className='filter-option'>
                    <input className='filter-option-input' onChange={() => updateFilterOptions()} ref={maxNoiseInput} />
                    <p className='filter-option-unit-other'>dB</p>
                    <button className='submit-filter-options-button' onClick={() => {props.setFilterOptions(filterOptions)}}>Submit</button>
                </div>
            </div>
            <div id='last-filter-option-container' className='filter-option-container'>
                <p className='filter-option-title'>Max Power Usage (Watts)</p>
                <div className='filter-option'>
                    <input className='filter-option-input' onChange={() => updateFilterOptions()} ref={maxPowerInput} />
                    <p className='filter-option-unit-other'>W</p>
                    <button className='submit-filter-options-button' onClick={() => {props.setFilterOptions(filterOptions)}}>Submit</button>
                </div>
            </div>
        </div>
    );
}