import * as actions from '../actions/actionTypes';

const initialState = {
  lastCreatedEvent: {
  },
  events: [],
  isShowAlert: false,
  isShowSpinner: false,
}



const reducer = (state = initialState, action) => {
  console.log("Action",action);
  switch (action.type) {
    case actions.EVENT_SUCCESS: 
    let eventObject = {
      title: action.title,
      date: action.datetime,
      price:  action.price,
      description: action.description
    }
    let events = state.events;
    events.push(eventObject);
    return {
      ...state,
      lastCreatedEvent: {
        ...eventObject
      },
      events: events,
      isShowAlert: true
    }
    case actions.EVENTS_SUCCESS: return{ ...state, events:action.events, isShowSpinner:false }
    case actions.SPINNER_TOGGLE: return{...state,isShowSpinner:!state.isShowSpinner}
    case actions.CLOSE_ALERT_EVENT: return{...state, isShowAlert: false }
    default:
      return state;
  }
}

export default reducer;