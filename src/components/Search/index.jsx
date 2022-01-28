import React from "react";
import "./Search.css";

const Search = () => {
  return (
    <div className="bg-image">
      <div className="search-section">
        <div className="search-content">
          <h1>If you are looking for Job we are here to help you.</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="job-search">
          <div className="job-title-search">
            <i class="fa fa-search"></i>
            <input
              type="text"
              alt="Jobtitle"
              placeholder="jobtitle,Skills,Companies"
              className="input-search"
            ></input>
          </div>
          <div className="job-location">
            <i class="fa fa-map-marker loc-mr"></i>
            <input
              type="text"
              alt="Jobloaction"
              placeholder="location..."
              className="input-search"
            ></input>
          </div>
          <button className="btn">Search</button>
        </div>
      </div>
    </div>
  );
};

export default Search;
