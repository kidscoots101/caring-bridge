import React from "react";
import "./MentalHealth.css";
import mentalhealth from "../assets/rryouth2508.avif";
import mh from '../assets/mh2.png'
import mh3 from '../assets/mh3.avif'
import burden from '../assets/burdne.avif'

export default function MentalHealth() {
  const mentalHealthStories = [
    {
      title: "A Journey of Resilience",
      imageSrc: mentalhealth,
      content:
        "“I started slowly isolating myself from people, because I thought there was no point for me to even try to make friends or be friendly with people. Since most people weren’t being kind to me, I decided to just keep to myself,” she said.",
      link: "https://www.straitstimes.com/singapore/sharing-their-stories-to-help-other-young-people-with-mental-health-struggles",
    },
    {
      title: "The Caregiving Experience",
      imageSrc: mh,
      content:
        "“When my late mother was initially suspected of having dementia, I did not know how the following months as a caregiver would come to affect my physical and mental well-being. It became tougher by the day as I had to cope with my mother’s mood swings alongside her failing health. We were in and out of polyclinics and hospitals at least once a month as I fulfilled my role as her caregiver.",
      link: "https://www.straitstimes.com/opinion/forum/forum-treat-caregivers-as-patients-too-to-better-supervise-their-mental-health",
    },
    {
      title: "The Burden",
      imageSrc: burden,
      content:
        "“Emotional caregiving can’t be outsourced. I have seen first-hand the mental, emotional and physical toll that taking care of my nephew who lives with mental health challenges has taken on my brother and sister-in-law. And more than a few caregivers I personally know have suffered burnout and spiralled into depression. ",
      link: "https://www.channelnewsasia.com/commentary/mental-health-caregiver-burden-support-tiktok-masked-woman-2867016",
    },
    {
      title: "A Tough Journey",
      imageSrc: mh3,
      content:
        "“I started slowly isolating myself from people, because I thought there was no point for me to even try to make friends or be friendly with people. Since most people weren’t being kind to me, I decided to just keep to myself,” she said.",
      link: "https://www.channelnewsasia.com/listen/daily-cuts/who-cares-caregiver-3756026",
    },
  ];
  return (
    <div className="mental-health-page">
      <header className="page-header">
        <h1>
          Caregiving is <span style={{ color: "#D65C82" }}>hard</span>. We
          <span style={{ fontStyle: "italic" }}> understand.</span>
        </h1>
      </header>

      <section className="resources-section">
        <h2 className="resource-heading">Mental Health Resources</h2>
        <ul className="resource-list">
          <li className="resource-item">
            <a
              href="https://www.nami.org/Home"
              target="_blank"
              rel="noopener noreferrer"
              className="resource-link"
            >
              National Alliance on Mental Illness (NAMI)
            </a>
          </li>
          <li className="resource-item">
            <a
              href="https://www.psychologytoday.com/us"
              target="_blank"
              rel="noopener noreferrer"
              className="resource-link"
            >
              Find a Therapist on Psychology Today
            </a>
          </li>
          <li className="resource-item">
            <a
              href="https://www.crisistextline.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="resource-link"
            >
              Crisis Text Line
            </a>
          </li>
          <li className="resource-item">
            <a
              href="https://www.samhsa.gov/find-help/national-helpline"
              target="_blank"
              rel="noopener noreferrer"
              className="resource-link"
            >
              SAMHSA National Helpline
            </a>
          </li>
          <li className="resource-item">
            <a
              href="https://www.mentalhealth.gov/get-help/immediate-help"
              target="_blank"
              rel="noopener noreferrer"
              className="resource-link"
            >
              Immediate Help for Mental Health
            </a>
          </li>
        </ul>
      </section>

      <section className="stories-section">
        <h2>Stories of Mental Health Patients</h2>
        <div className="story-cards">
  {mentalHealthStories.map((story, index) => (
    <div key={index} className="story-card">
      <div className="content">
        <img src={story.imageSrc} alt={story.title} />
        <div className="text-content">
          <h2>{story.title}</h2>
          <p>{story.content}</p>
          <a
            href={story.link}
            target="_blank"
            rel="noopener noreferrer"
            className="read-more-button"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  ))}
</div>

      </section>

      <section className="relaxation-section">
        <h2>Relaxation Techniques</h2>
        <div className="relaxation-card">
          <div className="video-container">
        <iframe width="300" height="215"
            src="https://www.youtube.com/embed/K353fkHYMPs">
          </iframe>
          </div>
          <div className="content">
          <p>
            <a
              href="https://www.youtube.com/watch?v=K353fkHYMPs"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#D65C82", fontWeight: 'bold',  fontSize: 20 }}
            >
              Technique 1: Deep Breathing
            </a>
          </p>{" "}
          <p>
            Deep breathing is a simple yet effective relaxation technique. Find
            a quiet place to sit or lie down. Close your eyes, inhale slowly
            through your nose for a count of four, hold your breath for a count
            of four, and then exhale slowly through your mouth for a count of
            four. Repeat this process several times to calm your mind and reduce
            stress.
          </p>
          </div>

        </div>

        <div className="relaxation-card">
        <div className="video-container">
        <iframe width="300" height="215"
            src="https://www.youtube.com/embed/ClqPtWzozXs">
          </iframe>
          </div>
          <div className="content">
          <p>
            <a
              href="https://www.youtube.com/watch?v=ClqPtWzozXs"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#D65C82", fontWeight: 'bold',  fontSize: 20 }}
            >
              Technique 2: Progressive Muscle Relaxation
            </a>
          </p>{" "}
          <p>
            Progressive muscle relaxation involves tensing and then relaxing
            different muscle groups in your body. Start with your toes and work
            your way up to your head. Focus on the sensation of relaxation as
            you release tension in each muscle group. This technique can help
            relieve physical and mental tension.
          </p>
          </div>
        </div>

        <div className="relaxation-card">
          <div className="video-container">
          <iframe width="300" height="215"
            src="https://www.youtube.com/embed/t1rRo6cgM_E">
          </iframe>
          </div>
            <div className="content">
          <p>
            <a
              href="https://www.youtube.com/watch?v=t1rRo6cgM_E"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#D65C82", fontWeight: 'bold',  fontSize: 20 }}
            >
              Technique 3: Guided Imagery
            </a>
          </p>{" "}
          <p>
            Guided imagery is a relaxation method that involves using your
            imagination to create calming mental images. Close your eyes and
            imagine yourself in a peaceful, tranquil place, such as a beach or a
            forest. Visualize the sights, sounds, and sensations of this place,
            allowing yourself to become fully immersed in the experience.
          </p>
          </div>

        </div>
      </section>
    </div>
  );
}
