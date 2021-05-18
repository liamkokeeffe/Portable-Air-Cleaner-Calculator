import teamLogo from '../images/coral_logo.png'
import commerceLogo from '../images/commerce_about_logo.png'
import restartLogo from '../images/restart_logo.png'
import airCleaner from '../images/aircleaner_animated.png'
import featureEfficiency from '../images/about_efficiency.png'
import featureFinding from '../images/about_finding.png'
import demoVideo from '../videos/Presentation.mp4'
import './About.css'

export function About() {
    return (
        <div>
            <div id="header-wrapper">
                <div id="header-first-rectangle">
                    <h2 id="header-title">About Us</h2>
                </div>
                <div id="header-second-rectangle"></div>
            </div>
            <div className="about-submodule-container" id="about-product-container">
                <div className="about-text-container" id="product-text-container">
                    <h2>Why our product and why you should care</h2>
                    <p>Air quality is absolutely paramount in keeping yourself and your employees safe, especially for small businesses that function mostly indoors. 
                        As it’s hard to practice social distancing in a closed and packed environment, air cleaner is one of the best ways of keeping everyone in your 
                        business safe. <br /><br />PACC is a web application based on an existing excel tool to help users get the affordable air cleaner they need to sustain their 
                        businesses. Through PACC, we wish to lessen the burden of small businesses purchasing an air cleaner by providing them with an intuitive, clean, 
                        and multilingual website with beautiful and simplistic design.</p>
                </div>
                <img src={airCleaner} alt="Portable Air Cleaner Animated" id="img-cleaner" />
            </div>
            <div id="about-features-container">
                <h2 id="about-features-title">Key Features</h2>
                <div className="features-module-container">
                    <img className="features-img" src={featureEfficiency} alt="Efficiency Results Dashboard" />
                    <div className="features-text-container">
                        <h3 className="features-subtitle">Efficiency Calculator</h3>
                        <p>Efficiency calculator enables you to find how effective your air cleaner is at cleaning out the room. Once you put in all the necessary 
                            information, it will show the efficiency dashboard with air changes per hour, effectiveness of the air cleaner, occupancy recommendation,
                            and more. </p>
                    </div>
                </div>
                <div className="features-module-container">
                    <div className="features-text-container">
                        <h3 className="features-subtitle">Air cleaner recommendations</h3>
                        <p>Air cleaner calculator lets you find a perfect air cleaner for your establishment. Just put in your establishment’s room dimension, 
                            ventilation rating, and occupant density and it will give you a catalog with plenty of air cleaners to choose from.</p>
                    </div>
                    <img className="features-img" src={featureFinding} alt="Finding Air Cleaner List" />
                </div>
            </div>
            <div id="about-features-anglerect"></div>
            <div id="about-demo-container">
                <h2>Demo Video</h2>
                <video controls>
                    <source src={demoVideo} type="video/mp4" />
                </video>
            </div>
            <div className="about-submodule-container">
                <div className="about-text-container" id="about-team-container">
                    <h2>About the Team</h2>
                    <p>We are Informatics students at the University of Washington. We wanted to work on ths project because COVID-19 personally impacted us 
                        and many small businesses we know so we were motivated to help create a product that aims at reducing the spread of the virus. </p>
                </div>
                <img src={teamLogo} alt="Team Logo" id="img-logo"/>
            </div>
            <div className="about-submodule-container">
                <div className="about-text-container" id="about-sponsor-container">
                    <h2>Our Sponsor</h2>
                    <p>Sarah Lee from the Washington State Department of Commerce is our sponsor. We are working under the efforts of the Safe Start grant which funds projects helping 
                        small business keep running afer facing economic hardships during the COVID-19 pandemic. </p>
                </div>
                <img src={commerceLogo} alt="Commerce Logo" id="img-commerce-logo"/>
            </div>
            <div className="about-submodule-container">
                <div className="about-text-container" id="about-sponsor-container">
                    <h2>Project Status and Handoff</h2>
                    <p>What we have so far is nearly complete product that is missing some minor finesse such as multilingual support. We will hand off our product to Restart partner.
                         If you have any questions, feel free to contact Restart partner at info@restart.us.</p>
                </div>
                {/* kinda hacky but makes it work with flexbox */}
                <img src={restartLogo} id="img-restart-logo" alt="Restart Logo"/>
            </div>
        </div>
    )
}