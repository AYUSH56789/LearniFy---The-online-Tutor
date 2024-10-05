import React from 'react'
import "./SpokenEnglish.css"
import ResourceCard from '../../resource card/ResourceCard';

function SpokenEnglish() {
  const spokenEnglishResources = [
    { title: "Grammar Basics", subtitle: "Spoken English", downloadLink: "#" },
    { title: "Everyday Conversations", subtitle: "Spoken English", downloadLink: "#" },
    { title: "Common Phrases", subtitle: "Spoken English", downloadLink: "#" },
    { title: "Pronunciation Guide", subtitle: "Spoken English", downloadLink: "#" },
    { title: "Practice Dialogues", subtitle: "Spoken English", downloadLink: "#" },
    { title: "Listening Exercises", subtitle: "Spoken English", downloadLink: "#" },
  ];

  return (
    <div className="spoken-english-resource-list">
      <h2
        className="spoken-english-resource-heading"
        style={{ fontFamily: "DM Sans", fontWeight: 700 }}
      >
        Spoken English Resources
      </h2>
      <div className="spoken-english-underline"></div>
      <div className="spoken-english-grid-container">
        {spokenEnglishResources.map((resource, index) => (
          <ResourceCard
            key={index}
            title={resource.title}
            subtitle={resource.subtitle}
            downloadLink={resource.downloadLink}
          />
        ))}
      </div>
    </div>
  );
}

export default SpokenEnglish
