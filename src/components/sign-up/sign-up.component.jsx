import React from "react"
import {connect} from "react-redux"
import FormInput from "../form-input/form-input.component"
import CustomButton from "../custom-button/custom-button.component"
import  {SignUpComponent,TitleContainer} from "./sign-up.styles"

import {SignUpStart} from "../../redux/user/user.action"




class SignUp extends React.Component{
    constructor(){
        super();
        this.state={
            displayName:"",
            email:"",
            password:"",
            confirmPassword:""
        }
    }
    handleChange=event=>{
        const {name,value}=event.target;
        this.setState({[name]:value})
    }
    handlesubmit= async event=>{
        event.preventDefault();
        const {displayName,email,password,confirmPassword}=this.state;
        if(password !== confirmPassword){
            alert("password don't match");
            return;
        }else{
            const {signUpStart} =this.props;
                
          signUpStart({email,password,displayName})
        }

    }
render(){
   
    return(
        <SignUpComponent>
            <TitleContainer className="title">I do not have an account</TitleContainer>
            <span>sign up with your email and password</span>
            <form className="sign-up" onSubmit={this.handlesubmit}>
            <FormInput handlechange={this.handleChange} name="displayName" label="Display Name" value={this.state.displayName} type="text" required/>
            <FormInput handlechange={this.handleChange} name="email" label="Email" value={this.state.email} type="email" required />
            <FormInput handlechange={this.handleChange} name="password" label="Password" value={this.state.password} type="password"  required/>    

            <FormInput handlechange={this.handleChange} name="confirmPassword" label="Confirm Password" value={this.state.confirmPassword} type="password" required />
            <CustomButton value="submit" type="submit">Sign up</CustomButton>
            </form>
            </SignUpComponent>
    )
}
}

const mapDispatchToProps=dispatch=>(
    {
    signUpStart:userCredentials=>dispatch(SignUpStart(userCredentials))
    }
)
export default connect(null,mapDispatchToProps)(SignUp)