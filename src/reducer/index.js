import auth from "./auth";
import profile from "./profile";
import produk from "./produk";
import penawaran from "./penawaran";
import search from "./search";
import { combineReducers } from "redux";

export default combineReducers({ auth, profile, produk, penawaran, search });
