import {fireEvent, render, screen} from '@testing-library/react';
import {AirCleanerRecommendations} from './AirCleanerRecommendations.js';

let defaultRoomInfo = { 
    roomWidth : 20,
    roomLength: 10,
    floorArea: 200,
    ceilingHeight : 8,
    units : 'feet',
    outdoorVentilation : 'Low',
    cadr : 0
}

let defaultFilterOptions = {
    maxPrice: -1,
    maxNoise: -1,
    maxPower: -1,
};

const renderedRecommendations = render(<AirCleanerRecommendations roomInfo={defaultRoomInfo} filterOptions={defaultFilterOptions} />);

it('successfully renders', () => {
    expect(screen.getByText('Recommended Portable Air Cleaners')).toBeTruthy();
    expect(screen.getByText('Sort By')).toBeTruthy();
    expect(screen.getByText('Filter by:')).toBeTruthy();
});

it('filters air cleaners correctly', () => {

    // filter by price
    const maxPriceInput = renderedRecommendations.getByLabelText('$');
    fireEvent.change(maxPriceInput, {target : {value: 300}});
    const maxPriceFilterSubmitButton = renderedRecommendations.getByTestId('max-price-filter-submit-button');
    fireEvent.click(maxPriceFilterSubmitButton);
    expect(renderedRecommendations.container.querySelectorAll('.air-cleaner-list-item').length).toBe(3);

    // clear input
    const clearAllButton = renderedRecommendations.getByTestId('clear-filter-options-button');
    fireEvent.click(clearAllButton);
    expect(renderedRecommendations.container.querySelectorAll('.air-cleaner-list-item').length).toBe(5);

    // filter by noise
    const maxNoiseInput = renderedRecommendations.getByLabelText('dB');
    fireEvent.change(maxNoiseInput, {target : {value: 48.5}});
    const maxNoiseFilterSubmitButton = renderedRecommendations.getByTestId('max-noise-filter-submit-button');
    fireEvent.click(maxNoiseFilterSubmitButton);
    expect(renderedRecommendations.container.querySelectorAll('.air-cleaner-list-item').length).toBe(3);

    fireEvent.click(clearAllButton);

    // filter by power
    const maxPowerInput = renderedRecommendations.getByLabelText('W');
    fireEvent.change(maxPowerInput, {target : {value: 55}});
    const maxPowerFilterSubmitButton = renderedRecommendations.getByTestId('max-power-filter-submit-button');
    fireEvent.click(maxPowerFilterSubmitButton);
    expect(renderedRecommendations.container.querySelectorAll('.air-cleaner-list-item').length).toBe(3);

    // filter by additional parameters
    fireEvent.change(maxPriceInput, {target : {value: 200}});
    fireEvent.click(maxPriceFilterSubmitButton);
    expect(renderedRecommendations.container.querySelectorAll('.air-cleaner-list-item').length).toBe(2);
})

it('sorts air cleaners correctly', () => {
    // sort by noise
    const sortAirCleanerDropdown = renderedRecommendations.getByLabelText('Sort By');
    fireEvent.change(sortAirCleanerDropdown, {target: {value: 'noise'}})

    // sort by ACH

    // sort by price
})