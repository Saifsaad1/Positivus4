
//import css
import "./featured-success.css"


//import green arrow image
import arrowGreen from "./images/arrow-green.png"

const FeaturedSuccess = () => {

    return (
        <div className="featured-success mt-140">
            <div className="success-story">
                <h2>Featured Success Story</h2>
                <h3>Scaling Success for a Leading E-Commerce Brand</h3>
                <p className="success-story-p">
                    Through a comprehensive SEO and PPC strategy, we helped this e-commerce brand increase visibility,
                    drive traffic, and boost sales.
                </p>

                <div className="learn-more">
                    <a href=""><img src={arrowGreen}/></a>
                    <p>Read</p>
                </div>

            </div>

            <div className="success-numbers">
                {/* success number box 1 */}
                <div className="success-number-box success-number-box-1">
                    <h2>200%</h2>
                    <p>increase in organic traffic</p>
                </div>

                {/* success number box 2 */}
                <div className="success-number-box success-number-box-2">
                    <h2>150%</h2>
                    <p>rise in online sales</p>
                </div>

                {/* success number box 3 */}
                <div className="success-number-box success-number-box-3">
                    <h2>75%</h2>
                    <p>reduction in cost-per-click (CPC)</p>
                </div>

                {/* success number box 4 */}
                <div className="success-number-box success-number-box-4">
                    <h2>300%</h2>
                    <p>improvement in conversion rate</p>
                </div>
                
            </div>
        </div>
    )
}

export default FeaturedSuccess