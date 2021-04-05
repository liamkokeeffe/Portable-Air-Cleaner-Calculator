import {fireEvent, render, screen} from '@testing-library/react';
import {Home} from './Home.js';

const cadrs = [142, 130, 150, 219, 162]; // these are the cadr values of the air cleaners used for testing

function getAchFromAirCleaner(roomWidth, roomLength, ceilingHeight, units, cadr) {
    if (units === 'feet') {
        return Math.round((cadr * 60) / (roomWidth * roomLength * ceilingHeight) * 100) / 100.0;
    }
    return Math.round((cadr / 0.58) / (roomWidth * roomLength * ceilingHeight) * 100) / 100.0;
}

beforeEach(() => render(<Home />))

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

    cadrs.forEach((cadr) => {
        let ach = getAchFromAirCleaner(20, 10, 8, 'feet', cadr) + 1.5;
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
    cadrs.forEach((cadr) => {
        let ach = getAchFromAirCleaner(20, 10, 8, 'feet', cadr) + 1.5;
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

    
    cadrs.forEach((cadr) => {
        let ach = getAchFromAirCleaner(15, 10, 8, 'feet', cadr) + 4;
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

    cadrs.forEach((cadr) => {
        let ach = getAchFromAirCleaner(28, 20, 8, 'feet', cadr) + 1;
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
    
    cadrs.forEach((cadr) => {
        let ach = getAchFromAirCleaner(10, 10, 9, 'feet', cadr) + 1;
        expect(screen.getByText('Estimated air changes per hour for your space: ' + ach)).toBeTruthy();
    });
    
    fireEvent.click(screen.getByRole('button', {name: /Go Back/}));
    let outdoorVentilationSelection = screen.getByLabelText('Ventilation');
    fireEvent.change(outdoorVentilationSelection, {target: {value: 'Typical'}});

    fireEvent.click(screen.getByRole('button', {name: 'VIEW RESULTS'}));
    cadrs.forEach((cadr) => {
        let ach = getAchFromAirCleaner(10, 10, 9, 'feet', cadr) + 1.5;
        expect(screen.getByText('Estimated air changes per hour for your space: ' + ach)).toBeTruthy();
    });
    
    fireEvent.click(screen.getByRole('button', {name: /Go Back/}));
    outdoorVentilationSelection = screen.getByLabelText('Ventilation');
    fireEvent.change(outdoorVentilationSelection, {target: {value: 'Good'}});
    
    fireEvent.click(screen.getByRole('button', {name: 'VIEW RESULTS'}));
    cadrs.forEach((cadr) => {
        let ach = getAchFromAirCleaner(10, 10, 9, 'feet', cadr) + 3;
        expect(screen.getByText('Estimated air changes per hour for your space: ' + ach)).toBeTruthy();
    });

    fireEvent.click(screen.getByRole('button', {name: /Go Back/}));
    outdoorVentilationSelection = screen.getByLabelText('Ventilation');
    fireEvent.change(outdoorVentilationSelection, {target: {value: 'Enhanced'}});

    fireEvent.click(screen.getByRole('button', {name: 'VIEW RESULTS'}));
    cadrs.forEach((cadr) => {
        let ach = getAchFromAirCleaner(10, 10, 9, 'feet', cadr) + 4;
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
    cadrs.forEach((cadr) => {
        let ach = getAchFromAirCleaner(15, 10, 7, 'feet', cadr) + 1;
        expect(screen.getByText('Estimated air changes per hour for your space: ' + ach)).toBeTruthy();
    });
    
    fireEvent.click(screen.getByRole('button', {name: /Go Back/}));
    let unitSelection = screen.getByLabelText('Units');
    fireEvent.change(unitSelection, {target: {value: 'meters'}});

    fireEvent.click(screen.getByRole('button', {name: 'VIEW RESULTS'}));
    expect(screen.getByText('Sorry, but there were no portable air cleaners found.')).toBeTruthy();
    cadrs.forEach((cadr) => {
        let ach = getAchFromAirCleaner(15, 10, 7, 'meters', cadr) + 1;
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
    cadrs.forEach((cadr) => {
        let ach = getAchFromAirCleaner(4.5, 3, 2, 'meters', cadr) + 1;
        expect(screen.getByText('Estimated air changes per hour for your space: ' + ach)).toBeTruthy();
    });
});