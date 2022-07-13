import { ActionTypes } from "../constant/action-types";
import authService from "../service/auth.service";

export const login = (username, password) => (dispatch) => {
  return authService.login(username, password).then(
    (res) => {
      dispatch({
        type: ActionTypes.LOGIN_SUCCESS,
        payload: {
          data: res,
          errorMessage: false,
        },
      });

      return Promise.resolve();
    },
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        console.log(error.response, "cek response error");
      dispatch({
        type: ActionTypes.LOGIN_FAIL,
        payload: {
          data: false,
          errorMessage: message,
        },
      });

      dispatch({
        type: ActionTypes.MESSAGE_ERROR,
        payload: message,
      });

      return Promise.reject();
    }
  );
};

export const logout = () => (dispatch) => {
  authService.logout();
  dispatch({
    type: ActionTypes.LOGOUT,
  });
};
