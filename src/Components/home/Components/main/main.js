//import useEffect
import { useEffect } from 'react';

//AOS animation
import AOS from 'aos';
import 'aos/dist/aos.css';


//import css
import "./main.css"


//import mainRight image
import mainRight from "./images/main-right.png"

//import label images
import amazon from "./images/amazon.png"
import dribbble from "./images/dribbble.png"
import hubspot from "./images/hubspot.png"
import notion from "./images/notion.png"
import netflix from "./images/netflix.png"
import zoom from "./images/zoom.png"

const Main = () => {

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true
        });
    }, [])

    return (
        <div className="main">
            <div className="main-container">
                <div className="main-left" data-aos="fade-right" data-aos-duration="750">
                    <h1 >Navigating the digital landscape for success</h1>
                    <p >
                        Our digital marketing agency helps businesses grow
                        and succeed online through a range of services including
                        SEO, PPC, social media marketing, and content creation.
                    </p>
                    <button className='consulation-btn' >Book a consultation</button>
                </div>
                <div className="main-right">
                    <img src={mainRight} className="main-right-img float-infinite"></img>
                </div>
            </div>
            <div className="main-label" data-aos="fade-up" data-aos-duration="5000">
                <img src={amazon} style={{ filter: "grayscale(1)" }} className="label-img" ></img>
                <img src={dribbble} style={{ filter: "grayscale(1)" }} className="label-img"></img>
                <img src={hubspot} style={{ filter: "grayscale(1)" }} className="label-img"></img>
                <img src={notion} style={{ filter: "grayscale(1)" }} className="label-img"></img>
                <img src={netflix} style={{ filter: "grayscale(1)" }} className="label-img"></img>
                <img src={zoom} style={{ filter: "grayscale(1)" }} className="label-img"></img>
            </div>
        </div>
    )
}

export default Main