import React from 'react';
import axios from 'axios'
import Input from '../../components/Input';
import Text from '../../components/Text/TextIcon';
import DimText from '../../components/Text/DimText';
import './Login.css'
import SubmitButton from '../../components/Button/Submit';
import LinkText from '../../components/Links';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions/actionTypes'
import * as actions from '../../store/actions/auth';
class Login extends React.Component {

  constructor(props) {
    super(props);
    this.submitHandler = this.submitHandler.bind(this);
    this.email = React.createRef();
    this.password = React.createRef();
  }

  //Added Refs
  submitHandler = async () => {
    const email = this.email.current.value;
    const password = this.password.current.value;
    if (email.trim().length === 0 || password.trim().length === 0) {
      return;
    }
    this.props.onAuth(email, password, this.props.isLogin);
  }

  render() {
    const { isLogin } = this.props;
    const buttonTitle = isLogin ? "Sign Up" : "Login";
    return (
      <form className="login-form">
        <Text Title="Fashion World" />
        <DimText Title="Don't miss your Shopping opportunity. Stay Connected to know more about fashion." />
        <div className="input-field">
          <Input reference={this.email} hintText="Enter Email" isPassword="text" />
          <Input reference={this.password} hintText="Enter Password" isPassword="password" />
        </div>
        <SubmitButton submitHandler={this.submitHandler} Title={buttonTitle} />
        <LinkText toggleLogin={this.props.toggleLogin}>{isLogin ? "Already on Shoppify?" : "New to Shoppify?"}</LinkText>
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLogin: state.auth.isLogin
  }
};

const mapDispatchToProps = dispatch => {
  return {
    toggleLogin: () => dispatch({ type: actionTypes.IS_LOGIN }),
    onAuth: (email, password, isLogin) => dispatch(actions.auth(email, password, isLogin))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);