import axios from "axios";

const API_URL = "https://secondhand6.herokuapp.com/user/";

const login = (username, password) => {
  return axios
    .post(API_URL + "login", {
      username,
      password,
    })
    .then((res) => {
      if (res.data) {
        localStorage.setItem("token", JSON.stringify(res.data));
      }
      return res.data;
    });
};

const logout = () => {
  localStorage.removeItem("token");
};

export default {
  login,
  logout,
};
