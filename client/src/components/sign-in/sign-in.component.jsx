import React,{useState} from "react";
import {connect} from "react-redux"
import FormInput from "../form-input/form-input.component";
import "./sign-in.styles.scss"

import CustomButton from "../custom-button/custom-button.component";
import {SignInContainer,ButtonsContainer,TitleContainer} from "./sign-in.styles"
import {googleSignInStart,emailSignInStart} from "../../redux/user/user.action"

const SignIn =({emailSignInStart,googleSignIn})=> {
const [userCredentials, setCredentials]=useState({email:"",password:""})

 const  handleSubmit = async (event) => {
    event.preventDefault();
  
    emailSignInStart(email,password);
  }
 const handleChange = (event) => {
    const { name, value } = event.target;
    setCredentials({...userCredentials, [name]: value });
  };
 
const {email,password}=userCredentials;
    return (
      <SignInContainer>
        <TitleContainer>I already have an account</TitleContainer>
        <span>sign with your email and password</span>
        <form onSubmit={handleSubmit}>
          <FormInput
            handlechange={handleChange}
            name="email"
            label="Email"
            value={email}
            type="email"
            required
          />
          <FormInput
            handlechange={handleChange}
            name="password"
            label="Password"
            value={password}
            type="password"
            required
          />
          <ButtonsContainer>
            <CustomButton value="submit" type="submit">
              Sign in
            </CustomButton>
            <CustomButton type="button" onClick={googleSignIn} isGoogleSignIn>
              Sign in with google
            </CustomButton>
          </ButtonsContainer>
        </form>
      </SignInContainer>
    );
  }

const mapDispatchToProps=dispatch=>({
  googleSignIn:()=>dispatch(googleSignInStart()),
  emailSignInStart:(email,password)=>dispatch(emailSignInStart({email,password}))
})
export default connect(null,mapDispatchToProps)(SignIn)
