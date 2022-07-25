import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import Product from "../images/product-pict.png";
import Profile from "../images/profile-pict.png";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { useState, useEffect } from "react";
import axios from "axios";
import { FaWhatsapp } from "react-icons/fa";
import { FiX } from "react-icons/fi";
import Modal from "react-modal";

const customStyles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: 99999999,
  },
  content: {
    width: "360px",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    transform: "translate(-50%, -50%)",
    borderRadius: "16px",
  },
};

export default function Listoffer() {
  const id = JSON.parse(localStorage.getItem("userId"));
  const [data, setData] = useState();
  const [modalSuccess, setModalSuccess] = useState(false);
  const [modalStatus, setModalStatus] = useState(false);
  const [tolak, setTolak] = useState(false);
  const [idProduct, setIdProduct] = useState();
  const [status, setStatus] = useState();
  const [idPenawaran, setIdPenawaran] = useState();
  const [modalData, setModalData] = useState({
    avatar: "",
    nama: "",
    kota: "",
    gambar: "",
    namaProduk: "",
    harga: "",
    hargaTawar: "",
  });

  useEffect(() => {
    const getData = () => {
      axios
        .get("https://secondhand6.herokuapp.com/penawaran/getAll?status")
        .then((res) => {
          setData(
            res.data.filter(
              (item) =>
                item.product.user_Id === id &&
                item.product.statusProduct === "DIJUAL" &&
                item.statusPenawaran !== "TOLAK"
            )
          );
        })
        .catch((err) => {
          console.log(err);
        });
    };

    getData();
  }, [tolak]);

  function openModalSucess() {
    setModalSuccess(true);
  }

  function closeModalSuccess() {
    setModalSuccess(false);
  }

  const changeModalStatus = () => {
    setModalStatus(!modalStatus);
  };

  const handlePenawaranSuccess = (idpenawaran) => {
    const dataAccept = JSON.stringify({
      penawaran_id: idpenawaran,
      status_diterima: true,
    });
    axios({
      method: "post",
      data: dataAccept,
      url: "https://secondhand6.herokuapp.com/penawaran/statusPenawaran",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => {
        openModalSucess();
        setTolak(!tolak);
      })
      .catch((e) => console.log(e));
  };

  const handlePenawaranFail = (idpenawaran) => {
    const dataReject = JSON.stringify({
      penawaran_id: idpenawaran,
      status_diterima: false,
    });
    axios({
      method: "post",
      data: dataReject,
      url: "https://secondhand6.herokuapp.com/penawaran/statusPenawaran",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => {
        setTolak(!tolak);
      })
      .catch((e) => console.log(e));
  };

  const handleStatus = (productid) => {
    const dataStatus = JSON.stringify({
      product_id: idProduct,
      statusJual: status,
    });

    // axios({
    //   method: "post",
    //   data: dataStatus,
    //   url: "https://secondhand6.herokuapp.com/product/updatestatusproduct",
    //   headers: { "Content-Type": "application/json" },
    // })
    //   .then((res) => {
    //     console.log(res.data);
    //     setTolak(!tolak);
    //     changeModalStatus();
    //   })
    //   .catch((e) => console.log(e));

    axios({
      method: "delete",
      url: `https://secondhand6.herokuapp.com/penawaran/deletePenawaran/{penawaranId}?penawaranId=${idPenawaran}`,
      headers: { "Access-Control-Allow-Origin": "*" },
    })
      .then((res) => {
        console.log(res);
        setTolak(!tolak);
        changeModalStatus();
      })
      .catch((e) => console.log(e));
  };

  return (
    <>
      {data === undefined ? (
        <p>Loading...</p>
      ) : (
        data.map((item, index) => {
          return (
            <div className="mb-5" key={index}>
              <Modal
                isOpen={modalSuccess}
                onRequestClose={closeModalSuccess}
                style={customStyles}
                ariaHideApp={false}
              >
                <div>
                  <div className="d-flex justify-content-end">
                    <FiX onClick={closeModalSuccess} />
                  </div>
                  <p className="font-size-14 fw-bold mt-4 mb-2">
                    Yeay kamu berhasil mendapat harga yang sesuai
                  </p>
                  <p className="font-size-14 color-gray mb-3">
                    Segera hubungi pembeli melalui whatsapp untuk transaksi
                    selanjutnya
                  </p>
                  <div
                    style={{
                      backgroundColor: "#EEEEEE",
                      borderRadius: "16px",
                      padding: "16px",
                    }}
                  >
                    <p className="mb-3 font-size-14 text-center">
                      Product Match
                    </p>
                    <div className="d-flex">
                      <img
                        src={modalData.avatar}
                        alt="icon-pembeli"
                        style={{
                          width: "48px",
                          height: "48px",
                          borderRadius: "12px",
                        }}
                      />
                      <div className="ms-3">
                        <p className="fw-bold mb-1 font-size-14">
                          {modalData.nama}
                        </p>
                        <p className="mb-0 font-size-10 color-gray">
                          {modalData.kota}
                        </p>
                      </div>
                    </div>
                    <div className="d-flex mt-3">
                      <img
                        src={modalData.gambar}
                        alt="icon-pembeli"
                        style={{
                          width: "48px",
                          height: "48px",
                          borderRadius: "12px",
                        }}
                      />
                      <div className="ms-3">
                        <p className="mb-1 font-size-14">
                          {modalData.namaProduk}
                        </p>
                        <p className="mb-1 font-size-14 text-decoration-line-through">
                          Rp {modalData.harga}
                        </p>
                        <p className="mb-1 font-size-14">
                          Ditawar Rp {modalData.hargaTawar}
                        </p>
                      </div>
                    </div>
                  </div>
                  <button type="button" className="btn-product-send mt-4">
                    Hubungi via Whatsapp
                    <span className="ms-1">
                      <FaWhatsapp />
                    </span>
                  </button>
                </div>
              </Modal>
              <Modal
                isOpen={modalStatus}
                onRequestClose={changeModalStatus}
                style={customStyles}
                ariaHideApp={false}
              >
                <div className="d-flex justify-content-end">
                  <FiX onClick={changeModalStatus} />
                </div>
                <p className="fw-bold mt-4">
                  Perbarui status penjualan produkmu
                </p>
                <form>
                  <div className="font-size-14">
                    <input
                      type="radio"
                      id="terjual"
                      name="status"
                      value={true}
                      onChange={(e) => {
                        setStatus(e.target.value);
                      }}
                    />
                    <label htmlFor="terjual" style={{ marginLeft: "10px" }}>
                      Berhasil Terjual
                    </label>
                    <p className="color-gray mb-0 ms-4">
                      Kamu telah sepakat menjual produk ini kepada pembeli
                    </p>
                  </div>
                  <div className="font-size-14 mt-4">
                    <input
                      type="radio"
                      id="ditolak"
                      name="status"
                      value={false}
                      onChange={(e) => {
                        setStatus(e.target.value);
                      }}
                    />
                    <label htmlFor="ditolak" style={{ marginLeft: "10px" }}>
                      Batalkan transaksi
                    </label>
                    <p className="color-gray mb-0 ms-4">
                      Kamu membatalkan transaksi produk ini dengan pembeli
                    </p>
                  </div>
                </form>
                <button
                  type="button"
                  className="btn-product-send mt-4"
                  onClick={() => handleStatus(idProduct)}
                >
                  Kirim
                </button>
              </Modal>
              <div className="bidder d-flex p-3 border">
                <img
                  src={item.user.fotoProfile}
                  alt=""
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "12px",
                  }}
                />
                <div className="ms-3">
                  <p className="fw-bold mb-0">{item.user.full_name}</p>
                  <p className="mb-0">{item.user.kota}</p>
                </div>
              </div>
              <p className="fw-bold my-4 p-0">Daftar Produkmu yang Ditawar</p>
              <div className="list-offered-product px-0 pt-0 pb-3 border-bottom mb-3">
                <div className="d-flex">
                  <div className="product-pict">
                    <img
                      src={item.product.product_gambar[0]?.gambar_url}
                      alt=""
                      style={{
                        width: "48px",
                        height: "48px",
                        borderRadius: "12px",
                      }}
                    />
                  </div>
                  <div className="ket ps-3">
                    <div className="time d-flex justify-content-between">
                      <p className="mb-0">Penawaran produk</p>
                      {/* <p className="mb-0">
                        {item.user.notifikasi[0]?.dateTime}
                      </p> */}
                    </div>
                    <p className="mb-0">{item.product.product_name}</p>
                    <p className="mb-0">Rp {item.product.product_harga}</p>
                    <p className="mb-0">Ditawar Rp {item.harga_penawaran}</p>
                  </div>
                </div>
                {item.statusPenawaran === "TERIMA" ? (
                  <div className="mt-3 row justify-content-center justify-content-md-end justify-content-lg-end">
                    <div
                      className="offer-btn d-grid col-6"
                      style={{ width: "158px" }}
                    >
                      <Button
                        className="form-button2 bg-light button-border text-dark"
                        onClick={() => {
                          changeModalStatus();
                          setIdProduct(item.product.product_id);
                          setIdPenawaran(item.penawaran_id);
                        }}
                      >
                        Status
                      </Button>
                    </div>
                    <div
                      className="offer-btn d-grid col-6"
                      style={{ width: "158px" }}
                    >
                      <Button className="form-button">
                        Hubungi di
                        <span className="ms-1">
                          <FaWhatsapp />
                        </span>
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="mt-3 row justify-content-center justify-content-md-end justify-content-lg-end">
                    <div className="offer-btn d-grid col-6">
                      <Button
                        className="form-button2 bg-light button-border text-dark"
                        value={false}
                        onClick={() => handlePenawaranFail(item.penawaran_id)}
                      >
                        Tolak
                      </Button>
                    </div>
                    <div className="offer-btn d-grid col-6">
                      <Button
                        className="form-button"
                        value={true}
                        onClick={(e) => {
                          handlePenawaranSuccess(item.penawaran_id);
                          setModalData({
                            ...modalData,
                            avatar: item.user.fotoProfile,
                            nama: item.user.full_name,
                            kota: item.user.kota,
                            gambar: item.product.product_gambar[0]?.gambar_url,
                            namaProduk: item.product.product_name,
                            harga: item.product.product_harga,
                            hargaTawar: item.harga_penawaran,
                          });
                        }}
                      >
                        Terima
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })
      )}
    </>
  );
}
