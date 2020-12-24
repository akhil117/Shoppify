import * as actions from '../actions/actionTypes';

const initialState = {
  lastCreatedEvent: {
    lastCreatedTitle: null,
    lastCreatedDatetime: null,
    lastCreatedPrice: null,
    lastCreatedDescription: null
  },
  events: []
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
      }
    }
    case actions.EVENTS_SUCCESS: return{ ...state, events:action.events }
    default:
      return state;
  }
}

export default reducer;