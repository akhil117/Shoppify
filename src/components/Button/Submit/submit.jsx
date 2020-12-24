import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";


const SubmitButton = (props) => {
  const {width,padding,font,backgroundColor} = props;
  return (
    <Button onClick={props.submitHandler} style={{ width: width, padding: padding, backgroundColor: backgroundColor , color: '#FFF', fontSize:font }} variant="contained">
      {props.Title}
    </Button>
  );
};

export default SubmitButton;