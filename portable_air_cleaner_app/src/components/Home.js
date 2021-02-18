import { useState } from 'react'
import { Calculator } from './Calculator.js';
import {Subheader} from './Subheader.js'
import {AirCleanerRecommendations} from './AirCleanerRecommendations';

export function Home() {

    const [calculatorType, setCalculatorType] = useState(null);
    const [resultType, setResultType] = useState(null);
    const [displayProductDetails, setProductDetails] = useState(false);
    
    function updateCalculatorType(type) {
        setCalculatorType(type);
    }

    function showResults(type) {
        setResultType(type);
        setCalculatorType(null);
    }
    
    return (
        <div>
            { resultType === null && <Subheader updateCalculatorType={updateCalculatorType} /> }
            { calculatorType != null && (<Calculator calculatorType={calculatorType} onShowResult={showResults} />) }
            { resultType != null &&  (<AirCleanerRecommendations />)}
        </div>
    )
}