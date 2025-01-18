import React from 'react';
import '../../../css/app.css';
import AddEntertainment from '../../../Components/Molecules/AddEntertainment/AddEntertainment';
import Testimonials from '../../../Components/Molecules/Testimonial/Testimonials';
import SectionIntro from '../../../Components/Molecules/Intro/SectionIntro'
import { Link } from '@inertiajs/react';
import IntroNoBTN from '../../../Components/Molecules/IntroNoBTN/IntroNoBTN';
import { ReactComponent as Camera } from '../../../Assets/svg/camera.svg';
import { ReactComponent as Cake } from '../../../Assets/svg/cake.svg';
import { ReactComponent as GBP } from '../../../Assets/svg/gbp.svg';
import { ReactComponent as Location } from '../../../Assets/svg/location.svg';
import { ReactComponent as Themed } from '../../../Assets/svg/themed.svg';
import { ReactComponent as Trophy } from '../../../Assets/svg/trophy.svg';
import wedding from '@assets/images/home_cards/weddings.png';
import birthday from '@assets/images/home_cards/weddings.png';
import corporate from '@assets/images/home_cards/corporate.png';
import charity from '@assets/images/home_cards/charity.png';
import themedevents from '@assets/images/home_cards/theming.png';
import locations from '@assets/images/home_cards/locations.png';
import EventInfoCard from './EventInfoCard';


export const boxData = [
  { id: 1, image: wedding, altTag: 'wedding_fun_casino_hire_photos', title: 'Wedding Photographs', description: "This is an important time for you to capture the critical memories. However, it can be a bit of waiting around for your guests, having a fun casino table or two keeping them entertained is a great way to pass the time. The tables themselves can make for a great 'photo op'. Our casino tables can also be set up outside, weather permitting.", buttonTitle:'Wedding Casino Hire', moreInfoText:"Interactive engaging wedding entertainment that won't bust the bank!", svgIcon:<Camera />, rotate: true, degreesToTilt: -6, link: '/event_info_card'},
  { id: 2, image: birthday, altTag: 'birthday_fun_casino_hire_Lancashire', title: 'Birthday Fun Casino Tables', description: 'Perfect for the coming of age birthday or any birthday really. Spice it up with prizes!', buttonTitle:'Birthday Casino Hire', moreInfoText:'Perfect for the coming of age birthday or any birthday really. Spice it up with prizes!', svgIcon:<Cake />, rotate: true, degreesToTilt: -6, link: '/weddings'},
  { id: 3, image: corporate, altTag: 'corporate_fun_casino_hire_Lancashire', title: 'Corporate Fun Casino Tables', description: "Team builds, product launches, anniversarys. You name it - only the best in entertainment will do.", buttonTitle:'Corporate Fun Casino', moreInfoText:'Team builds, product launches, anniversarys. You name it - only the best in entertainment will do.', svgIcon:<Trophy />, rotate: false, degreesToTilt: -6, link: '/weddings'},
  { id: 4, image: charity, altTag: 'charity_fun_casino_hire_Lancashire', title: 'Charity Casino Events', description: 'Versatile and fun - fundraising makes the casino tables a "must have" at your charity night.', buttonTitle:'Charity Casino Night', moreInfoText:'Versatile and fun - fundraising makes the casino tables a "must have" at your charity night.', svgIcon:<GBP />, rotate: true, degreesToTilt: -6, link: '/weddings'},
  { id: 5, image: themedevents, altTag: 'themed_events_fun_casino_hire_Lancashire', title: 'Themed Events', description: 'Our speciality James Bond nights could make the skyfall with that and many more amazing themes. We have the best ways to make your event special.', buttonTitle:'Themed Casino Nights', moreInfoText:'Our speciality James Bond nights could make the skyfall with that and many more amazing themes. We have the best ways to make your event special.', svgIcon:<Themed />, rotate: true, degreesToTilt: -6, link: '/weddings'},
  { id: 6, image: locations, altTag: 'locasions_for_fun_casino_hire_Lancashire', title: 'Our Locations', description: "Based in the North West, but do cover most areas of the UK especially for larger events. If you are concerned please don't hesitate to contact us.", buttonTitle:'Locations', moreInfoText:"Based in the North West, but do cover most areas of the UK especially for larger events. If you are concerned please don't hesitate to contact us", svgIcon:<Location />, rotate: true, degreesToTilt: -6, link: '/weddings'},
];

// 18th Birthday Fun Casino Hire
// "Celebrate the start of adulthood with a bang! Our 18th birthday fun casino tables offer the perfect entertainment for a night to remember. Whether you're hosting a glamorous affair or a casual party, our roulette tables and blackjack tables are ideal for guests of all ages to enjoy. As the legal drinking age is reached, add an extra layer of excitement with some friendly competition around the tables. Book today and make this milestone birthday one your guests will be talking about for years!"

// Internal Links: Link to Fun Casino Table Hire page, Roulette Table Hire page.
// 21st Birthday Casino Table Hire
// "Turning 21 is a special occasion that calls for a celebration like no other. Make your 21st birthday party unforgettable with our fun casino table hire. Whether you’re in the mood for a high-stakes poker game or the thrill of roulette, our professional croupiers will make sure the fun never stops. Perfect for both intimate gatherings and larger parties, our casino games will keep your guests engaged all night long!"

// Internal Links: Link to Poker Table Hire page, Casino Packages page.
// 30th Birthday Fun Casino Tables
// "Celebrating a 30th birthday marks the perfect time for a big party! Treat yourself and your guests to an unforgettable night with our fun casino table hire. Bring out your inner high roller with blackjack and roulette tables, perfect for keeping the atmosphere lively and exciting. Whether it's a laid-back party or an all-out bash, we’ll provide the perfect setup to match your style!"

// Internal Links: Link to Blackjack Table Hire page, Fun Casino Table Hire page.
// 40th Birthday Casino Hire
// "Your 40th birthday is a milestone worth celebrating in style! Whether you're marking this special occasion with close friends or a grand event, our casino table hire will bring an element of sophistication and excitement. With our roulette and blackjack tables, guests of all ages can enjoy a thrilling casino experience that’s guaranteed to be a hit. Elevate your party with some friendly competition and unforgettable memories!"

// Internal Links: Link to Casino Table Hire page, Event Entertainment page.
// 50th Birthday Fun Casino Tables
// "Fifty and fabulous! Celebrate your 50th birthday in true style with our professional casino table hire. Our poker tables, roulette, and blackjack tables are the perfect addition to your event, offering an interactive and engaging experience that keeps guests entertained all night. Whether you’re throwing an intimate gathering or a big bash, our casino games add a touch of glamour and excitement to this milestone birthday!"

// Internal Links: Link to Fun Casino Table Hire page, Event Packages page.
// 60th Birthday Casino Hire
// "A 60th birthday is a time to reflect, celebrate, and create lasting memories with loved ones. Our fun casino table hire is perfect for adding excitement and glamour to this significant milestone. From roulette to blackjack and poker tables, our games are designed to keep your guests entertained and engaged throughout the evening. Celebrate with style and sophistication, making this birthday a celebration you’ll cherish forever!


const BirthdayPage = () => {
  return (
    <div className="App">
 
      <IntroNoBTN titleText='"Birthday Fun Casino Hire | Casino Casino Casino Ltd"' isH1={true} buttonLink='#' buttonText='Read About Us'>
      <p>Planning a birthday party and want to make it truly unforgettable? Whether you're celebrating a milestone or just another special year, Casino Casino Casino provides the ultimate entertainment experience with our fun casino table hire. Our range of casino games, including roulette, blackjack, and poker tables, are a fantastic way to bring guests together, creating memories that will last long after the party ends.</p>
      <p>From 18th birthdays to 60th birthdays and beyond, our casino tables add excitement and elegance to any celebration. Plus, if you’re planning multiple events or hiring other entertainment options, we offer great discounts when you bundle services like <Link href="/magic_mirror">magic selfie mirrors</Link>, <Link href="/led_dancefloors">dazzling dancefloors</Link>, and our <Link href="/chocolate_fountains">deluxe chocolate fountains</Link>. Read on to discover the perfect casino experience for your birthday celebration!</p>
      </IntroNoBTN>
      <div className="wrapper">
      <EventInfoCard/>
      </div>
      
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
        <p>Looking to add even more excitement to your event? In addition to our fun casino tables, we offer a range of premium entertainment options to make your special day unforgettable. From <Link href="/led_dancefloors">dazzling white LED dancefloors</Link> to the perfect photo opportunity with our <Link href="/magic_mirror">magic selfie mirrors</Link>, we’ve got everything you need to create lasting memories. Enhance the atmosphere with romantic <Link href="/led_letters">LOVE letters</Link>, indulge your guests with <Link href="/chocolate_fountains">deluxe chocolate fountains</Link>, and more – all from one trusted provider.</p>
        <p>Book multiple services with us and enjoy exclusive package discounts – because your event deserves nothing but the best!</p>
        <AddEntertainment/>
      </div>
    </div>
  );
}

export default BirthdayPage;
