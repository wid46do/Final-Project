import React from "react";
import "../style/NavbarSeller.css";
import { FiSearch, FiList, FiBell, FiUser } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clearProduk } from "../actions/produk";

function NavbarSeller() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <>
      <div className="navbar-seller w-100 d-none d-sm-flex align-items-sm-center">
        {/* <Link to={"/"}> */}
        <img
          src="/images/Rectangle-127.png"
          alt="logo"
          onClick={() => {
            navigate("/");
            window.location.reload();
          }}
        />
        {/* </Link> */}
        <div className="d-flex justify-content-between w-100">
          <div className="navbar-search d-flex justify-content-between align-items-center ms-4 px-md-3 py-md-4 px-2 py-3">
            <input type="text" placeholder="Cari di sini ..." />
            <FiSearch className="color-gray ms-1 ms-md-3" />
          </div>
          <div className="navbar-icon-wrapper d-flex justify-content-around align-items-center ms-sm-3 me-3 me-sm-0">
            <FiList />
            <FiBell className="ms-sm-3" />
            <FiUser className="ms-sm-3" />
          </div>
        </div>
      </div>
    </>
  );
}

export default NavbarSeller;
