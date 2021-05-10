import "./Calculator.css";
import { useState } from "react";
import CadrImg from '../../images/cadr_clipart.png'
import React from "react"

export function CADR(props) {

    const [cadr, setCadr] = useState(props.cadr === 0 ? "" : props.cadr);

    function createSelectItems(airCleaners) {
        let items = [];  
        items.push(<option></option>);
        console.log(props)
        for (let i = 0; i <= airCleaners.length - 2; i++) {   
            var cadr = airCleaners[i].cadr
            var name = airCleaners[i].name       
            items.push(<option value={cadr}>{name}</option>);   
        }
        items.push(<option value={0}>I'm not sure</option>);
        return items;
    }

    function checkIfNumber(value) {
        const re = /^[0-9\b]+$/
        if (value === '' || re.test(value)) { 
            return true;
        }
        return false;
    }

    return (
        <div>
            <p className="helptext">If you are unsure of your cleaner’s model name, then input the CADR value of your air cleaner. It is commonly listed at the bottom of the air cleaner on the specifications sticker.</p>
            <div className="step-wrapper">
                <div className="input-wrapper">
                    <label htmlFor="cleaner-selection" className="input-title">Air Cleaner Model Name</label>
                    <select className="user-input" id="cadr-input" onChange={(e) => {
                            setCadr(e.target.value);
                            props.updateModelName(e.target.selectedOptions[0].label, e.target.value);
                    }}>
                        {createSelectItems(props.airCleaners)}
                    </select>
                    <label htmlFor="cadr-selection" className="input-title">CADR of Air Cleaner</label>
                    <input className="user-input" id="cadr-input" onChange={(e) => {
                        let value = e.target.value;
                        if (checkIfNumber(value)) {
                            setCadr(value);
                            props.updateCADR(parseInt(value));
                        }
                    }} value={cadr} />
                </div>
                <img src={CadrImg} alt="Clean Air Delivery Rate Clipart" id="img-cadr" />
            </div>
        </div>
    )
}