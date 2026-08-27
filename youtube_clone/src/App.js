import React from "react";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import RecommendedVideos from "./RecommendedVideos";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./Home";
import "./Search";

function App() {
  return (
    <div className="app">
      <Router>
        <nav>
        <Link to=“/“>Home</Link>
       <Link to="/search”>Search</Link>
      </nav>
      <Routes>
      <Route path="/" element={Home />} />
      <Route path="/search" element={Search />} />
       </Router>

      {/* <Header />
      <div className="app__page">
        <Sidebar />
        <RecommendedVideos /> 
      </div> */}
    </div> 
  );
}

export default App;

