//import useEffect
import { useEffect } from 'react';

//AOS animation
import AOS from 'aos';
import 'aos/dist/aos.css';

//import css
import "./proven-success.css"


//import proven success image
import provenSuccessImg from "./images/proven-success.png"

const ProvenSuccess = () => {

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true
        });
    }, [])

    return (
        <div className="proven-success section-main">
            <img className="proven-success-img section-img float-infinite" src={provenSuccessImg} data-aos = "fade-up" data-aos-duration = "750"/>
            <div className="proven-success-title section-info" data-aos = "fade-up" data-aos-duration = "750">
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