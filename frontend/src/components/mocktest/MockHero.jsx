import React, { useState } from "react";
import "./MockHero.css"; // Adjusting for your file naming

const MockHero = () => {
  const [selectedSubject, setSelectedSubject] = useState("");

  const handleSubjectChange = (e) => {
    setSelectedSubject(e.target.value);
  };

  const handleStartDemo = () => {
    if (selectedSubject) {
      alert(`Starting demo test for: ${selectedSubject}`);
    } else {
      alert("Please select a subject");
    }
  };

  return (
    <div className="mock-hero">
      <div className="mockTestContent" >
        <h1 className="heading-text mockTestHeadigStyle">Practice by giving Mock-test</h1>
        <p className="content-text mockTestContentStyle">
          Flamingo provides you a platform where you can test your knowledge and
          also get a score card. On the basis of your performance you get some
          rewards points, that help you get some discounts on our courses.
        </p>
        <div className="dropdown-container">
          <select value={selectedSubject} onChange={handleSubjectChange}>
            <option value="">Select Your Subject</option>
            <option value="IELTS">IELTS</option>
            <option value="PTE">PTE</option>
            <option value="TOEFL">TOEFL</option>
            <option value="GRE">GRE</option>
            {/* Add more subjects as needed */}
          </select>
        </div>
        <button className="mockestdemo-button " onClick={handleStartDemo} style={{
                fontFamily: "DM Sans , sans-serif",
                fontWeight: 450,
                
                fontSize: "18px",
              }}>
          Start Demo-Test
        </button>
      </div>
    </div>
  );
};

export default MockHero;
