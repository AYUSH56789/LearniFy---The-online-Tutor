import React from 'react'
import "./Duolingo.css"
import ResourceCard from '../../resource card/ResourceCard'

function Duolingo() {
  const duolingoResources = [
    { title: "Grammar Volume-1", subtitle: "Duolingo", downloadLink: "#" },
    { title: "Grammar Volume-2", subtitle: "Duolingo", downloadLink: "#" },
    { title: "Vocabulary Volume-1", subtitle: "Duolingo", downloadLink: "#" },
    { title: "Vocabulary Volume-2", subtitle: "Duolingo", downloadLink: "#" },
    { title: "Vocabulary Volume-3", subtitle: "Duolingo", downloadLink: "#" },
    { title: "Practice Questions", subtitle: "Duolingo", downloadLink: "#" },
  ];

  return (
    <div className="duolingo-resource-list">
      <h2
        className="duolingo-resource-heading"
        style={{ fontFamily: "DM Sans", fontWeight: 700 }}
      >
        Duolingo Resources
      </h2>
      <div className="duolingo-underline"></div>
      <div className="duolingo-grid-container">
        {duolingoResources.map((resource, index) => (
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

export default Duolingo
