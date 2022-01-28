import React from "react";
import { useState } from "react";
import "./dropdown.css";
// const Items = () => {
//   <div className="input-items">
//     <input type="checkbox" name="item1" id="1" />
//     <label htmlFor="">A</label>
//     <input type="checkbox" name="item2" id="2" />
//     <label htmlFor="">B</label>
//     <input type="checkbox" name="item3" id="3" />
//     <label htmlFor="">C</label>
//   </div>;
// };

const SideNav = ({ name }) => {
  const [click, setClick] = useState(false);
  return (
    <div className="filter-accordion-row">
      <div className="hr-line"></div>
      <div className="filter-options" onClick={() => setClick((prev) => !prev)}>
        <span className="accordion-header">{name}</span>
        <div className="dropDownIcon">
          <i className="fa fa-angle-down" aria-hidden="true"></i>
        </div>
      </div>

      {click && (
        <div className="filter-search">
          <ul className="filter-list">
            <li className="list-header">
              <input type="checkbox" name="inputs" className="input-checkbox" />
              <label htmlFor="#">Software engineer</label>
            </li>
            <li className="list-header">
              <input type="checkbox" name="inputs" className="input-checkbox" />
              <label htmlFor="#">Software engineer</label>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default SideNav;

//  const [showResults, setShowResults] = useState(false);

//  return (
//    <div className="job-search-filter">
//      <div className="filter-container">
//        <div className="filterHeading">
//          <i class="fa fa-filter" aria-hidden="true"></i>
//          <span id="f-hr">Filter</span>
//        </div>
//        <div className="fliters-content">
//          <label htmlFor="">
//            {filters.map((item) => (
//              <div className=" hr-line">
//                <div className="filter-options pd">
//                  <span className="fn">{item.name}</span>
//                  <div
//                    className="drop-down"
//                    onClick={() => setShowResults(true)}
//                    style={{ float: "right" }}
//                  >
//                    <i class="fa fa-angle-down" aria-hidden="true"></i>
//                  </div>
//                </div>
//              </div>
//            ))}
//            {showResults ? <h1>Hello</h1> : null}
//          </label>
//        </div>
//      </div>
//    </div>
//  );
