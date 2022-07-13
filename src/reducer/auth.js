import { ActionTypes } from "../constant/action-types";

const user = JSON.parse(localStorage.getItem("user"));

const initialState = user
  ? { isLoggedIn: true, authData: false, authError: false }
  : { isLoggedIn: false, authData: false, authError: false };

const auth = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        authData: action.payload.data,
        authError: action.payload.errorMessage,
      };
    case ActionTypes.LOGIN_FAIL:
      return {
        ...state,
        isLoggedIn: false,
        authData: action.payload.data,
        authError: action.payload.errorMessage,
      };
    case ActionTypes.LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        authData: null,
        authError: false,
      };
    default:
      return state;
  }
};

export default auth;
