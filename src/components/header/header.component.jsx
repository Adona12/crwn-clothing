import React from "react";
import { Link } from "react-router-dom";
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect"
import {auth} from "../../firebase/firebase.utiils"

import "./header.styles.scss";
import { ReactComponent as Logo } from "../../assets/crown.svg.svg";

import CartDropDown from  "../cart-dropdown/cart-dropdown.component"
import CartIcon from "../cart-icon/cart-icon.component"


import {selectCurrentUser} from "../../redux/user/user.selector"
import {selectCartHidden} from "../../redux/cart/cart.selectors"

const Header = ({currentUser,hidden}) => (
  <div className="header">
    <div className="logo-container">
    <Link to="/" >
      <Logo/>
        
   </Link>
    </div>
    <div className="options">
      <Link className="option" to="/shop">
        Shop
      </Link>
      <Link className="option" to="/shop">
        contact
      </Link>
      

      {  currentUser?<div className="option" onClick={()=>{auth.signOut()}}>Signout </div> :<Link className="option" to="/signin">SignIn</Link>}
      <Link className="option"  >
      <CartIcon/>
      </Link >
    </div>
    {hidden?null:
    <CartDropDown/>
    }
  </div>
);

const mapStateteToProps=createStructuredSelector(
{
  currentUser:selectCurrentUser,
  hidden:selectCartHidden,
}
);
export default connect(mapStateteToProps)(Header);
