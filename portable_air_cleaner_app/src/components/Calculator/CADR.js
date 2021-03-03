import './Calculator.css'

export function CADR(props) {
    return (
        <div className="input-wrapper" id="cadr-wrapper">
            <p className="input-title">What is the model name of your air cleaner?</p>
            <input className="user-input" />
            <p className="input-title">What is the Clean Air Delivery Rate (CADR) of your air cleaner?</p>
            <input className="user-input" onChange={(e) => props.cadrEntered(e.target.value)} />
        </div>
    )
}