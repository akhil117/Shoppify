import React from 'react';
import './Text.css';
import {FcGlobe} from  "react-icons/fc";



const ShoppifyText = (props) => {

    return (
      <div className='Text-Icon'>
        <label className='Font-Title'>{props.Title}</label>
        <FcGlobe className="Globe-Icon" size={42} />
      </div>
    );
};

export default ShoppifyText;