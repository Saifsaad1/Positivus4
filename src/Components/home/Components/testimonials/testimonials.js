
//import css
import "./testimonials.css"


//import bubble
import bubble from "./images/bubble.png"

//import sawp stars
import activeStar from "./images/active-star.png"

//import big green star
import bigGreenStar from "./images/big-green-star.png"

const Testimonials = () => {

    return (

        <div className="testimonials">

            <div className="section-title">
                <h2>Testimonials</h2>
                <p className="testimonials-p">Hear from Our Satisfied Clients: Read Our Testimonials to Learn
                    More about Our Digital Marketing Services
                </p>
            </div>

            <div className="testimonials-container">
                <div className="testimonials-swap-container">
                    <div id="carouselExampleIndicators" className="carousel slide">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        
                        <div className="carousel-inner">
                            {/* card 1 */}
                            <div className="carousel-item carousel-inner-1 active">
                                <img src={bubble} className="d-block w-100 bubble" alt="..." />
                                <div className="bubble-text">
                                    "We have been working with Positivus for the past year and
                                    have seen a significant increase in website traffic and
                                    leads as a result of their efforts. The team is professional,
                                    responsive, and truly cares about the success of our business.
                                    We highly recommend Positivus to any company looking to grow
                                    their online presence."
                                    <br />
                                    <span>John Smith</span>
                                </div>

                            </div>
                            {/* card 2 */}
                            <div className="carousel-item carousel-inner-2">
                                <img src={bubble} className="d-block w-100 bubble" alt="..." />
                                <div className="bubble-text">
                                    "After collaborating with Positivus for several months, our
                                    online engagement has skyrocketed. Their team is extremely
                                    knowledgeable, proactive, and always ready to offer tailored
                                    solutions for our business needs. We’ve noticed a tangible
                                    improvement in leads and overall brand visibility. I would
                                    confidently recommend Positivus to any company aiming to
                                    enhance their digital footprint."
                                    <br />
                                    <span>Brian Williams</span>
                                </div>
                            </div>
                            {/* card 3 */}
                            <div className="carousel-item carousel-inner-3">
                                <img src={bubble} className="d-block w-100 bubble" alt="..." />
                                <div className="bubble-text">
                                    "Working with Positivus has been a game-changer for our
                                    company. They helped us optimize our online campaigns and
                                    improve our website performance. The team is attentive,
                                    responsive, and genuinely invested in our success. Thanks
                                    to their efforts, we’ve seen a steady growth in traffic
                                    and customer inquiries. Highly recommended for anyone
                                    looking to strengthen their digital presence."
                                    <br />
                                    <span>Michael Brown</span>
                                </div>

                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Testimonials
