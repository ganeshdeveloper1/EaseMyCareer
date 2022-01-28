import React from "react";
import SideNav from "../../components/SideDropdown";
import JobsInfo from "../../components/JobsInfo";
import "./Jobs.css";

const filters = [
  { name: "Job Type" },
  { name: "Education" },
  { name: "Salary" },
  { name: "Experience" },
  { name: "Industries" },
  { name: "Employer Type" },
  { name: "Location" },
  { name: "Top Companies" },
];

const Jobs = () => {
  // const [activeKey, setActiveKey] = React.useState("1");
  // const [openKeys, setOpenKeys] = React.useState(["3", "4"]);
  return (
    <div className="grid-container">
      <div className="item1">Header</div>

      <div className="item2">
        <div className="filter-container">
          <i class="fa fa-sliders" aria-hidden="true"></i>
          <span className="filter-header"> Filter By </span>
        </div>
        {filters.map((item, i) => (
          <SideNav name={item.name} key={i} />
        ))}
      </div>

      <div className="item3">{<JobsInfo />}</div>
      <div className="item4">Right</div>
      <div className="item5">Footer</div>
    </div>
  );
};

export default Jobs;
