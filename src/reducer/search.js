import { ActionTypes } from "../constant/action-types";

const initialState = {
  data: false,
  error: false,
};
const search = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.GET_DATA_SUCCESS:
      return {
        ...state,
        data: action.payload.data,
        error: action.payload.err,
      };
    case ActionTypes.GET_DATA_FAIL:
      return {
        ...state,
        data: action.payload.data,
        error: action.payload.err,
      };
    case ActionTypes.SEARCH_PRODUCT_SUCCESS:
      return {
        ...state,
        data: action.payload.data,
        error: action.payload.err,
      };
    case ActionTypes.SEARCH_PRODUCT_FAIL:
      return {
        ...state,
        data: action.payload.data,
        error: action.payload.err,
      };
    default:
      return state;
  }
};

export default search;
