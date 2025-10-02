//import useEffect
import { useEffect } from 'react';

//AOS animation
import AOS from 'aos';
import 'aos/dist/aos.css';

//import css
import "./awards.css"


//import award image
import GDEA from "./images/gdea.png"
import Innovative from "./images/innovative.png"
import Advertising from "./images/advertising.png"
import socialMedia from "./images/social-media.png"

const Awards = () => {

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true
        });
    }, [])

    return (
        <div className="awards mt-140">
            <div className="section-title" data-aos = "fade-up" data-aos-duration = "750">
                <h2>Awards & Recognition</h2>
                <p className="awards-p">
                    At Positivus, our commitment to excellence has been
                    recognized by industry leaders. Here are some of our proudest achievements:
                </p>
            </div>

            <div className="awards-container ">
                { /* award card 1 */}
                <div className="award award-1" data-aos = "fade-up" data-aos-duration = "650">
                    <img className="award-img" src={GDEA}/>
                    <p className="award-title">Best Small Business Digital Marketing Agency of the Year</p>
                    <p className="award-description">Celebrating our success in delivering innovative strategies and
                         measurable results for small business clients.
                         </p>
                </div>

                { /* award card 2 */}
                <div className="award award-2" data-aos = "fade-up" data-aos-duration = "850">
                    <img className="award-img" src={Innovative}/>
                    <p className="award-title">Innovative Website Design</p>
                    <p className="award-description">Honoring our expertise in developing visually stunning, 
                        user-friendly websites that capture a brand’s essence and boost conversions.
                        </p>
                </div>

                { /* award card 3 */}
                <div className="award award-3" data-aos = "fade-up" data-aos-duration = "1050">
                    <img className="award-img" src={Advertising}/>
                    <p className="award-title">Top Performing PPC Campaign of the Year</p>
                    <p className="award-description">Acknowledging our ability to design and execute a high-impact
                         pay-per-click campaign that drove exceptional client results.
                         </p>
                </div>

                { /* award card 4 */}
                <div className="award award-4" data-aos = "fade-up" data-aos-duration = "1250">
                    <img className="award-img" src={socialMedia}/>
                    <p className="award-title">Expertise in Social Media Marketing</p>
                    <p className="award-description">Recognizing our exceptional skills in crafting effective social
                         media strategies, managing accounts, and creating engaging content.
                         </p>
                </div>
            </div>

        </div>
    )
}

export default Awards