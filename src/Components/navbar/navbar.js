//import browserRouter, Link, Routes, Route, useLocation
import { BrowserRouter, Link, Routes, Route, useLocation } from "react-router-dom"

//import useState
import { useState, useEffect } from 'react';

// import bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

//import css
import "./navbar.css"

//import logo
import logoBlack from "./images/logo-black.png"


//import Home
import Home from "../home/home";

//import About
import About from "../about/about";

//import Services
import Services from "../services/services";

//import UseCases
import UseCases from "../use-cases/use-cases";

//import Pricing
import Pricing from "../pricing/pricing";

//import Blog
import Blog from "../blog/blog";

const NavbarContent = () => {
    const [activeIndex, setActiveIndex] = useState(null);
    const location = useLocation();
    // detect active link from pathname
    useEffect(() => {
        switch (location.pathname) {
            case "/About":
                setActiveIndex(0);
                break;
            case "/Services":
                setActiveIndex(1);
                break;
            case "/UseCases":
                setActiveIndex(2);
                break;
            case "/Pricing":
                setActiveIndex(3);
                break;
            case "/Blog":
                setActiveIndex(4);
                break;
            default:
                setActiveIndex(null);
        }
    }, [location.pathname]);

    const liEvent = (index) => {
        setActiveIndex(index);
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg cs-navbar flex-between">
                <div className="container-fluid">
                    {/* Logo */}
                    <Link
                        to="/"
                        className="navbar-brand"
                        onClick={() => setActiveIndex(null)} // when pressing on logo
                    >
                        <img className='logo' src={logoBlack} alt="Logo" />
                    </Link>

                    {/* Hamburger Button */}
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* Collapsible Menu */}
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

                            <li className="nav-item"> 
                                <Link to="/About" 
                                    className={`nav-link li ${activeIndex === 0 ? 'li-event' : ''}`}
                                    onClick={() => liEvent(0)}
                                >
                                    About Us
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link to="/Services" 
                                    className={`nav-link li ${activeIndex === 1 ? 'li-event' : ''}`}
                                    onClick={() => liEvent(1)}
                                >
                                    Services
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link to="/UseCases"
                                    className={`nav-link li ${activeIndex === 2 ? 'li-event' : ''}`}
                                    onClick={() => liEvent(2)}
                                >
                                    Use Cases
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link to="/Pricing"
                                    className={`nav-link li ${activeIndex === 3 ? 'li-event' : ''}`}
                                    onClick={() => liEvent(3)}
                                >
                                    Pricing
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link to="/Blog"
                                    className={`nav-link li ${activeIndex === 4 ? 'li-event' : ''}`}
                                    onClick={() => liEvent(4)}
                                >
                                    Blog
                                </Link>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link li" href="#">
                                    <button className='req-quote'>Request a quote</button>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* Routes */}
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/About" element={<About />}></Route>
                <Route path="/Services" element={<Services />}></Route>
                <Route path="/UseCases" element={<UseCases />}></Route>
                <Route path="/Pricing" element={<Pricing />}></Route>
                <Route path="/Blog" element={<Blog />}></Route>

                Blog
            </Routes>
        </>
    )
}

const Navbar = () => (
    <BrowserRouter basename="/Positivus4">

        <NavbarContent />
    </BrowserRouter>
);

export default Navbar;
