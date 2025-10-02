//import useEffect
import { useEffect } from 'react';

//AOS animation
import AOS from 'aos';
import 'aos/dist/aos.css';

//import CountUp
import CountUp from 'react-countup';

//import useInView
import { useInView } from 'react-intersection-observer';

//import css
import "./featured-success.css"

//import green arrow image
import arrowGreen from "./images/arrow-green.png"

const FeaturedSuccess = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, [])

    // نستخدم inView لمراقبة عنصر الأرقام
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.3
    });

    return (
        <div className="featured-success mt-140" ref={ref}>
            <div className="success-story">
                <h2 data-aos="fade-right" data-aos-duration="650">Featured Success Story</h2>
                <h3 data-aos="fade-right" data-aos-duration="850">Scaling Success for a Leading E-Commerce Brand</h3>
                <p className="success-story-p" data-aos="fade-right" data-aos-duration="1050">
                    Through a comprehensive SEO and PPC strategy, we helped this e-commerce brand increase visibility, drive traffic, and boost sales.
                </p>
                <div className="learn-more" data-aos="fade-right" data-aos-duration="1250">
                    <a href=""><img src={arrowGreen} alt="arrow" /></a>
                    <p>Read</p>
                </div>
            </div>

            <div className="success-numbers">
                {/* success number box 1 */}
                <div className="success-number-box success-number-box-1" data-aos="fade-up" data-aos-duration="650">
                    <h2>
                        {inView ? <CountUp end={200} duration={2} suffix="%" /> : "0%"}
                    </h2>
                    <p>increase in organic traffic</p>
                </div>

                {/* success number box 2 */}
                <div className="success-number-box success-number-box-2" data-aos="fade-up" data-aos-duration="650">
                    <h2>
                        {inView ? <CountUp end={150} duration={2} suffix="%" /> : "0%"}
                    </h2>
                    <p>rise in online sales</p>
                </div>

                {/* success number box 3 */}
                <div className="success-number-box success-number-box-3" data-aos="fade-up" data-aos-duration="650">
                    <h2>
                        {inView ? <CountUp end={75} duration={2} suffix="%" /> : "0%"}
                    </h2>
                    <p>reduction in cost-per-click (CPC)</p>
                </div>

                {/* success number box 4 */}
                <div className="success-number-box success-number-box-4" data-aos="fade-up" data-aos-duration="650">
                    <h2>
                        {inView ? <CountUp end={300} duration={2} suffix="%" /> : "0%"}
                    </h2>
                    <p>improvement in conversion rate</p>
                </div>
            </div>
        </div>
    )
}

export default FeaturedSuccess;
