import { useState } from 'react'
import { Calculator } from './Calculator.js';
import {Subheader} from './Subheader.js'

export function Home() {

    const [calculatorType, setCalculatorType] = useState(null);
    const [displayResults, setDisplayResults] = useState(false);
    const [displayProductDetails, setProductDetails] = useState(false);
    const [displayAirCleanerEffectiveness, setAirCleanerEffectiveness] = useState(false);
    
    function updateCalculatorType(type) {
        setCalculatorType(type);
    }



    return (
        <div>
            <Subheader updateCalculatorType={updateCalculatorType} />
            { calculatorType != null && (<Calculator calculatorType={calculatorType} />) }
        </div>
    )
}