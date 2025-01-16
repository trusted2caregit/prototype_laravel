// ServiceBox.tsx
import React from 'react';
import './servicebox.scss';
import ButtonIconGlow from '../../Molecules/Buttons/ButtonIconGlow';

export interface ServiceBoxProps {
  onClick?: () => void;
  title: string;
  description?: string;
  image: string;
  altTag?: string;
  buttonTitle: string;
  moreInfoText?: string;
  degreesToTilt: number;
  rotate: boolean;
  svgIcon?: React.ReactNode;
  link: string; // Added link property
}

const ServiceBox: React.FC<ServiceBoxProps> = ({ onClick, title, altTag, description, image, moreInfoText, buttonTitle, svgIcon, rotate, degreesToTilt, link }) => {
  return (
    <div className="tcwrapper service-box">
      <div className="tccard-area-wrapper">
        <h4 className="tccard-title" onClick={onClick}>{title}</h4>
        <img src={image} className="tccard-image" alt={altTag} />
        <p>{description}</p>
        <ButtonIconGlow
          svgIcon={svgIcon}
          buttonTitle={buttonTitle}
          moreInfoText={moreInfoText}
          rotate={rotate}
          degreesToTilt={degreesToTilt}
          link={link} // Pass the link prop to ButtonIconGlow
        />
      </div>
    </div>
  );
};

export default ServiceBox;