import React from "react";

function TestimonialCard({ name, review }) {
  return (
    <div className="testimonial-card">
      <p>"{review}"</p>
      <h4>- {name}</h4>
    </div>
  );
}

export default TestimonialCard;