import {fireEvent, render, screen} from '@testing-library/react';
import {Home} from './Home.js';

export const airCleaners = [
    {name:'Whirlpool® WPT80 Whispure™ Large Tower Air Purifier', price: 167.99, noise: -1, cadr: 142, power: 43, maxRoomSize: 0, filterType: '', dimensions: '8.46" x 6.93" x 23"', frequency: 60, manafacturer: '', link:''},
    {name:'Levoit Vital 100 True HEPA Purifier', price: 119.99, noise: -1, cadr: 130, power: 55, maxRoomSize: 0, filterType: '',
    dimensions: '12.8" x 6.4" x 16.1"', frequency: 60, manafacturer: '', link:''},
    {name:'Oransi OV200 Air Purifier', price: 329.0, noise: 54, cadr: 150, minPower: 60, power:60, maxRoomSize: 0, filterType: '', dimensions: '13" x 23" x 7"', frequency: 60, manafacturer: '', link:''},
    {name:'Coway Airmega 150', price: 189.99, noise: 48.3, cadr: 219, power: 60, maxRoomSize: 0, filterType: '', dimensions: '13.4" x 6.5" x 18.5"', frequency: 0, manafacturer: '', link:''},
    {name:'BioGS 2.0 Ultra Quiet Air Purifier SPA- 550A', price: 369.95, noise: 48.6, cadr: 162, power: 29, maxRoomSize: 0, filterType: '', dimensions: '22.2" x 16.6" x 9.8"', frequency: 0, manafacturer: '', link:''}];

function getAchFromAirCleaner(roomWidth, roomLength, ceilingHeight, units, cadr) {
    if (units === 'feet') {
        return Math.round((cadr * 60) / (roomWidth * roomLength * ceilingHeight) * 100) / 100.0;
    }
    return Math.round((cadr / 0.58) / (roomWidth * roomLength * ceilingHeight) * 100) / 100.0;
}

beforeEach(() => render(<Home airCleaners={airCleaners} />))

it('shows basic parts of landing page successfully', () => {
    expect(screen.getByRole('button', {name: 'Find an air cleaner'})).toBeTruthy();
    expect(screen.getByRole('button', {name: 'Test my air cleaner\'s efficiency'})).toBeTruthy();
});

it('shows basic parts of calculator page (for finding an air cleaner) successfully', () => {
    fireEvent.click(screen.getByRole('button', {name: 'Find an air cleaner'}));

    expect(screen.queryByRole('button', {name: 'Find an air cleaner'})).toBeNull();
    expect(screen.queryByRole('button', {name: 'Test my air cleaner\'s efficiency'})).toBeNull();
    expect(screen.getByLabelText('Units').value).toBe('feet'); // feet should be selected by default
    expect(screen.getByLabelText('Ventilation').value).toBe('Low'); // low ventilation should be selected by default
});

it('displays air cleaners with correct ach for a basic calculation', () => {
    fireEvent.click(screen.getByRole('button', {name: 'Find an air cleaner'}));

    let roomWidthInput = screen.getByLabelText('Room Width');
    let roomLengthInput = screen.getByLabelText('Room Length');
    let ceilingHeightInput = screen.getByLabelText('Ceiling Height');

    fireEvent.change(roomWidthInput, {target: {value: 20}});
    fireEvent.change(roomLengthInput, {target: {value: 10}});
    fireEvent.change(ceilingHeightInput, {target: {value: 8}});

    let outdoorVentilationSelection = screen.getByLabelText('Ventilation');
    fireEvent.change(outdoorVentilationSelection, {target: {value: 'Typical'}});

    fireEvent.click(screen.getByRole('button', {name: 'VIEW RESULTS'}));

    airCleaners.forEach((airCleaner) => {
        let ach = getAchFromAirCleaner(20, 10, 8, 'feet', airCleaner.cadr) + 1.5;
        expect(screen.getByText('Estimated air changes per hour for your space: ' + ach)).toBeTruthy();
    });
});

it('should allow users to go back to the calculator and edit their inputs when on the recommended air cleaners screen', () => {
    fireEvent.click(screen.getByRole('button', {name: 'Find an air cleaner'}));

    let roomWidthInput = screen.getByLabelText('Room Width');
    let roomLengthInput = screen.getByLabelText('Room Length');
    let ceilingHeightInput = screen.getByLabelText('Ceiling Height');

    fireEvent.change(roomWidthInput, {target: {value: 20}});
    fireEvent.change(roomLengthInput, {target: {value: 10}});
    fireEvent.change(ceilingHeightInput, {target: {value: 8}});

    let outdoorVentilationSelection = screen.getByLabelText('Ventilation');
    fireEvent.change(outdoorVentilationSelection, {target: {value: 'Typical'}});

    fireEvent.click(screen.getByRole('button', {name: 'VIEW RESULTS'}));
    airCleaners.forEach((airCleaner) => {
        let ach = getAchFromAirCleaner(20, 10, 8, 'feet', airCleaner.cadr) + 1.5;
        expect(screen.getByText('Estimated air changes per hour for your space: ' + ach)).toBeTruthy();
    });

    fireEvent.click(screen.getByRole('button', {name: /Go Back/}));

    roomWidthInput = screen.getByLabelText('Room Width');
    roomLengthInput = screen.getByLabelText('Room Length');
    ceilingHeightInput = screen.getByLabelText('Ceiling Height');
    outdoorVentilationSelection = screen.getByLabelText('Ventilation');

    expect(roomWidthInput.value).toBe('20');
    expect(roomLengthInput.value).toBe('10');
    expect(ceilingHeightInput.value).toBe('8');
    expect(outdoorVentilationSelection.value).toBe('Typical');
    
    fireEvent.change(roomWidthInput, {target: {value: 15}});
    fireEvent.change(outdoorVentilationSelection, {target: {value: 'Enhanced'}});
    fireEvent.click(screen.getByRole('button', {name: 'VIEW RESULTS'}));

    
    airCleaners.forEach((airCleaner) => {
        let ach = getAchFromAirCleaner(15, 10, 8, 'feet', airCleaner.cadr) + 4;
        expect(screen.getByText('Estimated air changes per hour for your space: ' + ach)).toBeTruthy();
    });
});

it('should only display any air cleaners if no air cleaners with 4 ACH or greater', () => {
    fireEvent.click(screen.getByRole('button', {name: 'Find an air cleaner'}));

    let roomWidthInput = screen.getByLabelText('Room Width');
    let roomLengthInput = screen.getByLabelText('Room Length');
    let ceilingHeightInput = screen.getByLabelText('Ceiling Height');

    fireEvent.change(roomWidthInput, {target: {value: 28}});
    fireEvent.change(roomLengthInput, {target: {value: 20}});
    fireEvent.change(ceilingHeightInput, {target: {value: 8}});

    fireEvent.click(screen.getByRole('button', {name: 'VIEW RESULTS'}));
    expect(screen.getByText('Sorry, but there were no portable air cleaners found.')).toBeTruthy();

    airCleaners.forEach((airCleaner) => {
        let ach = getAchFromAirCleaner(28, 20, 8, 'feet', airCleaner.cadr) + 1;
        expect(screen.queryByText('Estimated air changes per hour for your space: ' + ach)).toBeNull();
    });

    fireEvent.click(screen.getByRole('button', {name: /Go Back/}));
    roomWidthInput = screen.getByLabelText('Room Width');
    fireEvent.change(roomWidthInput, {target: {value: 20}});
    fireEvent.click(screen.getByRole('button', {name: 'VIEW RESULTS'}));
    expect(screen.queryByText('Sorry, but there were no portable air cleaners found.')).toBeNull();

    const lowCadrs = [130, 142, 150];
    const highCadrs = [162, 219];
    lowCadrs.forEach((cadr) => {
        let ach = getAchFromAirCleaner(20, 20, 8, 'feet', cadr) + 1;
        expect(screen.queryByText('Estimated air changes per hour for your space: ' + ach)).toBeNull();
    });
    highCadrs.forEach((cadr) => {
        let ach = getAchFromAirCleaner(20, 20, 8, 'feet', cadr) + 1;
        expect(screen.getByText('Estimated air changes per hour for your space: ' + ach)).toBeTruthy();
    });
});

it('converts outdoor ventilation levels to the correct ACH', () => {
    fireEvent.click(screen.getByRole('button', {name: 'Find an air cleaner'}));

    let roomWidthInput = screen.getByLabelText('Room Width');
    let roomLengthInput = screen.getByLabelText('Room Length');
    let ceilingHeightInput = screen.getByLabelText('Ceiling Height');

    fireEvent.change(roomWidthInput, {target: {value: 10}});
    fireEvent.change(roomLengthInput, {target: {value: 10}});
    fireEvent.change(ceilingHeightInput, {target: {value: 9}});

    fireEvent.click(screen.getByRole('button', {name: 'VIEW RESULTS'}));
    
    airCleaners.forEach((airCleaner) => {
        let ach = getAchFromAirCleaner(10, 10, 9, 'feet', airCleaner.cadr) + 1;
        expect(screen.getByText('Estimated air changes per hour for your space: ' + ach)).toBeTruthy();
    });
    
    fireEvent.click(screen.getByRole('button', {name: /Go Back/}));
    let outdoorVentilationSelection = screen.getByLabelText('Ventilation');
    fireEvent.change(outdoorVentilationSelection, {target: {value: 'Typical'}});

    fireEvent.click(screen.getByRole('button', {name: 'VIEW RESULTS'}));
    airCleaners.forEach((airCleaner) => {
        let ach = getAchFromAirCleaner(10, 10, 9, 'feet', airCleaner.cadr) + 1.5;
        expect(screen.getByText('Estimated air changes per hour for your space: ' + ach)).toBeTruthy();
    });
    
    fireEvent.click(screen.getByRole('button', {name: /Go Back/}));
    outdoorVentilationSelection = screen.getByLabelText('Ventilation');
    fireEvent.change(outdoorVentilationSelection, {target: {value: 'Good'}});
    
    fireEvent.click(screen.getByRole('button', {name: 'VIEW RESULTS'}));
    airCleaners.forEach((airCleaner) => {
        let ach = getAchFromAirCleaner(10, 10, 9, 'feet', airCleaner.cadr) + 3;
        expect(screen.getByText('Estimated air changes per hour for your space: ' + ach)).toBeTruthy();
    });

    fireEvent.click(screen.getByRole('button', {name: /Go Back/}));
    outdoorVentilationSelection = screen.getByLabelText('Ventilation');
    fireEvent.change(outdoorVentilationSelection, {target: {value: 'Enhanced'}});

    fireEvent.click(screen.getByRole('button', {name: 'VIEW RESULTS'}));
    airCleaners.forEach((airCleaner) => {
        let ach = getAchFromAirCleaner(10, 10, 9, 'feet', airCleaner.cadr) + 4;
        expect(screen.getByText('Estimated air changes per hour for your space: ' + ach)).toBeTruthy();
    });
});

it('should work if the selected units are meters', () => {
    fireEvent.click(screen.getByRole('button', {name: 'Find an air cleaner'}));

    let roomWidthInput = screen.getByLabelText('Room Width');
    let roomLengthInput = screen.getByLabelText('Room Length');
    let ceilingHeightInput = screen.getByLabelText('Ceiling Height');
    fireEvent.change(roomWidthInput, {target: {value: 15}});
    fireEvent.change(roomLengthInput, {target: {value: 10}});
    fireEvent.change(ceilingHeightInput, {target: {value: 7}});

    fireEvent.click(screen.getByRole('button', {name: 'VIEW RESULTS'}));
    airCleaners.forEach((airCleaner) => {
        let ach = getAchFromAirCleaner(15, 10, 7, 'feet', airCleaner.cadr) + 1;
        expect(screen.getByText('Estimated air changes per hour for your space: ' + ach)).toBeTruthy();
    });
    
    fireEvent.click(screen.getByRole('button', {name: /Go Back/}));
    let unitSelection = screen.getByLabelText('Units');
    fireEvent.change(unitSelection, {target: {value: 'meters'}});

    fireEvent.click(screen.getByRole('button', {name: 'VIEW RESULTS'}));
    expect(screen.getByText('Sorry, but there were no portable air cleaners found.')).toBeTruthy();
    airCleaners.forEach((airCleaner) => {
        let ach = getAchFromAirCleaner(15, 10, 7, 'meters', airCleaner.cadr) + 1;
        expect(screen.queryByText('Estimated air changes per hour for your space: ' + ach)).toBeNull();
    });

    fireEvent.click(screen.getByRole('button', {name: /Go Back/}));
    unitSelection = screen.getByLabelText('Units');
    expect(unitSelection.value).toBe('meters');

    roomWidthInput = screen.getByLabelText('Room Width');
    roomLengthInput = screen.getByLabelText('Room Length');
    ceilingHeightInput = screen.getByLabelText('Ceiling Height');
    fireEvent.change(roomWidthInput, {target: {value: 4.5}});
    fireEvent.change(roomLengthInput, {target: {value: 3}});
    fireEvent.change(ceilingHeightInput, {target: {value: 2}});

    fireEvent.click(screen.getByRole('button', {name: 'VIEW RESULTS'}));
    airCleaners.forEach((airCleaner) => {
        let ach = getAchFromAirCleaner(4.5, 3, 2, 'meters', airCleaner.cadr) + 1;
        expect(screen.getByText('Estimated air changes per hour for your space: ' + ach)).toBeTruthy();
    });
});