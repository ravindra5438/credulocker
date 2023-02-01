import { ADD_USER, REMOVE_USER } from "./actions";

const reducer = (state, action) => {
  if (action.type === ADD_USER) {
    return {
      ...state,
      user: action.payload.email,
    };
  }
  if (action.type === REMOVE_USER) {
    return {
      ...state,
      user: false,
    };
  }
};

export default reducer;
