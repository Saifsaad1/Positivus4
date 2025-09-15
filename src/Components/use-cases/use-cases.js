
//import css
import "./use-cases.css"


//import ProvenSuccess
import ProvenSuccess from "./Components/proven-success/proven-success"

//import FeaturedSuccess
import FeaturedSuccess from "./Components/featured-success/featured-success"

//import SuccessStories
import SuccessStories from "./Components/success-stories/success-stories"

//import Testimonials
import Testimonials from "../home/Components/testimonials/testimonials"

//import CreateProposal
import CreateProposal from "./Components/create-proposal/create-proposal"

const UseCases = () => {
    return(
        <div className="use-cases section-padding">
            <ProvenSuccess />
            <FeaturedSuccess />
            <SuccessStories />
            <Testimonials />
            <CreateProposal />
        </div>
    )
}

export default UseCases