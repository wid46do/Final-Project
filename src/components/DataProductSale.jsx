import React, { useState } from "react";
import { FiPlus } from "react-icons/fi";
import { useNavigate } from "react-router";
import "../style/DataProductSale.css";

function DataProductSale() {
  const navigate = useNavigate()
  return (
    <>
      <div className="row ms-0 ms-md-3 g-md-3 g-0 justify-content-around justify-content-sm-start">
        <div className="card-add-product p-2 ms-0 ms-sm-3" onClick={()=>navigate("/produk")}>
          <FiPlus className="color-gray" />
          <p className="font-size-14 color-gray">Tambah Produk</p>
        </div>
        <div className="card-sale p-2 ms-0 ms-sm-3">
          <div className="h-70 w-100 mb-3">
            <img
              src="https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/438859/item/goods_09_438859.jpg?width=1600&impolicy=quality_75"
              alt=""
              className="img-card"
            />
          </div>
          <div className="h-20">
            <h5 className="font-size-14 mb-1">Jam Tangan Casino</h5>
            <p className="font-size-10 color-gray mb-2">Aksesoris</p>
            <p className="font-size-14 ">Rp. 250.000</p>
          </div>
        </div>
        <div className="card-sale p-2 ms-0 ms-sm-3">
          <div className="h-70 w-100 mb-3">
            <img
              src="https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/438859/item/goods_09_438859.jpg?width=1600&impolicy=quality_75"
              alt=""
              className="img-card"
            />
          </div>
          <div className="h-20">
            <h5 className="font-size-14 mb-1">Jam Tangan Casino</h5>
            <p className="font-size-10 color-gray mb-2">Aksesoris</p>
            <p className="font-size-14 ">Rp. 250.000</p>
          </div>
        </div>
        <div className="card-sale p-2 ms-0 ms-sm-3">
          <div className="h-70 w-100 mb-3">
            <img
              src="https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/438859/item/goods_09_438859.jpg?width=1600&impolicy=quality_75"
              alt=""
              className="img-card"
            />
          </div>
          <div className="h-20">
            <h5 className="font-size-14 mb-1">Jam Tangan Casino</h5>
            <p className="font-size-10 color-gray mb-2">Aksesoris</p>
            <p className="font-size-14 ">Rp. 250.000</p>
          </div>
        </div>
        <div className="card-sale p-2 ms-0 ms-sm-3">
          <div className="h-70 w-100 mb-3">
            <img
              src="https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/438859/item/goods_09_438859.jpg?width=1600&impolicy=quality_75"
              alt=""
              className="img-card"
            />
          </div>
          <div className="h-20">
            <h5 className="font-size-14 mb-1">Jam Tangan Casino</h5>
            <p className="font-size-10 color-gray mb-2">Aksesoris</p>
            <p className="font-size-14 ">Rp. 250.000</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default DataProductSale;
