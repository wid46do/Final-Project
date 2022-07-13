import { ActionTypes } from "../constant/action-types";

const initialState = {};
const message = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.MESSAGE_ERROR:
      return {
        message: action.payload,
      };
    default:
      return state;
  }
};

export default message;
