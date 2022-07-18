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
      dispatch({
        type: ActionTypes.LOGIN_FAIL,
        payload: {
          data: false,
          errorMessage: error.message,
        },
      });

      return Promise.reject();
    }
  );
};

export const clearError = () => {
  return {
    type: ActionTypes.CLEAR_ERROR,
    payload: {
      data: false,
      errorMessage: false,
    },
  };
};

export const logout = () => (dispatch) => {
  authService.logout();
  dispatch({
    type: ActionTypes.LOGOUT,
  });
};
