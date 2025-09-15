
//import css
import "./services-main.css"


//import services main image
import ServicesMainImg from "./images/services-main-img.png"

const ServicesMain = () => {

    return (
        <div className="services-main section-main">
            <img className="services-main-img section-img" src={ServicesMainImg}/>
            <div className="services-main-title section-info">
                <h1>Expert Digital Marketing Services</h1>
                <p>
                    Unlock your business’s full potential with tailored strategies designed to
                    drive growth and deliver results.
                </p>
            </div>
        </div>
    )
}

export default ServicesMain