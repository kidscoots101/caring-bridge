import React from 'react';
import './MentalHealth.css';

export default function MentalHealth() {
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
        <div className="story-card">
          <img src="story-image.jpg" alt="Story" />
          <p>Story content goes here...</p>
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
