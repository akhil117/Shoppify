import React from 'react';
import Input from '../../components/Input';
import Text from '../../components/Text/TextIcon';
import DimText from '../../components/Text/DimText';
import './Login.css'
import SubmitButton from '../../components/Button/Submit';
import LinkText from '../../components/Links';

class Login extends React.Component{
    constructor(props){
      super(props);
      this.state = {

      }
    }


    render(){
      return(
        <div className="login-form">
          <Text  Title="Fashion World" />
          <DimText Title="Don't miss your Shopping opportunity. Sign in to stay to add more information."/>
          <div className="input-field">
          <Input  hintText="Enter Email or UserName" isPassword="text"/>
          <Input  hintText="Enter Password" isPassword="password"/>
          </div>
          <SubmitButton Title="Sign in" />

          <LinkText> </LinkText>
        </div>
      );
    }

}

export default Login;