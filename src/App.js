import React,{useEffect} from 'react';
import {Route,Redirect} from "react-router-dom"
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect"

import './App.css'

import checkoutPage from "./pages/checkoutpage/checkoutpage.component"
import {Homepage} from './pages/homepage/homepage.component'
import Shop from './pages/shop/shop.component'
import Header from "./components/header/header.component"
import SignInAndSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component"

import {checkUserSession} from "./redux/user/user.action"
import {selectCurrentUser} from "./redux/user/user.selector"

 


const App =({checkUserSession,currentUser}) =>{
 
useEffect(()=>{
  checkUserSession();
},[checkUserSession])

  return (
    <div >
      <Header/>
      <Route exact path="/" component={Homepage}/>
   <Route  path='/shop' component={Shop}/>
   <Route exact path='/checkout' component={checkoutPage}/>
   <Route exact path='/signin' render={()=>currentUser?(<Redirect to='/'/>):(<SignInAndSignUp/>)} />
    </div>
  );
  }

const mapDispatchToProps=dispatch=>(
  {
    checkUserSession:()=>dispatch(checkUserSession())
  }
)
const mapStateToProps=createStructuredSelector({
  currentUser:selectCurrentUser,
 
})


export default connect(mapStateToProps,mapDispatchToProps)(App);
