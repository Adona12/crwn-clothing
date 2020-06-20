import { cartActionTypes } from "./cart.types"
import { addCartItem} from "./cart.utils "
const INITIAL_STATE = {
    hidden: true,
    cartItems: []
}
const CartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case cartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            }
        case cartActionTypes.ADD_ITEM:
            console.log(action.payload)
            return {
                ...state,
               cartItems: addCartItem(state.cartItems,action.payload)
            }
        default:
            return state;
    }
}
export default CartReducer