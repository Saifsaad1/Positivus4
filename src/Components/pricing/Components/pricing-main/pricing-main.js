//import useEffect
import { useEffect } from 'react';

//AOS animation
import AOS from 'aos';
import 'aos/dist/aos.css';

//import css
import "./pricing-main.css"

//import green check image
import greenCheck from "./images/green-check.png"

const PricingMain = () => {

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true
        });
    }, [])

    return (
        <div className="pricing-main">
            <p className="pricing-title" data-aos = "fade-right" data-aos-duration = "750">Pricing</p>
            <p className="pricing-info" data-aos = "fade-right" data-aos-duration = "950">Elevate Your Online Presence: Competitive Pricing for Exceptional Results</p>

            <div className="pricing-list pricing-list-white">

                {/* pricing box 1 */}
                <div className="pricing-box pricing-box-1 box-shadow" data-aos = "fade-up" data-aos-duration = "1050">

                    <div className="plan-type-container">
                        <p className="plan-type">Basic Plan</p>
                    </div>

                    <div className="price-box">
                        <p className="pricing">$500</p>
                        <p className="per">/month</p>
                    </div>

                    <a href=""><button className="price-btn price-started-btn">Get Started</button></a>
                    <a href=""><button className="price-btn price-quote-btn">Request a quote</button></a>

                    <div className="divider"></div>

                    <ul className="price-features">
                        {/* feature 1 */}
                        <li className="price-feature price-feature-1">
                            <img className="green-check" src={greenCheck}/>
                            <p className="feature-text">Website optimization</p>
                        </li>

                        {/* feature 2 */}
                        <li className="price-feature price-feature-2">
                            <img className="green-check" src={greenCheck}/>
                            <p className="feature-text">Social media setup and management (1 platform)</p>
                        </li>

                        {/* feature 3 */}
                        <li className="price-feature price-feature-3">
                            <img className="green-check" src={greenCheck}/>
                            <p className="feature-text">Monthly progress report </p>
                        </li>

                        {/* feature 4 */}
                        <li className="price-feature price-feature-4">
                            <img className="green-check" src={greenCheck}/>
                            <p className="feature-text">Email support</p>
                        </li>

                        {/* feature 5 */}
                        <li className="price-feature price-feature-5">
                            <img className="green-check" src={greenCheck}/>
                            <p className="feature-text">Basic competitor analysis</p>
                        </li>

                        {/* feature 6 */}
                        <li className="price-feature price-feature-6">
                            <img className="green-check" src={greenCheck}/>
                            <p className="feature-text">Initial SEO audit</p>
                        </li>




                    </ul>

                </div>

                {/* pricing box 2 */}
                <div className="pricing-box pricing-box-dark pricing-box-2 box-shadow white" data-aos = "fade-up" data-aos-duration = "1350">

                    <div className="plan-type-container">
                        <p className="plan-type">Pro Plan</p>
                        <p className="plan-tag">Popular</p>
                    </div>

                    <div className="price-box">
                        <p className="pricing">$1000</p>
                        <p className="per">/month</p>
                    </div>

                    <a href=""><button className="price-btn price-started-btn">Get Started</button></a>
                    <a href=""><button className="price-btn price-quote-btn">Request a quote</button></a>

                    <div className="divider"></div>

                    <ul className="price-features">
                        {/* feature 1 */}
                        <li className="price-feature price-feature-1">
                            <img className="green-check" src={greenCheck}/>
                            <p className="feature-text">Includes all from the Basic Plan</p>
                        </li>

                        {/* feature 2 */}
                        <li className="price-feature price-feature-2">
                            <img className="green-check" src={greenCheck}/>
                            <p className="feature-text">Social media setup and management (up to 3 platforms)</p>
                        </li>

                        {/* feature 3 */}
                        <li className="price-feature price-feature-3">
                            <img className="green-check" src={greenCheck}/>
                            <p className="feature-text">PPC ad campaign management </p>
                        </li>

                        {/* feature 4 */}
                        <li className="price-feature price-feature-4">
                            <img className="green-check" src={greenCheck}/>
                            <p className="feature-text">Email and phone support</p>
                        </li>

                        {/* feature 5 */}
                        <li className="price-feature price-feature-5">
                            <img className="green-check" src={greenCheck}/>
                            <p className="feature-text">On-page SEO improvements</p>
                        </li>

                        {/* feature 6 */}
                        <li className="price-feature price-feature-6">
                            <img className="green-check" src={greenCheck}/>
                            <p className="feature-text">Monthly content recommendations</p>
                        </li>




                    </ul>

                </div>

                {/* pricing box 3 */}
                <div className="pricing-box pricing-box-3 box-shadow " data-aos = "fade-up" data-aos-duration = "1650">

                    <div className="plan-type-container">
                        <p className="plan-type">Elite Plan</p>
                    </div>

                    <div className="price-box">
                        <p className="pricing">$2000</p>
                        <p className="per">/month</p>
                    </div>

                    <a href=""><button className="price-btn price-started-btn">Get Started</button></a>
                    <a href=""><button className="price-btn price-quote-btn">Request a quote</button></a>

                    <div className="divider"></div>

                    <ul className="price-features">
                        {/* feature 1 */}
                        <li className="price-feature price-feature-1">
                            <img className="green-check" src={greenCheck}/>
                            <p className="feature-text">Includes all from the Pro Plan</p>
                        </li>

                        {/* feature 2 */}
                        <li className="price-feature price-feature-2">
                            <img className="green-check" src={greenCheck}/>
                            <p className="feature-text">Website design and development</p>
                        </li>

                        {/* feature 3 */}
                        <li className="price-feature price-feature-3">
                            <img className="green-check" src={greenCheck}/>
                            <p className="feature-text">Comprehensive SEO strategy </p>
                        </li>

                        {/* feature 4 */}
                        <li className="price-feature price-feature-4">
                            <img className="green-check" src={greenCheck}/>
                            <p className="feature-text">Social media setup and management (up to 5 platforms)</p>
                        </li>

                        {/* feature 5 */}
                        <li className="price-feature price-feature-5">
                            <img className="green-check" src={greenCheck}/>
                            <p className="feature-text">Content marketing strategy and implementation</p>
                        </li>

                        {/* feature 6 */}
                        <li className="price-feature price-feature-6">
                            <img className="green-check" src={greenCheck}/>
                            <p className="feature-text">In-depth analytics and reporting</p>
                        </li>




                    </ul>

                </div>
            </div>
        </div>
    )
}

export default PricingMain