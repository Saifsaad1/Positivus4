
//import css
import "./examples.css"


//import black star
import blackStar from "./images/black-star.png"

const Examples = () => {

    return (
        <div className="examples mt-140">
            <div className="examples-container creator-message">
                <h2>Real-World Examples</h2>
                <p className="ch-1">
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

                <h2 className="h2-mr">Key Takeaways for Your Marketing Strategy</h2>

                <ul>
                    <li>
                        PPC is ideal for short-term goals, like promoting sales, events, or new products.
                    </li>

                    <br />

                    <li>
                        Organic marketing is better for long-term growth, building trust, and creating lasting customer relationships.
                    </li>

                    <br />

                    <li>
                        A hybrid approach offers the best of both worlds, balancing quick wins with sustainable development.
                    </li>
                </ul>

                <h2 className="h2-mr">Choosing the Best Strategy for Your Business</h2>
                <p className="best-strategy-text">
                    Ultimately, the choice between PPC and organic marketing depends on your specific needs. If you’re
                    working with a tight deadline or launching a new service, PPC can deliver immediate results. On the
                    other hand, if you’re focused on building a loyal audience and maintaining a steady flow of leads,
                    organic marketing is your best bet.
                    <br /> <br />
                    By understanding the strengths and limitations of both strategies, you can create a marketing plan
                    that aligns with your goals, budget, and target audience. Ready to take your next step? Start
                    building a strategy that drives results today.
                </p>

                <div className="examples-star">
                    <img src={blackStar} className="black-star"/>
                </div>
            </div>
        </div>
    )
}

export default Examples