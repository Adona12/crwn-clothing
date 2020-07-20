import React from "react";
import { Route } from "react-router-dom";
import{connect} from "react-redux";
import CollectionPage from "../collection/collection.component";
import CollectionOverview from "../../components/collections-overview/collection-overview.component";
import {firestore,convertCollectionsSnapshotToMap} from "../../firebase/firebase.utiils"
import {UpdateCollections} from "../../redux/shop/shop.action"

import WithSpinner from "../../components/with-spinner/with-spinner.component"
const CollectionOverviewWithSpinner=WithSpinner(CollectionOverview);
const CollectionPageWithSpinner=WithSpinner(CollectionPage);

class ShopPage extends React.Component{
unsubscribeFromSnapshot=null;
state={
  isLoading:true
}
componentDidMount(){
  const {updateCollections} =this.props;
  const collectionRef=firestore.collection("collections");
  collectionRef.get().then(snapshot=>{
    
    updateCollections(convertCollectionsSnapshotToMap(snapshot));
    this.setState({isLoading:false}
    );}
 
  )
}
componentWillUnmount(){
  this.unsubscribeFromSnapshot();
}


  render(){
    const {match}=this.props;
  return(<div className="shop-page">
     <Route  path={`${match.path}/:collectionId`}  render={(props)=><CollectionPageWithSpinner isLoading={this.state.isLoading} {...props}/>}/>
     <Route exact path={`${match.path}`} render={(props)=><CollectionOverviewWithSpinner isLoading={this.state.isLoading} {...props}/>}/>
    
  </div>);
  }
}

const mapDispatchToProps=dispatch=>(
  {
    updateCollections:collecionMap=>dispatch(UpdateCollections(collecionMap))
  }
)

export default connect(null,mapDispatchToProps)(ShopPage);
