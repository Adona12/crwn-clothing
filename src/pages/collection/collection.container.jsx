import {connect } from "react-redux"
import {createStructuredSelector} from "reselect"
import {compose} from "redux"
import CollectionPage from "./collection.component"
import {selectIsCollectionNull} from "../../redux/shop/shop.selector"
import WithSpinner from "../../components/with-spinner/with-spinner.component"

const mapStateToProps=createStructuredSelector(
    {
        isLoading:state=>!selectIsCollectionNull(state)
    }
)

const CollectionPageContainer=compose(
    connect(mapStateToProps),WithSpinner
    )(CollectionPage)

export default CollectionPageContainer