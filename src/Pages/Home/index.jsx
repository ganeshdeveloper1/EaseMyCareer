import React from "react";
import Search from "../../components/Search";
import Activity from "../../components/Activities";
import Companies from "../../components/Companies";
import JobLocation from "../../components/Locations";
import JobSearch from "../../components/JobSearch";

const Home = () => {
  return (
    <>
      <Search />
      <Activity />
      <Companies />
      <JobLocation />
      <JobSearch />
    </>
  );
};

export default Home;
