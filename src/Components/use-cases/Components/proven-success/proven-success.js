
//import css
import "./proven-success.css"


//import proven success image
import provenSuccessImg from "./images/proven-success.png"

const ProvenSuccess = () => {

    return (
        <div className="proven-success section-main">
            <img className="proven-success-img section-img" src={provenSuccessImg}/>
            <div className="proven-success-title section-info">
                <h1>Proven Success Stories</h1>
                <p>See how our innovative digital marketing strategies have transformed businesses. Whether through SEO,
                    PPC, social media, or web design, these use cases highlight the tangible impact of our work.
                    Explore the successes and envision what we can achieve together.
                </p>
            </div>
        </div>
    )
}

export default ProvenSuccess