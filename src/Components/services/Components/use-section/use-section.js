
//import css
import "./use-section.css"


//import green arrow image
import arrowGreen from "./images/arrow-green.png"

const UseSection = () => {

    return (
        <div className="use-section mt-140">
            <div className="section-title ">
                <h2>Use Cases</h2>
                <p className="seo-process-p">
                    Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies
                </p>
            </div>

            <div className="use-container">
                {/* use card 1 */}
                <div className="use-card use-card-1">
                    <h3>E-commerce Fashion Brand</h3>

                    <p>We implemented a tailored SEO strategy that boosted organic search rankings, leading
                        to a 150% increase in website traffic and a 50% rise in online sales within six months.
                    </p>

                    <div className="learn-banner">
                        <a href=""><p>Learn More</p></a>
                        <a href=""><img src={arrowGreen}/></a>
                    </div>

                </div>

                <div className="divider"></div>

                {/* use card 2 */}
                <div className="use-card use-card-2">
                    <h3>E-commerce Fashion Brand</h3>

                    <p>We implemented a tailored SEO strategy that boosted organic search rankings, leading
                        to a 150% increase in website traffic and a 50% rise in online sales within six months.
                    </p>

                    <div className="learn-banner">
                        <a href=""><p>Learn More</p></a>
                        <a href=""><img src={arrowGreen}/></a>
                    </div>

                </div>

                <div className="divider"></div>

                {/* use card 3 */}
                <div className="use-card use-card-3">
                    <h3>E-commerce Fashion Brand</h3>

                    <p>We implemented a tailored SEO strategy that boosted organic search rankings, leading
                        to a 150% increase in website traffic and a 50% rise in online sales within six months.
                    </p>

                    <div className="learn-banner">
                        <a href=""><p>Learn More</p></a>
                        <a href=""><img src={arrowGreen}/></a>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default UseSection