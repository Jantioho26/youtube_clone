import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import "./SidebarRow.css";

function SidebarRow({ Icon, title }) {
  return (
    <div className="sidebarRow">
       <Icon />
      <h2>{title}</h2>
    </div>
  )
}

export default SidebarRow
