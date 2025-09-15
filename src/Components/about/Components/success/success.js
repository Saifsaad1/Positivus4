
//import css
import "./success.css"


//import success image
import successImg from "./images/success-img.png"

const Success = () => {

    return (
        <div className="success section-main">
            <img className="success-img section-img" src={successImg}/>
            <div className="success-title section-info">
                <h1>Together for<br /> Success</h1>
                <p>At Positivus, we help businesses grow by combining creativity,
                    innovation, and data-driven strategies. Together, we build
                    a future of shared success.
                </p>
            </div>
        </div>
    )
}

export default Success