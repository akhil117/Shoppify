import React from 'react';
import {Link } from "react-router-dom";
import './LinkText.css'


const LinkText = () => {
  return (
    <div className='link'>
    <Link to ="/forgotpassword" style={{textDecoration:'none',color:"#0A66C2",fontWeight:"500"}} > Forgot password? </Link>
    </div>
  );
};

export default LinkText;