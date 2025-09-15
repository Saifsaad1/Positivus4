
//import css
import "./home.css"


//import Main
import Main from "./Components/main/main"

//import Services
import Services from "./Components/services/services"

//import Case
import Case from "./Components/case/case"

//import WorkProcess
import WorkProcess from "./Components/work-process/work-process"

//import Team
import Team from "./Components/team/team"

//import Testimonials
import Testimonials from "./Components/testimonials/testimonials"

//import Contact
import Contact from "./Components/contact/contact"

const Home = () =>{
    return(
        <div className="home section-padding">
            <Main />
            <Services />
            <Case />
            <WorkProcess />
            <Team />
            <Testimonials />
            <Contact />
        </div>
    )
}

export default Home