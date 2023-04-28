import React from "react";
import "./ShimmerUI.css";

const CardShimmerUI = () => {
  return (
    <div className="card-shimmer-ui">
      <div className="shimmer-line" />
      {[1, 2, 3, 4].map((card) => (
        <div className="card-shimmer" key={card}>
          <div className="card-shimmer-image" />
          <div className="card-shimmer-content">
            <div className="card-shimmer-title" />
            <div className="card-shimmer-text" />
            <div className="card-shimmer-text" />
          </div>
        </div>
      ))}
    </div>
  );
};

const ListShimmerUI = () => {
  return (
    <div className="shimmer-container">
      <div className="shimmer-heading"></div>
      <div className="shimmer-list-item"></div>
      <div className="shimmer-list-item"></div>
      <div className="shimmer-list-item"></div>
      <div className="shimmer-list-item"></div>
      <div className="shimmer-list-item"></div>
      <div className="shimmer-list-item"></div>
      <div className="shimmer-list-item"></div>
    </div>
  );
};

export  {CardShimmerUI, ListShimmerUI};
