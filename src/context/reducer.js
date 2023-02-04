import {
  ADD_USER,
  REMOVE_USER,
  ADD_USER_DATA,
  REMOVE_USER_DATA,
} from "./actions";

const reducer = (state, action) => {
  if (action.type === ADD_USER) {
    return {
      ...state,
      user: action.payload.user,
    };
  }
  if (action.type === REMOVE_USER) {
    return {
      ...state,
      user: null,
      userData: null,
    };
  }
  if (action.type === ADD_USER_DATA) {
    return {
      ...state,
      userData: action.payload.userData,
      user: action.payload.email,
    };
  }
  if (action.type === REMOVE_USER_DATA) {
    return {
      ...state,
      userData: null,
    };
  }
};

export default reducer;
