import { ActionTypes } from "../constant/action-types";

const initialState = {
  errorOffer: false,
};

const penawaran = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.ADD_PENAWARAN_SUCCESS:
      return {
        ...state,
      };
    case ActionTypes.ADD_PENAWARAN_FAIL:
      return {
        ...state,
        errorOffer: action.payload.error,
      };
    default:
      return state;
  }
};

export default penawaran;
