import React from 'react'
import "./RecommendedVideos.css";
import VideoCard from './VideoCard'; 
import trinityThumbnail from "./assets/Images/Trin.webp";
import channelLogo from './assets/Images/Uswnt_logo.jpg';
import mewisThumbnail from './assets/Images/Mewniverse_Icon.webp';
import twgLogo from './assets/Images/tgw_logo.webp';
import UswntvsBrazil from './assets/Images/USWNT vs Brazil.jpg';
import Uswnt_logo from './assets/Images/Uswnt_logo.jpg';
import scenicHuntersLogo from './assets/Images/scenic_Hunters_logo.jpeg';
import travel_plane from './assets/Images/travel_plane_corona.webp';
import FES from './assets/Images/FES.jpeg';
import FES_Logo from './assets/Images/FES_Logo.jpg';
import squat_uni_logo from './assets/Images/squat_uni_logo.jpg';
import Squat_uni from './assets/Images/Squat_Uni.jpeg';
import coffee from './assets/Images/coffee.png';
import coffee_logo from './assets/Images/coffee_logo.jpg';
import Ertz from './assets/Images/Ertz.jpeg';





function RecommendedVideos() {
  return (
    <div className="recommendedVideos">
      <h2>Recommended</h2>
      <div className="recommendedVideos__videos">
        <VideoCard 
           title="USWNT Mic'd Up | Trinity"
           views="444K views"
           timestamp="8 days ago"
           channelImage={channelLogo}
           channel="USWNT"
           image={trinityThumbnail}
           />
        <VideoCard 
           title="Welcome to the MEWNIVERSE!"
           views="1.4M views"
           timestamp="11 Months ago"
           channelImage={twgLogo}
           channel="The Womens Game"
           image={mewisThumbnail}
        />
        <VideoCard 
         title="USWNT vs Brazil | 6/9/26"
           views="1.3M views"
           timestamp="2 Months ago"
           channelImage={Uswnt_logo}
           channel="USWNT"
           image={UswntvsBrazil}
        />
        <VideoCard 
         title="25 Best Countries to Visit in 2026"
           views="88K views"
           timestamp="7 Months ago"
           channelImage={scenicHuntersLogo}
           channel="Scenic Hunter"
           image={travel_plane}
        />
        <VideoCard 
         title="Frontend Simplified - Tech Jobs"
           views="1.5M views"
           timestamp="4 Months ago"
           channelImage={FES_Logo}
           channel="Frontend Simplified"
           image={FES} 
           />

        <VideoCard 
           title="Why Squat?"
           views="693K views"
           timestamp="5 Months ago"
           channelImage={squat_uni_logo}
           channel="Squat University"
           image={Squat_uni}
        />
        <VideoCard 
         title="Atlas Coffee Subscription"
           views="5.3M views"
           timestamp="2 Months ago"
           channelImage={coffee_logo}
           channel="Roasty"
           image={coffee}
           />
          <VideoCard 
           title="The Player the USWNT Can't Replace"
           views="1.6M views"
           timestamp="6 Months ago"
           channelImage={Uswnt_logo}
           channel="USWNT"
           image={Ertz}
          /> 
      </div>
    </div>
  )
}

export default RecommendedVideos
