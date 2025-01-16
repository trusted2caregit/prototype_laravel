import '../../css/app.css';
import React from 'react';
import AddEntertainment from '../../Components/Molecules/AddEntertainment/AddEntertainment';
import Testimonials from '../../Components/Molecules/Testimonial/Testimonials'
import SectionIntro from '../../Components/Molecules/Intro/SectionIntro';
import EventsMainContent from '../../Components/Molecules/EventsMainContent/EventsMainContent';
import IntroNoBTN from '../../Components/Molecules/IntroNoBTN/IntroNoBTN';


export const boxData = [
  { id: 1, image: wedding, altTag: 'wedding_fun_casino_hire_photos', title: 'Wedding Photographs', description: "This is an important time for you to capture the critical memories. However, it can be a bit of waiting around for your guests, having a fun casino table or two keeping them entertained is a great way to pass the time. The tables themselves can make for a great 'photo op'. Our casino tables can also be set up outside, weather permitting.", buttonTitle:'Wedding Casino Hire', moreInfoText:"Interactive engaging wedding entertainment that won't bust the bank!", svgIcon:<Camera />, rotate: true, degreesToTilt: -6, link: '/event_info_card'},
  { id: 2, image: birthday, altTag: 'birthday_fun_casino_hire_Lancashire', title: 'Birthday Fun Casino Tables', description: 'Perfect for the coming of age birthday or any birthday really. Spice it up with prizes!', buttonTitle:'Birthday Casino Hire', moreInfoText:'Perfect for the coming of age birthday or any birthday really. Spice it up with prizes!', svgIcon:<Cake />, rotate: true, degreesToTilt: -6, link: '/weddings'},
  { id: 3, image: corporate, altTag: 'corporate_fun_casino_hire_Lancashire', title: 'Corporate Fun Casino Tables', description: "Team builds, product launches, anniversarys. You name it - only the best in entertainment will do.", buttonTitle:'Corporate Fun Casino', moreInfoText:'Team builds, product launches, anniversarys. You name it - only the best in entertainment will do.', svgIcon:<Trophy />, rotate: false, degreesToTilt: -6, link: '/weddings'},
  { id: 4, image: charity, altTag: 'charity_fun_casino_hire_Lancashire', title: 'Charity Casino Events', description: 'Versatile and fun - fundraising makes the casino tables a "must have" at your charity night.', buttonTitle:'Charity Casino Night', moreInfoText:'Versatile and fun - fundraising makes the casino tables a "must have" at your charity night.', svgIcon:<GBP />, rotate: true, degreesToTilt: -6, link: '/weddings'},
  { id: 5, image: themedevents, altTag: 'themed_events_fun_casino_hire_Lancashire', title: 'Themed Events', description: 'Our speciality James Bond nights could make the skyfall with that and many more amazing themes. We have the best ways to make your event special.', buttonTitle:'Themed Casino Nights', moreInfoText:'Our speciality James Bond nights could make the skyfall with that and many more amazing themes. We have the best ways to make your event special.', svgIcon:<Themed />, rotate: true, degreesToTilt: -6, link: '/weddings'},
  { id: 6, image: locations, altTag: 'locasions_for_fun_casino_hire_Lancashire', title: 'Our Locations', description: "Based in the North West, but do cover most areas of the UK especially for larger events. If you are concerned please don't hesitate to contact us.", buttonTitle:'Locations', moreInfoText:"Based in the North West, but do cover most areas of the UK especially for larger events. If you are concerned please don't hesitate to contact us", svgIcon:<Location />, rotate: true, degreesToTilt: -6, link: '/weddings'},
];


const ReviewsPage = () => {
  return (
    <div className="App">
 
      <IntroNoBTN titleText='"Wedding Fun Casino Entertainment | Casino Casino Casino Ltd"' isH1={true} buttonLink='#' buttonText='Read About Us'>
      <p>Make your wedding unforgettable with our premium fun casino table hire. From elegant roulette tables to thrilling blackjack games, we bring a touch of sophistication and fun to your special day.</p>
      <p>Whether it's during the photo period, wedding breakfast, or evening reception, our casino tables keep guests entertained and talking about your wedding for years to come!</p>
      <p>Don't forget we have more services that go perfectly for weddings</p>
      </IntroNoBTN>
      <EventsMainContent/>
      
      <div className="wrapper">
        <h2>Reccomendations</h2>
        <p>Don't just take our word for it. Take a look at What Our Couples Say: </p>
        <Testimonials/>
        <SectionIntro buttonLink='#' buttonText='Read More'>
        <p>Please feel free to read some more real life testimonials off our customers.</p>
        </SectionIntro>
      </div>
      <div className="wrapper">
        <h2>More Entertainment</h2>
        <p>Looking to add even more excitement to your event? In addition to our fun casino tables, we offer a range of premium entertainment options to make your special day unforgettable. From <Link to="/led_dancefloors">dazzling white LED dancefloors</Link> to the perfect photo opportunity with our <Link to="/magic_mirror">magic selfie mirrors</Link>, we’ve got everything you need to create lasting memories. Enhance the atmosphere with romantic <Link to="/led_letters">LOVE letters</Link>, indulge your guests with <Link to="/chocolate_fountains">deluxe chocolate fountains</Link>, and more – all from one trusted provider.</p>
        <p>Book multiple services with us and enjoy exclusive package discounts – because your event deserves nothing but the best!</p>
        <AddEntertainment/>
      </div>
    </div>
  );
}

export default ReviewsPage;