import React,{useState} from "react"
import {connect} from "react-redux"
import FormInput from "../form-input/form-input.component"
import CustomButton from "../custom-button/custom-button.component"
import  {SignUpComponent,TitleContainer} from "./sign-up.styles"

import {SignUpStart} from "../../redux/user/user.action"




const SignUp =({signUpStart}) =>{
 
        const [userCredentials,setUserCredentials]=useState({
            displayName:"",
            email:"",
            password:"",
            confirmPassword:""
        });
        const {displayName,email,password,confirmPassword}=userCredentials;
    const handleChange=event=>{
        const {name,value}=event.target;
        setUserCredentials({...userCredentials,[name]:value})
    }
   const  handlesubmit= async event=>{
        event.preventDefault();
        
        if(password !== confirmPassword){
            alert("password don't match");
            return;
        }else{
           
                
          signUpStart({email,password,displayName})
        }

    }

    return(
        <SignUpComponent>
            <TitleContainer className="title">I do not have an account</TitleContainer>
            <span>sign up with your email and password</span>
            <form className="sign-up" onSubmit={handlesubmit}>
            <FormInput handlechange={handleChange} name="displayName" label="Display Name" value={displayName} type="text" required/>
            <FormInput handlechange={handleChange} name="email" label="Email" value={email} type="email" required />
            <FormInput handlechange={handleChange} name="password" label="Password" value={password} type="password"  required/>    

            <FormInput handlechange={handleChange} name="confirmPassword" label="Confirm Password" value={confirmPassword} type="password" required />
            <CustomButton value="submit" type="submit">Sign up</CustomButton>
            </form>
            </SignUpComponent>
    )
}


const mapDispatchToProps=dispatch=>(
    {
    signUpStart:userCredentials=>dispatch(SignUpStart(userCredentials))
    }
)
export default connect(null,mapDispatchToProps)(SignUp)