import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useEffect } from "react";

function DataProductSold() {
  const id = JSON.parse(localStorage.getItem("userId"));
  const navigate = useNavigate();

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState();

  const getDataSold = () => {
    setLoading(true);
    axios
      .get("https://secondhand6.herokuapp.com/product/getAll?status=TERJUAL")
      .then((response) => {
        setData(response.data.filter((item) => item.user_Id === id));
        setLoading(false);
      })
      .catch(() => {
        setLoading(true);
      });
  };
  useEffect(() => {
    getDataSold();
  }, []);

  return (
    <>
      <div className="row ms-0 ms-md-3 g-md-3 g-0 justify-content-around justify-content-sm-start">
        {loading ? (
          <p>Loading...</p>
        ) : data.length === 0 ? (
          <div className="w-100 d-flex flex-column align-items-center justify-content-center mt-3">
            <img src="/images/wait.png" alt="image" />
            <p className="font-size-14 mt-3">
              Belum ada produkmu yang diminati nih, sabar ya rejeki nggak kemana
              kok
            </p>
          </div>
        ) : (
          data.map((item, index) => {
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
          })
        )}
      </div>
    </>
  );
}

export default DataProductSold;
