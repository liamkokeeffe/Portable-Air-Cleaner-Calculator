import {useState} from "react";
import { useTranslation } from "react-i18next";
import {Disclaimer} from "../Disclaimer.js";
import "./LandingPage.css";
import AirCleanerImg from "../../images/aircleaner_animated.png";
import { Link } from "react-router-dom";

export function LandingPage(props) {
    const {t} = useTranslation();
    const [disclaimerClicked, setDisclaimerClicked] = useState(false);

    document.body.style.background = "white";

    function closeDisclaimer() {
        setDisclaimerClicked(true);
    }

    return (
        <div >
            {(!disclaimerClicked ? 
                <Disclaimer closeDisclaimer={closeDisclaimer}/>
            :
            <div id="body-container">
                <div id="text-container">
                    <h1 id="title">{t('Title')}</h1>
                    <p id="text-calculator-description">Click a button below to calculate which portable air cleaner is best suited 
                    for your business to help keep employees and customers safe or test your own portable air cleaner to find out whether 
                    it’s effectively ventilating your business.</p>
                    <div id="buttons-container">
                    <Link to={{pathname: '/calculator', state: { type: "find", airCleaners : undefined}}}>
                        <button className="subheader--btn" id="subheader--btn-find">{t("FIND AIR CLEANER")}</button>   
                    </Link>
                    <Link to={{pathname: '/calculator', state: { type: "test", airCleaners : undefined}}}>
                        <button className="subheader--btn" id="subheader--btn-test">{t("TEST AIR CLEANER")}</button>
                    </Link>
                    </div>
                </div>
                <img id="img-aircleaner"src={AirCleanerImg} alt="Portable air cleaner drawing"/>
            </div>
            )}
        </div>
    )
}