import React from "react"
import "./cart-icon.styles.scss"
import {ToggleCartHidden} from "../../redux/cart/cart.action"
import {ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg.svg"

import {connect} from "react-redux"
const CartIcon=({toggleCartHidden})=>(
    <div className='cart-icon' onClick={toggleCartHidden}>
<ShoppingIcon className='shopping-icon'/>
<span className='item-count'>0</span>
</div>
)


const mapdispatchToProps=dispatch=>(
    {
        toggleCartHidden:() =>dispatch(ToggleCartHidden())
    }
)

export default connect(null,mapdispatchToProps)(CartIcon)