// App.tsx
import React from 'react';
import { ReactComponent as Camera } from '../../../Assets/svg/camera.svg';
import { ReactComponent as Cake } from '../../../Assets/svg/cake.svg';
import { ReactComponent as Trophy } from '../../../Assets/svg/trophy.svg';
import wedding from '../../../Assets/images/home_cards/weddings.png';
import birthday from '../../../Assets/images/home_cards/birthday.png';
import charity from '../../../Assets/images/home_cards/charity.png';
import EventInfoBox from '../../../Components/Atoms/EventInfoBox/EventInfoBox';

const EventInfoCard: React.FC = () => {
  const events = [
    {
      title: 'Wedding Photos',
      image: wedding,
      icon: <Camera stroke="white"/>,
      description: 'This is an important time for you to capture the critical memories. However, it can be a bit of waiting around for your guests, having a fun casino table or two keeping them entertained is a great way to pass the time. The tables themselves can make for a great "photo op". Our casino tables can also be set up outside, weather permitting.',
    },
    {
      title: 'Wedding Breakfast',
      image: birthday,
      icon: <Cake stroke="white"/>,
      description: 'After the meal, the venue may need you to vacate the main room in, order for them to turn it round ready for the evening reception. Having fun casino tables to bridge the gap to the reception in my option is fantastic. Our professional croupiers will entertain your guests untill it is time for the reception.',
    },
    {
      title: 'Wedding Reception',
      image: charity,
      icon: <Trophy stroke="white"/>,
      description: 'Don’t want your evening guests to miss out on all the fun. Hhaving the casino tables the evening will will bring the celebration together. Everyone laughing, joking and having fun at the tables. Plus, you may become a millionaire – well in fun money!! With the party in full in full swing, this is one of the best times to have your wedding casino.',
    },
  ];

  return (
    <div className="event-lists">
      {events.map((event, index) => (
        <EventInfoBox
          key={index}
          title={event.title}
          image={event.image}
          icon={event.icon}
          description={event.description}
        />
      ))}
    </div>
  );
};

export default EventInfoCard;
