import { ActionTypes } from "../constant/action-types";
import axios from "axios";
import Swal from "sweetalert2";

export const addPenawaran = (data) => (dispatch) => {
  return axios({
    method: "post",
    url: "https://secondhand6.herokuapp.com/penawaran/addpenawaranffff",
    data: data,
    headers: { "Content-Type": "application/json" },
  })
    .then(function (response) {
      dispatch({
        type: ActionTypes.ADD_PENAWARAN_SUCCESS,
        payload: {
          error: false,
        },
      });
      Swal.fire("Good job!", "Success Add Penawaran", "success");
    })
    .catch(function (err) {
      dispatch({
        type: ActionTypes.ADD_PENAWARAN_FAIL,
        payload: {
          error: err.message,
        },
      });
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
        footer: '<a href="">Why do I have this issue?</a>',
      });
    });
};
