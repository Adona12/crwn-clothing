// import React from 'react'
// import './menu-item.styles.scss'
// import {withRouter} from "react-router-dom";
// const MenuItem =({title,size,imageUrl,linkUrl,history,match})=>{



// return(
// <div className={` ${size} menu-item`} onClick={()=>{history.push(`${match.url}${linkUrl}`)}}>
//     <div
//       className="background-image"
//       style={{
//         backgroundImage: `url(${imageUrl})`,
//       }}
//     />
//     <div className="content">
//       <h1 className="title">{title.toUpperCase()}</h1>
//       <span className="subtitle">Shop Now</span>
//     </div>
//     </div> )
// }
// export default withRouter(MenuItem)



import React from 'react'
import {MenuItemContainer,ContentContainer,TitleContainer,SubTitleContainer,BackgroundImageContainer} from './menu-item.styles'
import {withRouter} from "react-router-dom";
const MenuItem =({title,size,imageUrl,linkUrl,history,match})=>{


return(
<MenuItemContainer size={size} imageUrl={imageUrl} onClick={()=>{history.push(`${match.url}${linkUrl}`)}}>
    <BackgroundImageContainer imageUrl={imageUrl}>

    </BackgroundImageContainer>
    <ContentContainer>
      <TitleContainer>{title.toUpperCase()}</TitleContainer>
      <SubTitleContainer className="subtitle">Shop Now</SubTitleContainer>
    </ContentContainer>
    </MenuItemContainer> )
}
export default withRouter(MenuItem)
