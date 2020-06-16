import React from "react"
import FormInput from '../form-input/form-input.component'
import  "./sign-in.styles.scss"
import {SignInWithGoogle} from "../../firebase/firebase.utiils"
import CustomButton from "../custom-button/custom-button.component"

class SignIn extends React.Component{
    constructor(props){
        super(props)
        this.state={
            email:'',
            password:""
        }
    }
    
    handleSubmit=event=>{
        event.preventDefault();
        this.setState({email:"",password:""})
    }
    handleChange=event=>{
        const {name,value}=event.target;
        this.setState({[name]:value})
    }
    render(){
        return(
            <div className="sign-in">
                <h1>I already have an account</h1>
                <span>sign with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput handlechange={this.handleChange} name="email" label="Email" value={this.state.email} type="email" required />
                    <FormInput handlechange={this.handleChange} name="password" label="Password" value={this.state.password} type="password" required  />
                    <div className="buttons">
                    <CustomButton value="submit" type="submit">Sign in</CustomButton>
                    <CustomButton onClick={SignInWithGoogle} isGoogleSignIn>Sign in with google</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}
export default SignIn