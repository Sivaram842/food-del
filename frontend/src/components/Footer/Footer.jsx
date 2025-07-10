import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
import titleLogo from '../../assets/tt.png';


const Footer = () => {
    return (
        <div className='footer' id='footer'>
            <div className="footer-content">
                <div className="footer-content-left">
                    <img src={titleLogo} alt="" />
                    <p>Our Food Delivery App is a modern and user-friendly platform designed to bring your favorite meals straight to your doorstep with just a few taps. Whether you're craving traditional cuisine, fast food, or gourmet dishes, the app connects users with a wide range of local restaurants and cloud kitchens. Featuring real-time order tracking, secure online payments, and personalized recommendations, it ensures a seamless and satisfying food ordering experience. </p>
                    <div className="footer-social-icon">
                        <img src={assets.facebook_icon} alt="" />
                        <img src={assets.twitter_icon} alt="" />
                        <img src={assets.linkedin_icon} alt="" />
                    </div>
                </div>
                <div className="footer-content-center">
                    <h2>COMPANY</h2>
                    <ul>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Delivery</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div className="footer-content-right">
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li>+91 9032488161</li>
                        <li>contact@TangyBite.com</li>
                    </ul>
                </div>

            </div>
            <hr />
            <p className="footer-copyright">
                Copyright 2025 @ TangyBite.com All Right Reserved
            </p>
        </div>
    )
}

export default Footer
