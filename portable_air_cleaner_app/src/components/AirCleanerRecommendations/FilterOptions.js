import { useRef, useState } from 'react';
import './FilterOptions.css';

export function FilterOptions(props) {

    const [filterOptions, setFilterOptions] = useState({});
    const maxPriceInput = useRef(null);
    const maxNoiseInput = useRef(null);
    const maxPowerInput = useRef(null);

    function clearFilterOptions() {
        maxPriceInput.current.value = null;
        maxNoiseInput.current.value = null;
        maxPowerInput.current.value = null;
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
                <button id='filter-options-clear-all-button' data-testid='clear-filter-options-button' onClick={clearFilterOptions}>clear all</button>
            </div>

            <div className='filter-option-container'>
                <p className='filter-option-title'>Max Price (U.S dollars)</p>                
                <div className='filter-option'>
                    <div id='price-label-and-input'>
                        <label htmlFor='price-input' className='filter-option-unit-dollar'>$</label>
                        <input id='price-input' className='filter-option-input' onChange={() => updateFilterOptions()} ref={maxPriceInput} />
                    </div>
                    <button data-testid='max-price-filter-submit-button' className='submit-filter-options-button' onClick={() => {props.setFilterOptions(filterOptions)}}>Submit</button>
                </div>
            </div>
            <div className='filter-option-container'>
                <p className='filter-option-title'>Max Noise (decibels)</p>
                <div className='filter-option'>
                    <div id='noise-label-and-input'>
                        <input id='noise-input' className='filter-option-input' onChange={() => updateFilterOptions()} ref={maxNoiseInput} />
                        <label htmlFor='noise-input' className='filter-option-unit-other'>dB</label>
                    </div>
                    <button data-testid='max-noise-filter-submit-button' className='submit-filter-options-button' onClick={() => {props.setFilterOptions(filterOptions)}}>Submit</button>
                </div>
            </div>
            <div id='last-filter-option-container' className='filter-option-container'>
                <p className='filter-option-title'>Max Power Usage (Watts)</p>
                <div className='filter-option'>
                    <div id='power-label-and-input'>
                        <input id='power-input' className='filter-option-input' onChange={() => updateFilterOptions()} ref={maxPowerInput} />
                        <label htmlFor='power-input' className='filter-option-unit-other'>W</label>
                    </div>
                    <button data-testid='max-power-filter-submit-button' className='submit-filter-options-button' onClick={() => {props.setFilterOptions(filterOptions)}}>Submit</button>
                </div>
            </div>
        </div>
    );
}