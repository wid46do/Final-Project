import { ActionTypes } from "../constant/action-types";

const initialState = {
  dataProfile: false,
  dataPenjual: false,
  errorProfile: false,
};

const profile = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.GET_PROFILE_SUCCESS:
      return {
        ...state,
        dataProfile: action.payload.data,
        errorProfile: action.payload.errorMessage,
      };
    case ActionTypes.GET_PROFILE_FAIL:
      return {
        ...state,
        dataProfile: action.payload.data,
        errorProfile: action.payload.errorMessage,
      };
    case ActionTypes.CLEAR_PROFILE:
      return {
        ...state,
        dataProfile: action.payload.data,
        dataPenjual: action.payload.data,
        errorProfile: action.payload.errorMessage,
      };
    case ActionTypes.GET_PROFILE_PENJUAL_SUCCESS:
      return {
        ...state,
        dataPenjual: action.payload.data,
        errorProfile: action.payload.errorMessage,
      };
    case ActionTypes.GET_PROFILE_PENJUAL_FAIL:
      return {
        ...state,
        dataPenjual: action.payload.data,
        errorProfile: action.payload.errorMessage,
      };
    case ActionTypes.UPDATE_PROFILE_SUCCESS:
      return {
        ...state,
      };
    case ActionTypes.UPDATE_PROFILE_FAIL:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default profile;
