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
import Modal from 'react-modal'; 
import serene from '../assets/serene.jpeg'
import golden from '../assets/golden.png'
import maps from '../assets/google-maps-icon.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar,faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';



Modal.setAppElement('#root');

function renderStarRating(rating) {
  const stars = [];
  const maxRating = 5; 

  for (let i = 1; i <= maxRating; i++) {
    if (i <= rating) {
      stars.push(<FontAwesomeIcon key={i} icon={faStar} style={{ color: '#EBE76C' }} />);
    } else {
      stars.push(<FontAwesomeIcon key={i} icon={faStar} style={{ color: 'gray' }} />);
    }
  }
  return stars;
}



const NursingHomeCard = ({ name, address, imageUrl, rating, coordinates }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const handleSeeMoreClick = () => {
    const content = (
      <div>
        <h2>{name}</h2>
        <p>{address}</p>
      </div>
    );
    openModal(content); 
  };
  const handleShowOnGoogleMaps = () => {
    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
    
    window.open(googleMapsUrl, '_blank');
  };
    
  return (
    <div className="nursing-home-card">
      <img src={imageUrl} alt={name} className="nursing-home-image" />
      <h2>{name}</h2>
      <p>{address}</p>
      <button className="see-more-button" onClick={openModal}>
        + See More
      </button>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="See More Modal"
        className="modal"
      >
        <div className='modal-content'>
         <h2>{name}</h2>
        <p>{address}</p>
        <button className="show-on-google-maps-button" onClick={handleShowOnGoogleMaps}>
        <img src={maps} alt="Google Maps" className="small-maps-icon"/> Show on Google Maps
      </button>
        <div className="star-rating">{renderStarRating(rating)}</div>
            <button onClick={closeModal} className="modal-close-button">
          Close
        </button>
        </div>
       
      </Modal>
    </div>
  );
};

  const nursingHomesData = [
    {
      name: 'Orange Valley Nursing Home',
      address: '221 Clementi Ave 4, Singapore 129881',
      imageUrl: orangeValley,
      rating: 3
    },
    {
      name: 'Lee Ah Mooi Old Age Home',
      address: '1 Thomson Ln, Singapore 297725',
      imageUrl: lee,
      rating: 4.3
    },
    {
      name: 'Ren Ci Hospital',
      address: '71 Irrawaddy Rd, Singapore 329562',
      imageUrl: renci,
      rating: 3
    },
    {
      name: 'St. Andrews Nursing Home',
      address: '50 Buangkok Green, Singapore 539753',
      imageUrl: saints,
      rating: 3
    },
    {
      name: 'Peacehaven Nursing Home',
      address: '9 Upper Changi Rd N, Singapore 507706',
      imageUrl: peach,
      rating: 5
    },
    {
      name: 'Moral Welfare Home',
      address: '50 Bukit Batok West Ave 2, 659205',
      imageUrl: moral,
      rating: 2
    },
    {
      name: 'Serene Home Nursing Home',
      address: '123 Serene Ave, Singapore 123456',
      imageUrl: serene,
      rating: 4.6
    },
    {
      name: 'Golden Years Nursing Home',
      address: '456 Gold St, Singapore 789012',
      imageUrl: golden,
      rating: 4.4
    }
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
            rating={nursingHome.rating}
          />
        ))}
      </div>
    );
  };
  export default function Care() {
    const [showMentalHealthResource, setShowMentalHealthResource] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState('');
  
    const toggleMentalHealthResource = () => {
      setShowMentalHealthResource(!showMentalHealthResource);
    };
    const openModal = (content) => {
      setModalContent(content);
      setIsModalOpen(true);
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
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
         <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="See More Modal"
      >
        <button onClick={closeModal} className="modal-close-button">
          Close
        </button>
        {modalContent}
      </Modal>
      </div>
    );
  }
