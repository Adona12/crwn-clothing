import React from "react"
import {connect} from "react-redux"
import "./directory.styles.scss"
import MenuItem from "../menu-item/menu-item.component"
import {selectSections} from "../../redux/directory/directory.selectors"
import {createStructuredSelector} from "reselect"

const Directory=({sections})=>{
   
        return(
<div className="directory-menu"> 
   {sections.map(({id,...otherpartofsection})=>(
<MenuItem key={id} {...otherpartofsection}/>
   ))}  
    
 </div>
        )
    

}
const mapStateToProps=createStructuredSelector(
  {
    sections:selectSections
  }
)
export default connect(mapStateToProps)(Directory)