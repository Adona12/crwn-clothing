import React from 'react';
import {Route,Redirect} from "react-router-dom"
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect"

import './App.css'

import checkoutPage from "./pages/checkoutpage/checkoutpage.component"
import {Homepage} from './pages/homepage/homepage.component'
import Shop from './pages/shop/shop.component'
import Header from "./components/header/header.component"
import SignInAndSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component"

import {setCurrentUser} from "./redux/user/user.action"
import {selectCurrentUser} from "./redux/user/user.selector"


import {auth, createUserProfile} from "./firebase/firebase.utiils"

class App extends React.Component{
 
unsuscribeFromAuth=null;
  componentDidMount(){
    const {setCurrentUser}=this.props
   this.unsuscribeFromAuth= auth.onAuthStateChanged(async userAuth=>{
      // this.setState({currentUser:user});
      if(userAuth){
   const userRef = await createUserProfile(userAuth);
   userRef.onSnapshot(snapshot=>{
    
    setCurrentUser({
         id:snapshot.id,
         ...snapshot.data()
       });
     
  
   });

      }else{
        setCurrentUser(userAuth);
      }
   
    })

  }
  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
  return (
    <div >
      <Header/>
      <Route exact path="/" component={Homepage}/>
   <Route  path='/shop' component={Shop}/>
   <Route exact path='/checkout' component={checkoutPage}/>
   <Route exact path='/signin' render={()=>this.props.currentUser?(<Redirect to='/'/>):(<SignInAndSignUp/>)} />
    </div>
  );
  }
}
const mapStateToProps=createStructuredSelector({
  currentUser:selectCurrentUser
})
const mapDispatchToProps= dispatch=>(
  {
    setCurrentUser:user=>(dispatch(setCurrentUser(user))),

  }
)
export default connect(mapStateToProps,mapDispatchToProps)(App);
