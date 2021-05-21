import './Resources.css';

export function Resources() {
    return (
        <div id='resources-container'>
            <h1 id="resources-title">Resources</h1>
            <div className="resources-submodule-container">
                <h2 className="resources-subtitle">Extended Disclaimer</h2>
                <p></p>
            </div>
            <div className="resources-submodule-container">
                <h2 className="resources-subtitle">Terminologies</h2>
                <p><span>ACH: </span> Air Changes Per Hour</p>
                <p><span>CADR: </span>Clean Air Delivery Rate, airflow rate that represents the effective amount of particle-clean air produced by the air cleaner</p>
                <p><span>HEPA: </span>High-efficiency particulate air</p>
                <p><span>HVAC: </span>Heating, ventilation, and air conditioning</p>  
                <p><span>Usable space: </span>The amount of space people can take in a room occupied by furniture and household goods</p>
            </div>
            <div className="resources-submodule-container">
                <h2 className="resources-subtitle">References {'&'} Tools</h2>
                <span className="references-title">Excel Tools:</span>
                <ul>
                    <li><a href="https://docs.google.com/spreadsheets/d/1NEhk1IEdbEi_b3wa6gI_zNs8uBJjlSS-86d4b7bW098/edit#gid=1882881703">Harvard-CU Boulder Portable Air Cleaner Calculator for Schools</a></li>
                    <li><a href="https://docs.google.com/spreadsheets/d/1wG0dO0Su75iBuUCmY5WpfYtQlTKbQ1UzJOeBVbDxJks/edit#gid=1039758887">Harvard Healthy Building ACH-C02 Tool</a></li>
                    <li><a href="https://docs.google.com/spreadsheets/d/16K1OQkLD4BjgBdO8ePj6ytf-RpPMlJ6aXFg3PrIQBbQ/edit#gid=519189277">COVID-19 Aerosol Transmission Estimator</a></li>
                </ul>
                <span className="references-title">Research papers and other references:</span>
                <ul>
                    <li><a href="https://www.sciencedirect.com/science/article/pii/S036013232100158X">Evaluating a commercially available in-duct bipolar ionization device for pollutant removal and potential byproduct formation</a></li>
                    <li><a href="https://docs.google.com/document/d/1fB5pysccOHvxphpTmCG_TGdytavMmc1cUumn8m0pwzo/edit">FAQs on Protecting Yourself from COVID-19 Aerosol Transmission</a></li>
                    <li><a href="https://www.ahamdir.com/room-air-cleaners/">Ahamdir Certified Room Air Cleaners</a></li>
                    <li><a href="https://shellym80304.files.wordpress.com/2020/06/miller-leiden-et-al-1996.pdf">Effectiveness of In-Room Air Filtration and Dilution Ventilation for Tuberculosis Infection Control</a></li>
                    <li><a href="https://theconversation.com/how-to-use-ventilation-and-air-filtration-to-prevent-the-spread-of-coronavirus-indoors-143732">How to use ventilation and air filtration to prevent the spread of coronavirus indoors</a></li>
                    <li><a href="https://www.consumerlab.com/answers/portable-air-cleaner/air-purifier/">Which air purifiers are best for reducing the spread of COVID-19?</a></li>
                    <li><a href="https://www.sciencedirect.com/science/article/pii/S0160412020312800">Estimation of airborne viral emission: Quanta emission rate of SARS-CoV-2 for infection risk assessment</a></li>
                    <li><a href="https://www.sciencedirect.com/science/article/pii/S0160412020320675?via%3Dihub#t0010">Quantitative assessment of the risk of airborne transmission of SARS-CoV-2 infection: Prospective and retrospective applications</a></li>
                    <li><a href="https://healthnewshub.org/wp-content/uploads/2020/07/NewsTexasRiskAssessment-copyPDF.pdf?_ga=2.10543860.134391055.1614044869-1431193390.1614044869">Be Informed: Know Your Risk During COVID-19</a></li>
                    <li><a href="https://www.sciencedirect.com/science/article/pii/S0360132321000706">Ventilation and air cleaning to limit aerosol particle concentrations in a gym during the COVID-19 pandemic</a></li>
                    <li><a href="http://coolvent.mit.edu/">MIT Cool Vent</a></li>
                    <li><a href="https://smartairfilters.com/en/blog/best-air-purifier-covid-protection/">Best Air Purifier for COVID-19 | Best Purifier Guide 2021</a></li>
                    <li><a href="https://smartairfilters.com/en/blog/air-purifier-for-schools-classroom-covid19/">Air Purifier Guide for Schools: COVID-19 Protection</a></li>
                    <li><a href="https://www.osha.gov/Publications/3430indoor-air-quality-sm.pdf">Indoor Air Quality in Commercial and Institutional Buildings</a></li>
                    <li><a href="https://www.epa.gov/indoor-air-quality-iaq/office-building-occupants-guide-indoor-air-quality">An Office Building Occupants Guide to Indoor Air Quality</a></li>
                    <li><a href="https://www.epa.gov/sites/production/files/2014-08/documents/ventilation_factsheet.pdf">Ventilation and Air Quality in Offices</a></li>
                </ul>
            </div>
        </div>
    )
}