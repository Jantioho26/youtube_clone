import React, { useState } from "react";
import "./App.css";
import Header from "./Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Search from "./Search";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  return (
    <div className="app">
      <Router>

        <Header onMenuClick={toggleSidebar} />

        <Routes>
         <Route
  path="/"
  element={
    <Home
      sidebarOpen={sidebarOpen}
      onCloseSidebar={toggleSidebar}
    />
  }
/>

          <Route
            path="/search/:searchTerm"
            element={<Search />}
          />
        </Routes>

      </Router>
    </div>
  );
}

export default App;

