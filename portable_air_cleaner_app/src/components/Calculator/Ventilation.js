import './Calculator.css';
import VentilationImg from "../../images/PoorVentilation.png";

export function Ventilation(props) {

    return (
        <div className="input-wrapper" id="ventilation-wrapper">
            <div id="ventilation-input-box">
                <p className="input-title">Ventilation</p>
                <select className="user-input" onChange={(e) => props.updateOutdoorVentilation(e.target.value)} value={props.type}>
                    <option value="Low" selected>Low</option>
                    <option value="Typical">Typical</option>
                    <option value="Good">Good</option>
                    <option value="Enhanced">Enhanced</option>
                </select>
                <p id="ventilation-text"><span id="ventilation-text-title">{props.type}</span><br /> Select this if your environment has poor ventilation or you're not sure (for reference, a typical U.S. home is 0.5 ACH)</p>
            </div>
            <div id="ventilation-info-box">
                <p className="input-title">Example Room Size 146ft^2 x 9ft</p>
                <img src={VentilationImg} alt="Example room with low ventilation" />
            </div>
        </div>
    )
}