import React from 'react';
import Alert from '@material-ui/lab/Alert';




const AlertBox = (props) => {
  const {width,title} = props;
  return (
    <Alert style={{width:width}} onClose= {props.closeHandler}>{title}</Alert>
  );
}

export default AlertBox;

