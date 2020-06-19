import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg.svg";
import "./header.styles.scss";
import {connect} from "react-redux";
import {auth} from "../../firebase/firebase.utiils"

const Header = ({currentUser}) => (
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

      {      currentUser?<div className="option" onClick={()=>{auth.signOut()}}>Signout </div> :<Link className="option" to="/signin">SignIn</Link>}
      {console.log(currentUser)}
    </div>
  </div>
);

const mapStateteToProps=state=>(
{
  currentUser:state.user.currentUser
}
);
export default connect(mapStateteToProps)(Header);
