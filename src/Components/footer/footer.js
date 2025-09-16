


//import css
import "./footer.css"

//import white logo
import logoWhite from "../../logo-white.png"

//import social media logos
import linkedin from "./images/linkedin.png"
import facebook from "./images/facebook.png"
import twitter from "./images/twitter.png"


const Footer = () => {



    return (

        <div className="footer section-padding">
            <div className="footer-container">
                <div className="mini-nav">
                    <a href=""><img className="footer-logo" src={logoWhite}></img></a>

                    

                    <div className="social-media">
                        <a href=""><img className="social-icon" src={linkedin}></img></a>
                        <a href=""><img className="social-icon" src={facebook}></img></a>
                        <a href=""><img className="social-icon" src={twitter}></img></a>

                    </div>

                </div>

                <div className="contact-subscribe">
                    <div className="footer-contact">
                        <h4>Contact us:</h4>
                        <p>Email: mrd7oomy258@gmail.com</p>
                        <p>Phone: 555-567-8901</p>
                        <p>Address: 1234 Main St<br />
                            Moonstone City, Stardust State 12345</p>
                    </div>

                    <div className="footer-subscribe">
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" />
                        <button type="button" className="subscribe-btn">Subscribe to news</button>
                    </div>
                </div>

                <div className="divider"></div>

                <div className="rights-policy">
                    <p>© 2025 Positivus. All Rights Reserved.</p>
                    <a href=""><p>Privacy Policy</p></a>
                </div>
            </div>




        </div>
    )
}

export default Footer