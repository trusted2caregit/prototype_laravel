import React, { ReactNode } from 'react';

interface IntroTextProps {
  children?: ReactNode;
}

const IntroText: React.FC<IntroTextProps> = ({children}) => {
  return (
    <div className="intro-text">
      {children}
    </div>
  );
};

export default IntroText;