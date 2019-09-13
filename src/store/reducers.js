import { ADD_USER } from "./constants";

const initialState = {
  user: {
    profileObj: {
      name: "There"
    },
    tokenId: ""
  }
};

function rootReducer(state = initialState, action) {
  if (action.type === ADD_USER) {
    return Object.assign({}, state, {
      user: action.payload
    });
  }
  
  return state;
}

export default rootReducer;