//import useEffect
import { useEffect } from 'react';

//AOS animation
import AOS from 'aos';
import 'aos/dist/aos.css';

//import CountUp
import CountUp from 'react-countup';

import { useInView } from 'react-intersection-observer';

//import css
import "./impact-numbers.css"

const ImpactNumbers = () => {

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true
        });
    }, [])

    const { ref: ref1, inView: inView1 } = useInView({ triggerOnce: true, threshold: 0.3 });
    const { ref: ref2, inView: inView2 } = useInView({ triggerOnce: true, threshold: 0.3 });
    const { ref: ref3, inView: inView3 } = useInView({ triggerOnce: true, threshold: 0.3 });
    const { ref: ref4, inView: inView4 } = useInView({ triggerOnce: true, threshold: 0.3 });
    const { ref: ref5, inView: inView5 } = useInView({ triggerOnce: true, threshold: 0.3 });

    return (
        <div className="impact-numbers mt-140">

            <div className="section-title" data-aos="fade-up" data-aos-duration="750">
                <h2>Our Impact in Numbers</h2>
                <p className="impact-p">A snapshot of the milestones and achievements that drive our success</p>

            </div>

            <div className="impact-boxes-container">

                {/* box 1 */}
                <div ref={ref1} className="impact-box box-1" data-aos="fade-up" data-aos-duration="650" >
                    <h2>{inView1 ? <CountUp end={8} duration={1.5} /> : "0"}+</h2>
                    <p>Years of Experience</p>
                    <div className="hider"></div>
                </div>

                {/* box 2 */}
                <div ref={ref2} className="impact-box box-2" data-aos="fade-up" data-aos-duration="650">
                    <h2>{inView2 ? <CountUp end={50} duration={1.5} /> : "0"}+</h2>
                    <p>Experts</p>
                    <div className="hider"></div>
                </div>

                {/* box 3 */}
                <div ref={ref3} className="impact-box box-3" data-aos="fade-up" data-aos-duration="650">
                    <h2>{inView3 ? <CountUp end={100} duration={1.5} /> : "0"}+</h2>
                    <p>Successful Campaigns</p>
                    <div className="hider" />
                </div>

                {/* box 4 */}
                <div ref={ref4} className="impact-box box-4" data-aos="fade-up" data-aos-duration="650">
                    <h2>{inView4 ? <CountUp end={20} duration={1.5} /> : "0"}+</h2>
                    <p>Industry Awards</p>
                    <div className="hider"></div>
                </div>

                {/* box 5 */}
                <div ref={ref5} className="impact-box box-5" data-aos="fade-up" data-aos-duration="650">
                    <h2>{inView5 ? <CountUp end={500} duration={1.5} /> : "0"}%</h2>
                    <p>ROI for our clients</p>
                    <div className="hider"></div>
                </div>

            </div>

        </div>
    )
}

export default ImpactNumbers
