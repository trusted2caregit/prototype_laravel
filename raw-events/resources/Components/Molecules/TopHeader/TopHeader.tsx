import React from 'react';
import './topheader.scss';
import logo from '../../../Assets/images/logo.png';

export default function TopHeader() {
  return (
    <header className="header-wrapper">
        <section className="section-wrapper">
            <div className="logo-section">
                <a href="#">
                    <img src={logo} alt="Casino_Casino_Casino_Logo" id="Logo"/>
                </a>
            </div>
            <section className="info-section">
                <h3>
                    <a href="tel:07834348169">07834 348 169</a>
                </h3>
                <h3>
                    <a href="mailto:info@casinocasinocasino.co.uk">info@casinocasinocasino.co.uk</a>
                </h3>
            </section>
        </section>
    </header>
  )
}




