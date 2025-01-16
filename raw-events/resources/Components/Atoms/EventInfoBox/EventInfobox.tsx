// ServiceBox.tsx
import React, { ReactElement }  from 'react';
import './eventinfobox.scss';

interface EventInfoCardProps {
  title: string;
  image: string;
  icon: ReactElement;
  description: string;
}

const EventInfoBox: React.FC<EventInfoCardProps> = ({ title, image, icon, description }) => {
  return (
    <div className="event" style={{ backgroundImage: `url(${image})` }}>
      <div className="event-inner">
        <div className="event-icon">{icon}</div>
        <div className="event-title">{title}</div>
        {description && <div className="event-description">{description}</div>}
      </div>
    </div>
  );
};

export default EventInfoBox;