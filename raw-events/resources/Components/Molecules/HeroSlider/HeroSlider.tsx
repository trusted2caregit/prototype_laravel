// HeroSlider.tsx
import React, { useEffect, useState } from 'react';
import './heroslider.scss';
import corporate from '../../../Assets/images/home_slider/Corporate_Event_Roulette_Croupier_Showgirl_Bet_Fred_50th_Anniversary.jpg';
import wedding from '../../../Assets/images/home_slider/Wedding_Blackjack_Black_&_White_I_Told_You_So.jpg';
import weddingrt from '../../../Assets/images/home_slider/Wedding_Roulette_Casino_Winning.jpg';
import weddingbj from '../../../Assets/images/home_slider/Wedding_Blackjack_Bride_Groom.jpg';
import charityrt from '../../../Assets/images/home_slider/Chartiy_Night_Roulette_Denise_Welch_Gem_Appeal.jpg';
import birthday from '../../../Assets/images/home_slider/Pool_Party_Barn_Burnley_Burnley.jpg';
import birthdayrt from '../../../Assets/images/home_slider/Pool_Party_Barn_Burnley_Roulette.jpg';
//import ledbj from '../../../Assets/images/home_slider/LED_Casino_Tables_Blackjack.jpg';
import showgirl from '../../../Assets/images/home_slider/Roulette_Showgirl_&_Guests.jpg';
import christmas from '../../../Assets/images/home_slider/Christmas_Party_Night_LED_Roulette_Rivington_Hall_Barn_2023.jpg';
import corporatert from '../../../Assets/images/home_slider/Corporate_Event_Roulette_Croupier_Showgirl_Bet_Fred_50th_Anniversary.jpg';
import corporatebh from '../../../Assets/images/home_slider/Corporate_Birmingham_NEC_Water_Equipment_Show_Casino_Setup_2.jpg';
import corporatebj from '../../../Assets/images/home_slider/Corporate_Event_Blackjack_Denise_Welch_2013.jpg';
import props from '../../../Assets/images/home_slider/Pool_Party_Barn_Burnley_Flame_Lights_Glitter_Dice_Red_Carpet.jpg';


interface Slide {
  id: number;
  image: string;
  title: string;
  description: string;
  backgroundPosition?: string;
}

const slides: Slide[] = [
  {
    id: 1,
    image: corporate,
    title: 'Corporate Events Covered',
    description: 'Add a touch of class to your corporate event',
    backgroundPosition: 'top top',
  },
  {
    id: 2,
    image: wedding,
    title: 'Wedding Entertainment',
    description: 'A great way to keep your guests entertained',
    backgroundPosition: 'centre centre',
  },
  {
    id: 3,
    image: weddingrt,
    title: 'Wedding - Roulette Table Hire',
    description: "Interactive & engaging wedding entertainment that won't bust the bank!",
    backgroundPosition: 'top top',
  },
  {
    id: 4,
    image: weddingbj,
    title: 'Wedding - Blackjack Table Hire',
    description: 'Professional croupiers to create a fun atmosphere',
    backgroundPosition: 'centre centre',
  },
  {
    id: 5,
    image: charityrt,
    title: 'Chartity Events',
    description: 'Raise money using out fun casino tables',
    backgroundPosition: 'centre centre',
  },
  {
    id: 6,
    image: birthday,
    title: 'Birthday Entertainment',
    description: 'Fun and entertaining - Everyone will be talking about',
    backgroundPosition: 'centre centre',
  },
  {
    id: 7,
    image: birthdayrt,
    title: 'Special Birthday Entertainment - Casino Hire',
    description: 'Who can win the most Fun Money to have bragging rights!',
    backgroundPosition: 'bottom',
  },
  {
    id: 8,
    image: showgirl,
    title: 'Brighten Up your Event - LED Casino',
    description: 'Add to your atmoshere with LED Casino Tables',
    backgroundPosition: 'centre centre',
  },
  {
    id: 9,
    image: showgirl,
    title: 'Las Vegas Showgirls',
    description: 'Add to your atmoshere with LED Casino Tables',
    backgroundPosition: 'centre centre',
  },
  {
    id: 10,
    image: christmas,
    title: 'Christmas Party Night',
    description: 'We are specialists of making nights FUN',
    backgroundPosition: 'bottom',
  },
  {
    id: 11,
    image: corporatert,
    title: 'Wide Range of Corporate Entertainment',
    description: 'High Quality Roulette Tables',
    backgroundPosition: 'centre centre',
  },
  {
    id: 12,
    image: corporatebh,
    title: 'Large Corporate Events',
    description: 'With over 20 casino tables - we have you covered',
    backgroundPosition: 'centre centre',
  },
  {
    id: 13,
    image: corporatebj,
    title: 'High Profile Clients',
    description: 'We work closely with many agenices across the country',
    backgroundPosition: 'top centre',
  },
  {
    id: 14,
    image: props,
    title: 'Prop Hire',
    description: 'Want something a bit more - add some theming to your event',
    backgroundPosition: 'centre centre',
  },
  // Add more slides as needed
];
const HeroSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [overlayVisible, setOverlayVisible] = useState(false);

  const nextSlide = () => {
    setOverlayVisible(false);
    setTimeout(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
      setOverlayVisible(true);
    }, 1000); // 1 second delay
  };

  const prevSlide = () => {
    setOverlayVisible(false);
    setTimeout(() => {
      setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
      setOverlayVisible(true);
    }, 1000); // 1 second delay
  };

  return (
    <div className="hero-slider">
      <div className="slider-content" style={{ backgroundImage: `url(${slides[currentSlide].image})`, backgroundPosition: slides[currentSlide].backgroundPosition }}>
        <div className={`overlay ${overlayVisible ? 'overlay-visible' : ''}`}>
          <h1 className="slide-title">{slides[currentSlide].title}</h1>
          <p className="slide-description">{slides[currentSlide].description}</p>
        </div>
      </div>
      <div className="navigation">
        <button className="prev-button" onClick={prevSlide}>&#9665;</button>
        <button className="next-button" onClick={nextSlide}>&#9655;</button>
      </div>
    </div>
  );
};

export default HeroSlider;