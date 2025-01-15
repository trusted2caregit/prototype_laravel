import React, { FC } from 'react';
import TestimonialCard from '../../Atoms/TestimonalCard/TestimonalCard';
import './testimonialscardgroup.scss';

interface TestimonialCardProps {
  id: number;
  onClick?: () => void;
  reviewerPicture?: string;
  reviewerName?: string;
  reviewText?: string;
  svgStar: React.ReactNode;
}

interface TestimonialCardGroupProps {
  boxData?: TestimonialCardProps[];
}

const TestimonialCardGroup: FC<TestimonialCardGroupProps> = ({ boxData = [] }) => {
  const handleBoxClick = (id: number) => {
    console.log(`Box ${id} clicked!`);
    // add logic for clicks here
  };

  return (
    <div className="swiper review-slider">
      <div className="swiper-wrapper">
        {boxData.map((box) => (
          <TestimonialCard
            key={box.id}
            onClick={() => handleBoxClick(box.id)}
            reviewerPicture={box.reviewerPicture}
            reviewerName={box.reviewerName}
            reviewText={box.reviewText}
            svgStar={box.svgStar}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialCardGroup;
