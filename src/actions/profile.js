import axios from "axios";
import { ActionTypes } from "../constant/action-types";

// const id = JSON.parse(localStorage.getItem("userId"));
const token = JSON.parse(localStorage.getItem("token"));

export const getProfile = (id) => (dispatch) => {
  return axios
    .get(`https://secondhand6.herokuapp.com/user/${id}`)
    .then((response) => {
      console.log(id, "INI ID ACTION");
      console.log(response.data, "INI RESPONSE ACTIONS");
      dispatch({
        type: ActionTypes.GET_PROFILE_SUCCESS,
        payload: {
          data: response.data,
          errorMessage: false,
        },
      });
    })
    .catch((error) => {
      dispatch({
        type: ActionTypes.GET_PROFILE_FAIL,
        payload: {
          data: false,
          errorMessage: error.message,
        },
      });
    });
};

export const clearProfile = () => {
  return {
    type: ActionTypes.CLEAR_PROFILE,
    payload: {
      data: false,
      errorMessage: false,
    },
  };
};
export const getPenjual = (idPenjual) => (dispatch) => {
  return axios
    .get(`https://secondhand6.herokuapp.com/user/${idPenjual}`)
    .then((response) => {
      dispatch({
        type: ActionTypes.GET_PROFILE_PENJUAL_SUCCESS,
        payload: {
          data: response.data,
          errorMessage: false,
        },
      });
    })
    .catch((error) => {
      dispatch({
        type: ActionTypes.GET_PROFILE_PENJUAL_FAIL,
        payload: {
          data: false,
          errorMessage: error.message,
        },
      });
    });
};

export const updateProfile = (data, navigate) => (dispatch) => {
  console.log(data, "ini dataku");
  return axios({
    method: "PUT",
    url: "https://secondhand6.herokuapp.com/user/update/12",
    data: data,
    headers: {
      "content-type": "application/json",
    },
  }).then((response) => {
    console.log(response, "ini response update");
    dispatch({
      type: ActionTypes.UPDATE_PROFILE_SUCCESS,
    }).catch((error) => {
      dispatch({
        typeof: ActionTypes.UPDATE_PROFILE_FAIL,
      });
    });
  });
};
