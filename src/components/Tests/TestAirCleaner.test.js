import {fireEvent, render, screen} from '@testing-library/react';
import {CalculatorManager} from '../CalculatorManager';
import {airCleanersForTesting} from './FindAirCleaner.test.js';

/*
// FindAirCleaner.test.js tests are conflicting with these tests and the two test files can't be run at the same time.
// If you want to run TestAirCleaner.test.js tests, uncomment the block below and comment all code in
// FindAirCleanerTest.js before running `npm test -- TestAirCleaner.test.js`.

// prevents irrelevant console error message when running tests
global.window.scrollTo = () => {};

function getACHFromOneAirCleaner(floorArea, ceilingHeight, units, cadr) {
    if (units === 'feet') {
        return (cadr * 60) / (floorArea * ceilingHeight);
    }
    return (cadr / 0.58) / (floorArea * ceilingHeight);
}

function getACH(floorArea, ceilingHeight, units, cadr, outdoorVentilation) {
    let ach = getACHFromOneAirCleaner(floorArea, ceilingHeight, units, cadr);
    return Math.round((ach + outdoorVentilation) * 10) / 10;
}

beforeEach(() => render(
    <CalculatorManager airCleaners={airCleanersForTesting} location={{state: {calculatorType: 'test'}}}/>));

it('shows basic parts of calculator page for finding an air cleaner successfully', () => {
    const unitInput = screen.getByLabelText('Units');
    expect(unitInput).toBeTruthy();
    expect(unitInput.value).toBe('feet'); // feet should be selected by default

    expect(screen.getByLabelText('Air Cleaner Model Name')).toBeTruthy();
    expect(screen.getByLabelText('CADR of Air Cleaner')).toBeTruthy();

    expect(screen.getByRole('group', {name: 'Ventilation'})).toBeTruthy();
    expect(screen.getByLabelText('Room Type')).toBeTruthy();
});

it('allows users to go back and edit their inputs', () => {
    let floorArea = 200;
    let ceilingHeight = 9;
    let cadr = 163;
    let outdoorVentilation = 3;

    let floorAreaInput = screen.getByLabelText('Floor Area');
    let ceilingHeightInput = screen.getByLabelText('Ceiling Height');
    let outdoorVentilationRadioButton = screen.getByLabelText('Good');
    let cadrInput = screen.getByLabelText('CADR of Air Cleaner');
    fireEvent.change(floorAreaInput, {target: {value: floorArea}});
    fireEvent.change(ceilingHeightInput, {target: {value: ceilingHeight}});
    fireEvent.click(outdoorVentilationRadioButton);
    fireEvent.change(cadrInput, {target: {value: cadr}});
    fireEvent.click(screen.getByRole('button', {name: 'VIEW RESULTS'}));

    let ach = getACH(floorArea, ceilingHeight, 'feet', cadr, outdoorVentilation);
    expect(screen.getByText(ach)).toBeTruthy();
    expect(screen.getByText('IDEAL')).toBeTruthy();

    fireEvent.click(screen.getByRole('button', {name: /Go Back/}));

    expect(cadrInput.value).toBe(cadr + '');
    floorArea = 410;
    ceilingHeight = 10;
    cadr = 250;
    outdoorVentilation = 1;
    floorAreaInput = screen.getByLabelText('Floor Area');
    ceilingHeightInput = screen.getByLabelText('Ceiling Height');
    outdoorVentilationRadioButton = screen.getByLabelText('Poor');
    cadrInput = screen.getByLabelText('CADR of Air Cleaner');
    fireEvent.change(floorAreaInput, {target: {value: floorArea}});
    fireEvent.change(ceilingHeightInput, {target: {value: ceilingHeight}});
    fireEvent.click(outdoorVentilationRadioButton);
    fireEvent.change(cadrInput, {target: {value: cadr}});
    fireEvent.click(screen.getByRole('button', {name: 'VIEW RESULTS'}));

    ach = getACH(floorArea, ceilingHeight, 'feet', cadr, outdoorVentilation);
    expect(screen.getByText(ach)).toBeTruthy();
    expect(screen.getByText('OKAY')).toBeTruthy();
});

it('converts ACH to correct ventilation ranks', () => {
    let floorArea = 350;
    let ceilingHeight = 8;
    let cadr = 250;
    let outdoorVentilation = 4;

    let floorAreaInput = screen.getByLabelText('Floor Area');
    let ceilingHeightInput = screen.getByLabelText('Ceiling Height');
    let outdoorVentilationRadioButton = screen.getByLabelText('Enhanced');
    let cadrInput = screen.getByLabelText('CADR of Air Cleaner');
    fireEvent.change(floorAreaInput, {target: {value: floorArea}});
    fireEvent.change(ceilingHeightInput, {target: {value: ceilingHeight}});
    fireEvent.click(outdoorVentilationRadioButton);
    fireEvent.change(cadrInput, {target: {value: cadr}});
    fireEvent.click(screen.getByRole('button', {name: 'VIEW RESULTS'}));

    let ach = getACH(floorArea, ceilingHeight, 'feet', cadr, outdoorVentilation);
    expect(screen.getByText(ach)).toBeTruthy();
    expect(screen.getByText('IDEAL')).toBeTruthy();

    fireEvent.click(screen.getByRole('button', {name: /Go Back/}));

    floorArea = 620;
    ceilingHeight = 8;
    cadr = 130;
    outdoorVentilation = 3;
    floorAreaInput = screen.getByLabelText('Floor Area');
    ceilingHeightInput = screen.getByLabelText('Ceiling Height');
    outdoorVentilationRadioButton = screen.getByLabelText('Good');
    cadrInput = screen.getByLabelText('CADR of Air Cleaner');
    fireEvent.change(floorAreaInput, {target: {value: floorArea}});
    fireEvent.change(ceilingHeightInput, {target: {value: ceilingHeight}});
    fireEvent.click(outdoorVentilationRadioButton);
    fireEvent.change(cadrInput, {target: {value: cadr}});
    fireEvent.click(screen.getByRole('button', {name: 'VIEW RESULTS'}));
    
    ach = getACH(floorArea, ceilingHeight, 'feet', cadr, outdoorVentilation);
    expect(screen.getByText(ach)).toBeTruthy();
    expect(screen.getByText('OKAY')).toBeTruthy();

    fireEvent.click(screen.getByRole('button', {name: /Go Back/}));

    floorArea = 350;
    ceilingHeight = 10;
    cadr = 225;
    outdoorVentilation = 1.5;
    floorAreaInput = screen.getByLabelText('Floor Area');
    ceilingHeightInput = screen.getByLabelText('Ceiling Height');
    outdoorVentilationRadioButton = screen.getByLabelText('Typical');
    cadrInput = screen.getByLabelText('CADR of Air Cleaner');
    fireEvent.change(floorAreaInput, {target: {value: floorArea}});
    fireEvent.change(ceilingHeightInput, {target: {value: ceilingHeight}});
    fireEvent.click(outdoorVentilationRadioButton);
    fireEvent.change(cadrInput, {target: {value: cadr}});
    fireEvent.click(screen.getByRole('button', {name: 'VIEW RESULTS'}));
    
    ach = getACH(floorArea, ceilingHeight, 'feet', cadr, outdoorVentilation);
    expect(screen.getByText(ach)).toBeTruthy();
    expect(screen.getByText('GOOD')).toBeTruthy();

    fireEvent.click(screen.getByRole('button', {name: /Go Back/}));

    floorArea = 1000;
    ceilingHeight = 11;
    cadr = 121;
    floorAreaInput = screen.getByLabelText('Floor Area');
    ceilingHeightInput = screen.getByLabelText('Ceiling Height');
    cadrInput = screen.getByLabelText('CADR of Air Cleaner');
    fireEvent.change(floorAreaInput, {target: {value: floorArea}});
    fireEvent.change(ceilingHeightInput, {target: {value: ceilingHeight}});
    fireEvent.change(cadrInput, {target: {value: cadr}});
    fireEvent.click(screen.getByRole('button', {name: 'VIEW RESULTS'}));
    
    ach = getACH(floorArea, ceilingHeight, 'feet', cadr, outdoorVentilation);
    expect(screen.getByText(ach)).toBeTruthy();
    expect(screen.getByText('VERY LOW')).toBeTruthy();

    fireEvent.click(screen.getByRole('button', {name: /Go Back/}));

    floorArea = 750;
    ceilingHeight = 9;
    cadr = 290;
    outdoorVentilation = 1;
    floorAreaInput = screen.getByLabelText('Floor Area');
    ceilingHeightInput = screen.getByLabelText('Ceiling Height');
    outdoorVentilationRadioButton = screen.getByLabelText('Poor');
    cadrInput = screen.getByLabelText('CADR of Air Cleaner');
    fireEvent.change(floorAreaInput, {target: {value: floorArea}});
    fireEvent.change(ceilingHeightInput, {target: {value: ceilingHeight}});
    fireEvent.click(outdoorVentilationRadioButton);
    fireEvent.change(cadrInput, {target: {value: cadr}});
    fireEvent.click(screen.getByRole('button', {name: 'VIEW RESULTS'}));
    
    ach = getACH(floorArea, ceilingHeight, 'feet', cadr, outdoorVentilation);
    expect(screen.getByText(ach)).toBeTruthy();
    expect(screen.getByText('BARE MINIMUM')).toBeTruthy();
});*/