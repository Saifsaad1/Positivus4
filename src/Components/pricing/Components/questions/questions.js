//import useState
import { useState , useEffect } from "react";

//import css
import "./questions.css"

//import drop down image
import dropDown from "./images/drop-down.png";

const Questions = () => {
    const [openCards, setOpenCards] = useState({
        1: true, // افتراضي كبير
        2: false,
        3: false,
        4: false,
        5: false,
        6: false,
    });

useEffect(() => {
        if (window.innerWidth <= 768) {
            setOpenCards({
                1: false,
                2: false,
                3: false,
                4: false,
                5: false,
                6: false,
            });
        }
    }, []); // تشغل مرة وحدة عند التحميل
    

    const toggleCard = (cardNumber) => {
        setOpenCards((prev) => ({
            ...prev,
            [cardNumber]: !prev[cardNumber],
        }));
    };

    return (
        <div className="questions mt-140">
            <div className="section-title">
                <h2>Frequantly Asked Questions</h2>
            </div>

            <div className="work-proceess-cards-container">
                {/* card 1 */}
                <div className="work-process-card box-shadow work-process-card-1  ">
                    <div className="work-process-card-title-container">
                        <div className="work-process-card-title">
                            <p className="work-proceess-card-title-info">Are there any additional fees or charges that may apply?</p>
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
                            Our pricing plans include a wide range of digital marketing services, including website design
                            and development, SEO, PPC advertising, social media marketing, content marketing, and more.
                            We also offer custom packages that can be tailored to meet the specific needs of your
                            business.
                        </p>
                    </div>
                </div>

                {/* card 2 */}
                <div className="work-process-card box-shadow work-process-card-2  work-process-card-gr">
                    <div className="work-process-card-title-container">
                        <div className="work-process-card-title">
                            <p className="work-proceess-card-title-info">
                                Can I change or cancel my plan at any time?
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
                            Yes, you have full flexibility with your subscription. You can upgrade, downgrade,
                            or cancel your plan whenever it suits you. There are no hidden fees or long-term
                            commitments — changes take effect immediately, and you’ll only pay for the time
                            you’ve used. Our goal is to make sure you have complete control over your
                            subscription so it always matches your needs.
                        </p>
                    </div>
                </div>

                {/* card 3 */}
                <div className="work-process-card box-shadow work-process-card-3 work-process-card-gr">
                    <div className="work-process-card-title-container">
                        <div className="work-process-card-title">
                            <p className="work-proceess-card-title-info">Do you offer a free trial or consultation?</p>
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
                            We’d be happy to! You can book a complimentary consultation where we’ll take
                            the time to learn about your goals and walk you through how our services
                            work. It’s a chance for you to ask questions, explore different options,
                            and see if we’re the right fit for you—completely free of charge and with
                            no obligation.
                        </p>
                    </div>
                </div>

                {/* card 4 */}
                <div className="work-process-card box-shadow work-process-card-3 work-process-card-gr">
                    <div className="work-process-card-title-container">
                        <div className="work-process-card-title">
                            <p className="work-proceess-card-title-info">How do you bill and invoice your clients?</p>
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
                            We keep our billing process simple and transparent. Clients receive an invoice
                            at the beginning of each billing cycle, which outlines all services included
                            in their plan. Payments can be made through multiple methods such as credit
                            card, bank transfer, or online payment gateways. You’ll always have a clear
                            record of your transactions, and our support team is available if you have
                            any billing-related questions.
                        </p>
                    </div>
                </div>

                {/* card 5 */}
                <div className="work-process-card box-shadow work-process-card-3 work-process-card-gr">
                    <div className="work-process-card-title-container">
                        <div className="work-process-card-title">
                            <p className="work-proceess-card-title-info">Are your services guaranteed to deliver results?</p>
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
                            While we strive to provide the highest quality service and use proven strategies,
                            results can vary depending on your specific situation and goals. We commit to
                            giving our best effort, offering expert guidance, and continuously supporting
                            you throughout the process. Our focus is on helping you achieve measurable
                            improvements and ensuring you have the tools and knowledge to succeed.
                        </p>
                    </div>
                </div>

                {/* card 6 */}
                <div className="work-process-card box-shadow work-process-card-3 work-process-card-gr">
                    <div className="work-process-card-title-container">
                        <div className="work-process-card-title">
                            <p className="work-proceess-card-title-info">Do you offer contract-based or monthly retainer-based pricing?</p>
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
                            We provide flexible pricing options to suit different needs. Clients can
                            choose between a contract-based agreement for specific projects or a
                            monthly retainer plan for ongoing support and services. Both options
                            are designed to be transparent and customizable, ensuring you only pay
                            for what fits your goals. Our team can guide you to the best choice
                            based on the scope and duration of your project.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Questions