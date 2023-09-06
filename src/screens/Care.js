import React from 'react'
import './Care.css'
import ChatBot from '../components/Chatbot';

const NursingHomeCard = ({ name, address, description }) => {
    return (
      <div className="nursing-home-card">
        <h2>{name}</h2>
        <p>{address}</p>
        <p>{description}</p>
        <button className="see-more-button">See More</button>
      </div>
    );
  };

  const nursingHomesData = [
    {
      name: 'Orange Valley Nursing Home',
      address: '221 Clementi Ave 4, Singapore 129881',
    },
    {
      name: 'Lee Ah Mooi Old Age Home',
      address: '1 Thomson Ln, Singapore 297725',
    },
    {
      name: 'Ren Ci Hospital & Medicare Centre',
      address: '71 Irrawaddy Rd, Singapore 329562',
    },
    {
      name: 'St. Andrews Nursing Home',
      address: '50 Buangkok Green, Singapore 539753',
    },
    {
      name: 'Moral Welfare Home',
      address: 'Blk 73 Toa Payoh Lorong 4, #01-596, Singapore 310073',
    },
    {
      name: 'Peacehaven Nursing Home',
      address: '9 Upper Changi Rd N, Singapore 507706',
    },
    {
      name: 'Thye Hua Kwan Nursing Home',
      address: '50 Bukit Batok West Ave 2, Singapore 659205',
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
          />
        ))}
      </div>
    );
  };
export default function Care() {
  return (
    <div className='background'>
         <NursingHomeList nursingHomes={nursingHomesData} />
         <ChatBot />
    </div>
  )
}
