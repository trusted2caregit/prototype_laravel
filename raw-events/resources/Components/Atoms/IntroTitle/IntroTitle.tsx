import React from 'react';

interface IntroTitleProps {
  titleText: string;
  isH1?: boolean;
}

const IntroTitle: React.FC<IntroTitleProps> = ({ titleText, isH1 }) => {
  return (
    <div className="intro-title">
      {isH1 ? <h1>{titleText}</h1> : <h2>{titleText}</h2>}
    </div>
  );
};

export default IntroTitle;