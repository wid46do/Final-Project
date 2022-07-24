import axios from "axios";
import { ActionTypes } from "../constant/action-types";

export const getProduk = (id) => (dispatch) => {
  return axios
    .get(`https://secondhand6.herokuapp.com/product/${id}`)
    .then((response) => {
      dispatch({
        type: ActionTypes.GET_PRODUK_SUCCESS,
        payload: {
          data: response.data,
          error: false,
        },
      });
    })
    .catch((err) => {
      dispatch({
        type: ActionTypes.GET_PRODUK_FAIL,
        payload: {
          data: false,
          error: err.message,
        },
      });
    });
};

export const clearProduk = () => {
  return {
    type: ActionTypes.CLEAR_PRODUK,
    payload: {
      data: false,
      error: false,
    },
  };
};

export const getCategory = (id) => (dispatch) => {
  return axios
    .get(`https://secondhand6.herokuapp.com/category/getCategory/${id}`)
    .then((response) => {
      dispatch({
        type: ActionTypes.GET_CATEGORY_SUCCESS,
        payload: {
          category: response.data,
        },
      });
    })
    .catch((err) => {
      dispatch({
        type: ActionTypes.GET_CATEGORY_FAIL,
      });
    });
};
