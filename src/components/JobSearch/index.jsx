import React, { useState } from "react";
import "./jobsearch.css";

const JobSearch = () => {
  const items = [
    { id: 1, text: "Skills" },
    { id: 2, text: "Comapny" },
    { id: 3, text: "Locations" },
    { id: 4, text: "Function" },
    { id: 5, text: "Industry" },
    { id: 6, text: "Roles" },
  ];
  const [activeItem, setActiveItem] = useState();

  return (
    <div className="job-sec">
      <div className="about">
        <h2>Find Job Vacancies</h2>
        <div className="job-catg">
          <ul className="tab-catg">
            {items.map((item) => (
              <li className="tab-catg-link">
                <a
                  href="abcd"
                  onClick={() => setActiveItem(item.id)}
                  className={activeItem === item.id ? "activeItem" : "inactive"}
                >
                  {item.text}
                </a>
              </li>
            ))}
          </ul>
          <div></div>
        </div>
      </div>

      <div className="call-services">
        <div className="call-services-link">
          <p className="call-services-header">
            Find Better & faster Call Sevices
          </p>
          <div className="contact-form">
            <input
              type="text"
              placeholder="Enter your mobile Number"
              className="input-search-bar"
            />
            <input
              type="submit"
              value="Get a call back"
              className="submit-btn"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobSearch;
