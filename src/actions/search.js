import axios from "axios";
import { ActionTypes } from "../constant/action-types";

export const getData = (id, klik) => (dispatch) => {
  if (klik === "all" || klik === false) {
    return axios
      .get("https://secondhand6.herokuapp.com/product/getAll?status=DIJUAL")
      .then((response) => {
        dispatch({
          type: ActionTypes.GET_DATA_SUCCESS,
          payload: {
            data: response.data.filter((item) => item.user_Id !== id),
            err: false,
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: ActionTypes.GET_DATA_FAIL,
          payload: {
            data: false,
            err: error,
          },
        });
      });
  }
  return axios
    .get(`https://secondhand6.herokuapp.com/product/getAll?status=DIJUAL`)
    .then((response) => {
      dispatch({
        type: ActionTypes.GET_DATA_SUCCESS,
        payload: {
          data: response.data.filter(
            (item) => item.user_Id !== id && item.category_id === klik
          ),
          err: false,
        },
      });
    })
    .catch((error) => {
      dispatch({
        type: ActionTypes.GET_DATA_FAIL,
        payload: {
          data: false,
          err: error,
        },
      });
    });
};

export const searchData = (data, id) => (dispatch) => {
  return axios({
    method: "post",
    data: {
      searchKey: data,
    },
    url: "https://secondhand6.herokuapp.com/product/search/product_name",
    headers: { "Content-Type": "application/json" },
  })
    .then((response) => {
      dispatch({
        type: ActionTypes.SEARCH_PRODUCT_SUCCESS,
        payload: {
          data: response.data.filter((item) => item.user_Id !== id),
          err: false,
        },
      });
    })
    .catch((error) => {
      dispatch({
        type: ActionTypes.SEARCH_PRODUCT_FAIL,
        payload: {
          data: false,
          err: error,
        },
      });
    });
};
