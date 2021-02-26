import './LandingPage.css'
import AirCleanerImg from '../../images/aircleaner_clipart.png'

export function LandingPage(props) {

    return (
        <div id="body-container">
            <div id="text-container">
                <h2 id="title">Portable Air Cleaner Calculator</h2>
                <p id="text-calculator-description">Click a button below to calculate which portable air cleaner is best suited 
                for your business to help keep employees and customers safe or test your own portable air cleaner to find out whether 
                it’s effectively ventilating your business.</p>
                <div id="buttons-container">
                    <button className="subheader--btn" id="subheader--btn-find" onClick={() => props.setCalculatorType('find')}>FIND AN AIR CLEANER</button>
                    <button className="subheader--btn" id="subheader--btn-test" onClick={() => props.setCalculatorType('test')}>TEST MY AIR CLEANER'S EFFICIENCY</button>
                </div>
            </div>
            <div id="img-container">
                <img id="img-aircleaner"src={AirCleanerImg} alt="Animated Portable Air Cleaner"/>
            </div>
        </div>
    )
}