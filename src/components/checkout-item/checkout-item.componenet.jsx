import React from "react"
import "./checkout-item.styles.scss"

import {connect} from "react-redux"
import {clearItemFromCart,removeItem,addItem} from "../../redux/cart/cart.action"
 
 const CheckoutItem=({cartItem,removeItem,clearItem,addItem})=>{
     const {name,quantity,imageUrl,price}=cartItem;

    return(  <div className="checkout-item">
     <div className='image-container'>
         <img src={imageUrl} alt="item"/>
     </div>
<span className="name">{name}</span>
<span className="quantity">
<div className="arrow" onClick={()=>removeItem(cartItem)}>&#10094;</div>
   <span className="value"> {quantity} </span>
    <div className="arrow"  onClick={()=>addItem(cartItem)}>&#10095;</div>
    </span>
<span className="price">{price}</span>
<div onClick={()=>clearItem(cartItem)} className="remove-button">
&#10005;

</div>

 </div>
 )
 }


 const mapStateToProps=dispatch=>({
     clearItem:item=>(dispatch(clearItemFromCart(item))),
     removeItem:item=>(dispatch(removeItem(item))),
     addItem:item=>(dispatch(addItem(item)))
 })
export  default connect(null,mapStateToProps)(CheckoutItem)