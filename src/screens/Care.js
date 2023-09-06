import React, {useState} from 'react'
import './Care.css'
import ChatBot from '../components/Chatbot';
import orangeValley from '../assets/orange-valley.png'
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
      imageUrl: orangeValley,
    },
    {
      name: 'Ren Ci Hospital & Medicare Centre',
      address: '71 Irrawaddy Rd, Singapore 329562',
      imageUrl: orangeValley,
    },
    {
      name: 'St. Andrews Nursing Home',
      address: '50 Buangkok Green, Singapore 539753',
      imageUrl: orangeValley,

    },
    {
      name: 'Moral Welfare Home',
      address: 'Blk 73 Toa Payoh Lorong 4, #01-596, Singapore 310073',
      imageUrl: orangeValley,

    },
    {
      name: 'Peacehaven Nursing Home',
      address: '9 Upper Changi Rd N, Singapore 507706',
      imageUrl: orangeValley,

    },
    {
      name: 'Thye Hua Kwan Nursing Home',
      address: '50 Bukit Batok West Ave 2, Singapore 659205',
      imageUrl: orangeValley,

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
