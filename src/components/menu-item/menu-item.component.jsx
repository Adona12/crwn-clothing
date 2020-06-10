import React from 'react'
import './menu-item.styles.scss'
const MenuItem =({title,size,imageUrl})=>(

<div className={` ${size} menu-item`}>
    <div
      className="background-image"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    />
    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <span className="subtitle">Shop Now</span>
    </div>
  </div> 
)
export default MenuItem
/* <div className={` menu-item ${size}`}>
    <div
      className="background-image"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    />
    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <span className="subtitle">Shop Now</span>
    </div>
  </div> */



//   <div style={{
//     backgroundImage:`url(${imageUrl})`
// }} className={` menu-item ${size}`}>
// <div className="content">
//   <h1 className="title">{title.toUpperCase()}</h1>
//   <span className="subtitle">Shop Now</span>
// </div>
// </div>