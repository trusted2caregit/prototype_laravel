import React from 'react';
import '.././TestimonialsCardGroup/testimonialscardgroup.scss';
import TestimonalCardGroup from '../TestimonialsCardGroup/TestimonialCardGroup';
import profile from '../../../Assets/images/phil_edited_sm.jpg';
import StarFull from '../../../Assets/svg/star-full.svg';


export const boxData = [
  { id: 1, reviewerPicture: profile, altTag: 'wedding_fun_casino_hire_Lancashire', reviewerName: 'Wedding Fun Casino Tables', reviewText: "Interactive engaging wedding entertainment that won't bust the bank!", svgStar:<StarFull />},
  { id: 2, reviewerPicture: profile, altTag: 'wedding_fun_casino_hire_Lancashire', reviewerName: 'Birthday Fun Casino Tables', reviewText: 'Perfect for the coming of age birthday or any birthday really. Spice it up with prizes!', svgStar:<StarFull />},
  { id: 3, reviewerPicture: profile, altTag: 'wedding_fun_casino_hire_Lancashire', reviewerName: 'Corporate Fun Casino Tables', reviewText: "Team builds, product launches, anniversarys. You name it - only the best in entertainment will do.", svgStar:<StarFull />},
  { id: 4, reviewerPicture: profile, altTag: 'wedding_fun_casino_hire_Lancashire', reviewerName: 'Charity Casino Events', reviewText: 'Versatile and fun - fundraising makes the casino tables a "must have" at your charity night.', svgStar:<StarFull />},
  { id: 5, reviewerPicture: profile, altTag: 'wedding_fun_casino_hire_Lancashire', reviewerName: 'Themed Events', reviewText: 'Our speciality James Bond nights could make the skyfall with that and many more amazing themes. We have the best ways to make your event special.',  svgStar:<StarFull />},
  { id: 6, reviewerPicture: profile, altTag: 'wedding_fun_casino_hire_Lancashire', reviewerName: 'Our Locations', reviewText: "Based in the North West, but do cover most areas of the UK especially for larger events. If you are concerned please don't hesitate to contact us.", svgStar:<StarFull />},
];

const TestimonalCard = ()  => <TestimonalCardGroup boxData={boxData}/>  


export default TestimonalCard;
