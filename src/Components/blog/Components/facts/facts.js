
//import css
import "./facts.css"

const Facts = () => {

    return (
        <div className="facts mt-140">
            {/* row 1 */}
            <div className="facts-row">
                {/* box 1 */}
                <div className="facts-box facts-box-1 facts-box-smaller box-shadow">
                    <p>Businesses earn an average of</p>
                    <h3>$2 for every $1 spent</h3>
                    <p>on PPC advertising.</p>
                </div>

                {/* box 2 */}
                <div className="facts-box facts-box-2 facts-box-larger ">
                    <p className="facts-box-title">41% of clicks</p>
                    <p>on search engines go to the top three organic results, showing the importance of ranking highly.</p>
                </div>

            </div>

            {/* row 2 */}
            <div className="facts-row">
                {/* box 3 */}
                <div className="facts-box facts-box-3 facts-box-larger ">
                    <div className="facts-box-row">
                        <p>Content marketing costs</p>
                        <h3>62% less than paid ads</h3>
                    </div>

                    <div className="facts-box-row">
                        <p>but generates</p>
                        <h3>3x as many leads</h3>
                    </div>

                </div>

                {/* box 4 */}
                <div className="facts-box facts-box-4 facts-box-smaller ">
                    <p>Organic search drives</p>
                    <h3><span className="green">53%</span> of all website traffic,</h3>
                    <p>making it the largest single source of traffic.</p>
                </div>
            </div>
        </div>
    )
}

export default Facts