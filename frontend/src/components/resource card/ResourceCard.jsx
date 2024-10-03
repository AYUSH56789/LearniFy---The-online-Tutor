import React from "react";
import "./ResourceCard.css" ; 
import { FaFileAlt } from 'react-icons/fa';

function ResourceCard({title , subtitle , downloadLink}) {
  return (
    <div className="learnify-resource-card">
    <div className="learnify-icon-container">
    <FaFileAlt className="icon" />
    </div>
<div className="res_card_content">
<h3 className="learnify-card-title">{title}</h3>
    <p className="learnify-card-subtitle">{subtitle}</p>
    <a href={downloadLink} className="learnify-download-btn">
        Download
    </a>
</div>

   
</div>
  );
}

export default ResourceCard;
