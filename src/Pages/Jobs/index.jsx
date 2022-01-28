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

//  <div>
//    <div>Hey</div>
//    {filters.map((item, i) => (
//      <Accordian name={item.name} key={i} />
//    ))}
//  </div>;

export default Jobs;

{
  /* <Dropdown eventKey="4" title="Settings">
  <Dropdown.Item eventKey="4-1">Applications</Dropdown.Item>
  <Dropdown.Item eventKey="4-2">Channels</Dropdown.Item>
  <Dropdown.Item eventKey="4-3">Versions</Dropdown.Item>
  <Dropdown.Menu eventKey="4-5" title="Custom Action">
    <Dropdown.Item eventKey="4-5-1">Action Name</Dropdown.Item>
    <Dropdown.Item eventKey="4-5-2">Action Params</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>; */
}
