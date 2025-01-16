import React, { useEffect } from 'react';
import './whyus.scss';
import './WhyUsScript';


const WhyUs = () => {
  return (
    <section id='why-us' className='why-us'>
      <div className='main-text'>
        <span>What Were Are About</span>
        <h2>Reputation</h2>          
      </div>

      <div className="attrib-main">
        <div className="attrib-left">
          <h3>Tables</h3>
          <div className="attrib-bar">
            <div className="info">
              <p>Roulette</p>
              <p>72%</p>
            </div>
            <div className="bar">
              <span className='roulette'></span>
            </div>
          </div>

          <div className="attrib-bar">
            <div className="info">
              <p>Blackjack</p>
              <p>90%</p>
            </div>
            <div className="bar">
              <span className='blackjack'></span>
            </div>
          </div>

          <div className="attrib-bar">
            <div className="info">
              <p>Stud Poker</p>
              <p>80%</p>
            </div>
            <div className="bar">
              <span className='stud-poker'></span>
            </div>
          </div>

          <div className="attrib-bar">
            <div className="info">
              <p>Craps</p>
              <p>62%</p>
            </div>
            <div className="bar">
              <span className='craps'></span>
            </div>
          </div>


        </div>
        <div className='attrib-right'>
            <h3>Events</h3>
            <div className="events">
              <div className="box">
                <div className="circle" data-dots="80" data-percent="90"></div>
                <div className="text">
                  <big>90%</big>
                  <small>Weddings</small>
                </div>
              </div>

              <div className="box">
              <div className="circle" data-dots="80" data-percent="80"></div>
                <div className="text">
                  <big>80%</big>
                  <small>Birthdays</small>
                </div>
              </div>

              <div className="box">
              <div className="circle" data-dots="80" data-percent="55"></div>
                <div className="text">
                  <big>55%</big>
                  <small>Corporate</small>
                </div>
              </div>

              <div className="box">
              <div className="circle" data-dots="80" data-percent="70"></div>
                <div className="text">
                  <big>70%</big>
                  <small>Charity</small>
                </div>
              </div>
              
            </div>
          </div>
        </div>

    </section>
  )
}


export default WhyUs;