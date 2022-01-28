import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Nav from "./components/Nav";
import Jobs from "./Pages/Jobs";
import Business from "./Pages/Business";
import StudyAbroad from "./Pages/StudyAbroad";
import RegisterPage from "./Pages/Register";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/business" element={<Business />} />
        <Route path="/study" element={<StudyAbroad />} />
        <Route path="/registration" element={<RegisterPage />} />
      </Routes>
    </div>
  );
}

export default App;
