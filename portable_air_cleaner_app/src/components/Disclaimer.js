import './Disclaimer.css';

export function Disclaimer(props) {
    return (
        <div id='disclaimer-container'>
            <div id='disclaimer'>
                <p id='disclaimer-title'><strong>Disclaimer</strong></p>
                <p className='disclaimer-body-text'>Portable air cleaners are a <strong>small</strong> part of preventing COVID-19 indoors. Wearing masks, social distancing, upgrading ventilation system filters, and increasing the amount of outside air being circluated in an indoor space are <strong>all more effective techniques</strong> to prevent the spread of COVID-19 then using a portable air cleaner. Please select the "Resources" tab at the top of the page to learn more about these other methods of COVID-19 prevention.
                </p>
                <p className='disclaimer-body-text'>Using a portable air cleaner will not necessarily prevent the spread of COVID-19. You can also select the "Resources" tab at the top of the page to read more about when to use a portable air cleaner and best practices when using them.</p>
                <button id='close-disclaimer-button' onClick={() => props.closeDisclaimer()}>I understand</button>
            </div>
        </div>
    );
}