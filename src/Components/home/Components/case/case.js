
//import css
import "./case.css"

//import green arrow
import arrowGreen from "./images/arrow-green.png"

const Case = () => {

    return (
        <div className="case">
            <div className="section-title">
                <h2>Case Studies</h2>
                <p className="case-p">Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies
                </p>
            </div>

            <div className="case-banner">
                {/* banner 1 */}
                <div className="banner banner-1">
                    <p className="info">For a local restaurant, we implemented a targeted PPC campaign
                        that resulted in a 50% increase in website traffic and a 25%
                        increase in sales.
                    </p>
                    <div className="learn-banner">
                        <a href=""><p>Learn More</p></a>
                        <a href=""><img src={arrowGreen}/></a>
                    </div>
                </div>

                <div className="divider"></div>

                {/* banner 2 */}
                <div className="banner banner-1">
                    <p className="info">For a B2B software company, we developed
                        an SEO strategy that resulted in a first page ranking for
                        key keywords and a 200% increase in organic traffic.
                    </p>
                    <div className="learn-banner">
                        <a href=""><p>Learn More</p></a>
                        <a href=""><img src={arrowGreen}/></a>
                    </div>
                </div>

                <div className="divider"></div>

                {/* banner 3 */}
                <div className="banner banner-1">
                    <p className="info">For a national retail chain, we created a social
                         media marketing campaign that increased followers by 25% and
                          generated a 20% increase in online sales.
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

export default Case