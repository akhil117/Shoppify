import React from 'react';
import './Text.css';

const PlainText = (props) => {
  return(
    <label className="Font-Text">
      <label className="Text-Style"> {props.Title} </label>
    </label>
  );
};

export default PlainText;