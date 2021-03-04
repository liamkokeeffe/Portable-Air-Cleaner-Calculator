import './Calculator.css'

export function CADR(props) {

    function checkValue(value) {
        if (value === "I'm not sure") {
            document.getElementById("cadr-input-wrapper").style.visibility = "visible"
        } else {
            // Should get the model's CADR here and pass it through cadr entered (200 just a default value for now)
            document.getElementById("cadr-input-wrapper").style.visibility = "hidden"
            props.cadrEntered(200);
        }
    }
    
    return (
        <div className="input-wrapper" id="cadr-wrapper">
            <p className="input-title">What is the model name of your air cleaner?</p>
            <select className="user-input" onChange={(e) => checkValue(e.target.value)}>
                <option></option>
                <option value="Levoit Vital 100 True HEPA Purifier">Levoit Vital 100 True HEPA Purifier</option>
                <option value="Whirlpool Vital 100 True HEPA Purifier">Whirlpool Vital 100 True HEPA Purifier</option>
                <option value="Conway Vital 100 True HEPA Purifier">Conway Vital 100 True HEPA Purifier</option>
                <option value="I'm not sure">I'm not sure</option>
            </select>
            <div id="cadr-input-wrapper">
                <p className="input-title">What is the Clean Air Delivery Rate (CADR) of your air cleaner?</p>
                <input className="user-input" onChange={(e) => props.cadrEntered(e.target.value)} />
            </div>
        </div>
    )
}