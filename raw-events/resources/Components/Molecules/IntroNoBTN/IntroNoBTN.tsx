import React, { ReactNode } from 'react';
import './intronobtn.scss';
import IntroTitle from '../../Atoms/IntroTitle/IntroTitle';
import NoBtnText from '../../Atoms/IntroText/NoBtnText';

interface IntroProps {
  buttonLink?: string;
  buttonText?: string;
  children: ReactNode;
  titleText: string;
  isH1?: boolean;
}

const IntroNoBTN: React.FC<IntroProps> = ({ titleText, isH1, buttonLink, buttonText, children }) => {
  return (
    <div className="intro">
      <IntroTitle titleText={titleText} isH1={isH1 || false} />
      <NoBtnText>
        {children}
      </NoBtnText>
    </div>
  );
};

export default IntroNoBTN;
