import React, {useState} from 'react'
import './Care.css'
import ChatBot from '../components/Chatbot';
import orangeValley from '../assets/orange-valley.png'
import lee from '../assets/lee-ah-moi.png'
import renci from '../assets/ren-ci.png'
import saints from '../assets/sanh.jpeg'
import moral from '../assets/moral-welfare.png'
import peach from '../assets/peachhaven.jpeg'
import User from './User';

const NursingHomeCard = ({ name, address, imageUrl }) => {
    return (
      <div className="nursing-home-card">
        <img src={imageUrl} alt={name} className="nursing-home-image" />
        <h2>{name}</h2>
        <p>{address}</p>
        <button className="see-more-button"> + See More</button>
      </div>
    );
  };

  const nursingHomesData = [
    {
      name: 'Orange Valley Nursing Home',
      address: '221 Clementi Ave 4, Singapore 129881',
      imageUrl: orangeValley,
    },
    {
      name: 'Lee Ah Mooi Old Age Home',
      address: '1 Thomson Ln, Singapore 297725',
      imageUrl: lee,
    },
    {
      name: 'Ren Ci Hospital',
      address: '71 Irrawaddy Rd, Singapore 329562',
      imageUrl: renci,
    },
    {
      name: 'St. Andrews Nursing Home',
      address: '50 Buangkok Green, Singapore 539753',
      imageUrl: saints,

    },
    // {
    //   name: 'Moral Welfare Home',
    //   address: 'Blk 73 Toa Payoh Lorong 4, #01-596, Singapore 310073',
    //   imageUrl: moral,

    // },
    {
      name: 'Peacehaven Nursing Home',
      address: '9 Upper Changi Rd N, Singapore 507706',
      imageUrl: peach,

    },
    {
      name: 'Moral Welfare Home',
      address: '50 Bukit Batok West Ave 2, Singapore 659205',
      imageUrl: moral,

    },
  ];
  
  const NursingHomeList = ({ nursingHomes }) => {
    return (
      <div className="nursing-home-list">
        {nursingHomes.map((nursingHome, index) => (
          <NursingHomeCard
            key={index}
            name={nursingHome.name}
            address={nursingHome.address}
            imageUrl={nursingHome.imageUrl}
          />
        ))}
      </div>
    );
  };
  export default function Care() {
    const [showMentalHealthResource, setShowMentalHealthResource] = useState(false);
  
    const toggleMentalHealthResource = () => {
      setShowMentalHealthResource(!showMentalHealthResource);
    };
  
    return (
      <div className='background'>
        <div className="top-right-options">
          <button onClick={toggleMentalHealthResource} className="resource-button">
            {showMentalHealthResource ? 'Looking for Caregiving Services?' : 'Feeling Stressed?'}
          </button>
        </div>
        {showMentalHealthResource ? (
            <>
                <User />
                <ChatBot />
            </>
        ) : (
          <>
            <NursingHomeList nursingHomes={nursingHomesData} />
            <ChatBot />
          </>
        )}
      </div>
    );
  }
