import React from "react"
import CollectionItem from "../component-item/component-item.component"
import "./collection-preview.styles.scss"
const CollectionPreview=({title,items})=>(
<div className="collection-preview"><h1 className="title">{title.toUpperCase()}</h1>
<div class="preview">
{items.filter((it,idx)=>idx<4).map(({id, ...OtherItemProperty})=>(
    <CollectionItem key={id} {...OtherItemProperty}/>
))}
</div>
</div>
)
export default CollectionPreview