import "../style/riostyle.css";
import { useState } from "react";
import { FiList, FiBell, FiMenu, FiSearch } from "react-icons/fi";
import { IoPersonOutline, IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clearLogin, logout } from "../actions/auth";
import { useNavigate } from "react-router";
import { getData, searchData } from "../actions/search";
import { FiX } from "react-icons/fi";
import { useEffect } from "react";
import axios from "axios";

export default function Navhomelogged() {
  const id = JSON.parse(localStorage.getItem("userId"));
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [openSideBar, setEnableBell] = useState(false);
  const [dropOpen, dropClose] = useState(false);
  const [search, setSearch] = useState("");
  const [openNotifikasi, setOpenNotifikasi] = useState(false);
  const [dataNotifikasi, setDataNotifikasi] = useState();

  const handleLogOut = () => {
    dispatch(logout());
    dispatch(clearLogin());
    navigate("/login");
  };

  const changeNotifikasi = () => {
    setOpenNotifikasi(!openNotifikasi);
  };

  const changeSearch = (value) => {
    setSearch(value);
  };

  const getNotifikasi = () => {
    axios
      .get(
        `https://secondhand6.herokuapp.com/Notifikasi/getNotifikasi/{user_id}?user_id=${id}`
      )
      .then((response) => setDataNotifikasi(response.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getNotifikasi();
  }, []);

  return (
    <>
      {openNotifikasi && (
        <div className="notifikasi pb-4">
          {dataNotifikasi?.map((item, index) => {
            return (
              <div
                className="d-flex pb-3 mt-4"
                style={{ borderBottom: "1px solid #E5E5E5" }}
                key={index}
              >
                <img
                  src={item?.url}
                  alt="icons"
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "12px",
                  }}
                  onClick={() => navigate("/offer")}
                />
                <div className="ms-3 d-flex justify-content-between w-100">
                  {item.statusPenawaran === "TOLAK" ? (
                    <div>
                      <p className="font-size-10 color-gray mb-1">
                        Penawaran produk
                      </p>
                      <p className="font-size-14 mb-1 text-decoration-line-through">
                        {item.product_name}
                      </p>
                      <p className="font-size-14 mb-1 text-decoration-line-through">
                        Rp {item.product_harga}
                      </p>
                      <p className="font-size-14 mb-1 text-decoration-line-through">
                        Ditawar Rp {item.penawaran_harga}
                      </p>
                    </div>
                  ) : (
                    <div>
                      <p className="font-size-10 color-gray mb-1">
                        Penawaran produk
                      </p>
                      <p className="font-size-14 mb-1">{item.product_name}</p>
                      <p className="font-size-14 mb-1">
                        Rp {item.product_harga}
                      </p>
                      <p className="font-size-14 mb-1">
                        Ditawar Rp {item.penawaran_harga}
                      </p>
                    </div>
                  )}
                  <div className="d-flex flex-column align-items-end">
                    <FiX />
                    <p className="font-size-10 color-gray mt-1">
                      {item.dateTime}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
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
                  dispatch(searchData(search, id));
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
        <div className="profile-wrapper">
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
                <FiList
                  style={{ width: "24px", height: "24px" }}
                  onClick={() => navigate("/daftar-jual")}
                />
                <span className="nav-list">Daftar Jual</span>
              </li>
              <li>
                <FiBell
                  style={{ width: "24px", height: "24px" }}
                  onClick={changeNotifikasi}
                />
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
      <div className={`${openSideBar ? "open-homenav" : "sidebar-wrapper"}`}>
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
              <Link
                style={{ textDecoration: "none", color: "black" }}
                to={"/daftar-jual"}
                className="font-dark"
              >
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
                className={`${dropOpen ? "dropdown-open" : "dropdown-closed"}`}
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
