
//import css
import "./engine-opt.css"


//import green star
import greenStar from "./images/green-star.png"

const EngineOpt = () => {

    return (
        <div className="engine-opt">
            <div className="eng-opt-title">
                <img className="green-star" src={greenStar}/>
                <div className="h3-s">
                    <h3 className="h3-f">FEATURED</h3>
                    <h3 className="h3-1">Search engine</h3>
                    <h3 className="h3-2">optimization</h3>
                </div>
            </div>

            <div className="eng-ops-details">
                <p>SEO is the process of improving your website’s visibility on search engines
                    like Google. By optimizing your content and site structure, we help your
                    business rank higher in search results, driving more organic traffic
                    and potential customers.
                </p>

                <button className="eng-ops-btn"><a href="">Boost My Rankings</a></button>
            </div>

        </div>
    )
}

export default EngineOpt