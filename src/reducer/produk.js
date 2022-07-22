import { ActionTypes } from "../constant/action-types";

const initialState = {
  dataProduk: false,
  errorProduk: false,
  dataCategory: false,
};

const produk = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.GET_PRODUK_SUCCESS:
      return {
        ...state,
        dataProduk: action.payload.data,
        errorProduk: action.payload.error,
      };
    case ActionTypes.GET_PRODUK_FAIL:
      return {
        ...state,
        dataProduk: action.payload.data,
        errorProduk: action.payload.error,
      };
    case ActionTypes.CLEAR_PRODUK:
      return {
        ...state,
        dataProduk: action.payload.data,
        errorProduk: action.payload.error,
      };
    case ActionTypes.GET_CATEGORY_SUCCESS:
      return {
        ...state,
        dataCategory: action.payload.category,
      };
    case ActionTypes.GET_CATEGORY_FAIL:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default produk;
