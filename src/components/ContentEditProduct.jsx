import React from "react";
import "../style/ContentPageProduct.css";
import Slider from "react-slick";
import { FiArrowLeft } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { clearProduk, getCategory, getProduk } from "../actions/produk";
import { useNavigate, useParams } from "react-router";
import { clearProfile, getPenjual, getProfile } from "../actions/profile";
import { useState } from "react";
import Modal from "react-modal";
import { FiX } from "react-icons/fi";
import { addPenawaran } from "../actions/penawaran";
import axios from "axios";

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

function ContentEditProduct({ changeWidth }) {
  const params = useParams();
  const user_id = JSON.parse(localStorage.getItem("userId"));
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { dataProduk, dataCategory } = useSelector((state) => state.produk);
  const { dataProfile, dataPenjual } = useSelector((state) => state.profile);

  const { id } = useParams();

  const [productId, setProductId] = useState();
  const [categoryId, setCategoryId] = useState();
  const [offer, setOffer] = useState();
  const [idPenjual, setIdPenjual] = useState();

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
      dispatch(getProfile(user_id));
      return;
    }
    setCategoryId(dataProduk.category_id);
    setProductId(dataProduk.product_id);
    setIdPenjual(dataProduk.user_Id);

    return () => {
      dispatch(clearProduk());
      dispatch(clearProfile());
    };
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

  const deleteProduk = () => {
    axios
      .delete(`https://secondhand6.herokuapp.com/product/delete/${params.id}`)
      .then(() => {
        navigate("/daftar-jual");
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="content-page-product">
        <div className="container-lg container-page-product px-0">
          <div className="row gx-0">
            <div className="col-12 d-flex justify-content-center">
              <div className="content-product-top d-flex flex-column flex-xl-row justify-content-center">
                <div className="carousel-product">
                  <FiArrowLeft
                    className="carousel-product-arrow d-block d-sm-none"
                    onClick={() => navigate(-1)}
                  />
                  <Slider {...settings}>
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
                      <button
                        type="button"
                        className="btn-product-send"
                        onClick={() => navigate(`/edit-produk/${params.id}`)}
                      >
                        Edit
                      </button>
                      <button
                        type="button"
                        className="btn-product-edit"
                        onClick={deleteProduk}
                      >
                        Delete
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
                      <img
                        src={dataPenjual.fotoProfile}
                        alt="img-user"
                        className="image-user me-3"
                      />
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
              <div className="btn-responsive-wrapper">
                <button
                  className="btn-product-edit-responsive"
                  type="button"
                  onClick={() => navigate(`/edit-produk/${params.id}`)}
                >
                  Edit
                </button>
                <button className="btn-product-delete-responsive" type="button">
                  Delete
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default ContentEditProduct;
