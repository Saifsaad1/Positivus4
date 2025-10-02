//import useEffect
import { useEffect } from 'react';

//AOS animation
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..

//import css
import "./services.css"

//import cards images
import engineOptimization from "./images/engine-optimization.png"
import payPerClick from "./images/pay-per-click.png"
import socialMedia from "./images/social-media.png"
import emailMarketing from "./images/email-marketing.png"
import contentCreation from "./images/content-creation.png"
import analyticAndTracking from "./images/analytic-and-tracking.png"

//import arrow images
import arrowBlack from "./images/arrow-black.png"
import arrowWhite from "./images/arrow-white.png"

//proposal image
import proposalImage from "./images/proposal-img.png"

const Services = () => {

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true
        });
    }, [])



    return (
        <div className="home-services mt-140">
            <div className="section-title" data-aos = "fade-up" data-aos-duration = "800">
                <h2>Services</h2>
                <p className="services-p">At our digital marketing agency, we offer a range of services
                    to help businesses grow and succeed online. These services include:
                </p>
            </div>

            <div className="services-cards">
                {/*Card 1*/}
                <div className="service-card service-card-w box-shadow service-card-1" data-aos = "fade-up" data-aos-duration = "700">
                    <div className="card-left">
                        <div className="h3s">
                            <h3>Search engine</h3>
                            <h3>optimization</h3>
                        </div>
                        <div className="learn-more">
                            <a href=""><img src={arrowBlack} /></a>
                            <p>Learn more</p>
                        </div>
                    </div>
                    <div className="card-right">
                        <img src={engineOptimization} />
                    </div>
                </div>

                {/*Card 2*/}
                <div className="service-card service-card-g box-shadow service-card-2"data-aos = "fade-up" data-aos-duration = "700">
                    <div className="card-left">
                        <div className="h3s">
                            <h3>Pay-per-click</h3>
                            <h3>advertising</h3>
                        </div>
                        <div className="learn-more">
                            <a href=""><img src={arrowBlack} /></a>
                            <p>Learn more</p>
                        </div>
                    </div>
                    <div className="card-right">
                        <img src={payPerClick} />
                    </div>
                </div>

                {/*Card 3*/}
                <div className="service-card service-card-b box-shadow service-card-2"data-aos = "fade-up" data-aos-duration = "700">
                    <div className="card-left">
                        <div className="h3s">
                            <h3>Social Media</h3>
                            <h3>Marketing</h3>
                        </div>
                        <div className="learn-more">
                            <a href=""><img src={arrowWhite} /></a>
                            <p>Learn more</p>
                        </div>
                    </div>
                    <div className="card-right">
                        <img src={socialMedia} />
                    </div>
                </div>

                {/*Card 4*/}
                <div className="service-card service-card-w box-shadow service-card-1"data-aos = "fade-up" data-aos-duration = "700">
                    <div className="card-left">
                        <div className="h3s">
                            <h3>Email</h3>
                            <h3>Marketing</h3>
                        </div>
                        <div className="learn-more">
                            <a href=""><img src={arrowBlack} /></a>
                            <p>Learn more</p>
                        </div>
                    </div>
                    <div className="card-right">
                        <img src={emailMarketing} />
                    </div>
                </div>

                {/*Card 5*/}
                <div className="service-card service-card-g box-shadow service-card-2"data-aos = "fade-up" data-aos-duration = "700">
                    <div className="card-left">
                        <div className="h3s">
                            <h3>Content</h3>
                            <h3>Creation</h3>
                        </div>
                        <div className="learn-more">
                            <a href=""><img src={arrowBlack} /></a>
                            <p>Learn more</p>
                        </div>
                    </div>
                    <div className="card-right">
                        <img src={contentCreation} />
                    </div>
                </div>

                {/*Card 6*/}
                <div className="service-card service-card-b box-shadow service-card-2"data-aos = "fade-up" data-aos-duration = "700">
                    <div className="card-left">
                        <div className="h3s">
                            <h3>Analytics and </h3>
                            <h3>Tracking</h3>
                        </div>
                        <div className="learn-more">
                            <a href=""><img src={arrowWhite} /></a>
                            <p>Learn more</p>
                        </div>
                    </div>
                    <div className="card-right">
                        <img src={analyticAndTracking} />
                    </div>
                </div>

            </div>

            <div className="proposal">
                <div className="proposal-left" data-aos = "fade-right" data-aos-duration = "750">
                    <h3>Let’s make things happen</h3>
                    <p>
                        Contact us today to learn more about how our digital
                        marketing services can help your business grow and
                        succeed online.
                    </p>
                    <button className='proposal-btn'>Get your free proposal</button>
                </div>
                <div className="proposal-right" data-aos = "fade-left" data-aos-duration = "750">
                    <img src={proposalImage} />
                </div>
            </div>
        </div>
    )
}

export default Services