import React from 'react';
import { Link } from 'react-router-dom';
import sc_logo from '../assets/imgs/sc_logo.png';

import { FiAperture, FiFacebook, FiInstagram, FiMail, FiMapPin, FiPhone, FiYoutube } from "react-icons/fi";


const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <div className='footer-main'>
            <div className="container footer-outer-container">                
                <div className="row">
                    <div className="col-lg-4 my-3">
                        <Link className="navbar-brand" to="/">
                            <img src={sc_logo} alt='Brand Name' className='brandLogo' />
                        </Link>
                        <hr />
                        <p className='footerQuickLinks'><strong>A Slice of Joy in Every Celebration</strong><br />Handcrafted cakes made with love, for the moments that matter.</p>
                        <div className='footer-icons'>
                            <Link className='footerSocialLinks' to="https://www.facebook.com/SnehalCakesStudio/" target="_blank">
                                <FiFacebook />
                            </Link>
                            <Link className='footerSocialLinks' to="https://www.instagram.com/snehal_cakes_studio/" target="_blank">
                                <FiInstagram />
                            </Link>
                            <Link className='footerSocialLinks' to="https://www.youtube.com/" target="_blank">
                                <FiYoutube />
                            </Link>
                        </div>
                    </div>
                    <div className="col-lg-4 my-3">
                        <h4>📌 Quick Links</h4>
                        <Link to='/' className='footerConnectInfo'>
                            <span><FiAperture /> Home</span>
                        </Link>
                        <Link to='/about' className='footerConnectInfo'>
                            <span><FiAperture /> About Us</span>
                        </Link>
                        <Link to='/products' className='footerConnectInfo'>
                            <span><FiAperture /> Products</span>
                        </Link>
                        <Link to='/faq' className='footerConnectInfo'>
                            <span><FiAperture /> FAQ's</span>
                        </Link>
                        <Link to='/policy' className='footerConnectInfo'>
                            <span><FiAperture /> Privacy Policy</span>
                        </Link>
                        <Link to='/tandc' className='footerConnectInfo'>
                            <span><FiAperture /> Terms & Conditions</span>
                        </Link>
                    </div>
                    <div className="col-lg-4 my-3">
                        <h4>🌍 Get in Touch</h4>
                        <p>We'd love to be a part of your sweetest moments — connect with us and let's create something delightful together!</p>
                        <Link to='' className='footerConnectInfo'>
                            <span><FiMapPin /> Kannamwar Ward, Zhansi Rani Square, Ballarpur, Dist.Chandrapur</span>
                        </Link>
                        <Link to='' className='footerConnectInfo'>
                            <span><FiPhone /> +91 9876543210</span>
                        </Link>
                        <Link to='' className='footerConnectInfo'>
                            <span><FiMail /> snehalcakes@email.com</span>
                        </Link>
                        
                    </div>
                </div>
                <hr />
                <p className="footer-company-name"><Link to='/'>SnehalCakesStudio &copy; {currentYear}</Link></p>
            </div>
        </div>
        
    )
}

export default Footer;