import React from "react";
import "../style/ContentPageProduct.css";
import Slider from "react-slick";
import { FiArrowLeft } from "react-icons/fi";

function ContentPageProduct({ changeWidth }) {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
  };

  return (
    <>
      <div className="content-page-product">
        <div className="container-lg container-page-product px-0">
          <div className="row gx-0">
            <div className="col-12 d-flex justify-content-center">
              <div className="content-product-top d-flex flex-column flex-xl-row justify-content-center">
                <div className="carousel-product">
                  <FiArrowLeft className="carousel-product-arrow d-block d-sm-none" />
                  <Slider {...settings}>
                    <img
                      src="https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/438859/item/goods_09_438859.jpg?width=1600&impolicy=quality_75"
                      alt=""
                      className="imgs"
                    />

                    <img
                      src="https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/423482/item/goods_69_423482.jpg?width=1008&impolicy=quality_75"
                      alt=""
                      className="imgs"
                    />
                  </Slider>
                </div>
                <div className="info-product ms-0 ms-xl-5">
                  {changeWidth >= 576 ? (
                    <div className="info-product-detail d-flex flex-column align align-items-baseline mt-4 mt-xl-0">
                      <p className="name-product">Jam Tangan Casino</p>
                      <p className="type-product">Aksesoris</p>
                      <p className="price-product">Rp. 2.500.000</p>
                      <button type="button" className="btn-product-send">
                        Terbitkan
                      </button>
                      <button type="button" className="btn-product-edit">
                        Edit
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
                  <div className="info-product-seller">
                    <img
                      src="./images/image_user.jpg"
                      alt="img-user"
                      className="image-user me-3"
                    />
                    <div className="d-flex flex-column justify-content-center">
                      <p className="name-seller">Nama Penjual</p>
                      <p className="city-seller">Kota</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 d-flex justify-content-center">
              <div className="content-product-bottom d-flex">
                <div className="deskripsi p-3 mb-5">
                  <p>Deskripsi</p>
                  <p className="deskripsi-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum. Lorem ipsum dolor sit
                    amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi
                    ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu
                    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                    proident, sunt in culpa qui officia deserunt mollit anim id
                    est laborum.
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
