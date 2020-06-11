import React from 'react';
import {Homepage} from './pages/homepage/homepage.component'
import Shop from './pages/shop/shop.component'
import './App.css';
import Header from "./components/header/header.component"
import {Route} from "react-router-dom"



function App() {
  return (
    <div >
      <Header/>
      <Route exact path="/" component={Homepage}/>
   <Route exact path='/shop' component={Shop}/>
    </div>
  );
}

export default App;
