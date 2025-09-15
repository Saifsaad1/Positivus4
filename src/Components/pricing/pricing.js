
//import css
import "./pricing.css"


//import PricingMain
import PricingMain from "./Components/pricing-main/pricing-main"

//import Questions
import Questions from "./Components/questions/questions"

const Pricing = () => {

    return(
        <div className="pricing section-padding">
            <PricingMain />
            <Questions />
        </div>
    )
}

export default Pricing