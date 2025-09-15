
//import css
import "./statement.css"


//import Statement image
import StatementImg from "./images/statement-img.png"

const Statement = () => {

    return (
        <div className="statement">
            <p className="statement-text">“At Positivus, we believe that success is built on
                innovation, collaboration, and a relentless focus on delivering results.”
            </p>
            <p className="statement-person">— John Smith, Founder of Positivus</p>
            <img className="statement-img" src={StatementImg} />

        </div>
    )
}

export default Statement