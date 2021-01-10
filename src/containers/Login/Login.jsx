import React from 'react';
import Input from '../../components/Input/outline';
import Text from '../../components/Text/TextIcon';
import DimText from '../../components/Text/DimText';
import './Login.css'
import SubmitButton from '../../components/Button/Submit';
import LinkText from '../../components/Links';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions/actionTypes'
import * as actions from '../../store/actions/auth';
import config from '../../config';
import IconButton from '../../components/Button/IconButton'
import { UserAgentApplication } from 'msal'
class Login extends React.Component {

  constructor(props) {
    super(props);
    this.submitHandler = this.submitHandler.bind(this);
    this.email = React.createRef();
    this.password = React.createRef();
    this.token = "";
    this.expiresOn = 0;
    this.userAgentApplication = new UserAgentApplication({
      auth: {
        clientId: config.appId,
        redirectUri: "http://localhost:3000/events"
      },
      cache: {
        cacheLocation: "localStorage", // This configures where your cache will be stored
        storeAuthStateInCookie: true, // Set this to "true" if you are having issues on IE11 or Edge
      }
    });

    this.state = {
      error: null,
      isAuthenticated: false,
      user: {}
    };
  }

  login = async () => {
    try {
      // Login via popup
      await this.userAgentApplication.loginPopup(
        {
          scopes: config.scopes,
          prompt: "select_account"
        });

      // After login, get the user's profile
      await this.getUserProfile();
      var user = this.userAgentApplication.getAccount();
      console.log("user", user.userName);
      this.props.onOAuth(user.userName, this.props.isLogin, this.token, this.expiresOn, this.userAgentApplication);
    }
    catch (err) {
      console.log("errror", err.message)
      this.setState({
        isAuthenticated: false,
        user: {},
        error: err.message
      });
    }
  }

  logout = () => {
    this.userAgentApplication.logout();
  }

  getUserProfile = async () => {
    try {
      const data = await this.userAgentApplication.acquireTokenSilent({
        scopes: config.scopes
      });

      if (data.accessToken) {
        console.log("Token", data.accessToken);
        this.token = data.accessToken;
        this.expiresOn = data.expiresOn;
        // console.log("expiry",new Date().toISOString()-new Date(this.expiresOn).toISOString())
        // console.log("time",this.expiresOn);
        // console.log("testing",(this.expiresOn.getTime() - new Date().getTime())/(1000*60));
      }
    }
    catch (err) {
      console.log("err", err.message);
    }
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
        <Text Title="Easy-Event" />
        <DimText Title="Don't miss to know events opportunity. Stay Connected to know more about events." />
        <div className="input-field">
          <Input reference={this.email} hintText="Enter Email" isPassword="text" />
          <Input reference={this.password} hintText="Enter Password" isPassword="password" />
        </div>
        <SubmitButton backgroundColor="#0A66C2" font="14px" width='35%' padding='8px' submitHandler={this.submitHandler} Title={buttonTitle} />
        <br />
        { !isLogin && <IconButton backgroundColor="#0A66C2" font="14px" width='35%' padding='8px' microsoftLoginHandler={this.login} />}
        <LinkText toggleLogin={this.props.toggleLogin}>{isLogin ? "Already on EasyEvent?" : "New to EasyEvent?"}</LinkText>
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
    onAuth: (email, password, isLogin) => dispatch(actions.auth(email, password, isLogin)),
    onOAuth: (email, isLogin, token, expiresOn, userAgentApplication) => dispatch(actions.oAuth(email, isLogin, token, expiresOn, userAgentApplication))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);