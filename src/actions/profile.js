import axios from "axios";
import { ActionTypes } from "../constant/action-types";
import Swal from "sweetalert2";

const token = JSON.parse(localStorage.getItem("token"));

export const getProfile = (id) => (dispatch) => {
  return axios
    .get(`https://secondhand6.herokuapp.com/user/${id}`)
    .then((response) => {
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

export const updateProfile = (data, id) => (dispatch) => {
  return axios({
    method: "post",
    url: `https://secondhand6.herokuapp.com/user/update/{user_Id}?user_Id=${id}`,
    data,
    headers: { "Content-Type": "multipart/form-data" },
  })
    .then((res) => {
      dispatch({
        type: ActionTypes.UPDATE_PROFILE_SUCCESS,
      });
      Swal.fire("Success", "Yeay, berhasil update profile", "success");
    })
    .catch(() => {
      dispatch({
        type: ActionTypes.UPDATE_PROFILE_FAIL,
      });
      Swal.fire("Sorry", "Update profile gagal", "error");
    });
};
