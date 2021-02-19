import './Calculator.css';
import './PreviousStepArrow.css';

export function PreviousStepArrow(props) {

    return (
        <div id="previous-step-arrow-container" onClick={props.previousStepArrowClick}>
            <div class="change-step-arrow">
                <div id="previous-step-arrow-triangle"></div>
                <div id="previous-step-arrow-rectangle">
                    <div id="previous-step-arrow-text-container">
                        <p id="previous-step-arrow-text">Previous step</p>
                    </div>
                </div>
            </div>
        </div>
    )
}