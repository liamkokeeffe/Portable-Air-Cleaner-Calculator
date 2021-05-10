import './FAQ.css';

export function FAQ() {
    return (
        <div id='faq-container'>
            <h1 id="faq-title">Frequently Asked Questions</h1>
            <div className="question-container">
                <span className="question-title">Where should I place my air cleaner?</span>
                <p className="question-answer">Portable air cleaners should usually be elevated about 3 feet off the ground (SOURCE?). They should be
                    placed in an area that will cover as much of the room as possible, which is usually the center of the
                    room. However, avoid placing the air cleaner so that the air released from it blows on people. The
                    model of your specific air cleaner may have more information.
                </p>
            </div>
            <div className="question-container">
                <span className="question-title">How long does it take for a portable air cleaner to fully ventilate a room?</span>
                <p className="question-answer">calculation for this?</p>
            </div>
            <div className="question-container">
                <span className="question-title">Where do I find my device's CADR rating?</span>
                <p className="question-answer">You can find your portable air cleaner's CADR rating on the product's website or the specification
                    section that comes with your portable air cleaner.</p>
            </div>
            <div className="question-container">
                <span className="question-title">My air cleaner has CADR ratings for dust, smoke/tobacco smoke, and pollen. Which one should I use?</span>
                <p className="question-answer">Use the dust CADR rating.</p>
            </div>
            <div className="question-container">
                <span className="question-title">How do I estimate my room's ventilation rating?</span>
                {/* Need to add link here!! */}
                <p className="question-answer">The room ventilation can be calculated by using a CO_2 monitor. You can use <a href="">this</a>
                link to measure it. If you can't/don't want to do this, you can estimate based on any upgrades to
                your ventilation system and how much fresh air you think is being circulated in the room.</p>
            </div>
        </div>
    );
}