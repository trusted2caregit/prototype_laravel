import React, { useState } from 'react';
import './mainnav.scss';
import weddingrings from '../../../Assets/images/main_menu_images/wedding_rings_w100px.png';
import locations from '../../../Assets/images/main_menu_images/North_West_Counties_small.png';
import playingcard from '../../../Assets/images/main_menu_images/blackjack_card.png';
import golddice from '../../../Assets/images/main_menu_images/giant_gold_glitter_dice.png';
import champagneglass from '../../../Assets/images/main_menu_images/champagne_glasses.jpg';
import { Link } from 'react-router-dom';

const MainNav: React.FC = () => {
  const [openDropdown, setOpenDropdown] = useState('');

  const toggleDropdown = (dropdownName: string) => {
    setOpenDropdown(openDropdown === dropdownName ? '' : dropdownName);
  };

  return (
    <nav aria-label="primary-navigation" className="main-menu">
      <ul>
        <li className="no-sub">
          <Link to="/" className="top-heading">Home</Link>
        </li>
        <li>
          <span className="top-heading" onClick={() => toggleDropdown('eventDropdown')}>
            Your Event
          </span>
          <div className={`dropdown ${openDropdown === 'eventDropdown' ? 'open' : ''}`}>
            <div className="dd-inner">
              <ul className="column">
              <Link to="/">Casino Events</Link>
                <Link to="/weddings">Weddings</Link>
                <Link to="/birthdays">Birthdays</Link>
                <Link to="/corporate">Corporate</Link>
                <Link to="/charity_nights">Charity Nights</Link>
                <Link to="/anniversarys">Anniversarys</Link>
              </ul>
              <ul className="column">
              <Link to="/">Casino Tables</Link>
                <Link to="/seasonal_events">Seasonal Events</Link>
                <Link to="/work_events">Work Events</Link>
                <Link to="/christmas_parties">Christmas Parties</Link>
                <Link to="/bar_bat_mitzvah">Bar/Bat Mitzvah</Link>
                <Link to="/end_of_season_awards">End of Season Awards</Link>
              </ul>
            </div>
          </div>
        </li>
        <li>
          <span className="top-heading" onClick={() => toggleDropdown('locationDropdown')}>
            Locations
          </span>
          <div className={`dropdown ${openDropdown === 'locationDropdown' ? 'open' : ''}`}>
            <div className="dd-inner">
              <ul className="column">
                <h3>Lancashire</h3>
                <Link to="lancashire/blackpool">Blackpool</Link>
                <Link to="lancashire/blackburn">Blackburn</Link>
                <Link to="lancashire/bolton">Bolton</Link>
                <Link to="lancashire/clitheroe">Clitheroe</Link>
                <Link to="lancashire/lancaster">Lancaster</Link>
                <Link to="lancashire/preston">Preston</Link>
              </ul>
              <ul className="column">
                <h3>Cumbria</h3>
                <Link to="cumbria/windermere">Windermere</Link>
                <Link to="cumbria/penrith">Penrith</Link>
                <Link to="cumbria/keswick">Keswick</Link>
                <Link to="cumbria/carlisle">Carlisle</Link>
                <Link to="cumbria/kendal">Kendal</Link>
              </ul>
              <ul className="column">
                <h3>Chesire</h3>
                <Link to="cheshire/chester">Chester</Link>
                <Link to="cheshire/stockport">Stockport</Link>
                <Link to="cheshire/knutsford">Knutsford</Link>
                <Link to="cheshire/cheadle_hume">Cheadle Hume</Link>
                <Link to="cheshire/tarporley">Tarporley</Link>
              </ul>
              <ul className="column">
                <h3>Greater Manchester</h3>
                <Link to="greater_manchester/manchester">Manchester</Link>
                <Link to="greater_manchester/salford">Salford</Link>
                <Link to="greater_manchester/oldham">Oldham</Link>
                <Link to="greater_manchester/bury">Bury</Link>
                <Link to="greater_manchester/trafford">Trafford</Link>
              </ul>
              <ul className="column">
                <h3>Merseyside</h3>
                <Link to="merseyside/liverpool">Liverpool</Link>
                <Link to="merseyside/st_helens">St Helens</Link>
                <Link to="merseyside/wirral">Wirral</Link>
                <Link to="merseyside/warrington">Warrington</Link>
                <Link to="merseyside/haydock">Haydock</Link>
              </ul>
            </div>
          </div>
        </li>
        <li>
          <span className="top-heading" onClick={() => toggleDropdown('gamesDropdown')}>
            Games
          </span>
          <div className={`dropdown ${openDropdown === 'gamesDropdown' ? 'open' : ''}`}>
            <div className="dd-inner">
              <ul className="column">
                <h3>Casino Games</h3>
                <Link to="roulette">Roulette</Link>
                <Link to="blackjack">Blackjack</Link>
                <Link to="craps">Craps (Dice)</Link>
                <Link to="wheel_of_fortune">Wheel of Fortune</Link>
              </ul>
              <ul className="column">
                <h3>Quality Casino Games</h3>
                <Link to="texas_holdem">Texas Hold'em</Link>
                <Link to="stud_poker">Stud Poker</Link>
                <Link to="led_roulette">LED Roulette</Link>
                <Link to="led_blackjack">LED Blackjack</Link>
              </ul>
            </div>
          </div>
        </li>
        <li className="no-sub">
          <Link to="/" className="top-heading">Pricing</Link>
        </li>
        <li>
          <span className="top-heading" onClick={() => toggleDropdown('themingDropdown')}>
            Theming
          </span>
          <div className={`dropdown ${openDropdown === 'themingDropdown' ? 'open' : ''}`}>
            <div className="dd-inner">
              <ul className="column">
                <h3>Popular Themes</h3>
                <Link to="las_vegas_casino_nights">Las Vegas Casino Nights</Link>
                <Link to="james_bond_evenings">James Bond Evenings</Link>
                <Link to="wild_west_nights">Wild West Nights</Link>
              </ul>
              <ul className="column">
                <h3>Other Themes</h3>
                <Link to="black_and_white">Black and White</Link>
                <Link to="hollywood_oscars">Hollywood / Oscars</Link>
                <Link to="masquerade_ball">Masquerade Ball Party</Link>
                <Link to="gangsters_dolls">Gangsters & Dolls Night</Link>
              </ul>
            </div>
          </div>
        </li>
        <li>
          <span className="top-heading" onClick={() => toggleDropdown('moreEntDropdown')}>
            More Entertainment
          </span>
          <div className={`dropdown ${openDropdown === 'moreEntDropdown' ? 'open' : ''}`}>
            <div className="dd-inner">
              <ul className="column">
                <h3>Extra Entertainment</h3>
                <Link to="chocolate_fountains">Chocolate Fountains</Link>
                <Link to="photo_booth">Photo Booth</Link>
                <Link to="magic_mirror">Magic Mirror</Link>
                <Link to="close_up_magigician">Close up Maigician</Link>
                <Link to="traditional_djs">Traditional DJ's</Link>
              </ul>
              <ul className="column">
                <h3>Better Atmosphere</h3>
                <Link to="red_carpet_and_flame_lights">Red Carpet & Flame Lights</Link>
                <Link to="show_girls">Show Girls</Link>
                <Link to="led_dancefloors">LED Dancefloors</Link>
                <Link to="led_letters">LED Letters</Link>
                <Link to="props">Casino Themed Props</Link>
              </ul>
            </div>
          </div>
        </li>
        <li className="no-sub">
          <Link to="/" className="top-heading">Contact Us</Link>
        </li>
      </ul>
    </nav>
  );
};

export default MainNav;