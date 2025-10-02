//import useEffect
import { useEffect } from 'react';

//AOS animation
import AOS from 'aos';
import 'aos/dist/aos.css';

//import css
import "./success.css"


//import success image
import successImg from "./images/success-img.png"

const Success = () => {

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true
        });
    }, [])

    return (
        <div className="success section-main">
            <img className="success-img section-img float-infinite" src={successImg} />
            <div className="success-title section-info" data-aos = "fade-up" data-aos-duration = "700">
                <h1>Together for<br /> Success</h1>
                <p>At Positivus, we help businesses grow by combining creativity,
                    innovation, and data-driven strategies. Together, we build
                    a future of shared success.
                </p>
            </div>
        </div>
    )
}

export default Success