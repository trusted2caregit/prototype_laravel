import React from 'react'
import './testimonalcard.scss';

export interface TestimonailCardProps {
  onClick?: () => void;
  reviewerPicture?: string;
  reviewerName?: string;
  reviewText?: string;
  svgStar?: React.ReactNode;
}


const TestimonialCard: React.FC<TestimonailCardProps>= ({ svgStar, reviewerPicture, reviewerName, reviewText }) => {
  return (
    <div className="swiper-slide box">
        <img src={reviewerPicture} alt="Reviewer_Photo"/>
        <p>{reviewText}</p>
        <h3>{reviewerName}</h3>
        <div className="stars">
            <i>{svgStar}</i>
            <i>{svgStar}</i>
            <i>{svgStar}</i>
            <i>{svgStar}</i>
            <i>{svgStar}</i>
        </div>
    </div>
  );
};

export default TestimonialCard;