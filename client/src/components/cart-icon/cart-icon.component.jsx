import React from "react"
import "./cart-icon.styles.scss"
import {ToggleCartHidden} from "../../redux/cart/cart.action"
import {selectCartItemsCount} from "../../redux/cart/cart.selectors"
import {ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg.svg"
import {createStructuredSelector} from "reselect"
import {connect} from "react-redux"
const CartIcon=({toggleCartHidden,itemCount})=>(
    <div className='cart-icon' onClick={toggleCartHidden}>
<ShoppingIcon className='shopping-icon'/>
<span className='item-count'>{itemCount}</span>
</div>
)


const mapdispatchToProps=dispatch=>(
    {
        toggleCartHidden:() =>dispatch(ToggleCartHidden())
    }
)
const mapStaeToProps=createStructuredSelector(
    {
        itemCount:selectCartItemsCount
    }
)

export default connect(mapStaeToProps,mapdispatchToProps)(CartIcon)