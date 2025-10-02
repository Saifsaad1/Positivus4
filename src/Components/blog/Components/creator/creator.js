//import useEffect
import { useEffect } from 'react';

//AOS animation
import AOS from 'aos';
import 'aos/dist/aos.css';

//Type Animation
import { TypeAnimation } from 'react-type-animation';

//Intersection Observer
import { useInView } from 'react-intersection-observer';

//import css
import "./creator.css"

//import creator image
import creatorImg from "./images/creator.png"

const Creator = () => {

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true
        });
    }, [])

    const { ref: typeRef, inView: typeInView } = useInView({
        triggerOnce: true,
        threshold: 0.3
    });

    return (
        <div className="creator mt-140">
            <div className="creator-box" data-aos="fade-right" data-aos-duration="650">
                <img className="creator-img" src={creatorImg} />
                <div className="creator-info">
                    <h4>Sara Kim</h4>
                    <p>Content Creator</p>
                </div>
            </div>

            <div className="divider" data-aos="fade-up" data-aos-duration="650"></div>

            <div className="creator-message">
                <p className="creator-message-title" data-aos="fade-up" data-aos-duration="650">
                    In the ever-evolving digital landscape, businesses are faced with an important question:
                    should they invest in pay-per-click (PPC) advertising or focus on organic marketing
                    strategies? While both approaches have their merits, choosing the right one depends on
                    your goals, budget, and timeline. Let’s dive into the strengths, challenges, and
                    real-world applications of PPC and organic marketing to help you make an informed
                    decision.
                </p>

                <h2 data-aos="fade-up" data-aos-duration="650">The Challenge of Standing Out Online</h2>

                <p className="ch-1" data-aos="fade-up" data-aos-duration="650">
                    Every day, millions of businesses compete for visibility online, making it increasingly
                    difficult to capture the attention of potential customers. Organic search results are highly sought after, but earning a top spot on Google takes time and consistent
                    effort. Meanwhile, PPC ads promise instant visibility but can quickly drain your budget
                    if not executed effectively.
                    <br /><br />
                    For small businesses with limited resources, this dilemma can feel like an impossible
                    balancing act. Do you play the long game with organic strategies or opt for quick wins
                    with PPC?
                </p>

                <h2 data-aos="fade-up" data-aos-duration="650">Comparing PPC and Organic Marketing</h2>

                <p className="ch-1" data-aos="fade-up" data-aos-duration="650">
                    Pay-per-click (PPC) and organic marketing each offer distinct advantages and challenges,
                    making them effective for different business needs. PPC is designed to deliver
                    immediate results by securing top placements on search engines or social media
                    platforms, providing businesses with instant visibility. It allows for precise targeting
                    based on factors like demographics, behavior, and location, offering flexibility to
                    start small and scale as needed. However, PPC can become expensive quickly, particularly
                    in competitive industries, and its results are short-lived since traffic stops when the
                    campaign ends.
                    <br /><br />
                    In contrast, organic marketing focuses on building a strong, sustainable presence through
                    strategies like search engine optimization (SEO) and content creation. This approach
                    builds trust and credibility over time, delivering consistent traffic without the need
                    for ongoing ad spend. While the results can take longer to materialize and are less
                    immediate than PPC, organic marketing provides long-term benefits that make it a
                    valuable strategy for sustained growth.
                </p>

                <p className="sec-title" data-aos="fade-up" data-aos-duration="650">Striking the Right Balance</p>

                <div className="sec-title-info-box" ref={typeRef}>
                    <div className="color-line" data-aos="fade-up" data-aos-duration="650"></div>

                    {typeInView && (
                        <TypeAnimation
                            sequence={[
                                `“PPC and organic marketing aren’t rivals—they’re teammates. The best strategies
combine both to create a holistic approach to growth,” says a digital marketing
expert.`,
                                1000
                            ]}
                            wrapper="p"
                            className="sec-title-info-box-info"
                            speed={75}
                            cursor={true}
                            repeat={0}
                            style={{ display: 'inline-block' }}
                        />
                    )}
                </div>

                <p className="ch-2" data-aos="fade-up" data-aos-duration="650">
                    For instance, a business might use PPC to generate quick traffic for a new product
                    launch while building long-term organic authority through SEO and blogging. Combining
                    these strategies ensures you’re reaching your audience now while laying the groundwork
                    for future success.
                    <br /><br />
                    For small businesses with limited resources, this dilemma can feel like an impossible
                    balancing act. Do you play the long game with organic strategies or opt for quick wins
                    with PPC?
                </p>
            </div>
        </div>
    )
}

export default Creator;
