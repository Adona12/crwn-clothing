
import shopActionTypes from "./shop.types"

const INITIAL_STATE = {
    collections: null,
    isFetching: false,
    errorMessage: undefined,
}


const ShopReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case shopActionTypes.FETCH_COLLECTION_START:
            return {
                ...state,
                isFetching: true,
            }
        case "check":
            return{
                ...state,
                errorMessage:"something"
            }
        case shopActionTypes.FETCH_COLLECTION_SUCCESS:
            return {
                ...state,
                isFetching: false,
                collections: action.payload
            }

        case shopActionTypes.FETCH_COLLECTION_FAILURE:
            return {
                ...state,
                isFetching: false,
                errorMessage: action.payloa
            }
        default:
            return state;
    }
}
export default ShopReducer