import React, { useState, useEffect } from "react";
import treatments from "../data/treatments";
import TreatmentCard from "./TreatmentCard";
import SkeletonCard from "./SkeletonCard";
import { Link } from "react-router-dom";
import "../styles/Treatments.css";

function Treatments() {
  const [selectedTreatment, setSelectedTreatment] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  // Simulate data loading
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1300);
    return () => clearTimeout(timer);
  }, []);

  const filteredTreatments = treatments.filter((t) =>
    t.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    (t.description && t.description.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const clearSearch = () => setSearchQuery("");

  return (
    <section className="treatments-section" id="treatments">
      <h2>Our Treatments</h2>

      {/* Live Search Bar */}
      <div className="treatments-search-wrapper">
        <div className="treatments-search-bar">
          <span className="search-icon" aria-hidden="true">🔍</span>
          <input
            type="text"
            className="treatments-search-input"
            placeholder="Search treatments (e.g. whitening, braces...)"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            aria-label="Search treatments"
            id="treatment-search"
          />
          {searchQuery && (
            <button
              className="search-clear-btn"
              onClick={clearSearch}
              aria-label="Clear search"
            >
              ✕
            </button>
          )}
        </div>
        {!isLoading && (
          <p className="search-results-count" aria-live="polite">
            {searchQuery
              ? `${filteredTreatments.length} result${filteredTreatments.length !== 1 ? "s" : ""} for "${searchQuery}"`
              : `Showing all ${treatments.length} treatments`}
          </p>
        )}
      </div>

      <div className="treatments-container">
        {isLoading ? (
          // Skeleton loading state
          Array.from({ length: 6 }).map((_, i) => <SkeletonCard key={i} />)
        ) : filteredTreatments.length > 0 ? (
          filteredTreatments.map((treatment) => (
            <TreatmentCard
              key={treatment.id}
              treatment={treatment}
              onClick={() => setSelectedTreatment(treatment)}
            />
          ))
        ) : (
          <div className="no-results">
            <span className="no-results-icon" aria-hidden="true">🦷</span>
            <h3>No treatments found</h3>
            <p>Try searching for something else, like "cleaning" or "whitening".</p>
            <button className="no-results-reset" onClick={clearSearch}>
              Show all treatments
            </button>
          </div>
        )}
      </div>

      {selectedTreatment && (
        <div
          className="modal-overlay"
          onClick={() => setSelectedTreatment(null)}
          role="presentation"
        >
          <div
            className="modal-content animate-pop"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            <button
              className="modal-close"
              onClick={() => setSelectedTreatment(null)}
              aria-label="Close treatment details"
            >
              &times;
            </button>

            <div className="modal-body">
              <div className="modal-image-container">
                <img
                  src={selectedTreatment.image}
                  alt={selectedTreatment.name}
                  className="modal-image"
                />
              </div>
              <div className="modal-info">
                <h3 id="modal-title" className="modal-title">{selectedTreatment.name}</h3>

                <div className="modal-meta-grid">
                  <div className="modal-meta-item">
                    <span className="meta-label">Treatment Duration</span>
                    <span className="meta-value">{selectedTreatment.duration}</span>
                  </div>
                  <div className="modal-meta-item">
                    <span className="meta-label">Estimated Price Range</span>
                    <span className="meta-value">{selectedTreatment.price}</span>
                  </div>
                </div>

                <p className="modal-description">{selectedTreatment.fullDescription}</p>

                <Link
                  to="/book"
                  className="modal-book-btn"
                  onClick={() => setSelectedTreatment(null)}
                >
                  Book Appointment
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Treatments;