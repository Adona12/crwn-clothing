import React from "react"

import SHOP_DATA from "./shop.data"
import CollectionPreview from "../../components/collection-preview/collection-preview.component"
class Shop extends React.Component{
    constructor(props){
        super(props);
        this.state={
            collections:SHOP_DATA
        }
    }
    render(){
        return(
            <div>

                {this.state.collections.map(({id, ...otherpartofcollection})=>(
<CollectionPreview key={id} {...otherpartofcollection}/>
                ))}
            </div>

        )
    }
}
export default Shop