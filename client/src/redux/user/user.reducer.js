
import {userActionTypes} from "./user.types"
const INITIAL_STATE={
    currentUser:null,
    errorMessage:null,
}

const UserReducer=(state=INITIAL_STATE,action)=>{
switch(action.type){
    
    case userActionTypes.SIGNIN_SUCCESS:
        return{
            ...state,
            currentUser:action.payload,
            errorMessage:null,
        }
    case userActionTypes.SIGNOUT_SUCCESS:
        return{
            ...state,
            currentUser:null,
            errorMessage:null,
        }
    case userActionTypes.SIGNOUT_FAILURE:
    case userActionTypes.SIGNIN_FAILURE:
    case userActionTypes.SIGNUP_FAILURE:
        return {
            ...state,
            errorMessage:action.payload
        }
        default:
            return state;
}
}
export default UserReducer;