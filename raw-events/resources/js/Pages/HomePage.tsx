import React from 'react';
import '../../css/app.css';
import HeroSlider from '../../Components/Molecules/HeroSlider/HeroSlider';
import Intro from '../../Components/Molecules/Intro/Intro';
import QuickQuote from '../../Components/Molecules/QuickQuote/QuickQuote';
import Occasion from '../../Components/Molecules/Occasion/Occasion';
import AddEntertainment from '../../Components/Molecules/AddEntertainment/AddEntertainment';
import Locations from '../../Components/Molecules/Locations/Locations';
import Testimonials from '../../Components/Molecules/Testimonial/Testimonials';
import WhyUs from '../../Components/Molecules/WhyUs/WhyUs';
import SectionIntro from '../../Components/Molecules/Intro/SectionIntro'
import { Link } from '@inertiajs/react';



const HomePage = () => {
  return (
    <div className="App">
      <HeroSlider/>
      <Intro titleText='"Premium Fun Casino Entertainment | Casino Casino Casino Ltd"' isH1={true} buttonLink='/about_us' buttonText='Read About Us'>
      <p>We are your go-to provider for fun casino table hire in the North West.</p>
      <p>Whether you're planning a wedding, birthday, corporate event, or charity fundraiser, our luxury casino tables and professional croupiers guarantee a night of fun and excitement.</p>
      <p>Explore our wide range of services and find the perfect entertainment for your special occasion.</p>
      <p>From fun casino nights and <Link href="/magic_mirror">selfie mirrors</Link> to <Link href="/led_dancefloors">dazzling dancefloors</Link> and <Link href="/themed_nights">themed experiences</Link>, we strive to exceed expectations and create lasting memories for <Link href="/weddings">weddings</Link>, <Link href="/birthdays">milestone birthdays</Link>, <Link href="/charity_nights">charity events</Link>, <Link href="/corporate">corporate gatherings</Link>, and more.</p>
      <p>Our commitment to excellence ensures that every client receives the attention they deserve, making us the premier choice for exceptional entertainment services. Let us transform your event into an extraordinary celebration with Casino Casino Casino Ltd.</p>
      </Intro>    
      <QuickQuote/>
      <div className="wrapper">
        <h2>Occasions</h2>
        <p>At Casino Casino Casino Ltd, our fun casino entertainment services are perfect for a variety of special occasions. Whether you're celebrating a once-in-a-lifetime event like a wedding or marking a milestone birthday such as an 18th, 21st, 30th, 40th, 50th, or 60th, our packages are designed to add excitement and glamour to your festivities.</p>
        <p>Additionally, we specialise in hosting Charity Casino Nights, providing a unique and engaging way to raise funds for a good cause while ensuring your guests have an unforgettable experience.</p>
        <p>Furthermore, our themed events, inspired by iconic themes like James Bond, Las Vegas, Hollywood, and the Wild West, offer a touch of extravagance and sophistication to any themed night.</p>
        <p>Lastly, our corporate entertainment services provide the perfect blend of professionalism and fun, making us the ideal choice for corporate events and team-building activities. Whatever the occasion, Casino Casino Casino Ltd is here to make your event truly memorable.</p>
        <Occasion/>
      </div>
      <div className="wrapper">
        <h2>More Entertainment</h2>
        <p>At Casino Casino Casino Ltd, we listen to our clients "Your service is briilant; wish you supplied our selfie mirror!" So we did just that...</p>
        <p>Our wide range of premium services is designed to elevate your event: From our captivating selfie mirrors, elegant white LED twinkle dancefloors, mesmerizing LED letters, to our indulgent chocolate fountain hire, we bring the perfect blend of fun and elegance to every occasion. Explore our services below and let us turn your event into a memorable celebration that guests will rave about for years to come.</p>
        <AddEntertainment/>
      </div>
      <div className="wrapper">
        <h2>Why Choose Us!</h2>
        <p>At Casino Casino Casino Ltd, we pride ourselves on being the premier choice for your entertainment needs. With over 20 years of experience in the event industry, our team brings a wealth of expertise and professionalism to every occasion. We understand that choosing the right entertainment provider is crucial, which is why we offer a range of compelling reasons to consider us:</p>
        <WhyUs />
      </div>
      <div className="wrapper">
        <h2>Reccomendations</h2>
        <p>We take pride in our positive reviews and recommendations from satisfied clients, reflecting our commitment to delivering exceptional entertainment experiences.</p>
        <Testimonials/>
        <SectionIntro buttonLink='/reviews_all' buttonText='Read More'>
        <p>Please feel free to read some more real life testimonials off our customers.</p>
        </SectionIntro>
      </div>
      <Locations/>
    </div>
  );
}

export default HomePage;

