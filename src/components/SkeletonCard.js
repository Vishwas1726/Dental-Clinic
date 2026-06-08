import React from "react";
import "../styles/Skeleton.css";

function SkeletonCard() {
  return (
    <div className="skeleton-card" aria-hidden="true">
      <div className="skeleton-image shimmer" />
      <div className="skeleton-body">
        <div className="skeleton-line skeleton-title shimmer" />
        <div className="skeleton-line shimmer" />
        <div className="skeleton-line skeleton-short shimmer" />
        <div className="skeleton-line skeleton-btn shimmer" />
      </div>
    </div>
  );
}

export default SkeletonCard;
