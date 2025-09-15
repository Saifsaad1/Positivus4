
//import css
import "./impact-numbers.css"

const ImpactNumbers = () => {
    
    return (
        <div className="impact-numbers mt-140">

            <div className="section-title">
                <h2>Our Impact in Numbers</h2>
                <p className="impact-p">A snapshot of the milestones and achievements that drive our success</p>

            </div>

            <div className="impact-boxes-container">

                {/* box 1 */}
                <div className="impact-box box-1">
                    <h2>8+</h2>
                    <p>Years of Experience</p>
                    <div className="hider"></div>
                </div>

                 {/* box 2 */}
                <div className="impact-box box-2">
                    <h2>50+</h2>
                    <p>Experts</p>
                    <div className="hider"></div>
                </div>

                 {/* box 3 */}
                <div className="impact-box box-3">
                    <h2>100+</h2>
                    <p>Successful Campaigns</p>
                    <div className="hider"></div>
                </div>

                 {/* box 4 */}
                <div className="impact-box box-4">
                    <h2>20+</h2>
                    <p>Industry Awards</p>
                    <div className="hider"></div>
                </div>

                 {/* box 5 */}
                <div className="impact-box box-5">
                    <h2>500%</h2>
                    <p>ROI for our clients</p>
                    <div className="hider"></div>
                </div>


                
            </div>


        </div>
    )
}


export default ImpactNumbers