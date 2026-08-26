import React from 'react'
import "./RecommendedVideos.css";
import VideoCard from './VideoCard';




function RecommendedVideos() {
  return (
    <div className="recommendedVideos">
      <h2>Recommended</h2>
      <div className="recommendedVideos__videos">
        <VideoCard 
           title="USWNT Mic'd Up | Trinity Rodman"
           views="444K views"
           timestamp="8 days ago"
           channelImage=""
           image=""
           />
        <VideoCard 
           title="Welcome to the MEWNIVERSE!"
           views="1.4M views"
           timestamp="11 Months ago"
           channelImage=""
           channel=""
           image=""
        />
        <VideoCard 
         title="USWNT vs Brazil | 6/9/26"
           views="1.3M views"
           timestamp="2 Months ago"
           channelImage=""
           channel="USWNT"
           image=""
        />
        <VideoCard 
         title="25 Best Countries to Visit in 2026"
           views="1.3M views"
           timestamp="2 Months ago"
           channelImage=""
           channel="Scenic Hunter"
           image=""
        />
        <VideoCard 
         title="Highlights: USWNT vs Brazil | 6/9/26"
           views="1.3M views"
           timestamp="2 Months ago"
           channelImage=""
           channel=""
           image="" 
           />

        <VideoCard 
           title="Welcome to the MEWNIVERSE!"
           views="1.4M views"
           timestamp="11 Months ago"
           channelImage="
           channel="
           image=""
        />
        <VideoCard 
         title="USWNT vs Brazil | 6/9/26"
           views="1.3M views"
           timestamp="2 Months ago"
           channelImage=""
           channel="USWNT"
           image=""
           />
          <VideoCard 
           title="USWNT vs Brazil | 6/9/26"
           views="1.3M views"
           timestamp="2 Months ago"
           channelImage=""
           channel="USWNT"
           image=""
          /> 
      </div>
    </div>
  )
}

export default RecommendedVideos
