import React, { ReactNode } from 'react';
import './intro.scss';
import IntroTitle from '../../Atoms/IntroTitle/IntroTitle';
import IntroText from '../../Atoms/IntroText/IntroText';

interface IntroProps {
  buttonLink?: string;
  buttonText?: string;
  children: ReactNode;
  titleText: string;
  isH1?: boolean;
}

const Intro: React.FC<IntroProps> = ({ titleText, isH1, buttonLink, buttonText, children }) => {
  return (
    <div className="intro">
      <IntroTitle titleText={titleText} isH1={isH1 || false} />
      <IntroText buttonLink={buttonLink} buttonText={buttonText}>
        {children}
      </IntroText>
    </div>
  );
};

export default Intro;
