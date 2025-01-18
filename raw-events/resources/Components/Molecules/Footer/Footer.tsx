import React from 'react';
import './footer.scss';
import logo from '../../../Assets/images/logo.png';
import SocialAnimateName from '../Social/SocialAnimateName';

export default function Footer() {
  return (
    <footer>
        <div className="footer-container">
            <h3>Established over 20 years</h3>
            <img src={logo} alt="Casino_Casino_Casino_Logo" id="Logo"/>
            <div className="footer-nav">
                <ul className="nav-list">
                    <li>Home</li>
                    <li>Contact</li>
                    <li>Insurance</li>
                    <li>Sitemap</li>
                </ul>
            </div>
            <p>Casino Casino Casino © 2025</p>
        </div>
        <div className="footer-container">
            <address>7 Ruthin Drive<br/>
            Thornton-Cleveleys<br/>
            Lancashire<br/>
            FY6 8JX</address>
            <h5>email: <a href="mailto:info@casinocasinocasino.co.uk">info@CasinoCasinoCasino.co.uk</a></h5>
            <h5>Tel: <a href="tel:01253983909">01253 983909</a></h5>
            <h5>Mob: <a href="tel:07834348169">07834 348169</a></h5>
        </div>
        <div className="footer-container">
            <SocialAnimateName/>
        </div>    
    </footer>
  )
}