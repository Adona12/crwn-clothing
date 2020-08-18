import {takeLatest,all,put,call} from "redux-saga/effects"
import { userActionTypes } from "../user/user.types"
import {clearCart} from "./cart.action"

export function* clearCartonSignOut(){
yield put(clearCart())
}
export function* onSignOutSuccess(){
   yield takeLatest(userActionTypes.SIGNOUT_SUCCESS,clearCartonSignOut)
}

export function* cartSagas(){
yield all([call(onSignOutSuccess)])
}