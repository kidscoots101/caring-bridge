import React, { useState } from "react";
import "./Care.css";
import ChatBot from "../components/Chatbot";
import orangeValley from "../assets/orange-valley.png";
import lee from "../assets/lee-ah-moi.png";
import renci from "../assets/ren-ci.png";
import saints from "../assets/sanh.jpeg";
import moral from "../assets/moral-welfare.png";
import peach from "../assets/peachhaven.jpeg";
import User from "./User";
import Modal from "react-modal";
import serene from "../assets/serene.jpeg";
import golden from "../assets/golden.png";
import maps from "../assets/google-maps-icon.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

Modal.setAppElement("#root");

function renderStarRating(rating) {
  const stars = [];
  const maxRating = 5;

  for (let i = 1; i <= maxRating; i++) {
    if (i <= rating) {
      stars.push(
        <FontAwesomeIcon key={i} icon={faStar} style={{ color: "#EBE76C" }} />,
      );
    } else {
      stars.push(
        <FontAwesomeIcon key={i} icon={faStar} style={{ color: "gray" }} />,
      );
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
    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      address,
    )}`;

    window.open(googleMapsUrl, "_blank");
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
        <div className="modal-content">
          <h2>{name}</h2>
          <p>{address}</p>
          <button
            className="show-on-google-maps-button"
            onClick={handleShowOnGoogleMaps}
          >
            <img src={maps} alt="Google Maps" className="small-maps-icon" />{" "}
            Show on Google Maps
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

const nursingHomesDataEnglish = [
  {
    name: "Orange Valley Nursing Home",
    address: "221 Clementi Ave 4, Singapore 129881",
    imageUrl: orangeValley,
    rating: 3,
  },
  {
    name: "Lee Ah Mooi Old Age Home",
    address: "1 Thomson Ln, Singapore 297725",
    imageUrl: lee,
    rating: 4.3,
  },
  {
    name: "Ren Ci Hospital",
    address: "71 Irrawaddy Rd, Singapore 329562",
    imageUrl: renci,
    rating: 3,
  },
  {
    name: "St. Andrews Nursing Home",
    address: "50 Buangkok Green, Singapore 539753",
    imageUrl: saints,
    rating: 3,
  },
  {
    name: "Peacehaven Nursing Home",
    address: "9 Upper Changi Rd N, Singapore 507706",
    imageUrl: peach,
    rating: 5,
  },
  {
    name: "Moral Welfare Home",
    address: "50 Bukit Batok West Ave 2, 659205",
    imageUrl: moral,
    rating: 2,
  },
  {
    name: "Serene Home Nursing Home",
    address: "123 Serene Ave, Singapore 123456",
    imageUrl: serene,
    rating: 4.6,
  },
  {
    name: "Golden Years Nursing Home",
    address: "456 Gold St, Singapore 789012",
    imageUrl: golden,
    rating: 4.4,
  },
];

const nursingHomesDataChinese = [
  {
    name: "橙谷护理之家",
    address: "新加坡129881，金文泰大道4号221号",
    imageUrl: orangeValley,
    rating: 3,
  },
  {
    name: "李亚梅老年之家",
    address: "新加坡297725，汤普森巷1号",
    imageUrl: lee,
    rating: 4.3,
  },
  {
    name: "仁慈医院",
    address: "新加坡329562，伊拉瓦迪路71号",
    imageUrl: renci,
    rating: 3,
  },
  {
    name: "圣安德鲁斯护理之家",
    address: "新加坡539753，武吉班高绿地50号",
    imageUrl: saints,
    rating: 3,
  },
  {
    name: "和平园护理之家",
    address: "新加坡507706，大士岭北路9号",
    imageUrl: peach,
    rating: 5,
  },
  {
    name: "道德福利之家",
    address: "659205，新加坡，武吉巴督西大道2号50号",
    imageUrl: moral,
    rating: 2,
  },
  {
    name: "宁静家护理之家",
    address: "新加坡123456，宁静大道123号",
    imageUrl: serene,
    rating: 4.6,
  },
  {
    name: "黄金岁月护理之家",
    address: "新加坡789012，黄金街456号",
    imageUrl: golden,
    rating: 4.4,
  },
];
const nursingHomesDataMalay = [
  {
    name: "Rumah Penjagaan Valley Orange",
    address: "221 Clementi Ave 4, Singapura 129881",
    imageUrl: orangeValley,
    rating: 3,
  },
  {
    name: "Rumah Penjagaan Usia Tua Lee Ah Mooi",
    address: "1 Thomson Ln, Singapura 297725",
    imageUrl: lee,
    rating: 4.3,
  },
  {
    name: "Hospital Ren Ci",
    address: "71 Jalan Irrawaddy, Singapura 329562",
    imageUrl: renci,
    rating: 3,
  },
  {
    name: "Rumah Penjagaan St. Andrews",
    address: "50 Buangkok Green, Singapura 539753",
    imageUrl: saints,
    rating: 3,
  },
  {
    name: "Rumah Penjagaan Peacehaven",
    address: "9 Upper Changi Rd N, Singapura 507706",
    imageUrl: peach,
    rating: 5,
  },
  {
    name: "Rumah Kebajikan Moral",
    address: "50 Bukit Batok West Ave 2, Singapura 659205",
    imageUrl: moral,
    rating: 2,
  },
  {
    name: "Rumah Penjagaan Serene",
    address: "123 Serene Ave, Singapura 123456",
    imageUrl: serene,
    rating: 4.6,
  },
  {
    name: "Rumah Penjagaan Golden Years",
    address: "456 Gold St, Singapura 789012",
    imageUrl: golden,
    rating: 4.4,
  },
];
const nursingHomesDataTamil = [
  {
    name: "ஆரஞ்சு வேலி கைதுகள் வீடு",
    address: "221 கிளெமெண்டி அவ் 4, சிங்கப்பூர் 129881",
    imageUrl: orangeValley,
    rating: 3,
  },
  {
    name: "லீ அக் மூயி பழைய வயது வீடு",
    address: "1 தாம்சன் லேன், சிங்கப்பூர் 297725",
    imageUrl: lee,
    rating: 4.3,
  },
  {
    name: "ரென் சி மருத்துவமனை",
    address: "71 இரவாட்டி ரோடு, சிங்கப்பூர் 329562",
    imageUrl: renci,
    rating: 3,
  },
  {
    name: "செயிண்ட் அண்ட்ரூஸ் நர்சிங் ஹோம்",
    address: "50 புவாங்கோக் கிரீன், சிங்கப்பூர் 539753",
    imageUrl: saints,
    rating: 3,
  },
  {
    name: "பீஸ்ஹேவன் நர்சிங் ஹோம்",
    address: "9 அப்பர் சாங்கி ரோடு ந, சிங்கப்பூர் 507706",
    imageUrl: peach,
    rating: 5,
  },
  {
    name: "மோரல் வெல்பேர் ஹோம்",
    address: "659205, சிங்கப்பூர், புகிட் பாட்டக் வெஸ்ட் அவ் 2, 50 ஆம் இருதயம்",
    imageUrl: moral,
    rating: 2,
  },
  {
    name: "சீரீன் ஹோம் நர்சிங் ஹோம்",
    address: "123 சீரீன் அவ், சிங்கப்பூர் 123456",
    imageUrl: serene,
    rating: 4.6,
  },
  {
    name: "கோல்டன் இயர்ஸ் நர்சிங் ஹோம்",
    address: "789012, சிங்கப்பூர், 456 கோல்டன் ஸ்ட்ரீட்",
    imageUrl: golden,
    rating: 4.4,
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
          rating={nursingHome.rating}
        />
      ))}
    </div>
  );
};
export default function Care() {
  const [showMentalHealthResource, setShowMentalHealthResource] =
    useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");

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
  const [currentLanguage, setCurrentLanguage] = useState(
    nursingHomesDataEnglish,
  );

  const handleEnglish = () => {
    setCurrentLanguage(nursingHomesDataEnglish);
  };
  const handleChinese = () => {
    setCurrentLanguage(nursingHomesDataChinese);
  };
  const handleMalay = () => {
    setCurrentLanguage(nursingHomesDataMalay);
  };
  const handleTamil = () => {
    setCurrentLanguage(nursingHomesDataTamil);
  };

  return (
    <div className="background">
      <div className="top-right-options">
        <button
          onClick={toggleMentalHealthResource}
          className="resource-button"
        >
          {showMentalHealthResource
            ? "Looking for Caregiving Services?"
            : "Feeling Stressed?"}
        </button>
        <div className="language-buttons">
          <button onClick={() => handleEnglish()}>English</button>
          <button onClick={() => handleChinese()}>中文</button>
          <button onClick={() => handleMalay()}>Melayu</button>
          <button onClick={() => handleTamil()}>தமிழ்</button>
        </div>
      </div>
      {showMentalHealthResource ? (
        <>
          <User />
          <ChatBot />
        </>
      ) : (
        <>
          <NursingHomeList nursingHomes={currentLanguage} />
          <ChatBot />
        </>
      )}
    </div>
  );
}
