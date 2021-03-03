import "./Calculator.css";
import { useState } from "react";

export function CADR(props) {
    const [cadr, setCadr] = useState(props.roomInfo.cadr === 0 ? "" : props.roomInfo.cadr);

    return (
        <div className="input-wrapper" id="cadr-wrapper">
            <p className="input-title">What is the model name of your air cleaner?</p>
            <input className="user-input" />
            <p className="input-title">What is the Clean Air Delivery Rate (CADR) of your air cleaner?</p>
            <input className="user-input" onChange={(e) => {
                setCadr(e.target.value);
                props.cadrEntered(parseInt(e.target.value));}} value={cadr} />
        </div>
    )
}