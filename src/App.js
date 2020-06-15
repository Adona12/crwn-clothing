import React from 'react';
import {Homepage} from './pages/homepage/homepage.component'
import Shop from './pages/shop/shop.component'
import './App.css';
import Header from "./components/header/header.component"
import {Route} from "react-router-dom"
import SignInAndSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component"

import {auth} from "./firebase/firebase.utiils"

class App extends React.Component{
  constructor(){
    super();
    this.state={
      currentUser:null
    }
  }
unsuscribeFromAuth=null;
  componentDidMount(){
   this.unsuscribeFromAuth= auth.onAuthStateChanged(user=>{
      this.setState({currentUser:user});
      console.log(user);
    })
  }
  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
  return (
    <div >
      <Header currentUser={this.state.currentUser}/>
      <Route exact path="/" component={Homepage}/>
   <Route exact path='/shop' component={Shop}/>
   <Route exact path='/signin' component={SignInAndSignUp}/>
    </div>
  );
  }
}

export default App;
