//import useEffect
import { useEffect } from 'react';

//AOS animation
import AOS from 'aos';
import 'aos/dist/aos.css';

//import css
import "./services-main.css"


//import services main image
import ServicesMainImg from "./images/services-main-img.png"

const ServicesMain = () => {

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true
        });
    }, [])

    return (
        <div className="services-main section-main">
            <img className="services-main-img section-img float-infinite" src={ServicesMainImg} />
            <div className="services-main-title section-info" data-aos = "fade-up" data-aos-duration = "750">
                <h1>Expert Digital Marketing Services</h1>
                <p>
                    Unlock your business’s full potential with tailored strategies designed to
                    drive growth and deliver results.
                </p>
            </div>
        </div>
    )
}

export default ServicesMain