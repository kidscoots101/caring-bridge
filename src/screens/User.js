import React from 'react';
import './MentalHealth.css';
import mentalhealth from '../assets/mental-health-1.png'

export default function MentalHealth() {
  const mentalHealthStories = [
    {
      title: "A Journey of Resilience",
      imageSrc: mentalhealth,
      content: "“I started slowly isolating myself from people, because I thought there was no point for me to even try to make friends or be friendly with people. Since most people weren’t being kind to me, I decided to just keep to myself,” she said.",
      link: "https://www.straitstimes.com/singapore/sharing-their-stories-to-help-other-young-people-with-mental-health-struggles"
    },
    {
      title: "A Journey of Resilience",
      imageSrc: mentalhealth,
      content: "“I started slowly isolating myself from people, because I thought there was no point for me to even try to make friends or be friendly with people. Since most people weren’t being kind to me, I decided to just keep to myself,” she said.",
      link: "https://www.straitstimes.com/singapore/sharing-their-stories-to-help-other-young-people-with-mental-health-struggles"
    },
    {
      title: "A Journey of Resilience",
      imageSrc: mentalhealth,
      content: "“I started slowly isolating myself from people, because I thought there was no point for me to even try to make friends or be friendly with people. Since most people weren’t being kind to me, I decided to just keep to myself,” she said.",
      link: "https://www.straitstimes.com/singapore/sharing-their-stories-to-help-other-young-people-with-mental-health-struggles"
    },
    {
      title: "A Journey of Resilience",
      imageSrc: mentalhealth,
      content: "“I started slowly isolating myself from people, because I thought there was no point for me to even try to make friends or be friendly with people. Since most people weren’t being kind to me, I decided to just keep to myself,” she said.",
      link: "https://www.straitstimes.com/singapore/sharing-their-stories-to-help-other-young-people-with-mental-health-struggles"
    },
  ];
  return (
    <div className="mental-health-page">
      <header className="page-header">
        <h1>Caregiving is hard. We understand.</h1>
      </header>

      <section className="resources-section">
  <h2 className="resource-heading">Mental Health Resources</h2>
  <ul className="resource-list">
    <li className="resource-item">
      <a href="https://www.nami.org/Home" target="_blank" rel="noopener noreferrer" className="resource-link">
        National Alliance on Mental Illness (NAMI)
      </a>
    </li>
    <li className="resource-item">
      <a href="https://www.psychologytoday.com/us" target="_blank" rel="noopener noreferrer" className="resource-link">
        Find a Therapist on Psychology Today
      </a>
    </li>
    <li className="resource-item">
      <a href="https://www.crisistextline.org/" target="_blank" rel="noopener noreferrer" className="resource-link">
        Crisis Text Line
      </a>
    </li>
    <li className="resource-item">
      <a href="https://www.samhsa.gov/find-help/national-helpline" target="_blank" rel="noopener noreferrer" className="resource-link">
        SAMHSA National Helpline
      </a>
    </li>
    <li className="resource-item">
      <a href="https://www.mentalhealth.gov/get-help/immediate-help" target="_blank" rel="noopener noreferrer" className="resource-link">
        Immediate Help for Mental Health
      </a>
    </li>
  </ul>
</section>


      
            <section className="stories-section">
        <h2>Stories of Mental Health Survivors</h2>
        <div className="story-cards">
          {mentalHealthStories.map((story, index) => (
            <div key={index} className="story-card">
              <div style={{flexDirection: 'row'}}>
              <img src={story.imageSrc} alt={story.title} />
              <p>{story.content}</p>
              </div>
              <a href={story.link} target="_blank" rel="noopener noreferrer" className="read-more-button">
                Read More
              </a>
            </div>
          ))}
        </div>
      </section>


      <section className="relaxation-section">
        <h2>Relaxation Techniques</h2>
        <div className="relaxation-card">
          <p>Technique 1: Breathing exercises...</p>
        </div>
      </section>
    </div>
  );
}
