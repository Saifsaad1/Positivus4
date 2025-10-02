
//AOS animation
import AOS from 'aos';
import 'aos/dist/aos.css';

import { useState, useEffect } from "react";
import journeyBg from "./images/journey-background-texted.png";
import journeyBg768 from "./images/journey-background-768.png";
import "./journey.css";

const Journey = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, [])

  return (
    <div className="journey mt-140">
      <div className="section-title" data-aos = "fade-up" data-aos-duration = "750">
        <h2>Our Journey Us</h2>
        <p className="journey-p">
          From humble beginnings to industry leaders, discover how Positivus has evolved to drive success for businesses worldwide.
        </p>
      </div>
      <div className="journey-sketch" >
        <img className="journey-bg" src={isMobile ? journeyBg768 : journeyBg} alt="Journey" />
      </div>
    </div>
  );
};

export default Journey;
