import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";



const useStyles = makeStyles((theme) => ({
  root: {
    width: '90%',
    margin: '0.25rem 0'
  }
}));

export default function DateTime(props) {
  const classes = useStyles();
  const { name,reference } = props
  return (

    <TextField
      className={classes.root}
      id="datetime-local"
      inputRef= {reference}
      type="datetime-local"
    />
  );
}