
//import css
import "./elevate.css"


//import elevate image
import elevateImg from "./image/elevate.png"

const Elevate = () => {

    return (
        <div className="elevate box-shadow mt-140">
            <div className="elevate-details">
                <h3>Ready to Elevate Your Search Rankings?</h3>
                <div className="divider"></div>
                <p className="elevate-text">
                    Our proven SEO strategies are designed to help your business achieve long-lasting success
                    in search engines. Whether you want to boost organic traffic, improve keyword rankings,
                    or increase conversions, we’re here to make it happen.
                </p>
                <p className="p-b"><b>Let’s work together to grow your online presence.</b></p>
                <a href="" className="elevate-btn-a"><button className="elevate-btn">Start My SEO Journey</button></a>
            </div>
            <img className="elevate-img" src={elevateImg}/>
        </div>
    )
}

export default Elevate