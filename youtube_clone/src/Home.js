import React from 'react';
import Sidebar from "./Sidebar";
import RecommendedVideos from "./RecommendedVideos";

const Home = () => {
  return (
    <div className="app__page">
     <Sidebar />
     <RecommendedVideos /> 
    </div>
  );
};

export default Home

