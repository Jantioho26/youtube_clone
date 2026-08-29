import React from 'react'
import SearchPage from "./SearchPage";
import Sidebar from "./Sidebar";

const Search = () => {
  return (
    <div className="app__page">
      <Sidebar />
      <SearchPage />
    </div>
  );
}

export default Search
