
//import css
import "./seo-process.css"


//import stage star image
import stageStar from "./images/stage-star.png"

const SeoProcess = () => {

    return (
        <div className="seo-process mt-140">
            <div className="section-title">
                <h2>How We Work: SEO Process</h2>
                <p className="seo-process-p">
                    Our step-by-step SEO process ensures your website ranks higher, attracts more traffic, and drives lasting results.
                </p>
            </div>

            <div className="seo-stages">
                {/* stage 1 */}
                <div className="seo-stage seo-stage-1">
                    <div className="stage-number">
                        <img className="stage-star" src={stageStar}/>
                        <h1>01</h1>
                    </div>

                    <div className="stage-details">
                        <h3>Website Audit & Analysis</h3>
                        <p>We begin by conducting a comprehensive audit to identify areas for improvement, including technical
                            issues, content quality, and keyword opportunities.
                        </p>
                    </div>
                </div>

                {/* stage 2 */}
                <div className="seo-stage seo-stage-2">
                    <div className="stage-number">
                        <img className="stage-star" src={stageStar}/>
                        <h1>02</h1>
                    </div>

                    <div className="stage-details">
                        <h3>Keyword Research & Strategy</h3>
                        <p>Our team researches the most relevant and high-impact keywords for your business, ensuring that we
                            target terms that drive qualified traffic.
                        </p>
                    </div>
                </div>

                {/* stage 3 */}
                <div className="seo-stage seo-stage-3">
                    <div className="stage-number">
                        <img className="stage-star" src={stageStar}/>
                        <h1>03</h1>
                    </div>

                    <div className="stage-details">
                        <h3>On-Page Optimization</h3>
                        <p>We optimize your website’s structure, meta tags, and content to make it search engine-friendly, improving your
                            visibility and relevance.
                        </p>
                    </div>
                </div>

                {/* stage 4 */}
                <div className="seo-stage seo-stage-4">
                    <div className="stage-number">
                        <img className="stage-star" src={stageStar}/>
                        <h1>04</h1>
                    </div>

                    <div className="stage-details">
                        <h3>Content Creation & Optimization</h3>
                        <p>High-quality content is key to SEO. We create or refine content that engages your audience while aligning
                            with search engine algorithms.
                        </p>
                    </div>
                </div>

                {/* stage 5 */}
                <div className="seo-stage seo-stage-5">
                    <div className="stage-number">
                        <img className="stage-star" src={stageStar}/>
                        <h1>05</h1>
                    </div>

                    <div className="stage-details">
                        <h3>Link Building</h3>
                        <p>We develop a link-building strategy to acquire authoritative, relevant backlinks that boost your
                            domain authority and search rankings.
                        </p>
                    </div>
                </div>

                {/* stage 6 */}
                <div className="seo-stage seo-stage-6">
                    <div className="stage-number">
                        <img className="stage-star" src={stageStar}/>
                        <h1>06</h1>
                    </div>

                    <div className="stage-details">
                        <h3>Monitoring & Reporting</h3>
                        <p>We continuously monitor performance, track rankings, and provide detailed reports, making data-driven
                            adjustments to maintain and improve your results.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SeoProcess