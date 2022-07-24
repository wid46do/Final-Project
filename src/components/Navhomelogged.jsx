import "../style/riostyle.css";
import { useState } from "react";
import { FiList, FiBell, FiMenu, FiSearch } from "react-icons/fi";
import { IoPersonOutline, IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clearLogin, logout } from "../actions/auth";
import { useNavigate } from "react-router";
import { getData, searchData } from "../actions/search";

export default function Navhomelogged() {
  const id = JSON.parse(localStorage.getItem("userId"));
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [openSideBar, setEnableBell] = useState(false);
  const [dropOpen, dropClose] = useState(false);
  const [search, setSearch] = useState("");

  const handleLogOut = () => {
    dispatch(logout());
    dispatch(clearLogin());
    navigate("/login");
  };

  const changeSearch = (value) => {
    setSearch(value);
  };
  return (
    <>
      <div
        id="overlay"
        style={{ display: openSideBar ? "block" : "none" }}
      ></div>
      <header className="home-header">
        <nav className="home-navbar">
          <div className="logo-wrapper">
            <div className="home-logo" onClick={() => navigate("/")}></div>
            <div
              className="home-burger"
              onClick={() => setEnableBell(!openSideBar)}
            >
              <FiMenu
                style={{ width: "24px", height: "24px", cursor: "pointer" }}
              />
            </div>
            <div className="home-search">
              <FiSearch
                style={{ width: "24px", height: "24px", cursor: "pointer" }}
                onClick={() => {
                  if (search === "") {
                    dispatch(getData(id));
                    return;
                  }
                  dispatch(searchData(search));
                }}
              />
              <input
                type="text"
                placeholder="Cari di sini ..."
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>
          
        </nav>
        <div
            className="profile-wrapper"
          >
            <div className="home-menu">
              <h4 className="brand-title">
                Second Hand
                <IoClose
                  style={{ width: "24px", height: "24px", cursor: "pointer" }}
                  // onClick={() => setEnableBell(!openSideBar)}
                />
              </h4>
              <ul className="profile-account-wrapper">
                <li>
                  <Link to={"/daftar-jual"} className="font-dark">
                    <FiList style={{ width: "24px", height: "24px" }} />
                    <span className="nav-list">Daftar Jual</span>
                  </Link>
                </li>
                <li>
                  <FiBell style={{ width: "24px", height: "24px" }} />
                  <span className="nav-list">Notifikasi</span>
                </li>
                <li onClick={() => dropClose(!dropOpen)}>
                  <IoPersonOutline style={{ width: "24px", height: "24px" }} />
                  <span className="nav-list">Akun Saya</span>
                  <div
                    className={`${
                      dropOpen ? "dropdown-open" : "dropdown-closed"
                    }`}
                  >
                    <ul>
                      <li>
                        <Link
                          style={{ textDecoration: "none", color: "#000000" }}
                          to={"/profile"}
                        >
                          Ubah Akun
                        </Link>
                      </li>
                      <li>
                        <Link
                          style={{ textDecoration: "none", color: "#000000" }}
                          to={"/"}
                        >
                          Pengaturan Akun
                        </Link>
                      </li>
                      <li
                        style={{ textDecoration: "none", color: "#000000" }}
                        onClick={handleLogOut}
                      >
                        Keluar
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
        </div>
      </header>
      <div
            className={`${openSideBar ? "open-homenav" : "sidebar-wrapper"}`}
          >
            <div className="home-menu">
              <h4 className="brand-title">
                Second Hand
                <IoClose
                  style={{ width: "24px", height: "24px", cursor: "pointer" }}
                  onClick={() => setEnableBell(!openSideBar)}
                />
              </h4>
              <ul className="profile-account-wrapper">
                <li>
                  <Link style={{textDecoration: "none", color: "black"}} to={"/daftar-jual"} className="font-dark">
                    <FiList style={{ width: "24px", height: "24px" }} />
                    <span className="nav-list">Daftar Jual</span>
                  </Link>
                </li>
                <li>
                  <FiBell style={{ width: "24px", height: "24px" }} />
                  <span className="nav-list">Notifikasi</span>
                </li>
                <li onClick={() => dropClose(!dropOpen)}>
                  <IoPersonOutline style={{ width: "24px", height: "24px" }} />
                  <span className="nav-list">Akun Saya</span>
                  <div
                    className={`${
                      dropOpen ? "dropdown-open" : "dropdown-closed"
                    }`}
                  >
                    <ul>
                      <li>
                        <Link
                          style={{ textDecoration: "none", color: "#000000" }}
                          to={"/profile"}
                        >
                          Ubah Akun
                        </Link>
                      </li>
                      <li>
                        <Link
                          style={{ textDecoration: "none", color: "#000000" }}
                          to={"/"}
                        >
                          Pengaturan Akun
                        </Link>
                      </li>
                      <li
                        style={{ textDecoration: "none", color: "#000000" }}
                        onClick={handleLogOut}
                      >
                        Keluar
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
        </div>
    </>
  );
}
