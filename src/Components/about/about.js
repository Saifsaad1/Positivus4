
//import css
import "./about.css"


//import Success
import Success from "./Components/success/success"

//import ImpactNumbers
import ImpactNumbers from "./Components/impact-numbers/impact-numbers"

//import Journey
import Journey from "./Components/journey/journey"

//import Core
import Core from "./Components/core/core"

//import Statement
import Statement from "./Components/statement/statement"

//import Awards
import Awards from "./Components/awards/awards"

//import JoinTeam
import JoinTeam from "./Components/join-team/join-team"

const About = () => {

    return(

        <div className="about section-padding">
            <Success />
            <ImpactNumbers />
            <Journey />
            <Core />
            <Statement />
            <Awards />
            <JoinTeam />
        </div>
    )
}

export default About