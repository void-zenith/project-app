import React from "react";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import "../Styles/Styles.scss";

const Home = () => {
  return (
    <div className="main-container">
      <div className="navbar-container">
        <Navbar></Navbar>
      </div>
      <div className="body-container">
        <div className="project-container"></div>
        <div className="right-container">
          <Sidebar></Sidebar>
        </div>
      </div>
    </div>
  );
};
export default Home;
