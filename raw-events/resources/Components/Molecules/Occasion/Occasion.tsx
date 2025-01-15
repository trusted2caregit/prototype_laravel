import React from 'react';
import '.././ServiceBoxGroup/serviceboxgroup.scss';
import wedding from '../../../Assets/images/home_cards/weddings.png';
import birthday from '../../../Assets/images/home_cards/birthday.png';
import corporate from '../../../Assets/images/home_cards/corporate.png';
import charity from '../../../Assets/images/home_cards/charity.png';
import themedevents from '../../../Assets/images/home_cards/theming.png';
import locations from '../../../Assets/images/home_cards/locations.png';
import ServiceBoxGroup from '../ServiceBoxGroup/ServiceBoxGroup';
import { ReactComponent as Bell } from '../../../Assets/svg/bell.svg';
import { ReactComponent as Cake } from '../../../Assets/svg/cake.svg';
import { ReactComponent as GBP } from '../../../Assets/svg/gbp.svg';
import { ReactComponent as Location } from '../../../Assets/svg/location.svg';
import { ReactComponent as Themed } from '../../../Assets/svg/themed.svg';
import { ReactComponent as Trophy } from '../../../Assets/svg/trophy.svg';


export const boxData = [
  { id: 1, image: wedding, altTag: 'wedding_fun_casino_hire_Lancashire', title: 'Wedding Fun Casino Tables', description: "Interactive engaging wedding entertainment that won't bust the bank!", buttonTitle:'Wedding Casino Hire', moreInfoText:"Interactive engaging wedding entertainment that won't bust the bank!", svgIcon:<Bell />, rotate: true, degreesToTilt: -6, link: '/weddings'},
  { id: 2, image: birthday, altTag: 'birthday_fun_casino_hire_Lancashire', title: 'Birthday Fun Casino Tables', description: 'Perfect for the coming of age birthday or any birthday really. Spice it up with prizes!', buttonTitle:'Birthday Casino Hire', moreInfoText:'Perfect for the coming of age birthday or any birthday really. Spice it up with prizes!', svgIcon:<Cake />, rotate: true, degreesToTilt: -6, link: '/weddings'},
  { id: 3, image: corporate, altTag: 'corporate_fun_casino_hire_Lancashire', title: 'Corporate Fun Casino Tables', description: "Team builds, product launches, anniversarys. You name it - only the best in entertainment will do.", buttonTitle:'Corporate Fun Casino', moreInfoText:'Team builds, product launches, anniversarys. You name it - only the best in entertainment will do.', svgIcon:<Trophy />, rotate: false, degreesToTilt: -6, link: '/weddings'},
  { id: 4, image: charity, altTag: 'charity_fun_casino_hire_Lancashire', title: 'Charity Casino Events', description: 'Versatile and fun - fundraising makes the casino tables a "must have" at your charity night.', buttonTitle:'Charity Casino Night', moreInfoText:'Versatile and fun - fundraising makes the casino tables a "must have" at your charity night.', svgIcon:<GBP />, rotate: true, degreesToTilt: -6, link: '/weddings'},
  { id: 5, image: themedevents, altTag: 'themed_events_fun_casino_hire_Lancashire', title: 'Themed Events', description: 'Our speciality James Bond nights could make the skyfall with that and many more amazing themes. We have the best ways to make your event special.', buttonTitle:'Themed Casino Nights', moreInfoText:'Our speciality James Bond nights could make the skyfall with that and many more amazing themes. We have the best ways to make your event special.', svgIcon:<Themed />, rotate: true, degreesToTilt: -6, link: '/weddings'},
  { id: 6, image: locations, altTag: 'locasions_for_fun_casino_hire_Lancashire', title: 'Our Locations', description: "Based in the North West, but do cover most areas of the UK especially for larger events. If you are concerned please don't hesitate to contact us.", buttonTitle:'Locations', moreInfoText:"Based in the North West, but do cover most areas of the UK especially for larger events. If you are concerned please don't hesitate to contact us", svgIcon:<Location />, rotate: true, degreesToTilt: -6, link: '/weddings'},
];

const Occasion = ()  => <ServiceBoxGroup boxData={boxData}/>  


export default Occasion;
