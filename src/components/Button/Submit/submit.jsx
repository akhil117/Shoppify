import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width:'100%'
    }
  }
}));

const SubmitButton = (props) => {
  const classes = useStyles();

  return (

      <Button style={{ width:'35%',padding:"10px",backgroundColor:"#0A66C2",color:'#FFF' }} variant="contained">
        {props.Title}
      </Button>

  );
};

export default SubmitButton;