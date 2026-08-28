import React from 'react'
import "./SearchPage.css";
import TuneIcon from '@mui/icons-material/Tune';
import Sidebar from "./Sidebar";

function SearchPage() {
  return (
    <div className="searchPage">
        <div className="searchPage__filter">
        <TuneIcon />
        <h2>Filter</h2>
        </div>
        <Sidebar />
    </div>
  );
}

export default SearchPage
