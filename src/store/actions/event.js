import datetime from '../../components/Input/datetime';
import * as actionTypes from './actionTypes';

export const event = (title,price,datetime,description)=> {
  return {
    type: actionTypes.EVENT_INITIATE,
    title,
    price,
    datetime,
    description
  }
}


export const fetchEvents = () => {
  return {
    type: actionTypes.EVENTS_INITIATE
  }
}

export const eventSuccess = (title,price,datetime,description) => {
  return {
    type: actionTypes.EVENT_SUCCESS,
    title,
    price,
    datetime,
    description
  }
};


export const eventsSuccess = (events) => {
  return{
    type: actionTypes.EVENTS_SUCCESS,
    events
  }
};