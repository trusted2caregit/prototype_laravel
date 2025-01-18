import React, { ReactNode } from 'react';

interface IntroTextProps {
  buttonLink?: string;
  buttonText?: string;
  children?: ReactNode;
}

const IntroText: React.FC<IntroTextProps> = ({buttonLink, buttonText, children}) => {
  return (
    <div className="intro-text">
      {children}
      {buttonText && <a href={buttonLink}><button><span>{buttonText}</span></button></a>}
    </div>
  );
};

export default IntroText;