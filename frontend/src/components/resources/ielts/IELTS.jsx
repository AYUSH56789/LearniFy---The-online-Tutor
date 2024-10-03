import React from "react";
import "./IELTS.css";
import ResourceCard from "../../resource card/ResourceCard";

function IELTS() {
  const ieltsResources = [
    { title: "Grammar Volume-1", subtitle: "IELTS", downloadLink: "#" },
    { title: "Grammar Volume-2", subtitle: "IELTS", downloadLink: "#" },
    { title: "Vocabulary Volume-1", subtitle: "IELTS", downloadLink: "#" },
    { title: "Vocabulary Volume-1", subtitle: "IELTS", downloadLink: "#" },
    { title: "Vocabulary Volume-1", subtitle: "IELTS", downloadLink: "#" },
    { title: "Vocabulary Volume-1", subtitle: "IELTS", downloadLink: "#" },
  ];

  return (
    <div className="ielts-resource-list">
      <h2
        className="ielts-resource-heading"
        style={{ fontFamily: "DM Sans", fontWeight: 700 }}
      >
        IELTS Resources
      </h2>
      <div className="ielts-underline"></div>
      <div className="ielts-grid-container">
        {ieltsResources.map((resource, index) => (
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

export default IELTS;
