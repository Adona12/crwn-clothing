import React from "react";
import { Route } from "react-router-dom";
import{connect} from "react-redux";

import CollectionPageContainer from "../collection/collection.container";
import CollectionOverviewContainer from "../../components/collections-overview/collection-overview.container";

import {fetchCollectionStart} from "../../redux/shop/shop.action"




class ShopPage extends React.Component{

componentDidMount(){
  
const {fetchCollectionStart} =this.props;

fetchCollectionStart();
}



  render(){

    const {match}=this.props;
  return(<div className="shop-page">
    
     <Route  path={`${match.path}/:collectionId`}  component={CollectionPageContainer}/>
     <Route exact path={`${match.path}`} component={CollectionOverviewContainer}/>
    
  </div>);
  }
}

const mapDispatchToProps=dispatch=>(
  {
    fetchCollectionStart:()=>dispatch(fetchCollectionStart())
  }
)

export default connect(null,mapDispatchToProps)(ShopPage);
