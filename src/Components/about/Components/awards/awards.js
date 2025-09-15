
//import css
import "./awards.css"


//import award image
import GDEA from "./images/gdea.png"
import Innovative from "./images/innovative.png"
import Advertising from "./images/advertising.png"
import socialMedia from "./images/social-media.png"

const Awards = () => {

    return (
        <div className="awards mt-140">
            <div className="section-title">
                <h2>Awards & Recognition</h2>
                <p className="awards-p">
                    At Positivus, our commitment to excellence has been
                    recognized by industry leaders. Here are some of our proudest achievements:
                </p>
            </div>

            <div className="awards-container ">
                { /* award card 1 */}
                <div className="award award-1">
                    <img className="award-img" src={GDEA}/>
                    <p className="award-title">Best Small Business Digital Marketing Agency of the Year</p>
                    <p className="award-description">Celebrating our success in delivering innovative strategies and
                         measurable results for small business clients.
                         </p>
                </div>

                { /* award card 2 */}
                <div className="award award-2">
                    <img className="award-img" src={Innovative}/>
                    <p className="award-title">Innovative Website Design</p>
                    <p className="award-description">Honoring our expertise in developing visually stunning, 
                        user-friendly websites that capture a brand’s essence and boost conversions.
                        </p>
                </div>

                { /* award card 3 */}
                <div className="award award-3">
                    <img className="award-img" src={Advertising}/>
                    <p className="award-title">Top Performing PPC Campaign of the Year</p>
                    <p className="award-description">Acknowledging our ability to design and execute a high-impact
                         pay-per-click campaign that drove exceptional client results.
                         </p>
                </div>

                { /* award card 4 */}
                <div className="award award-4">
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