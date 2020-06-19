import React from 'react';
import {Homepage} from './pages/homepage/homepage.component'
import Shop from './pages/shop/shop.component'
import './App.css';
import Header from "./components/header/header.component"
import {Route} from "react-router-dom"
import {connect} from "react-redux";
import {setCurrentUser} from "./redux/user/user.action"
import SignInAndSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component"

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
   <Route exact path='/shop' component={Shop}/>
   <Route exact path='/signin' component={SignInAndSignUp}/>
    </div>
  );
  }
}
const mapDispatchToProps= dispatch=>(
  {
    setCurrentUser:user=>(dispatch(setCurrentUser(user))),

  }
)
export default connect(null,mapDispatchToProps)(App);
