
//import css
import "./insights.css"


//import green arrow image
import arrowGreen from "./images/arrow-green.png"

const Insights = () => {

    return (


        <div className="insights mt-140">
            <div className="section-title">
                <h2>Explore More Insights</h2>
                <p className="insights-p">
                    Discover expert tips, strategies, and stories to keep you ahead in the digital landscape.
                </p>

            </div>

            <div className="stories-container box-shadow">
                <div className="story-box-upper">
                    {/* story box 1 */}
                    <div className="story-box story-box-1 story-box-start">
                        <h3>10 SEO Myths You Need to Stop Believing</h3>

                        <p>
                            Think keyword stuffing and meta tags are the secret to ranking? Discover the truth behind
                            common SEO misconceptions and learn what really drives results.
                        </p>

                        <div className="learn-more">
                            <a href=""><img src={arrowGreen}></img></a>
                            <p>Read article</p>
                        </div>

                    </div>

                    {/* story box 2 */}
                    <div className="story-box story-box-2 story-box-mid">
                        <h3>Maximizing ROI with Social Media Advertising</h3>

                        <p>
                            Social media ads are more than just boosted posts. Explore proven strategies
                            for crafting campaigns that engage audiences and deliver measurable returns.
                        </p>

                        <div className="learn-more">
                            <a href=""><img src={arrowGreen}></img></a>
                            <p>Read article</p>
                        </div>

                    </div>

                    {/* story box 3 */}
                    <div className="story-box story-box-3 story-box-last">
                        <h3>How Content Marketing Fuels Long-Term Growth</h3>

                        <p>
                            Content isn’t just king—it’s the foundation of sustainable business growth. Find out
                            how blogs, videos, and more can build trust and drive conversions.
                        </p>

                        <div className="learn-more">
                            <a href=""><img src={arrowGreen}></img></a>
                            <p>Read article</p>
                        </div>

                    </div>

                </div>

                <div className="story-box-lower">
                    {/* story box 4 */}
                    <div className="story-box story-box-4 story-box-start">
                        <h3>The Art of A/B Testing: Perfecting Your Campaigns</h3>

                        <p>
                            From headlines to call-to-actions, small tweaks can make a big difference. Learn how to
                            use A/B testing to refine your marketing strategies.
                        </p>

                        <div className="learn-more">
                            <a href=""><img src={arrowGreen}></img></a>
                            <p>Read article</p>
                        </div>

                    </div>

                    {/* story box 5 */}
                    <div className="story-box story-box-5 story-box-mid">
                        <h3>Understanding Google’s Latest Algorithm Update</h3>

                        <p>
                            Search rankings change constantly—stay ahead by learning about the latest Google update and
                            its impact on your SEO strategy.
                        </p>

                        <div className="learn-more">
                            <a href=""><img src={arrowGreen}></img></a>
                            <p>Read article</p>
                        </div>

                    </div>

                    {/* story box 6 */}
                    <div className="story-box story-box-6 story-box-last">
                        <h3>5 Ways AI is Changing Digital Marketing</h3>

                        <p>
                            Artificial intelligence is transforming the way we target, analyze, and engage audiences.
                            Discover how to leverage AI to stay competitive.
                        </p>

                        <div className="learn-more">
                            <a href=""><img src={arrowGreen}></img></a>
                            <p>Read article</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Insights