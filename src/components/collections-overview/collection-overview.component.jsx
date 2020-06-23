import React from "react"
import {connect} from "react-redux"
import {createStructuredSelector} from "reselect"
import {selectCollectionsForPreview} from "../../redux/shop/shop.selector"
import "./collection-overview.styles.scss"
import CollectionPreview from "../collection-preview/collection-preview.component"



const CollectionOverview=({collections})=>

 (
    <div className="collections-overview ">

    {collections.map(({id, ...otherpartofcollection})=>(
<CollectionPreview key={id} {...otherpartofcollection}/>
    ))}

</div>
)

const mapStateToProps=createStructuredSelector(
    {
        collections:selectCollectionsForPreview
    }
)
export default connect(mapStateToProps)(CollectionOverview);