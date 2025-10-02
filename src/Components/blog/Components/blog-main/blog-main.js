//import useEffect
import { useEffect } from 'react';

//AOS animation
import AOS from 'aos';
import 'aos/dist/aos.css';

//import css
import "./blog-main.css"


//import blog image
import BlogImg from "./images/blog.png"

const BlogMain = () => {

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true
        });
    }, [])

    return (
        <div className="blog-main section-main">
            <img className="blog-img section-img float-infinite" src={BlogImg}/>

            <div className="blog-main-title section-info" data-aos = "fade-up" data-aos-duration = "750">
                <p className="blog-label">Marketing Strategies</p>
                <h2>PPC vs. Organic Marketing: Which One Is Right for Your Business?</h2>
                <p className="blog-info">
                    PPC and organic marketing each offer unique benefits for driving traffic and growing your
                    business. Discover which strategy aligns best with your goals and how to strike the
                    perfect balance.
                </p>
            </div>
        </div>
    )
}

export default BlogMain