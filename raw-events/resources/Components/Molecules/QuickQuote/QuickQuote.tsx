import React, { useState } from 'react'
import './quickquote.scss';

const QuickQuote = () => {
  const [isactive, setIsActive] = useState(false);
  return (
    <div className="quote">
      <div className="wrapper">
          <div className='box'>
            <div className="message">
                <div className="messageBx">
                    <h2>Message Us</h2>                 
                    <input type="text" placeholder='Name'/>
                    <input type="tel" placeholder='Phone Number'/>
                    <input type="email" placeholder='Email Address'/>
                    <input type="date" placeholder='Event Date' name="Event Date" id="EventDate" />
                    <button>Send Message</button>
                </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default QuickQuote;
