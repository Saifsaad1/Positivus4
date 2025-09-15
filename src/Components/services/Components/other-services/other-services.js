
//import css
import "./other-services.css"


//import black arrow
import arrowBlack from "./images/arrow-black.png"

//import sercices images
import payPerClick from "./images/pay-per-click.png"

import socialMediaMarketing from "./images/social-media-marketing.png"

import emailMarketing from "./images/email-marketing.png"

import contentCreation from "./images/content-creation.png"

import analyticsAndTracking from "./images/analytics-and-tracking.png"

import searchEngineOptimization from "./images/search-engine-optimization.png"

const OtherServices = () => {

    return (
        <div className="other-services mt-140">
            <div className="section-title">
                <h2>Our Other Services</h2>
                <p className="seo-process-p">
                    At our digital marketing agency, we offer a range of services to help businesses grow and
                    succeed online. These services include:
                </p>
            </div>

            <div className="services-cards">
                {/*Card 1*/}
                <div className="service-card box-shadow service-card-w service-card-1">
                    <div className="card-left">
                        <div className="h3s">
                            <h3>Pay-per-click</h3>
                            <h3>advertising</h3>
                        </div>
                        <div className="learn-more">
                            <a href=""><img src={arrowBlack}/></a>
                            <p>Learn more</p>
                        </div>
                    </div>
                    <div className="card-right">
                        <img src={payPerClick}/>
                    </div>
                </div>

                {/*Card 2*/}
                <div className="service-card box-shadow service-card-w service-card-2">
                    <div className="card-left">
                        <div className="h3s">
                            <h3>Social Media</h3>
                            <h3>Marketing</h3>
                        </div>
                        <div className="learn-more">
                            <a href=""><img src={arrowBlack}/></a>
                            <p>Learn more</p>
                        </div>
                    </div>
                    <div className="card-right">
                        <img src={socialMediaMarketing}/>
                    </div>
                </div>

                {/*Card 3*/}
                <div className="service-card box-shadow service-card-w service-card-3">
                    <div className="card-left">
                        <div className="h3s">
                            <h3>Email</h3>
                            <h3>Marketing</h3>
                        </div>
                        <div className="learn-more">
                            <a href=""><img src={arrowBlack}/></a>
                            <p>Learn more</p>
                        </div>
                    </div>
                    <div className="card-right">
                        <img src={emailMarketing}/>
                    </div>
                </div>

                {/*Card 4*/}
                <div className="service-card box-shadow service-card-w service-card-4">
                    <div className="card-left">
                        <div className="h3s">
                            <h3>Content</h3>
                            <h3>Creation</h3>
                        </div>
                        <div className="learn-more">
                            <a href=""><img src={arrowBlack}/></a>
                            <p>Learn more</p>
                        </div>
                    </div>
                    <div className="card-right">
                        <img src={contentCreation}/>
                    </div>
                </div>

                {/*Card 5*/}
                <div className="service-card box-shadow service-card-w service-card-5">
                    <div className="card-left">
                        <div className="h3s">
                            <h3>Analytics and </h3>
                            <h3>Tracking</h3>
                        </div>
                        <div className="learn-more">
                            <a href=""><img src={arrowBlack}/></a>
                            <p>Learn more</p>
                        </div>
                    </div>
                    <div className="card-right">
                        <img src={analyticsAndTracking}/>
                    </div>
                </div>

                {/*Card 6*/}
                <div className="service-card box-shadow service-card-w service-card-6">
                    <div className="card-left">
                        <div className="h3s">
                            <h3>Search Engine</h3>
                            <h3>Optimization</h3>
                        </div>
                        <div className="learn-more">
                            <a href=""><img src={arrowBlack}/></a>
                            <p>Learn more</p>
                        </div>
                    </div>
                    <div className="card-right">
                        <img src={searchEngineOptimization}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OtherServices