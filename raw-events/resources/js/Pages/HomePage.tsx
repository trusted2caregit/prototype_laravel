import React from 'react';
import '../../css/app.css';
import HeroSlider from 'resources/Components/Molecules/HeroSlider/HeroSlider';
import Intro from 'resources/Components/Molecules/Intro/Intro';
import QuickQuote from 'resources/Components/Molecules/QuickQuote/QuickQuote';
import Occasion from 'resources/Components/Molecules/Occasion/Occasion';
import AddEntertainment from 'resources/Components/Molecules/AddEntertainment/AddEntertainment';
import Locations from 'resources/Components/Molecules/Locations/Locations';
import Testimonials from 'resources/Components/Molecules/Testimonial/Testimonials';
import WhyUs from 'resources/Components/Molecules/WhyUs/WhyUs';
import SectionIntro from 'resources/Components/Molecules/Intro/SectionIntro'



const Home = () => {
  return (
    <div className="App">
      
      <div className="wrapper">
        <h2>Occasions</h2>
        <p>At Casino Casino Casino Ltd, our fun casino entertainment services are perfect for a variety of special occasions. Whether you're celebrating a once-in-a-lifetime event like a wedding or marking a milestone birthday such as an 18th, 21st, 30th, 40th, 50th, or 60th, our packages are designed to add excitement and glamour to your festivities.</p>
        <p>Additionally, we specialise in hosting Charity Casino Nights, providing a unique and engaging way to raise funds for a good cause while ensuring your guests have an unforgettable experience.</p>
        <p>Furthermore, our themed events, inspired by iconic themes like James Bond, Las Vegas, Hollywood, and the Wild West, offer a touch of extravagance and sophistication to any themed night.</p>
        <p>Lastly, our corporate entertainment services provide the perfect blend of professionalism and fun, making us the ideal choice for corporate events and team-building activities. Whatever the occasion, Casino Casino Casino Ltd is here to make your event truly memorable.</p>
      </div>
    </div>
  );
}

export default Home;
