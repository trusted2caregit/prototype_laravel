import '../../../src/App.css';
import Header from '../../Components/Molecules/Header/Header';
import HeroSlider from '../../Components/Molecules/HeroSlider/HeroSlider';
import Intro from '../../Components/Molecules/Intro/Intro';
import QuickQuote from '../../Components/Molecules/QuickQuote/QuickQuote';
import Occasion from '../../Components/Molecules/Occasion/Occasion';
import AddEntertainment from '../../Components/Molecules/AddEntertainment/AddEntertainment';
import Locations from '../../Components/Molecules/Locations/Locations';
import Testimonials from '../../Components/Molecules/Testimonial/Testimonials';
import MainNav from '../../Components/Molecules/MainNav/MainNav';
import TopHeader from '../../Components/Molecules/TopHeader/TopHeader';
import Footer from '../../Components/Molecules/Footer/Footer';
import WhyUs from '../../Components/Molecules/WhyUs/WhyUs';
import SectionIntro from '../../Components/Molecules/Intro/SectionIntro'


const EndofSeasonAwardsPage = () => {
  return (
    <div className="App">
 
      <Intro titleText='"Premium Fun Casino Entertainment | Casino Casino Casino Ltd"' isH1={true} buttonLink='#' buttonText='Read About Us'>
      <p>At Casino Casino Casino Ltd, our mission is to elevate every event to unforgettable heights by providing premium entertainment services tailored to the unique needs of our clients. With over 20 years of industry expertise, we pride ourselves on delivering high-class experiences through our professional croupiers, extensive range of equipment, and personalised approach to each event.</p>
      <p>From fun casino nights and selfie mirrors to dazzling dancefloors and themed experiences, we strive to exceed expectations and create lasting memories for weddings, milestone birthdays, charity events, corporate gatherings, and more.</p>
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
        <SectionIntro buttonLink='#' buttonText='Read More'>
        <p>Please feel free to read some more real life testimonials off our customers.</p>
        </SectionIntro>
      </div>
      <Locations/>
    </div>
  );
}

export default EndofSeasonAwardsPage;
