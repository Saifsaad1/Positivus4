
//import css
import "./services.css"


//import ServicesMain
import ServicesMain from "./Components/services-main/services-main"

//import EngineOpt
import EngineOpt from "./Components/engine-opt/engine-opt"

//import SeoProcess
import SeoProcess from "./Components/seo-process/seo-process"

//import Use
import UseSection from "./Components/use-section/use-section"

//import OtherServices
import OtherServices from "./Components/other-services/other-services"

//import Elevate
import Elevate from "./Components/elevate/elevate"



const Services = () => {

    return(
        <div className="services section-padding">
            <ServicesMain />
            <EngineOpt />
            <SeoProcess />
            <UseSection />
            <OtherServices />
            <Elevate />
        </div>
    )
}

export default Services