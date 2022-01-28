import React from "react";
import "./activity.css";

const Activity = () => {
  return (
    <div className="activities">
      <div className="visited-people counts">
        <h2>People visited</h2>
        <p>No.of people visted</p>
      </div>
      <div className="jobs-posted counts">
        <h2>Jobs Posted</h2>
        <p>No.of Jobs posted</p>
      </div>
    </div>
  );
};

export default Activity;
