import React from 'react'
import './menu-item.styles.scss'
import {withRouter} from "react-router-dom";
const MenuItem =({title,size,imageUrl,linkUrl,history,match})=>{
 
return(
<div className={` ${size} menu-item`} onClick={()=>{history.push(`${match.url}${linkUrl}/jdfjdjfdjfkalla`)}}>
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
    </div> )
}
export default withRouter(MenuItem)
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