//import useEffect
import { useEffect } from 'react';

//AOS animation
import AOS from 'aos';
import 'aos/dist/aos.css';


//import css
import "./team.css"


//import team members images
import johnSmith from "./images/john-smith.png"
import JaneDoe from "./images/jane-doe.png"
import michaelBrown from "./images/michael-brown.png"
import emilyJohnson from "./images/emily-johnson.png"
import BrianWilliams from "./images/brian-williams.png"
import sarahKim from "./images/sarah-kim.png"

//import linkedin logo
import linkedin from "./images/linkedin.png"

const Team = () => {

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true
        });
    }, [])

    return (
        <div className="team mt-140">
            <div className="section-title" data-aos = "fade-up" data-aos-duration = "750">
                <h2>Team</h2>
                <p className="team-p">Meet the skilled and experienced team behind our successful digital marketing strategies</p>
            </div>

            <div className="team-cards-container">

                {/* card 1 */}
                <div className="team-card box-shadow team-card-1" data-aos = "fade-up" data-aos-duration = "700">

                    <div className="member-info">
                        <img src={johnSmith}/>
                        <div className="member-title">
                            <h4>John Smith</h4>
                            <p>CEO and Founder</p>
                        </div>
                    </div>

                    <div className="divider"></div>

                    <p>10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy</p>

                    <a href=""><img className="linkedin-logo" src={linkedin}/></a>
                </div>

                {/* card 2 */}
                <div className="team-card box-shadow team-card-2" data-aos = "fade-up" data-aos-duration = "700">

                    <div className="member-info">
                        <img src={JaneDoe}/>
                        <div className="member-title">
                            <h4>Jane Doe</h4>
                            <p>Director of Operations</p>
                        </div>
                    </div>

                    <div className="divider"></div>

                    <p>7+ years of experience in project management and team leadership. Strong organizational and communication skills</p>

                    <a href=""><img className="linkedin-logo" src={linkedin}/></a>
                </div>

                {/* card 3 */}
                <div className="team-card box-shadow team-card-3" data-aos = "fade-up" data-aos-duration = "700">

                    <div className="member-info">
                        <img src={michaelBrown}/>
                        <div className="member-title">
                            <h4>Michael Brown</h4>
                            <p>Senior SEO Specialist</p>
                        </div>
                    </div>

                    <div className="divider"></div>

                    <p>75+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization</p>

                    <a href=""><img className="linkedin-logo" src={linkedin}/></a>
                </div>

                {/* card 4 */}
                <div className="team-card box-shadow team-card-1" data-aos = "fade-up" data-aos-duration = "700">

                    <div className="member-info">
                        <img src={emilyJohnson}/>
                        <div className="member-title">
                            <h4>Emily Johnson</h4>
                            <p>PPC Manager</p>
                        </div>
                    </div>

                    <div className="divider"></div>

                    <p>3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis</p>

                    <a href=""><img className="linkedin-logo" src={linkedin}/></a>
                </div>

                {/* card 5 */}
                <div className="team-card box-shadow team-card-2" data-aos = "fade-up" data-aos-duration = "700">

                    <div className="member-info">
                        <img src={BrianWilliams}/>
                        <div className="member-title">
                            <h4>Brian Williams</h4>
                            <p>Social Media Specialist</p>
                        </div>
                    </div>

                    <div className="divider"></div>

                    <p>4+ years of experience in social media marketing. Proficient in creating and scheduling
                        content, analyzing metrics, and building engagement
                    </p>

                    <a href=""><img className="linkedin-logo" src={linkedin}/></a>
                </div>

                {/* card 6 */}
                <div className="team-card box-shadow team-card-3" data-aos = "fade-up" data-aos-duration = "700">

                    <div className="member-info">
                        <img src={sarahKim}/>
                        <div className="member-title">
                            <h4>Sarah Kim</h4>
                            <p>Content Creator</p>
                        </div>
                    </div>

                    <div className="divider"></div>

                    <p>
                        2+ years of experience in writing and editing
                        Skilled in creating compelling, SEO-optimized content for various industries
                    </p>

                    <a href=""><img className="linkedin-logo" src={linkedin}/></a>
                </div>

            </div>

            <div className="see-btn-container" data-aos = "fade-up" data-aos-duration = "700">
                <a href=""><button className="see-btn">See all team</button></a>
            </div>

        </div>
    )
}

export default Team