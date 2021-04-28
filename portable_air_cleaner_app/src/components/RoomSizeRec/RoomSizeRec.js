import './RoomSizeRec.css'
import GaugeChart from 'react-gauge-chart'
// import {View, Text} from 'react-native'

export function RoomSizeRec(props) {

    console.log(props.roomInfo)

    const OCCUPANCYLIMIT = .5;

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

    const roomTypeToPersonUsableSpace = {
        "eating-drinking" : 40,
        "gym" : 50,
        "library" : 50,
        "common-area" : 40
    }

    function getACH() {
        if (props.roomInfo.units === "feet") {
            return (Math.round((props.roomInfo.cadr * 60 / (props.roomInfo.floorArea * props.roomInfo.ceilingHeight)) * 10) / 10) + ventilationToACH[props.roomInfo.outdoorVentilation]
        } else {
            return (Math.round(((props.roomInfo.cadr / .58) / (props.roomInfo.floorArea * props.roomInfo.ceilingHeight)) * 10) / 10) + ventilationToACH[props.roomInfo.outdoorVentilation]
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

    function getACHColor(ach) {
        if (ach < 3) {
            return "#FF0D0D";
        } else if (ach < 4) {
            return "#FF8E15";
        } else if (ach < 5) {
            return "#FAB733";
        } else if (ach < 6) {
            return "#ACB334";
        } else {
            return "#69B34C";
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

    function getOccupancyNumber() {
        let recOccupancy = 0;
        if (props.roomInfo.roomType === "" || props.roomInfo.usableSpace === 0 || props.roomInfo.aveOccupancy === 0) {
            return "N/A"
        }

        let roomUsableSpace = props.roomInfo.floorArea * (props.roomInfo.usableSpace / 100);
        let method1Calc = roomUsableSpace / roomTypeToPersonUsableSpace[props.roomInfo.roomType];
        let method2Calc = 0.0;
        if (isNaN(props.roomInfo.maxOccupancy) || props.roomInfo.maxOccupancy === 0) {
            recOccupancy = method1Calc;
        } else {
            method2Calc = props.roomInfo.maxOccupancy * OCCUPANCYLIMIT; 
            recOccupancy = method1Calc < method2Calc ? method1Calc : method2Calc;
        }

        // if (props.roomInfo.aveOccupancy >= recOccupancy) {
        //     document.getElementById("recommendation-text").style.display = "none";
        // }
        return Math.floor(recOccupancy) + " Persons"
    }

    function getModelName() {
        if (props.roomInfo.modelName === "I'm not sure") {
            return "N/A";
        }
        return props.roomInfo.modelName;
    }

    return (
        <div id="roomsizerec-container">
            <div id="roomsizerec-header" unselectable="on">
                <button id='btn-back' onClick={() => {
                    props.backToCalculator();
                }}>{'< Go Back'}</button>
                <p id="roomsizerec-title">Efficiency Dashboard</p>
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
                    <div id="gauge-result-message" style={{background: getACHColor(getACH())}}>
                        <p id="result-message">{achToMessage(getACH())}</p>
                    </div>
                </div>
                <div id="roomsizerec-details">
                    <div className="details-module">
                        <p className="details-title">Recommended <br />Room Area:</p>
                        <p className="details-value" id="superscript-feet">{calculateRoomSize()} ft<sup>2</sup></p>
                    </div>
                    <hr />
                    <div className="details-module">
                        <p className="details-title">Ventilation Rating:</p>
                        <p className="details-value">{props.roomInfo.outdoorVentilation}</p>
                    </div>
                    <hr />
                    <div className="details-module">
                        <p className="details-title">Model Name:</p>
                        <p className="details-value">{getModelName()}</p>
                    </div>
                    <hr />
                    <div className="details-module">
                        <p className="details-title">Clean Air Delivery Rate:</p>
                        <p className="details-value">{props.roomInfo.cadr}</p>
                    </div>
                    <hr />
                    <div className="details-module">
                        <p className="details-title">Occupancy <br />Recommendation:</p>
                        <p className="details-value">{getOccupancyNumber()}</p>
                    </div>
                    <p id="recommendation-text"><span>Note: </span>Since the average number of people in your room ({props.roomInfo.aveOccupancy} persons) is greater than the recommended occupancy level we 
                    recommend purchasing a portable air cleaner with at least 6 air changes per hour for your room.</p>
                </div>
            </div>
        </div>
    )
}