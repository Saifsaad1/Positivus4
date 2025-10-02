//import useEffect
import { useEffect } from 'react';

//AOS animation
import AOS from 'aos';
import 'aos/dist/aos.css';

//import css
import "./success-stories.css"


//import green arrow image
import arrowGreen from "./images/arrow-green.png"

const SuccessStories = () => {

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true
        });
    }, [])

    return (
        <div className="success-stories mt-140">
            <div className="section-title" data-aos = "fade-up" data-aos-duration = "750">
                <h2>All Success Stories</h2>
                <p className="seo-process-p">
                    Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies
                </p>
            </div>

            <div className="stories-container box-shadow">
                <div className="story-box-upper">
                    {/* story box 1 */}
                    <div className="story-box story-box-1 story-box-start" data-aos = "flip-left" data-aos-duration = "650">
                        <h3>E-commerce Fashion Brand</h3>

                        <p>
                            We implemented a tailored SEO strategy that boosted organic search rankings, leading to
                            a 150% increase in website traffic and a 50% rise in online sales within six months.
                        </p>

                        <div className="learn-more">
                            <a href=""><img src={arrowGreen} /></a>
                            <p>Learn more</p>
                        </div>

                    </div>

                    {/* story box 2 */}
                    <div className="story-box story-box-2 story-box-mid" data-aos = "flip-left" data-aos-duration = "650">
                        <h3>Local Restaurant Chain</h3>

                        <p>
                            By optimizing local SEO and enhancing Google My Business profiles, we increased visibility,
                            driving a 300% boost in online reservations and foot traffic.
                        </p>

                        <div className="learn-more">
                            <a href=""><img src={arrowGreen} /></a>
                            <p>Learn more</p>
                        </div>

                    </div>

                    {/* story box 3 */}
                    <div className="story-box story-box-3 story-box-last" data-aos = "flip-left" data-aos-duration = "650">
                        <h3>Healthcare Provider</h3>

                        <p>
                            Through content optimization and targeted keyword strategy, we helped a healthcare provider
                            rank on the first page for critical services, resulting in a 180% increase in inquiries and
                            patient bookings.
                        </p>

                        <div className="learn-more">
                            <a href=""><img src={arrowGreen} /></a>
                            <p>Learn more</p>
                        </div>

                    </div>

                </div>

                <div className="story-box-lower">
                    {/* story box 4 */}
                    <div className="story-box story-box-4 story-box-start" data-aos = "flip-left" data-aos-duration = "650">
                        <h3>E-commerce Fashion Brand</h3>

                        <p>
                            We implemented a tailored SEO strategy that boosted organic search rankings,
                            leading to a 150% increase in website traffic and a 50% rise in online
                            sales within six months.
                        </p>

                        <div className="learn-more">
                            <a href=""><img src={arrowGreen} /></a>
                            <p>Learn more</p>
                        </div>

                    </div>

                    {/* story box 5 */}
                    <div className="story-box story-box-5 story-box-mid" data-aos = "flip-left" data-aos-duration = "650">
                        <h3>Local Restaurant Chain</h3>

                        <p>
                            By optimizing local SEO and enhancing Google My Business profiles, we increased visibility,
                            driving a 300% boost in online reservations and foot traffic.
                        </p>

                        <div className="learn-more">
                            <a href=""><img src={arrowGreen} /></a>
                            <p>Learn more</p>
                        </div>

                    </div>

                    {/* story box 6 */}
                    <div className="story-box story-box-6 story-box-last" data-aos = "flip-left" data-aos-duration = "650">
                        <h3>Healthcare Provider</h3>

                        <p>
                            Through content optimization and targeted keyword strategy, we helped a healthcare provider
                            rank on the first page for critical services, resulting in a 180% increase in inquiries and
                            patient bookings.
                        </p>

                        <div className="learn-more">
                            <a href=""><img src={arrowGreen} /></a>
                            <p>Learn more</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default SuccessStories