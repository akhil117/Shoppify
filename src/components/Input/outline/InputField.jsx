import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import './InputField.css'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    margin: '1%'
  },
  textField: {
    height: 10
  },
  cssLabel: {
    color: '#000080',
    fontSize: 18,
  },

  cssOutlinedInput: {
    '&$cssFocused $notchedOutline': {
      borderColor: '#000',
    },
  },
  cssFocused: {
    '&$cssFocused $notchedOutline': {
      borderColor: 'green !important',
    },
  },
  notchedOutline: {
    borderWidth: '2px',
    borderRadius: '20px',
  },
}));

const InputField = (props) => {
  const {
    hintText, reference, value, isPassword,
  } = props;
  const classes = useStyles();

  return (
    <TextField
      defaultValue={value}
      id="outlined-required"
      className={classes.root}
      InputLabelProps={{
        classes: {
          root: classes.cssLabel,
        },
        shrink: true,
      }}
      InputProps={{
        classes: {
          input: classes.textField
        }
      }}
      inputRef={reference}
      placeholder={hintText}
      required
      type={isPassword}
      variant="outlined"
    />
  );
};

export default InputField;

