import axios from "axios";
import React, { useEffect, useState } from "react";
import { FiPlus } from "react-icons/fi";
import { useNavigate } from "react-router";
import "../style/DataProductSale.css";
import { FiArrowRight } from "react-icons/fi";

function DataProductList() {
  const id = JSON.parse(localStorage.getItem("userId"));
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState();

  const getDataList = () => {
    setLoading(true);
    axios
      .get(`https://secondhand6.herokuapp.com/product/wishlist/${id}`)
      .then((response) => {
        setData(
          response.data.filter((item) => item.statusProduct !== "TERJUAL")
        );
        setLoading(false);
      })
      .catch(() => {
        setLoading(true);
      });
  };
  useEffect(() => {
    getDataList();
  }, []);
  console.log(data);
  return (
    <>
      <div className="row ms-0 ms-md-3 g-md-3 g-0 justify-content-around justify-content-sm-start">
        {loading
          ? ""
          : data.map((item, index) => {
              return (
                <div className="card-sale p-2 ms-0 ms-sm-3" key={index}>
                  <div className="h-70 w-100 mb-3">
                    <img
                      src={item.product_gambar[0]?.gambar_url}
                      alt="image-product"
                      className="img-card"
                    />
                  </div>
                  <div className="h-20">
                    <h5 className="font-size-14 mb-1">{item.product_name}</h5>
                    <p className="font-size-10 color-gray mb-2">Aksesoris</p>
                    <p className="font-size-14 ">Rp. {item.product_harga}</p>
                  </div>
                </div>
              );
            })}
        <div
          className="card-add-product p-2 ms-0 ms-sm-3"
          onClick={() => {
            navigate("/offer");
          }}
        >
          <p className="font-size-14 color-gray">
            See offer <FiArrowRight className="color-gray" />
          </p>
        </div>
      </div>
    </>
  );
}

export default DataProductList;
