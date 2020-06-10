import React from 'react';
import {Homepage} from './pages/homepage/homepage.component'
import './App.css';
import {Route} from "react-router-dom"


const Hats=(props)=>(
<div> Hats </div>
)
function App() {
  return (
    <div >
      <Route exact path="/" component={Homepage}/>
   <Route exact path='/shop/hats' component={Hats}/>
    </div>
  );
}

export default App;
