import './Calculator.css';
import VentilationImg from "../../images/ventilation_clipart.png";

export function RoomVentilationInput(props) {
    return (
        <div className="step-wrapper">
            <div id="ventilation-options">
                <div className="input-wrapper">
                    <label htmlFor="ventilation-selection" className="input-title" id="ventilation-input-title">Ventilation</label>
                    <div>
                        <input name="ventilation" type="radio" value="Poor" onChange={(e) => props.updateOutdoorVentilation(e.target.value)}/>
                        <span className="radio-btn-text">Poor</span>
                        <p className="radio-help-text">Select this if your environment has poor ventilation or you're not sure. Some signs of poor ventilation include lingering smells, condensation on windows, mould and dust.</p>
                    </div>
                    <div>
                        <input name="ventilation" type="radio" value="Typical" onChange={(e) => props.updateOutdoorVentilation(e.target.value)}/>
                        <span className="radio-btn-text">Typical</span>
                        <p className="radio-help-text">Select this if you have an average Heating Ventilation Air Conditioning (HVAC) system.</p>
                    </div>
                    <div>
                        <input name="ventilation" type="radio" value="Good" onChange={(e) => props.updateOutdoorVentilation(e.target.value)}/>
                        <span className="radio-btn-text">Good</span>
                        <p className="radio-help-text">Select this if your Heating Ventilation Air Conditioning System (HVAC) is well maintained and the filters are replaced regularly.</p>
                    </div>
                    <div>
                        <input name="ventilation" type="radio" value="Enhanced" onChange={(e) => props.updateOutdoorVentilation(e.target.value)}/>
                        <span className="radio-btn-text">Enhanced</span>
                        <p className="radio-help-text">Select this if your building has made enhacements to your ventilation system above the code minimums.</p>
                    </div>
                </div>
            </div>
            <img src={VentilationImg} alt="Ventilation Clip Art" id="img-ventilation"/>
        </div>
    )
}