import React from "react";
import {connect} from "react-redux"
import FormInput from "../form-input/form-input.component";
import "./sign-in.styles.scss"

import CustomButton from "../custom-button/custom-button.component";
import {SignInContainer,ButtonsContainer,TitleContainer} from "./sign-in.styles"
import {googleSignInStart,emailSignInStart} from "../../redux/user/user.action"

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    const{emailSignInStart}=this.props;
    emailSignInStart(email,password);
    // try {
    //   await auth.signInWithEmailAndPassword(email, password);
    //   this.setState({
    //     email: "",
    //     password: "",
    //   });
    // } catch (error) {
    //     console.log(error);
    // }
  };
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  render() {
    const {googleSignIn} =this.props
    return (
      <SignInContainer>
        <TitleContainer>I already have an account</TitleContainer>
        <span>sign with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            handlechange={this.handleChange}
            name="email"
            label="Email"
            value={this.state.email}
            type="email"
            required
          />
          <FormInput
            handlechange={this.handleChange}
            name="password"
            label="Password"
            value={this.state.password}
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
}
const mapDispatchToProps=dispatch=>({
  googleSignIn:()=>dispatch(googleSignInStart()),
  emailSignInStart:(email,password)=>dispatch(emailSignInStart({email,password}))
})
export default connect(null,mapDispatchToProps)(SignIn);
