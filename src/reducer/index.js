import auth from "./auth";
import profile from "./profile";
import produk from "./produk";
import penawaran from "./penawaran";
import { combineReducers } from "redux";

export default combineReducers({ auth, profile, produk, penawaran });
