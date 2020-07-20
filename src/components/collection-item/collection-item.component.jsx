import React from "react"
import {connect} from "react-redux"
import { CollectionItemContainer,ImageContainer,CollectionFooter,CollectionCustomButton,NameContainer,PriceContainer} from './collection-item.styles'
import "./collection-item.styles.scss"
import {addItem} from "../../redux/cart/cart.action"


const ComponentItem=({item,addItem})=>{
const {name,imageUrl,price}=item
return (<CollectionItemContainer>

    <ImageContainer imageurl={imageUrl}>
  
    </ImageContainer>
    <CollectionFooter>
<NameContainer>{name}</NameContainer>
<PriceContainer>{price}</PriceContainer>
    </CollectionFooter>
    <CollectionCustomButton onClick={()=>addItem(item)} inverted >Add to cart</CollectionCustomButton>
</CollectionItemContainer>)
}


const mapDispatchToProps=dispatch=>(
    {
    addItem:item=>(dispatch(addItem(item))),
}
)
export default connect(null,mapDispatchToProps)(ComponentItem)