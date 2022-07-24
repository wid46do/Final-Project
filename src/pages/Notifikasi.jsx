import axios from "axios";
import { useEffect, useState } from "react";
import { GrMenu } from "react-icons/gr";
import { useNavigate } from "react-router";
import SidebarMobile from "../components/SidebarMobile";

export default function Notifikasi() {
  const id = JSON.parse(localStorage.getItem("userId"));
  const navigate = useNavigate();
  const [dataNotifikasi, setDataNotifikasi] = useState();
  const [visible, setVisible] = useState(false);

  const changeSidebar = () => {
    setVisible(!visible);
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

  console.log(visible);
  return (
    <>
      <SidebarMobile visible={visible} setVisible={changeSidebar} />
      <div className="d-flex">
        <div style={{ padding: "16px" }}>
          <GrMenu onClick={() => setVisible(!visible)} />
        </div>
        <p
          className="fw-bold mb-0"
          style={{ paddingTop: "16px", marginLeft: "16px" }}
        >
          Notifikasi
        </p>
      </div>
      {dataNotifikasi?.map((item, index) => {
        return (
          <div
            className="notif d-flex m-3"
            key={index}
            onClick={() => navigate("/offer")}
          >
            <img src={item?.url} alt="icons" className="image-user" />
            <div className="notif-desc ms-3">
              <div className="d-flex justify-content-between">
                <p style={{ fontSize: "8px" }} className="mb-1">
                  Penawaran produk
                </p>
                <p style={{ fontSize: "8px" }} className="mb-1">
                  {item.dateTime}
                </p>
              </div>
              <p className="mb-1"> {item.product_name}</p>
              <p className="mb-1"> Rp {item.product_harga}</p>
              <p className="mb-3"> Ditawar Rp {item.penawaran_harga}</p>
            </div>
          </div>
        );
      })}
    </>
  );
}
