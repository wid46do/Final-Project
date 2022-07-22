import { ActionTypes } from "../constant/action-types";
import authService from "../service/auth.service";

export const register = (fullname, email, password, username) => (dispatch) => {
  return authService.register(fullname, email, password, username).then(
    (res) => {
      console.log(res);
      dispatch({
        type: ActionTypes.REGISTER_SUCCESS,
        payload: {
          registerStatus: true,
        },
      });

      return Promise.resolve();
    },
    (error) => {
      dispatch({
        type: ActionTypes.REGISTER_FAIL,
        payload: {
          registerStatus: false,
        },
      });

      return Promise.reject();
    }
  );
};

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

export const clearLogin = () => {
  return {
    type: ActionTypes.CLEAR_LOGIN,
    payload: {
      data: false,
      errorMessage: false,
    },
  };
};

export const clearErrorLogin = () => {
  return {
    type: ActionTypes.CLEAR_ERROR_LOGIN,
    payload: {
      data: false,
      errorMessage: false,
    },
  };
};

export const clearRegister = () => {
  return {
    type: ActionTypes.CLEAR_REGISTER,
    payload: {
      registerStatus: null,
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
