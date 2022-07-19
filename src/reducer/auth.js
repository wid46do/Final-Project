import { ActionTypes } from "../constant/action-types";

const token = JSON.parse(localStorage.getItem("token"));

const initialState = token
  ? {
      isLoggedIn: true,
      authData: false,
      authError: false,
      statusRegister: null,
    }
  : {
      isLoggedIn: false,
      authData: false,
      authError: false,
      statusRegister: null,
    };

const auth = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.REGISTER_SUCCESS:
      return {
        ...state,
        isLoggedIn: false,
        statusRegister: action.payload.registerStatus,
      };
    case ActionTypes.REGISTER_FAIL:
      return {
        ...state,
        isLoggedIn: false,
        statusRegister: action.payload.registerStatus,
      };
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
    case ActionTypes.CLEAR_ERROR_LOGIN:
      return {
        ...state,
        isLoggedIn: false,
        authError: action.payload.errorMessage,
      };
    case ActionTypes.CLEAR_REGISTER:
      return {
        ...state,
        isLoggedIn: false,
        statusRegister: action.payload.registerStatus,
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
