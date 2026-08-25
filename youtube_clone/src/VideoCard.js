import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


function VideoCard({ image, title, channel, views, timestamp, channelImage }) {
  return (
    <div>
     <img src={image} alt=""/>
     <div className="video__info"></div>
     <AccountCircleIcon className="videoCard__avatar" alt={channel} alt="" />
    </div>
  )
}

export default VideoCard
