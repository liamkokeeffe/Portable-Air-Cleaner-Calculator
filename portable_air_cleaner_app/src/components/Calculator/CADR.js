import "./Calculator.css";
import { useState } from "react";
import CadrImg from '../../images/cadr_clipart.png'

export function CADR(props) {

    const [cadr, setCadr] = useState(props.roomInfo.cadr === 0 ? "" : props.roomInfo.cadr);

    function checkValue(value) {
        if (value !== "I'm not sure") {
            // Should get the model's CADR here and pass it through cadr entered (200 just a default value for now)
            props.cadrEntered(200);
        }
    }
    
    return (
        <div id="cadr-wrapper">
            <img src={CadrImg} alt="Clean Air Delivery Rate Clipart" id="img-cadr" />
            <div className="input-wrapper">
                <p className="input-title">Air Cleaner Model Name</p>
                <select className="user-input" onChange={(e) => checkValue(e.target.value)}>
                    <option></option>
                    <option value="Levoit Vital 100 True HEPA Purifier">Levoit Vital 100 True HEPA Purifier</option>
                    <option value="Whirlpool Vital 100 True HEPA Purifier">Whirlpool Vital 100 True HEPA Purifier</option>
                    <option value="Conway Vital 100 True HEPA Purifier">Conway Vital 100 True HEPA Purifier</option>
                    <option value="I'm not sure">I'm not sure</option>
                </select>
                <p className="input-title">CADR of air cleaner</p>
                <input className="user-input" onChange={(e) => {
                    setCadr(e.target.value);
                    props.cadrEntered(parseInt(e.target.value));}} value={cadr} />
            </div>
            <p className="help-text" id="cadr-help-text">If you are unsure of your cleaner’s model name, then input the CADR value of your air cleaner. It is commonly listed at the bottom of the air cleaner on the specifications sticker.</p>
        </div>
    )
}