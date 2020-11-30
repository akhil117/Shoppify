import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import './InputField.css'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    width: '50%',
    margin: '1%'
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  cssLabel: {
    color: '#000080',
    fontSize: 20,
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
  labelAsterisk: {
    color: 'red',
  },
  notchedOutline: {
    borderWidth: '3px',
    borderRadius: '20px',
  },
}));

const InputField = (props) => {
  const {
    hintText, clicked, property, rid, value,isPassword
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
            focused: classes.cssFocused,
            asterisk: classes.labelAsterisk,
          },
          shrink: true,
        }}
        placeholder={hintText}
        required
        type={isPassword}
        variant="outlined"
      />
  );
};

export default InputField;

