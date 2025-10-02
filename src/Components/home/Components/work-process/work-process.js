//import useEffect
import { useEffect } from 'react';

//AOS animation
import AOS from 'aos';
import 'aos/dist/aos.css';


//import useState
import { useState } from "react";

//import css
import "./work-process.css";

//import dropdown image
import dropDown from "./images/drop-down.png";

const WorkProcess = () => {
    const [openCards, setOpenCards] = useState({
        1: true,  // Consultation مفتوح افتراضي
        2: false, // Research
        3: false, // Implementation
    });

    const toggleCard = (cardNumber) => {
        setOpenCards((prev) => ({
            ...prev,
            [cardNumber]: !prev[cardNumber],
        }));
    };

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true
        });
    }, [])


    return (
        <div className="work-process mt-140">
            <div className="section-title" data-aos = "fade-up" data-aos-duration = "750">
                <h2>Our Working Process </h2>
                <p className="work-process-p">
                    Step-by-Step Guide to Achieving Your Business Goals
                </p>
            </div>

            <div className="work-proceess-cards-container">
                {/* card 1 */}
                <div className="work-process-card box-shadow work-process-card-1  " data-aos = "fade-up" data-aos-duration = "650">
                    <div className="work-process-card-title-container">
                        <div className="work-process-card-title">
                            <p className="work-process-card-title-number">01</p>
                            <p className="work-proceess-card-title-info">Consultation</p>
                        </div>

                        <button
                            className={`drop-down-btn ${openCards[1] ? "open" : ""}`}
                            onClick={() => toggleCard(1)}
                        >
                            <img className="drop-down-img" src={dropDown} alt="dropdown" />
                            <div className="drop-down-line-container">
                                <div className="drop-down-line drop-down-line-1"></div>
                                <div className="drop-down-line drop-down-line-2"></div>
                            </div>
                        </button>
                    </div>

                    <div className={`drop-down-content ${openCards[1] ? "open" : ""}`}>
                        <div className="divider"></div>
                        <p>
                            During the initial consultation, we will discuss your
                            business goals and objectives, target audience, and current
                            marketing efforts. This will allow us to understand your needs
                            and tailor our services to best fit your requirements.
                        </p>
                    </div>
                </div>

                {/* card 2 */}
                <div className="work-process-card box-shadow work-process-card-2  work-process-card-gr" data-aos = "fade-up" data-aos-duration = "650">
                    <div className="work-process-card-title-container">
                        <div className="work-process-card-title">
                            <p className="work-process-card-title-number">02</p>
                            <p className="work-proceess-card-title-info">
                                Research and Strategy Development
                            </p>
                        </div>

                        <button
                            className={`drop-down-btn ${openCards[2] ? "open" : ""}`}
                            onClick={() => toggleCard(2)}
                        >
                            <img className="drop-down-img" src={dropDown} alt="dropdown" />
                            <div className="drop-down-line-container">
                                <div className="drop-down-line drop-down-line-1"></div>
                                <div className="drop-down-line drop-down-line-2"></div>
                            </div>
                        </button>
                    </div>

                    <div className={`drop-down-content ${openCards[2] ? "open" : ""}`}>
                        <div className="divider"></div>
                        <p>
                            During the research and strategy development phase, we conduct
                            comprehensive market research, analyze competitors, and assess
                            current industry trends. This allows us to develop a data-driven
                            strategy tailored to your business objectives, ensuring an
                            effective roadmap for achieving measurable results.
                        </p>
                    </div>
                </div>

                {/* card 3 */}
                <div className="work-process-card box-shadow work-process-card-3 work-process-card-gr" data-aos = "fade-up" data-aos-duration = "650">
                    <div className="work-process-card-title-container">
                        <div className="work-process-card-title">
                            <p className="work-process-card-title-number">03</p>
                            <p className="work-proceess-card-title-info">Implementation</p>
                        </div>

                        <button
                            className={`drop-down-btn ${openCards[3] ? "open" : ""}`}
                            onClick={() => toggleCard(3)}
                        >
                            <img className="drop-down-img" src={dropDown} alt="dropdown" />
                            <div className="drop-down-line-container">
                                <div className="drop-down-line drop-down-line-1"></div>
                                <div className="drop-down-line drop-down-line-2"></div>
                            </div>
                        </button>
                    </div>

                    <div className={`drop-down-content ${openCards[3] ? "open" : ""}`}>
                        <div className="divider"></div>
                        <p>
                            During the implementation phase, the approved strategies are
                            executed across selected channels. Tasks include deploying
                            marketing campaigns, launching projects, and integrating systems
                            and tools. This ensures that the planned strategies are
                            translated into tangible actions that drive business growth.
                        </p>
                    </div>
                </div>

                {/* card 4 */}
                <div className="work-process-card box-shadow work-process-card-3 work-process-card-gr" data-aos = "fade-up" data-aos-duration = "650">
                    <div className="work-process-card-title-container">
                        <div className="work-process-card-title">
                            <p className="work-process-card-title-number">04</p>
                            <p className="work-proceess-card-title-info">Monitoring and Optimization</p>
                        </div>

                        <button
                            className={`drop-down-btn ${openCards[4] ? "open" : ""}`}
                            onClick={() => toggleCard(4)}
                        >
                            <img className="drop-down-img" src={dropDown} alt="dropdown" />
                            <div className="drop-down-line-container">
                                <div className="drop-down-line drop-down-line-1"></div>
                                <div className="drop-down-line drop-down-line-2"></div>
                            </div>
                        </button>
                    </div>

                    <div className={`drop-down-content ${openCards[4] ? "open" : ""}`}>
                        <div className="divider"></div>
                        <p>
                            The monitoring and optimization phase involves continuous tracking
                            of performance metrics and key indicators. By analyzing the data,
                            we identify areas of improvement and adjust strategies in
                            real-time to maximize efficiency and ROI. This ensures campaigns
                            remain aligned with business goals and adapt to evolving market
                            conditions.
                        </p>
                    </div>
                </div>

                {/* card 5 */}
                <div className="work-process-card box-shadow work-process-card-3 work-process-card-gr" data-aos = "fade-up" data-aos-duration = "650">
                    <div className="work-process-card-title-container">
                        <div className="work-process-card-title">
                            <p className="work-process-card-title-number">05</p>
                            <p className="work-proceess-card-title-info">Reporting and Communication</p>
                        </div>

                        <button
                            className={`drop-down-btn ${openCards[5] ? "open" : ""}`}
                            onClick={() => toggleCard(5)}
                        >
                            <img className="drop-down-img" src={dropDown} alt="dropdown" />
                            <div className="drop-down-line-container">
                                <div className="drop-down-line drop-down-line-1"></div>
                                <div className="drop-down-line drop-down-line-2"></div>
                            </div>
                        </button>
                    </div>

                    <div className={`drop-down-content ${openCards[5] ? "open" : ""}`}>
                        <div className="divider"></div>
                        <p>
                            During reporting and communication, detailed progress reports are
                            prepared and shared with stakeholders. These include insights, key
                            findings, and performance summaries. Open communication ensures
                            transparency, aligns expectations, and facilitates informed
                            decision-making for ongoing strategy refinement.
                        </p>
                    </div>
                </div>

                {/* card 6 */}
                <div className="work-process-card box-shadow work-process-card-3 work-process-card-gr" data-aos = "fade-up" data-aos-duration = "650">
                    <div className="work-process-card-title-container">
                        <div className="work-process-card-title">
                            <p className="work-process-card-title-number">06</p>
                            <p className="work-proceess-card-title-info">Continual Improvement</p>
                        </div>

                        <button
                            className={`drop-down-btn ${openCards[6] ? "open" : ""}`}
                            onClick={() => toggleCard(6)}
                        >
                            <img className="drop-down-img" src={dropDown} alt="dropdown" />
                            <div className="drop-down-line-container">
                                <div className="drop-down-line drop-down-line-1"></div>
                                <div className="drop-down-line drop-down-line-2"></div>
                            </div>
                        </button>
                    </div>

                    <div className={`drop-down-content ${openCards[6] ? "open" : ""}`}>
                        <div className="divider"></div>
                        <p>
                            The continual improvement phase focuses on refining processes
                            and strategies based on feedback, performance data, and
                            emerging trends. By consistently evaluating outcomes and
                            implementing enhancements, businesses achieve sustained
                            growth, increased efficiency, and long-term competitive
                            advantage.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default WorkProcess;
