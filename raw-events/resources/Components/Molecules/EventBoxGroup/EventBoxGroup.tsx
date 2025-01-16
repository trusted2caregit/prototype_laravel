import React, { FC } from 'react';
import ServiceBox from '../../Atoms/ServiceBox/ServiceBox';
import './serviceboxgroup.scss';

interface ServiceBoxProps {
  id: number;
  onClick?: () => void;
  color?: string;
  degreesToTilt: number;
  rotate: boolean;
  title: string;
  image: string; // New prop for background image
  description?: string;
  svgIcon: React.ReactNode; // Corrected type
  altTag: string;
  link: string; // Added link prop
}

interface ServiceBoxGroupProps {
  boxData?: ServiceBoxProps[];
}

const ServiceBoxGroup: FC<ServiceBoxGroupProps> = ({ boxData = [] }) => {
  const handleBoxClick = (id: number) => {
    console.log(`Box ${id} clicked!`);
    // add logic for clicks here
  };

  return (
    <div className="box-group">
      {boxData.map((box) => (
        <ServiceBox
          key={box.id}
          onClick={() => handleBoxClick(box.id)}
          buttonTitle={box.title}
          title={box.title}
          rotate={box.rotate ?? true}
          degreesToTilt={box.degreesToTilt ?? -6}
          description={box.description}
          image={box.image}
          svgIcon={box.svgIcon}
          altTag={box.altTag}
          link={box.link} // Pass the link prop to ServiceBox
        />
      ))}
    </div>
  );
};

export default ServiceBoxGroup;
