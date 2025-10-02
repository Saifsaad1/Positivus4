//import useEffect
import { useEffect } from 'react';

//AOS animation
import AOS from 'aos';
import 'aos/dist/aos.css';

//import css
import "./statement.css"


//import Statement image
import StatementImg from "./images/statement-img.png"

const Statement = () => {

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true
        });
    }, [])

    return (
        <div className="statement">
            <p className="statement-text" data-aos="fade-up" data-aos-duration="650">
                “At Positivus, we believe that success is built on
                innovation, collaboration, and a relentless focus on delivering results.”
            </p>
            <p className="statement-person" data-aos="fade-up" data-aos-duration="700">— John Smith, Founder of Positivus</p>
            <img className="statement-img" src={StatementImg} data-aos="fade-right" data-aos-duration="650"/>

        </div>
    )
}

export default Statement