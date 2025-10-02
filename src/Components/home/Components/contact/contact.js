//import useEffect
import { useEffect } from 'react';

//AOS animation
import AOS from 'aos';
import 'aos/dist/aos.css';

import "./contact.css";
import contactImg from "./images/contact-img.png";

const Contact = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, [])


  return (


    <div className="contact mt-140">
      <div className="section-title" data-aos = "fade-up" data-aos-duration = "750">
        <h2>Contact Us</h2>
        <p className="contact-p">Connect with Us: Let's Discuss Your Digital Marketing Needs</p>
      </div>

      <div className="contact-form-container">
        <form action="https://formsubmit.co/saifsaad65a@gmail.com" method="post">
          <div className="form-input">
            <label htmlFor="name" className="form-label" data-aos = "fade-right" data-aos-duration = "650">Name</label>
            <input type="text" id="name" name="name" className="form-control" placeholder="Name" data-aos = "fade-right" data-aos-duration = "600"/>
          </div>

          <div className="mt-custom">
            <label htmlFor="email" className="form-label" data-aos = "fade-right" data-aos-duration = "650">Email*</label>
            <input type="email" id="email" name="email" className="form-control" placeholder="Email" data-aos = "fade-right" data-aos-duration = "600"/>
          </div>

          <div className="mt-custom">
            <label htmlFor="subject" className="form-label" data-aos = "fade-right" data-aos-duration = "650">Subject</label>
            <input type="text" id="subject" name="subject" className="form-control" placeholder="Subject" data-aos = "fade-right" data-aos-duration = "600"/>
          </div>

          <div className="mt-custom">
            <label htmlFor="message" className="form-label" data-aos = "fade-right" data-aos-duration = "650">Message</label>
            <textarea id="message" name="message" rows={6} className="form-control" placeholder="Message" data-aos = "fade-right" data-aos-duration = "600"/>
          </div>

          <button type="submit" name="submit" className="btn btn-primary submit-btn" data-aos = "fade-up" data-aos-duration = "650">Send Message</button>
        </form>

        <img src={contactImg} className="contact-img" alt="Contact" data-aos = "fade-left" data-aos-duration = "650"/>
      </div>
    </div>
  )
}

export default Contact;
