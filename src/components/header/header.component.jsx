import React from "react";
import { Link } from "react-router-dom";
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect"
import {auth} from "../../firebase/firebase.utiils"


import {HeaderContainer,LogoContainer,OptionsContainer,OptionContainerLink} from "./header.styles.jsx"
import { ReactComponent as Logo } from "../../assets/crown.svg.svg";

import CartDropDown from  "../cart-dropdown/cart-dropdown.component"
import CartIcon from "../cart-icon/cart-icon.component"


import {selectCurrentUser} from "../../redux/user/user.selector"
import {selectCartHidden} from "../../redux/cart/cart.selectors"

const Header = ({currentUser,hidden}) => (
  <HeaderContainer>
    
    <LogoContainer to="/" >
      <Logo/>
        
   </LogoContainer>
   
    <OptionsContainer>
      <OptionContainerLink to="/shop">
        Shop
      </OptionContainerLink>
      <OptionContainerLink to="/shop">
        contact
      </OptionContainerLink>
      

      {  currentUser?<OptionContainerLink as="div" onClick={()=>{auth.signOut()}}>Signout </OptionContainerLink> :<Link className="option" to="/signin">SignIn</Link>}
      <OptionContainerLink >
      <CartIcon/>
      </OptionContainerLink >
    </OptionsContainer>
    {hidden?null:
    <CartDropDown/>
    }
  </HeaderContainer>
);

const mapStateteToProps=createStructuredSelector(
{
  currentUser:selectCurrentUser,
  hidden:selectCartHidden,
}
);
export default connect(mapStateteToProps)(Header);
