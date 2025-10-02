//import useEffect
import { useEffect } from 'react';

//AOS animation
import AOS from 'aos';
import 'aos/dist/aos.css';

//import Typed and useInView
import Typed from 'react-typed';
import { useInView } from 'react-intersection-observer';

//import css
import "./examples.css"


//import black star
import blackStar from "./images/black-star.png"

const Examples = () => {

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true
        });
    }, [])

    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

    return (
        <div className="examples mt-140">
            <div className="examples-container creator-message">
                <h2 data-aos = "fade-up" data-aos-duration = "650">Real-World Examples</h2>
                <p className="ch-1" data-aos = "fade-up" data-aos-duration = "650">
                    PPC and organic marketing have proven effective in different scenarios, and real-world
                    examples highlight their impact. A local restaurant, for instance, leveraged Google Ads to
                    target the search term “best Italian food near me,” which led to a remarkable 120% increase
                    in reservations within just two weeks. Similarly, a B2B SaaS company focused on organic
                    marketing by investing in SEO and blog content. This strategic approach helped them rank
                    for competitive keywords and boosted their website traffic by 200% over six months. Some
                    businesses find success by combining both strategies, like an e-commerce retailer that
                    launched a targeted PPC campaign for seasonal sales while simultaneously optimizing
                    product pages for organic search. This hybrid approach resulted in a 30% higher return
                    on investment compared to relying solely on PPC advertising.
                </p>

                <h2 className="h2-mr" data-aos = "fade-up" data-aos-duration = "650">Key Takeaways for Your Marketing Strategy</h2>

                <ul>
                    <li data-aos = "fade-up" data-aos-duration = "650">
                        PPC is ideal for short-term goals, like promoting sales, events, or new products.
                    </li>

                    <br />

                    <li data-aos = "fade-up" data-aos-duration = "650">
                        Organic marketing is better for long-term growth, building trust, and creating lasting customer relationships.
                    </li>

                    <br />

                    <li data-aos = "fade-up" data-aos-duration = "650">
                        A hybrid approach offers the best of both worlds, balancing quick wins with sustainable development.
                    </li>
                </ul>

                <h2 className="h2-mr" data-aos = "fade-up" data-aos-duration = "650">Choosing the Best Strategy for Your Business</h2>
                <p className="best-strategy-text" data-aos = "fade-up" data-aos-duration = "650">
                    Ultimately, the choice between PPC and organic marketing depends on your specific needs. If you’re
                    working with a tight deadline or launching a new service, PPC can deliver immediate results. On the
                    other hand, if you’re focused on building a loyal audience and maintaining a steady flow of leads,
                    organic marketing is your best bet.
                    <br /> <br />
                    By understanding the strengths and limitations of both strategies, you can create a marketing plan
                    that aligns with your goals, budget, and target audience. Ready to take your next step? Start
                    building a strategy that drives results today.
                </p>

                <div className="examples-star" data-aos = "fade-up" data-aos-duration = "650">
                    <img src={blackStar} className="black-star"/>
                </div>
            </div>
        </div>
    )
}

export default Examples