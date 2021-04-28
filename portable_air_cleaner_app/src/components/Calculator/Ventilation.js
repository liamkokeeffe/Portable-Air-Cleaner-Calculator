import './Calculator.css';
import VentilationImg from "../../images/ventilation_clipart.png";

export function Ventilation(props) {
    return (
        <div className="step-wrapper">
            <div id="ventilation-left-box">
                <div className="input-wrapper">
                    <label htmlFor="ventilation-selection" className="input-title">Ventilation</label>
                    <select className="user-input" onChange={(e) => props.updateOutdoorVentilation(e.target.value)} value={props.type}>
                        <option value="Poor">Poor</option>
                        <option value="Typical">Typical</option>
                        <option value="Good">Good</option>
                        <option value="Enhanced">Enhanced</option>
                    </select>
                </div>
                <p className="extra-text"><span className="extra-text-title">{props.type}:</span><br /> Select this if your environment has poor ventilation or you're not sure (for reference, a typical U.S. home is 0.5 ACH)</p>
            </div>
            <img src={VentilationImg} alt="Ventilation Clip Art" id="img-ventilation"/>
        </div>
    )
}