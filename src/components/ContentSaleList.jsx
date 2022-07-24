import React, { useState } from "react";
import "../style/ContentSaleList.css";
import {
  FiBox,
  FiHeart,
  FiChevronRight,
  FiDollarSign,
  FiMenu,
} from "react-icons/fi";
import DataProductSale from "./DataProductSale";
import Slider from "react-slick";
import { useNavigate } from "react-router";
import DataProductList from "./DataProductList";
import DataProductSold from "./DataProductSold";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProfile } from "../actions/profile";

function ContentSaleList({ changeWidth, setVisible }) {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2.5,
    slidesToScroll: 1,
  };

  const {dataProfile} = useSelector((state)=>state.profile)

  const dispatch = useDispatch()

  const id = JSON.parse(localStorage.getItem("userId"));

  useEffect(()=>{
    dispatch(getProfile(id))
  },[])

  const navigate = useNavigate()

  const [menu, setMenu] = useState("all");

  return (
    <>
      <div className="content-sale-list container-md px-0">
        <div className="row g-md-3 g-0">
          <div className="col-12 px-0">
            <div className="content-sale-top">
              <div className="d-flex align-items-center align-items-md-start mb-3 mb-md-0">
                <FiMenu
                  className="me-4 ms-4 font-size-24 d-inline-block d-sm-none"
                  onClick={setVisible}
                />
                <h3 className="font-font-size-20 fw-bold mb-0 mb-md-4 ms-0 ms-sm-4 ms-md-0">
                  Daftar Jual Saya
                </h3>
              </div>
              <div className="info-seller d-flex justify-content-between align-items-center p-3 mx-4 mx-md-0">
                <div className="d-flex align-items-center">
                  <img
                    src={dataProfile.fotoProfile}
                    alt="img-user"
                    className="image-user me-3"
                  />
                  <div className="d-flex flex-column justify-content-center">
                    <p className="name-seller">{dataProfile.full_name}</p>
                    <p className="city-seller">{dataProfile.kota}</p>
                  </div>
                </div>
                <button onClick={()=>navigate("/profile")} className="btn-sale-edit">Edit</button>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center g-0 mt-4 h-100">
          <div className="col-md-3 col-12 px-0 mt-0">
            {changeWidth >= 576 ? (
              <div className="category p-4 mx-0 mx-sm-4 mx-md-0">
                <h6 className="mb-4">Kategori</h6>
                <div
                  className="d-flex justify-content-between align-items-center mb-3 pb-3 shadow-bottom"
                  onClick={() => {
                    setMenu("all");
                  }}
                >
                  <span>
                    <FiBox className="me-2 color-gray" /> Semua Produk
                  </span>
                  <FiChevronRight className="color-gray" />
                </div>
                <div
                  className="d-flex justify-content-between align-items-center mb-3 pb-3 shadow-bottom"
                  onClick={() => {
                    setMenu("minat");
                  }}
                >
                  <span>
                    <FiHeart className="me-2 color-gray" /> Diminati
                  </span>
                  <FiChevronRight className="color-gray" />
                </div>
                <div
                  className="d-flex justify-content-between align-items-center pb-3"
                  onClick={() => {
                    setMenu("sold");
                  }}
                >
                  <span>
                    <FiDollarSign className="me-2 color-gray" /> Terjual
                  </span>
                  <FiChevronRight className="color-gray" />
                </div>
              </div>
            ) : (
              <Slider {...settings}>
                <div className="list-category">
                  <div>
                    <FiBox className="me-2 font-size-20" />
                    <span className="font-size-14">Produk</span>
                  </div>
                </div>
                <div className="list-category">
                  <div>
                    <FiHeart className="me-2 font-size-20" />
                    <span className="font-size-14">Diminati</span>
                  </div>
                </div>
                <div className="list-category">
                  <div>
                    <FiDollarSign className="me-2 font-size-20" />
                    <span className="font-size-14">Terjual</span>
                  </div>
                </div>
              </Slider>
            )}
          </div>
          <div className="col-12 col-md-9 px-0 px-sm-3 px-md-0 mt-4 mt-md-0 data-product">
            {menu === "all" ? (
              <DataProductSale />
            ) : menu === "minat" ? (
              <DataProductList />
            ) : (
              <DataProductSold />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default ContentSaleList;
