import React from "react";
import { Route } from "react-router-dom";
import CollectionPage from "../collection/collection.component";
import CollectionOverview from "../../components/collections-overview/collection-overview.component";

const ShopPage = ({ match }) => (
     
  <div className="shop-page">
           <Route  path={`${match.path}/:collectionId`}  component={CollectionPage} />
    <Route exact path={`${match.path}`} component={CollectionOverview} />
    
  </div>
);

export default ShopPage;
