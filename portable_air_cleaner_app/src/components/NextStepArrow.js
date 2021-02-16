import './NextStepArrow.css';
import './Calculator.css';

export function NextStepArrow(props) {

    return (
        <div id="next-step-arrow-container" onClick={props.nextStepArrowClick}>
            <div class="change-step-arrow">
                <div id="next-step-arrow-triangle"></div>
                <div id="next-step-arrow-rectangle">
                    <div id="change-step-arrow-text-container">
                        <p id="change-step-arrow-text">Next step</p>
                    </div>
                </div>
            </div>
        </div>
    )
}