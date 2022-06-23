import React from "react";
import "../stylesheets/NavbarSeller.css";
import { FiSearch, FiList, FiBell, FiUser } from "react-icons/fi";

function NavbarSeller() {
  return (
    <>
      <div className="navbar-seller w-100 d-none d-sm-flex align-items-sm-center">
        <img src="./images/icon_secondhand.png" alt="logo" />
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
