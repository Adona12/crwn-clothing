import React from "react"
import FormInput from "../form-input/form-input.component"
import CustomButton from "../custom-button/custom-button.component"
import  "./sign-up.styles.scss"
import {auth, createUserProfile} from "../../firebase/firebase.utiils"


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
            try {
                const {user}=await auth.createUserWithEmailAndPassword(email,password);
               await createUserProfile(user,{ displayName});
                this.setState({
                    displayName:"",
                    email:"",
                    password:"", 
                    confirmPassword:""
                });
                
            } catch (error) {
                console.error(error);
            }
         
        }

    }
render(){
    return(
        <div className="sign-up">
            <h1 className="title">I do not have an account</h1>
            <span>sign up with your email and password</span>
            <form className="sign-up" onSubmit={this.handlesubmit}>
            <FormInput handlechange={this.handleChange} name="displayName" label="Display Name" value={this.state.displayName} type="text" required/>
            <FormInput handlechange={this.handleChange} name="email" label="Email" value={this.state.email} type="email" required />
            <FormInput handlechange={this.handleChange} name="password" label="Password" value={this.state.password} type="password"  required/>    

            <FormInput handlechange={this.handleChange} name="confirmPassword" label="Confirm Password" value={this.state.confirmPassword} type="password" required />
            <CustomButton value="submit" type="submit">Sign up</CustomButton>
            </form>
            </div>
    )
}
}
export default SignUp