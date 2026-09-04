import React from "react";
import Sidebar from "./Sidebar";
import RecommendedVideos from "./RecommendedVideos";

const Home = ({ sidebarOpen, onCloseSidebar }) => {
  return (
    <div className="app__page">

      {sidebarOpen && (
        <>
          <div
            className="sidebarBackdrop"
            onClick={onCloseSidebar}
          ></div>

          <div className="sidebarContainer">
            <Sidebar />
          </div>
        </>
      )}

      <RecommendedVideos />

    </div>
  );
};

export default Home;