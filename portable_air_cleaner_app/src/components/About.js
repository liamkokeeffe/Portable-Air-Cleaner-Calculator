import teamLogo from '../images/coral_logo.png'
import aboutProduct from '../images/about_product.png'
import commerceLogo from '../images/commerce_about_logo.png'
import './About.css'

export function About() {
    return (
        <div>
            <div className="about-submodule-container">
                <div className="about-text-container" id="about-team-container">
                    <h2>About the Team</h2>
                    <p>We are Informatics students at the University of Washington. We wanted to work on ths project because COVID-19 personally impacted us 
                        and many small businesses we know so we were motivated to help create a product that aims at reducing the spread of the virus. </p>
                </div>
                <img src={teamLogo} alt="Team Logo" id="img-logo"/>
            </div>
            <div className="about-submodule-container">
                {/* fix ALT Tag */}
                <img src={aboutProduct} alt="" id="img-product" />
                <div className="about-text-container" id="about-product-container">
                    <h2>Why Our Product and Why You Should Care</h2>
                    <p>Air quality is absolutely paramount in keeping yourself and your employees safe, especially for small businesses who function mostly indoor. 
                        Because it’s hard to practice social distancing in a closed and pack environment, air cleaner is one of the best ways of keeping everyone in your business safe. </p>
                </div>
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
                <div className="about-text-container">
                    <h2>Special Thanks</h2>
                </div>
                <img />
            </div>
        </div>
    )
}