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
        <h2>Mental Health Resources</h2>
        <ul className="resource-list">
          <li>
            <a href="#">Resource 1</a>
          </li>
          <li>
            <a href="#">Resource 2</a>
          </li>
          <li>
            <a href="#">Resource 3</a>
          </li>
        </ul>
      </section>

      <section className="stories-section">
        <h2>Stories of Mental Health Survivors</h2>
        <div className="story-cards">
          {mentalHealthStories.map((story, index) => (
            <div key={index} className="story-card">
              <img src={story.imageSrc} alt={story.title} />
              <p>{story.content}</p>
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
