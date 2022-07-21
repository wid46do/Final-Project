import React from "react";
import "../style/ContentPageProduct.css";
import Slider from "react-slick";
import { FiArrowLeft } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCategory, getProduk } from "../actions/produk";
import { useParams } from "react-router";
import { getPenjual, getProfile } from "../actions/profile";
import { useState } from "react";
import Modal from "react-modal";
import { FiX } from "react-icons/fi";
import axios from "axios";
import { addPenawaran } from "../actions/penawaran";

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

function ContentPageProduct({ changeWidth }) {
  const user_id = JSON.parse(localStorage.getItem("userId"));

  const dispatch = useDispatch();
  const { dataProduk, dataCategory } = useSelector((state) => state.produk);
  const { dataProfile, dataPenjual } = useSelector((state) => state.profile);

  const { id } = useParams();

  const [productId, setProductId] = useState();
  const [categoryId, setCategoryId] = useState();
  const [offer, setOffer] = useState();
  const [idPenjual, setIdPenjual] = useState();
  const [modalIsOpen, setIsOpen] = useState(false);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
  };

  useEffect(() => {
    if (dataProduk === false) {
      dispatch(getProduk(id));
      dispatch(getProfile());
      return;
    }
    setCategoryId(dataProduk.category_id);
    setProductId(dataProduk.product_id);
    setIdPenjual(dataProduk.user_Id);
  }, [dataProduk]);

  useEffect(() => {
    if (categoryId) {
      dispatch(getCategory(categoryId));
      return;
    }
  }, [categoryId]);

  useEffect(() => {
    if (idPenjual) {
      dispatch(getPenjual(idPenjual));
      return;
    }
  }, [categoryId]);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const sendData = () => {
    const harga = parseInt(offer);
    const data = JSON.stringify({
      harga_penawaran: harga,
      product_id: productId,
      user_id,
    });

    dispatch(addPenawaran(data));
    closeModal();
  };

  // console.log(dataProduk);
  return (
    <>
      <div className="content-page-product">
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          ariaHideApp={false}
        >
          <div className="mx-1">
            <div className="d-flex justify-content-end">
              <FiX onClick={closeModal} />
            </div>
            <p className="mt-4 fw-normal font-size-14">
              Masukkan Harga Tawarmu
            </p>
            <p className="mt-3 font-size-14 color-gray">
              Harga tawaranmu akan diketahui penjual, jika penjual cocok kamu
              akan segera dihubungi penjual.
            </p>
            <div
              className="mt-3 d-flex p-3 bg-gray"
              style={{ borderRadius: "16px" }}
            >
              <img
                src={
                  dataProduk.product_gambar !== undefined
                    ? dataProduk.product_gambar[0]?.gambar_url
                    : ""
                }
                alt="icons"
                style={{ width: "48px", height: "48px", borderRadius: "12px" }}
              />
              <div className="ms-3">
                <p className="font-size-14 fw-bold mb-0">
                  {dataProduk.product_name}
                </p>
                <p className="font-size-14 mb-0">
                  Rp. {dataProduk.product_harga}
                </p>
              </div>
            </div>
            <div className="mt-4">
              <span className="font-size-12">Harga Tawar</span>
              <input
                type={"text"}
                onChange={(e) => {
                  setOffer(e.target.value);
                }}
                style={{
                  borderRadius: "16px",
                  border: "1px solid #D0D0D0",
                  padding: "12px 10px",
                  width: "100%",
                  marginTop: "4px",
                }}
                placeholder={"Rp 0,00"}
              />
            </div>
            <button
              type="button"
              className="btn-product-send mt-4"
              onClick={sendData}
            >
              Kirim
            </button>
          </div>
        </Modal>
        <div className="container-lg container-page-product px-0">
          <div className="row gx-0">
            <div className="col-12 d-flex justify-content-center">
              <div className="content-product-top d-flex flex-column flex-xl-row justify-content-center">
                <div className="carousel-product">
                  <FiArrowLeft className="carousel-product-arrow d-block d-sm-none" />
                  <Slider {...settings}>
                    {/* <img
                      src="https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/438859/item/goods_09_438859.jpg?width=1600&impolicy=quality_75"
                      alt=""
                      className="imgs"
                    />

                    <img
                      src="https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/423482/item/goods_69_423482.jpg?width=1008&impolicy=quality_75"
                      alt=""
                      className="imgs"
                    /> */}
                    {dataProduk === false ? (
                      <p>Loading...</p>
                    ) : (
                      dataProduk.product_gambar.map((item) => {
                        return (
                          <img
                            src={item.gambar_url}
                            alt=""
                            className="imgs"
                            key={item.gambar_id}
                          />
                        );
                      })
                    )}
                  </Slider>
                </div>
                <div className="info-product ms-0 ms-xl-5">
                  {changeWidth >= 576 ? (
                    <div className="info-product-detail d-flex flex-column align align-items-baseline mt-4 mt-xl-0">
                      <p className="name-product">{dataProduk.product_name}</p>
                      <p className="type-product">
                        {dataCategory.category_name}
                      </p>
                      <p className="price-product">
                        Rp. {dataProduk.product_harga}
                      </p>
                      {/* <button type="button" className="btn-product-send">
                        Terbitkan
                      </button>
                      <button type="button" className="btn-product-edit">
                        Edit
                      </button> */}
                      <button
                        type="button"
                        className="btn-product-send"
                        onClick={openModal}
                      >
                        Saya tertarik dan ingin nego
                      </button>
                    </div>
                  ) : (
                    <div className="info-product-detail d-flex flex-column align align-items-baseline mt-0 mt-sm-4 mt-xl-0">
                      <p className="name-product">Jam Tangan Casino</p>
                      <p className="type-product">Aksesoris</p>
                      <p className="price-product mb-0 mb-sm-4">
                        Rp. 2.500.000
                      </p>
                    </div>
                  )}
                  {dataPenjual === undefined ? (
                    <div className="info-product-seller">
                      <img src="" alt="img-user" className="image-user me-3" />
                      <div className="d-flex flex-column justify-content-center">
                        <p className="name-seller">Nama Penjual</p>
                        <p className="city-seller">Kota</p>
                      </div>
                    </div>
                  ) : (
                    <div className="info-product-seller">
                      <img
                        src={dataPenjual.fotoProfile}
                        alt="img-user"
                        className="image-user me-3"
                      />
                      <div className="d-flex flex-column justify-content-center">
                        <p className="name-seller">{dataPenjual.full_name}</p>
                        <p className="city-seller">{dataPenjual.kota}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="col-12 d-flex justify-content-center">
              <div className="content-product-bottom d-flex">
                <div className="deskripsi p-3 mb-5">
                  <p>Deskripsi</p>
                  <p className="deskripsi-text">
                    {dataProduk.product_deskripsi}
                  </p>
                </div>
              </div>
            </div>
            {changeWidth <= 576 && (
              <button className="btn-product-send-responsive" type="button">
                Terbitkan
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default ContentPageProduct;
