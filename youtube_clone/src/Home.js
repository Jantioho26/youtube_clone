import React from "react";
import Sidebar from "./Sidebar";
import RecommendedVideos from "./RecommendedVideos";

const Home = ({ sidebarOpen }) => {
  return (
    <div className="app__page">
      {sidebarOpen && <Sidebar />}
      <RecommendedVideos />
    </div>
  );
};

export default Home;

