import { takeLatest, put, call, all } from "redux-saga/effects"
import { userActionTypes } from "./user.types"
import { auth, createUserProfile, googleProvidor,getCurrentUser } from "../../firebase/firebase.utiils"
import { SignInSuccess, SignInFailure,SignUpSuccess,SignUpFailure } from "./user.action";
import {SignOutSuccess,SignOutFailure}  from "./user.action";

export function* signIn(user,additionalData) {
    try {
console.log("again")
        const userRef = yield call(createUserProfile, user,additionalData);
        const userSnapshot = yield userRef.get();
      console.log("last")
        yield put(SignInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
    } catch (error) {
        yield put(SignInFailure(error.message))
    }

}
export function* signInWithGoogle() {
    try {
        const { user } = yield auth.signInWithPopup(googleProvidor);
        yield call(signIn, user);
    } catch (error) {
        yield put(SignInFailure(error.message))
    }


}

export function* signInWithEmail({ payload: { email, password } }) {
    try {

        const { user } = yield auth.signInWithEmailAndPassword(email, password);
        
        yield call(signIn, user);
    } catch (error) {
      
    }


}
export function* isUserAuthenticated(){
    try {
        const userAuth= yield getCurrentUser();
        if(!userAuth) return;
        yield signIn(userAuth)
    } catch (error) {
        yield put(SignInFailure(error.message))
    }

}
export function* SignOutStart(){
   try {
      yield auth.signOut();
      yield put(SignOutSuccess())
   } catch (error) {
    yield put(SignOutFailure(error.message))
   }
}
export function* signUpStart({payload:{email,password,displayName}}){
try {
    console.log("here")
    const {user}=yield  auth.createUserWithEmailAndPassword(email,password);
    yield put(SignUpSuccess({user,additionalData:{displayName}}))
   
} catch (error) {
    yield put(SignUpFailure(error.message))
    
}
}
export function* signInAfterSignUp({payload:{user,additionalData}}){
    console.log("some")
  yield call(signIn,user,additionalData)
}
export function* onGoogleSignInStart() {
    yield takeLatest(userActionTypes.GOOGLE_SIGNIN_START, signInWithGoogle)

}
export function* onEmailSignInStart() {
    yield takeLatest(userActionTypes.EMAIL_SIGNIN_START, signInWithEmail)

}
export function*  onCheckUserSession(){
    yield takeLatest(userActionTypes.CHECK_USER_SESSION,isUserAuthenticated)
}
export function* onSignOutStart(){
    yield takeLatest(userActionTypes.SIGNOUT_START,SignOutStart)
}

export function* onSignUpStart(){
    yield takeLatest(userActionTypes.SIGNUP_START,signUpStart)
}
export function* onSignUpSuccess(){
    yield takeLatest(userActionTypes.SIGNUP_SUCCESS,signInAfterSignUp)
}
export function* userSagas() {

    yield all([
        call(onGoogleSignInStart), 
        call(onEmailSignInStart), 
        call(onCheckUserSession), 
        call(onSignOutStart),
        call(onSignUpStart), 
        call(onSignUpSuccess) ])
}