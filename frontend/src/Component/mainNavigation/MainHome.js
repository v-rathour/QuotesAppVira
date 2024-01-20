import React from "react";
import './MainHome.css'

const MainHome = () => {
  return (
    <>
      <div className="section">
        <div className="welcome">
          <h1>Welcome to Quotes App</h1>
        </div>
        <div className="image-container">
          <img src="https://images.unsplash.com/photo-1553374402-559e8b431161?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="default" />
        </div>
        <div className="image-container">
            <img src="https://images.unsplash.com/photo-1589561253898-768105ca91a8?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="default" />
        </div>
        <div className="content-container">
        <h1>Inspiring Quotes to Brighten Your Day</h1>
        <p>
          Explore a collection of profound wisdom and uplifting words that
          resonate with the depths of the human experience. Each quote is a
          timeless gem, carefully curated to inspire, motivate, and bring joy to
          your heart.
        </p>
        <hr />
        </div>
      </div>
    </>
  );
};

export default MainHome;
