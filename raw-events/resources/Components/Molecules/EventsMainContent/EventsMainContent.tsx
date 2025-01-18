import React, { ReactNode } from 'react';
import './eventsmainontent.scss';
import SocialAnimateBtn from '../SocialButtons/SocialAnimateBtn';
import EventInfoCard from '../../../js/Pages/EventsPages/EventInfoCard';


const EventsMainContent: React.FC = () => {
   return (
    <div className="content-wrapper">
      <div className='left-content'>
        <EventInfoCard/>
      </div>
      <div className='middle-content'>
        <p>hello</p>
      </div>
      <div className='right-content'>
        <div className="contact-form-wrapper">
          <div className="contact-form">
            <h2>Contact Us</h2>
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
            <textarea placeholder="Your Message"></textarea>
            <div className="cta-buttons">
              <button className="cta-primary">Submit</button>
              <button className="cta-secondary">Cancel</button>
            </div>
          </div>
        </div>
        <SocialAnimateBtn/>
      </div>
    </div>
  );
};

export default EventsMainContent;
