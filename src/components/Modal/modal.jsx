import React from 'react';
import './modal.css';
import Backdrop from '@material-ui/core/Backdrop';
import InputField from '../Input/nonoutline';
import TextArea from '../Input/textarea'
import DateTime from '../Input/datetime'
import { makeStyles } from "@material-ui/core/styles";
import SubmitButton from "../Button/Submit"
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
    alignItems: 'start',
    paddingTop: '7%'
  },
  paper: {
    margin: '0 1rem',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(55),
      "@media (max-width: 580px)": {
        width: theme.spacing(33),
      },
      height: theme.spacing(45),
    },
  },
  modal__header: {
    padding: '1rem',
    display: 'flex',
    background: '#0a66c2de',
    justifyContent: 'center',
    color: 'white',
    "& h1": {
      margin: '0',
      fontSize: '1.25rem',
      fontFamily: 'Open Sans',
      fontWeight: 300,
      fontStyle: 'italic'
    }
  },

}));



const Modal = (props) => {
  const { backdropToggle, titleRef,priceRef,descriptionRef,dateTimeRef,saveEvent,submitHandler } = props;
  const classes = useStyles();
  return (
    <Backdrop className={classes.backdrop} open={backdropToggle}>
      <div className={classes.paper}>
        <Paper elevation={3}>
          <header className={classes.modal__header}>
            <h1>Create Event</h1>
          </header>
          <form className="popup">
            <InputField name={'Title'} reference = {titleRef} />
            <InputField name={'Price'} reference ={priceRef} />
            <DateTime  reference ={dateTimeRef}/>
            <TextArea name={'description'} reference ={descriptionRef} />
            <div className="form-buttons">
              <SubmitButton backgroundColor="#f50057" font="14px" width='37%' padding='8px' submitHandler={submitHandler} Title="Cancel" />
              <SubmitButton backgroundColor="#0A66C2" font="14px" width='37%' padding='8px' submitHandler={saveEvent} Title="Save" />
            </div>
          </form>
        </Paper>
      </div>
    </Backdrop >
  );
}

export default Modal;

