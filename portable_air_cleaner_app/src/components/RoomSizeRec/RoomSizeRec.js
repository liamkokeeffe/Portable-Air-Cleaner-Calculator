import './RoomSizeRec.css'
import GaugeChart from 'react-gauge-chart'

export function RoomSizeRec(props) {
    const ventilationToACH = {
        'Poor' : 1,
        'Typical' : 1.5,
        'Good' : 3,
        'Enhanced' : 4
    }

    function achToMessage(ach) {
        if (ach < 3) {
            return "VERY LOW";
        } else if (ach < 4) {
            return "BARE MINIMUM";
        } else if (ach < 5) {
            return "OKAY";
        } else if (ach < 6) {
            return "GOOD";
        } else {
            return "IDEAL";
        }
    }

    function getACH() {
        if (props.roomInfo.units === "feet") {
            return (Math.round((props.roomInfo.cadr * 60 / ((props.roomInfo.roomWidth * props.roomInfo.roomLength) * props.roomInfo.ceilingHeight)) * 10) / 10) + ventilationToACH[props.roomInfo.outdoorVentilation]
        } else {
            return (Math.round(((props.roomInfo.cadr / .58) / ((props.roomInfo.roomWidth * props.roomInfo.roomLength) * props.roomInfo.ceilingHeight)) * 10) / 10) + ventilationToACH[props.roomInfo.outdoorVentilation]
        }
    }

    function getPercent() {
        let ach = getACH();
        if (ach <= 3) {
            return ach / 15;
        } else if (ach <= 4) {
            return ach / 10.26;
        } else if (ach <= 5) {
            return ach / 8.62;
        } else if (ach <= 6) {
            return ach / 7.79;
        } else {
            return .77 + (.01 * ach)
        }
    }

    function calculateRoomSize() {
        let totalCFM = 0;
        if (props.roomInfo.units === "feet") {
            totalCFM = ((ventilationToACH[props.roomInfo.outdoorVentilation] * ((props.roomInfo.roomWidth * props.roomInfo.roomLength) * props.roomInfo.ceilingHeight)) / 60) + parseFloat(props.roomInfo.cadr);
            console.log(totalCFM)
            return Math.round((totalCFM * 60) / (5 * props.roomInfo.ceilingHeight));
        } else {
            totalCFM = ((ventilationToACH[props.roomInfo.outdoorVentilation] * props.roomInfo.floorArea * props.roomInfo.ceilingHeight * 35.3147) / 60) + parseFloat(props.roomInfo.cadr);
            return Math.round(((totalCFM*60) / 35.315) / (5 * props.roomInfo.ceilingHeight));
        }
    }

    return (
        <div id="roomsizerec-container">
            <div id="roomsizerec-header" unselectable="on">
                <button id='btn-back' onClick={() => {
                    props.backToCalculator();
                }}>{'< Go Back'}</button>
                <p id="roomsizerec-title">ACH Efficiency Report</p>
            </div>
            <div id="roomsizerec-content">
                <div id="roomsizerec-gauge">
                    <h3>Is your room meeting the recommended guidelines?</h3>
                    <GaugeChart id="gauge-chart1" 
                    nrOfLevels={5}
                    colors={["#FF0D0D", "#FF8E15", "#FAB733", "#ACB334", "#69B34C"]}
                    arcPadding={0.05}
                    arcsLength={[0.20, 0.19, .19, .19, 0.20]}
                    animate={true}
                    percent={getPercent()}
                    formatTextValue={value => getACH()}
                    />
                    <p id="gauge-footer">Air Changes Per Hour</p>
                    <div id="gauge-result-message">
                        <p id="result-message">{achToMessage(getACH())}</p>
                    </div>
                </div>
                <div id="roomsizerec-details">
                    <div className="details-module">
                        <p className="details-top" id="superscript-feet">{calculateRoomSize()} ft <span id="superscript-number">2</span></p>
                        <p className="details-bottom">Recommended Room Area</p>
                    </div>
                    <div className="details-module">
                        <p className="details-top">{props.roomInfo.outdoorVentilation.toUpperCase()}</p>
                        <p className="details-bottom">Ventilation Rating</p>
                    </div>
                    <div className="details-module">
                        <p className="details-top">EPSOM-6429</p>
                        <p className="details-bottom">Air Cleaner Model Name</p>
                    </div>
                    <div className="details-module">
                        <p className="details-top">{props.roomInfo.cadr}</p>
                        <p className="details-bottom">Clean Air Delivery Rate</p>
                    </div>
                </div>
            </div>
        </div>
    )
}