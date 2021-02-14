import { useEffect, useState } from 'react'
import { Calculator } from './Calculator.js';
import {Subheader} from './Subheader.js'

export function Home() {

    const [calculatorDisplay, setCalculatorDisplay] = useState(null);

    function updateDisplay(displayType) {
        setCalculatorDisplay(displayType);
    }

    return (
        <div>
            <Subheader updateDisplay = {updateDisplay} />
            { calculatorDisplay != null && (<Calculator title = {calculatorDisplay} />) }
        </div>
    )
}