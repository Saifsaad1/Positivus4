import "./contact.css";
import contactImg from "./images/contact-img.png";

const Contact = () => {
  

  return (
    <div className="contact mt-140">
      <div className="section-title">
        <h2>Contact Us</h2>
        <p className="contact-p">Connect with Us: Let's Discuss Your Digital Marketing Needs</p>
      </div>

      <div className="contact-form-container">
        <form  action="https://formsubmit.co/saifsaad65a@gmail.com" method="post">
          <div className="form-input">
            <label htmlFor="name" className="form-label">Name</label>
            <input type="text" id="name" name="name" className="form-control" placeholder="Name"/>
          </div>

          <div className="mt-custom">
            <label htmlFor="email" className="form-label">Email*</label>
            <input type="email" id="email" name="email" className="form-control" placeholder="Email"/>
          </div>

          <div className="mt-custom">
            <label htmlFor="subject" className="form-label">Subject</label>
            <input type="text" id="subject" name="subject" className="form-control" placeholder="Subject"/>
          </div>

          <div className="mt-custom">
            <label htmlFor="message" className="form-label">Message</label>
            <textarea id="message" name="message" rows={6} className="form-control" placeholder="Message"/>
          </div>

          <button type="submit" name="submit" className="btn btn-primary submit-btn">Send Message</button>
        </form>

        <img src={contactImg} className="contact-img" alt="Contact"/>
      </div>
    </div>
  )
}

export default Contact;
