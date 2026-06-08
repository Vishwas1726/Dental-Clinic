import React from "react";

function TreatmentCard({ treatment, onClick }) {
  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onClick();
    }
  };

  return (
    <div 
      className="treatment-card" 
      onClick={onClick}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex="0"
      aria-label={`View details for ${treatment.name}`}
    >
      <img
        src={treatment.image}
        alt={treatment.name}
      />

      <h3>{treatment.name}</h3>

      <p>{treatment.description}</p>

      <span className="learn-more-btn" aria-hidden="true">
        Learn More &rarr;
      </span>
    </div>
  );
}

export default TreatmentCard;