//import useEffect
import { useEffect } from 'react';

//AOS animation
import AOS from 'aos';
import 'aos/dist/aos.css';

//import css
import "./use-section.css"


//import green arrow image
import arrowGreen from "./images/arrow-green.png"

const UseSection = () => {

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true
        });
    }, [])

    return (
        <div className="use-section mt-140">
            <div className="section-title" data-aos = "fade-up" data-aos-duration = "750">
                <h2>Use Cases</h2>
                <p className="seo-process-p">
                    Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies
                </p>
            </div>

            <div className="use-container">
                {/* use card 1 */}
                <div className="use-card use-card-1" data-aos = "fade-up" data-aos-duration = "650">
                    <h3>E-commerce Fashion Brand</h3>

                    <p>We implemented a tailored SEO strategy that boosted organic search rankings, leading
                        to a 150% increase in website traffic and a 50% rise in online sales within six months.
                    </p>

                    <div className="learn-banner">
                        <a href=""><p>Learn More</p></a>
                        <a href=""><img src={arrowGreen} /></a>
                    </div>

                </div>

                <div className="divider"></div>

                {/* use card 2 */}
                <div className="use-card use-card-2" data-aos = "fade-up" data-aos-duration = "650">
                    <h3>E-commerce Fashion Brand</h3>

                    <p>We implemented a tailored SEO strategy that boosted organic search rankings, leading
                        to a 150% increase in website traffic and a 50% rise in online sales within six months.
                    </p>

                    <div className="learn-banner">
                        <a href=""><p>Learn More</p></a>
                        <a href=""><img src={arrowGreen} /></a>
                    </div>

                </div>

                <div className="divider"></div>

                {/* use card 3 */}
                <div className="use-card use-card-3" data-aos = "fade-up" data-aos-duration = "650">
                    <h3>E-commerce Fashion Brand</h3>

                    <p>We implemented a tailored SEO strategy that boosted organic search rankings, leading
                        to a 150% increase in website traffic and a 50% rise in online sales within six months.
                    </p>

                    <div className="learn-banner">
                        <a href=""><p>Learn More</p></a>
                        <a href=""><img src={arrowGreen} /></a>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default UseSection