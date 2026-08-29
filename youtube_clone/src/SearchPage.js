import React from "react";
import "./SearchPage.css";
import TuneIcon from "@mui/icons-material/Tune";
import Sidebar from "./Sidebar";
import Uswnt_Logo from './assets/Images/Uswnt_logo.jpg';
import ChannelRow from './ChannelRow';
import VideoRow from './VideoRow';
import trinityThumbnail from "./assets/Images/Trin.webp";
import USWNTvsBrazil from './assets/Images/USWNT vs Brazil.jpg';
import Ertz from './assets/Images/Ertz.jpeg';


function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <TuneIcon />
        <h2>Filter</h2>
      </div>
         <ChannelRow
       image={Uswnt_Logo}
       channel="USWNT"
       verified
       subs="2M"
       no0fVideos={500}
       description="Official Page of the US Women's National Team"
      />
      <hr />
      <Sidebar />
      <hr />
      <VideoRow 
      views="444K"
      subs="2M"
      description="Trinity Rodman is Mic'd Up with the Spirit!"
      timestamp="8 days ago"
      channel="USWNT"
      title="USWNT Mic'd Up | Triniy"
      image={trinityThumbnail} 
      />
       <VideoRow 
      views="1.3M"
      subs="2M"
      description="USWNT vs Brazil"
      timestamp="2 Months Ago"
      channel="USWNT"
      title="USWNT vs Brazil | 6/9/26"
      image={USWNTvsBrazil} 
      />
      <VideoRow 
      views="1.6M"
      subs="2M"
      description="Julie Ertz- Can't be replaced!"
      timestamp="6 Months ago "
      channel="USWNT"
      title="The Player that can't be replaced!"
      image={Ertz} 
      />

    </div>
  );
}

export default SearchPage;
