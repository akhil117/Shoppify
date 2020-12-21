import React from 'react';
import { Link } from "react-router-dom";
import './LinkText.css'


const LinkText = (props) => {
  return (
    <div className='link'>
      <Link onClick={props.toggleLogin} to="/auth" style={{ textDecoration: 'none', color: "#0A66C2", fontWeight: "500" }}>{props.children}</Link>
    </div>
  );
};

export default LinkText;