import React from 'react';
import '.././ServiceBoxGroup/serviceboxgroup.scss';
import selfiemirror from '../../../Assets/images/home_cards/selfie_mirror.jpg';
import dancefloor from '../../../Assets/images/home_cards/LED_Dancefloor.png';
import loveletters from '../../../Assets/images/home_cards/LOVE_Letters.png';
import chocolatefountain from '../../../Assets/images/home_cards/chocolate_fountain.png';
import magicians from '../../../Assets/images/home_cards/magicians.png';
import showgirls from '../../../Assets/images/home_cards/las_vegas_show_girls.png';
import ServiceBoxGroup from '../ServiceBoxGroup/ServiceBoxGroup';
import { ReactComponent as SelfieMirrorSVG } from '../../../Assets/svg/mirror.svg';
import { ReactComponent as DancefloorSVG } from '../../../Assets/svg/stars.svg';
import { ReactComponent as LOVElettersSVG } from '../../../Assets/svg/heart.svg';
import { ReactComponent as ChocolatefountainSVG } from '../../../Assets/svg/chocolate.svg';
import { ReactComponent as MagiciansSVG } from '../../../Assets/svg/card.svg';
import { ReactComponent as ShowgirlsSVG } from '../../../Assets/svg/showgirl.svg';


const boxData = [
  { id: 1, image: selfiemirror, altTag: 'wedding_fun_casino_hire_Lancashire', title: 'Magic Selfie Mirrors', description: "Add a touch of interactive fun to your event with our Magic Selfie Mirrors! These innovative and versatile photo booths are a hit with guests of all ages.", buttonTitle:'Selfie Mirror Hire', moreInfoText:"More Info", svgIcon:<SelfieMirrorSVG />, rotate: true, degreesToTilt: -6, link: '/weddings'},
  { id: 2, image: dancefloor, altTag: 'wedding_fun_casino_hire_Lancashire', title: 'LED White Dancefloors', description: 'Perfect for the coming of age birthday or any birthday really. Spice it up with prizes!', buttonTitle:'Birthday Casino Hire', moreInfoText:'Perfect for the coming of age birthday or any birthday really. Spice it up with prizes!', svgIcon:<DancefloorSVG />, rotate: true, degreesToTilt: -6, link: '/weddings'},
  { id: 3, image: loveletters, altTag: 'wedding_fun_casino_hire_Lancashire', title: 'LOVE Letters', description: "Team builds, product launches, anniversarys. You name it - only the best in entertainment will do.", buttonTitle:'Corporate Fun Casino', moreInfoText:'Team builds, product launches, anniversarys. You name it - only the best in entertainment will do.', svgIcon:<LOVElettersSVG />, rotate: true, degreesToTilt: 0, link: '/weddings'},
  { id: 4, image: chocolatefountain, altTag: 'wedding_fun_casino_hire_Lancashire', title: 'Chocolate Fountains', description: 'Versatile and fun - fundraising makes the casino tables a "must have" at your charity night.', buttonTitle:'Charity Casino Night', moreInfoText:'Versatile and fun - fundraising makes the casino tables a "must have" at your charity night.', svgIcon:<ChocolatefountainSVG />, rotate: true, degreesToTilt: -6, link: '/weddings'},
  { id: 5, image: magicians, altTag: 'wedding_fun_casino_hire_Lancashire', title: 'Close up Magicians', description: 'Our speciality James Bond nights could make the skyfall with that and many more amazing themes. We have the best ways to make your event special.', buttonTitle:'Themed Casino Nights', moreInfoText:'Our speciality James Bond nights could make the skyfall with that and many more amazing themes. We have the best ways to make your event special.', svgIcon:<MagiciansSVG />, rotate: true, degreesToTilt: -6, link: '/weddings'},
  { id: 6, image: showgirls, altTag: 'wedding_fun_casino_hire_Lancashire', title: 'Show Girls', description: "Based in the North West, but do cover most areas of the UK especially for larger events. If you are concerned please don't hesitate to contact us.", buttonTitle:'Locations', moreInfoText:"Based in the North West, but do cover most areas of the UK especially for larger events. If you are concerned please don't hesitate to contact us", svgIcon:<ShowgirlsSVG />, rotate: true, degreesToTilt: 0, link: '/weddings'},
];

const AddEntertainment = ()  => <ServiceBoxGroup boxData={boxData}/>  


export default AddEntertainment;
