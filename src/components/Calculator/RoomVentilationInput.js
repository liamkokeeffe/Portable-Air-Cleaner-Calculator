import './Calculator.css';
import VentilationImg from "../../images/ventilation_clipart.png";

export function RoomVentilationInput(props) {
    return (
        <div>
            <p className="helptext">Please rate the outdoor air ventilation level in your room. Refer to the descriptions of each option to determine your ventilation rating. For more information on how to estimate your ventilation level please visit the resources tab at the top of the page.</p>
            <div className="step-wrapper">
                <div id="ventilation-options">
                    <div className="input-wrapper">
                        <p className="error-message" id="error-ventilation">Please select a Ventilation value.</p>
                        <fieldset>
                            <legend htmlFor="ventilation-selection" className="input-title" id="ventilation-input-title">Ventilation</legend>
                            <div>
                                <input id="poor-ventilation" name="ventilation" type="radio" value="Poor" onChange={(e) => props.updateOutdoorVentilation(e.target.value)}/>
                                <label htmlFor="poor-ventilation" className="radio-btn-text">Poor</label>
                                <p className="radio-help-text">Select this if your environment has poor ventilation or you're not sure.</p>
                            </div>
                            <div>
                                <input id="typical-ventilation" name="ventilation" type="radio" value="Typical" onChange={(e) => props.updateOutdoorVentilation(e.target.value)}/>
                                <label htmlFor="typical-ventilation" className="radio-btn-text">Typical</label>
                                <p className="radio-help-text">Select this if you have an average Heating Ventilation Air Conditioning (HVAC) system.</p>
                            </div>
                            <div>
                                <input id="good-ventilation" name="ventilation" type="radio" value="Good" onChange={(e) => props.updateOutdoorVentilation(e.target.value)}/>
                                <label htmlFor="good-ventilation" className="radio-btn-text">Good</label>
                                <p className="radio-help-text">Select this if your Heating Ventilation Air Conditioning System (HVAC) is well maintained and the filters are replaced regularly.</p>
                            </div>
                            <div>
                                <input id="enhanced-ventilation" name="ventilation" type="radio" value="Enhanced" onChange={(e) => props.updateOutdoorVentilation(e.target.value)}/>
                                <label htmlFor="enhanced-ventilation" className="radio-btn-text">Enhanced</label>
                                <p className="radio-help-text">Select this if your building has made enhacements to your ventilation system above the code minimums.</p>
                            </div>
                        </fieldset>
                    </div>
                    <img src={VentilationImg} alt="Ventilation Clip Art" id="img-ventilation"/>
                </div>
            </div>
        </div>
    )
}