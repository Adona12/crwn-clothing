import {userActionTypes} from "./user.types"

export const googleSignInStart=()=>(
    {
        type:userActionTypes.GOOGLE_SIGNIN_START
      
    }
)


export const emailSignInStart=(emailAndPassword)=>(
    {
        type:userActionTypes.EMAIL_SIGNIN_START,
        payload:emailAndPassword
    }
)
export const checkUserSession=()=>(
    {
        type:userActionTypes.CHECK_USER_SESSION
    }
)
export const SignInSuccess=(user)=>(
    {
        type:userActionTypes.SIGNIN_SUCCESS,
        payload:user
    }
)
export const SignInFailure=(message)=>(
    {
        type:userActionTypes.SIGNIN_FAILURE,
        payload:message
    }
)

export const SignOutStart=()=>(
    {
        type:userActionTypes.SIGNOUT_START,
    
    }
)
export const SignOutSuccess=()=>(
    {
        type:userActionTypes.SIGNOUT_SUCCESS,
      
    }
)
export const SignOutFailure=(message)=>(
    {
        type:userActionTypes.SIGNOUT_FAILURE,
        payload:message
    }
)
export const SignUpStart=(userCredentials)=>(
    {
        type:userActionTypes.SIGNUP_START,
        payload:userCredentials
      
    }
)
export const SignUpSuccess=({user,additionalData})=>(
    {
        type:userActionTypes.SIGNUP_SUCCESS,
        payload:{user,additionalData}
      
    }
)
export const SignUpFailure=(message)=>(
    {
        type:userActionTypes.SIGNUP_FAILURE,
        payload:message
    }
)