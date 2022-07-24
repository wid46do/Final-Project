import React from "react";
import "../style/SidebarMobile.css";
import { FiX } from "react-icons/fi";
import { useNavigate } from "react-router";

function SidebarMobile({ visible, setVisible }) {
  const navigate = useNavigate();
  if (!visible) return null;

  return (
    <>
      <div className="sidebar-mobile">
        <div className="content-sidebar-mobile ps-3 pt-4">
          <div className="d-flex justify-content-between align-items-center fw-bold">
            <p
              className="mb-0 font-size-14 title-mobile"
              onClick={() => navigate("/")}
            >
              Second Hand
            </p>
            <FiX
              className="icon-close-sidebar font-size-24"
              onClick={setVisible}
            />
          </div>
          <ul>
            <li
              className="mb-3 notif-mobile"
              onClick={() => navigate("/notif")}
            >
              Notifikasi
            </li>
            <li
              className="mb-3 notif-mobile"
              onClick={() => navigate("/daftar-jual")}
            >
              Daftar Jual
            </li>
            <li
              className="mb-3 notif-mobile"
              onClick={() => navigate("/profile")}
            >
              Akun Saya
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default SidebarMobile;
