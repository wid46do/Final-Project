import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { FiPlus } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { getProduk } from "../actions/produk";
import "../style/DataProductSale.css";

function DataProductSale() {
  const [ produk, setProduk ] = useState([])
  const { dataProduk } = useSelector((state)=>state.produk)
  const dispatch = useDispatch()
  console.log(dataProduk);

  const id = JSON.parse(localStorage.getItem("userId"));

  useEffect(()=>{
    try {
      const getAllProduk = async()=>{
        const respon = await axios.get("https://secondhand6.herokuapp.com/product/getAll",);
        setProduk(respon.data.filter((item)=>item.user_Id === id))
      }
      getAllProduk() 
    } catch (error) {
      alert("error")
    }
  },[])

  const navigate = useNavigate()

  console.log(produk);
  
  return (
    <>
      <div className="row ms-0 ms-md-3 g-md-3 g-0 justify-content-around justify-content-sm-start">
        <div
          className="card-add-product p-2 ms-0 ms-sm-3"
          onClick={() => {
            navigate("/produk");
          }}
        >

          <FiPlus className="color-gray" />
          <p className="font-size-14 color-gray">Tambah Produk</p>
        </div>
        {produk?.map((produk)=>{
          return(
            <div key={produk.product_id} className="card-sale p-2 ms-0 ms-sm-3">
              <div className="h-70 w-100 mb-3">
                <img
                  src={produk.product_gambar[0]?.gambar_url}
                  alt=""
                  className="img-card"
                />
              </div>
              <div className="h-20">
                <h5 className="font-size-14 mb-1">{produk.product_name}</h5>
                <p className="font-size-10 color-gray mb-2">Aksesoris</p>
                <p className="font-size-14 ">{produk.product_harga}</p>
              </div>
            </div>
          )
        })}
      </div>
    </>
  );
}

export default DataProductSale;
