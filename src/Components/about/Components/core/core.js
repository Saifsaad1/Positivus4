
//import css
import "./core.css"


//import Innovation image
import Innovation from "./images/innovation.png"

//import Collaboration image
import Collaboration from "./images/collaboration.png"

const Core = () => {

    return (
        <div className="core mt-140">
            <div className="section-title">
                <h2>Core Values</h2>
                <p className="core-p">At the heart of everything we do are our core values:</p>
            </div>

            <div className="core-cards">
                {/* core card 1 */}
                <div className="core-card box-shadow core-card-1 core-card-text">
                    <h3>Client Success First</h3>
                    <div className="divider"></div>
                    <p>We are dedicated to achieving measurable results for our clients.
                        Each strategy is tailored to meet unique business goals and drive
                        long-term success.
                    </p>
                </div>

                {/* core card 2 */}
                <div className="core-card box-shadow core-card-2 core-card-media">
                    <div className="core-card-info">
                        <h3>Innovation</h3>
                        <div className="divider"></div>
                        <p>We constantly strive to stay ahead of industry trends.
                        </p>
                    </div>

                    <img className="core-card-img" src={Innovation}></img>


                </div>

                {/* core card 3 */}
                <div className="core-card box-shadow core-card-3 core-card-media">
                    <div className="core-card-info">
                        <h3>Collaboration</h3>
                        <div className="divider"></div>
                        <p>We believe in the power of teamwork and partnership.
                        </p>
                    </div>

                    <img className="core-card-img" src={Collaboration}></img>


                </div>

                {/* core card 4 */}
                <div className="core-card box-shadow core-card-4 core-card-text">
                    <h3>Transparency</h3>
                    <div className="divider"></div>
                    <p>Open and honest communication is key to our success. We keep our clients
                        informed every step of the way to ensure trust and clarity.
                    </p>
                </div>
            </div>

        </div>
    )
}

export default Core

