import React from "react";
import "./App.css";
import Header from "./Header";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Search from "./Search";
import Sidebar from "./Sidebar";
import SearchPage from "./SearchPage";

function App() {
  return (
      <div className="app">
      <Router>
          <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search/:searchTerm" element={<Search />}  />
         </Routes>
      </Router>
      <div className="app__page">
      </div>
      <Sidebar />
      <SearchPage />
    </div>

   
 

     
  
  );
}

export default App;

