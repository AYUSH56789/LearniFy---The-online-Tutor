import React from 'react'
import "./PTE.css"
import ResourceCard from '../../resource card/ResourceCard';

function PTE() {
    const pteResources = [
      { title: "Grammar Volume-1", subtitle: "PTE", downloadLink: "#" },
      { title: "Grammar Volume-2", subtitle: "PTE", downloadLink: "#" },
      { title: "Vocabulary Volume-1", subtitle: "PTE", downloadLink: "#" },
      { title: "Vocabulary Volume-2", subtitle: "PTE", downloadLink: "#" },
      { title: "Practice Tests", subtitle: "PTE", downloadLink: "#" },
      { title: "Mock Exams", subtitle: "PTE", downloadLink: "#" },
    ];
  
    return (
      <div className="pte-resource-list">
        <h2
          className="pte-resource-heading"
          style={{ fontFamily: "DM Sans", fontWeight: 700 }}
        >
          PTE Resources
        </h2>
        <div className="pte-underline"></div>
        <div className="pte-grid-container">
          {pteResources.map((resource, index) => (
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

export default PTE
