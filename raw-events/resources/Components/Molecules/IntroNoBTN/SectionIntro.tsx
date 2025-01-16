import React, { ReactNode } from 'react';
import './sectionintro.scss';
import IntroText from '../../Atoms/IntroText/IntroText';

interface IntroProps {
  buttonLink?: string;
  buttonText?: string;
  children: ReactNode;
}

const Intro: React.FC<IntroProps> = ({ buttonLink, buttonText, children }) => {
  return (
    <div className="section-intro">
      <IntroText buttonLink={buttonLink} buttonText={buttonText}>
        {children}
      </IntroText>
    </div>
  );
};

export default Intro;
