import React from "react";
import { Link } from "react-router-dom";
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect"

import {SignOutStart} from "../../redux/user/user.action"


import {HeaderContainer,LogoContainer,OptionsContainer,OptionContainerLink} from "./header.styles.jsx"
import { ReactComponent as Logo } from "../../assets/crown.svg.svg";

import CartDropDown from  "../cart-dropdown/cart-dropdown.component"
import CartIcon from "../cart-icon/cart-icon.component"


import {selectCurrentUser} from "../../redux/user/user.selector"
import {selectCartHidden} from "../../redux/cart/cart.selectors"

const Header = ({currentUser,hidden,SignOutStart}) => (
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
      

      {  currentUser?<OptionContainerLink as="div" onClick={SignOutStart}>Signout </OptionContainerLink> :<Link className="option" to="/signin">SignIn</Link>}
      <OptionContainerLink >
      <CartIcon/>
      </OptionContainerLink >
    </OptionsContainer>
    {hidden?null:
    <CartDropDown/>
    }
  </HeaderContainer>
);
const mapDispatchToProps=dispatch=>({
  SignOutStart:()=>dispatch(SignOutStart())
})
const mapStateteToProps=createStructuredSelector(
{
  currentUser:selectCurrentUser,
  hidden:selectCartHidden,
}
);
export default connect(mapStateteToProps,mapDispatchToProps)(Header);
