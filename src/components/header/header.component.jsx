import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg.svg";
import "./header.styles.scss";
import CartDropDown from  "../cart-dropdown/cart-dropdown.component"
import {connect} from "react-redux";
import {auth} from "../../firebase/firebase.utiils"
import CartIcon from "../cart-icon/cart-icon.component"

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
      <Link className="option" >
      <CartIcon/>
      </Link>
    </div>
    {hidden?null:
    <CartDropDown/>
    }
  </div>
);

const mapStateteToProps=({user:{currentUser},cart:{hidden}})=>(
{
  currentUser,
  hidden,

}
);
export default connect(mapStateteToProps)(Header);
