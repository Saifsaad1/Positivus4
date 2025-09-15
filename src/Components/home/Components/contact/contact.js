
// import css
import "./contact.css"


//import contact image
import contactImg from "./images/contact-img.png"

const Contact = () => {

    return (

        <div className="contact mt-140">
            <div className="section-title">
                <h2>Contact Us</h2>
                <p className="contact-p">Connect with Us: Let's Discuss Your Digital Marketing Needs </p>
            </div>

            <div className="contact-form-container">
                <div className="hi-quote">
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                        <p>Say Hi</p>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                        <p>Get a Quote</p>
                    </div>

                </div>

                <form>
                    <div class=" form-input">
                        <label for="exampleInputEmail1" class="form-label">Name</label>
                        <input type="name" class="form-control" id="exampleInputEmail1" aria-describedby="name" placeholder="Name" />
                    </div>

                    <div className="mt-custom">
                        <label for="exampleInputEmail1" class="form-label">Email*</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" />
                    </div>

                    <div className="mt-custom">
                        <label htmlFor="message" className="form-label">Message</label>
                        <textarea
                            className="form-control message-input"
                            id="message"
                            placeholder="Message"
                            rows={6}
                        />
                    </div>

                    <button type="submit" class="btn btn-primary submit-btn">Send Message</button>
                </form>


                <img className="contact-img" src={contactImg}/>
            </div>

        </div>
    )
}


export default Contact