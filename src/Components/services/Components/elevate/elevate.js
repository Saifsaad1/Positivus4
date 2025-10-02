//import useEffect
import { useEffect } from 'react';

//AOS animation
import AOS from 'aos';
import 'aos/dist/aos.css';

//import css
import "./elevate.css"


//import elevate image
import elevateImg from "./image/elevate.png"

const Elevate = () => {

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true
        });
    }, [])

    return (
        <div className="elevate box-shadow mt-140">
            <div className="elevate-details">
                <h3 data-aos = "fade-up" data-aos-duration = "650">Ready to Elevate Your Search Rankings?</h3>
                <div className="divider" data-aos = "fade-up" data-aos-duration = "650"></div>
                <p className="elevate-text" data-aos = "fade-up" data-aos-duration = "650">
                    Our proven SEO strategies are designed to help your business achieve long-lasting success
                    in search engines. Whether you want to boost organic traffic, improve keyword rankings,
                    or increase conversions, we’re here to make it happen.
                </p>
                <p className="p-b" data-aos = "fade-up" data-aos-duration = "650"><b>Let’s work together to grow your online presence.</b></p>
                <a href="" className="elevate-btn-a" data-aos = "fade-up" data-aos-duration = "650"><button className="elevate-btn">Start My SEO Journey</button></a>
            </div>
            <img className="elevate-img" src={elevateImg} data-aos = "fade-up" data-aos-duration = "650"/>
        </div>
    )
}

export default Elevate