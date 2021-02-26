import './RoomSizeRec.css'
import ACHChart from "../../images/ach_chart.png"

const ventilationToACH = {
    'Low' : 1,
    'Typical' : 1.5,
    'Good' : 3,
    'Enhanced' : 4
}

export function RoomSizeRec(props) {
    console.log("CADR: " + props.roomInfo.cadr)
    function getACH() {
        if (props.roomInfo.units === "feet") {
            return (Math.round((props.roomInfo.cadr * 60 / (props.roomInfo.floorArea * props.roomInfo.ceilingHeight)) * 10) / 10) + ventilationToACH[props.roomInfo.outdoorVentilation]
        } else {
            return (Math.round(((props.roomInfo.cadr / .58) / (props.roomInfo.floorArea * props.roomInfo.ceilingHeight)) * 10) / 10) + ventilationToACH[props.roomInfo.outdoorVentilation]
        }
    }

    function getACHText(ach) {
        if (ach < 3) {
            return "Your room meets a low level of ACH";
        } else if (ach < 4) {
            return "Your room meets the bare minimum of ACH";
        } else if (ach < 5) {
            return "Your room meets a good level of ACH";
        } else if (ach < 6) {
            return "Your room meets an excellent level of ACH!";
        } else {
            return "Your room meets an ideal level of ACH!";
        }
    }

    function getACHColor(ach) {
        if (ach < 3) {
            return "#FF0000";
        } else if (ach < 4) {
            return "#EA9999";
        } else if (ach < 5) {
            return "#FFD966";
        } else if (ach < 6) {
            return "#00FF00";
        } else {
            return "#38761D";
        }
    }

    function calculateRoomSize() {
        let totalCFM = 0;
        if (props.roomInfo.units === "feet") {
            totalCFM = ((ventilationToACH[props.roomInfo.outdoorVentilation] * (props.roomInfo.floorArea * props.roomInfo.ceilingHeight)) / 60) + parseFloat(props.roomInfo.cadr);
            console.log(totalCFM)
            return Math.round((totalCFM * 60) / (5 * props.roomInfo.ceilingHeight));
        } else {
            totalCFM = ((ventilationToACH[props.roomInfo.outdoorVentilation] * props.roomInfo.floorArea * props.roomInfo.ceilingHeight * 35.3147) / 60) + parseFloat(props.roomInfo.cadr);
            return Math.round(((totalCFM*60) / 35.315) / (5 * props.roomInfo.ceilingHeight));
        }
    }


    return(
        <div id="roomsize-wrapper">
            <div className="roomsize-component" id="roomsize-header">
                <h2 id="roomsize-header-title">Recommended Room Size for this Air Cleaner</h2>
                <input id="roomsize-header-input" value={calculateRoomSize() + " ft^2"} readOnly />
            </div>
            <div className="roomsize-component" id="roomsize-content">
                <p className="header" id="roomsize-content-header">Is Your Room Meeting the Target Air Changes Per Hour?</p>
                <div id="roomsize-content-box">
                    <div id="roomsize-content-ach">
                        <p className="content-text">Total Air Changes in the room per hour (ACH):</p>
                        <div id="roomsize-content-number" style={{background: getACHColor(getACH())}}>
                            <p>{getACH()}</p>
                        </div>
                        <span id="results-message">{getACHText(getACH())}</span>
                    </div>
                    <div id="roomsize-content-chart">
                        <p className="content-text">Target is at least 5 Air Changes Per Hour</p>
                        <img src={ACHChart} alt="ACH Levels Chart"/>
                    </div>
                    <button id="btn-details">Details</button>
                </div>
            </div>
        </div>
    )
}