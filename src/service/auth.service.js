import axios from "axios";

const API_URL = "https://secondhand6.herokuapp.com/user/";

const login = (email, password) => {
    return axios
        .post(API_URL + "login", {
            email,
            password,
        })
        .then((res) => {
            if (res.data) {
                localStorage.setItem("token", JSON.stringify(res.data.payload.token));
                localStorage.setItem(
                    "userId",
                    JSON.stringify(res.data.payload.user_id)
                );
            }
            return res.data;
        });
};

const register = (fullname, email, password, username) => {
    return axios.post(API_URL + "Register", {
        full_name: fullname,
        email,
        password,
        username,
    });
};

const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
};

export default {
    register,
    login,
    logout,
};