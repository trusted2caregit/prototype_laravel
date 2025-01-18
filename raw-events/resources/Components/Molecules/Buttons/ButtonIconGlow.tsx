// ButtonIconGlow.tsx
import React from 'react';
import './buttoniconglow.scss';

export interface ButtonIconGlowProps {
  onClick?: () => void;
  buttonTitle: string;
  moreInfoText?: string;
  svgIcon?: React.ReactNode;
  link: string; // Updated type to accept link as a string
  rotate: boolean;
  degreesToTilt: number;
}

const ButtonIconGlow = ({ svgIcon, buttonTitle, moreInfoText = "More Info", link, rotate, degreesToTilt }: ButtonIconGlowProps) => {
  return (
    <div className="grid-container">
      <div className="relative-group">
        <div className="absolute-overlay"></div>
        <a href={link} className="button-container"> {/* Changed button to an anchor tag */}
          <span className="icon-container">
            <span style={rotate ? { transform: `rotate(${degreesToTilt}deg)` } : {}}>{svgIcon}</span>
            <span className="button-info">{buttonTitle}</span>
          </span>
          <span className="more-info">{moreInfoText} &rarr;</span>
        </a>
      </div>
    </div>
  );
};

export default ButtonIconGlow;