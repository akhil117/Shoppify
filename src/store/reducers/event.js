import * as actions from '../actions/actionTypes';

const initialState = {
  lastCreatedEvent: {
    lastCreatedTitle: null,
    lastCreatedDatetime: null,
    lastCreatedPrice: null,
    lastCreatedDescription: null
  },
  events: [],
  isShowAlert: false,
  isShowSpinner: false,
}

const reducer = (state = initialState, action) => {
  console.log("Action",action);
  switch (action.type) {
    case actions.EVENT_SUCCESS: return {
      ...state,
      lastCreatedEvent: {
        lastCreatedTitle: action.title,
        lastCreatedDatetime: action.datetime,
        lastCreatedPrice: action.price,
        lastCreatedDescription: action.description
      },
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