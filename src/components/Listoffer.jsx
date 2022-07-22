import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import Product from "../images/product-pict.png";
import Profile from "../images/profile-pict.png";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Listoffer() {
  const id = JSON.parse(localStorage.getItem("userId"));
  const [data, setData] = useState();
  useEffect(() => {
    const getData = () => {
      axios
        .get(
          "https://secondhand6.herokuapp.com/penawaran/getAll?status=NEGOTIATION"
        )
        .then((res) => {
          setData(res.data.filter((item) => item.product.user_Id === id));
        })
        .catch((err) => {
          console.log(err);
        });
    };

    getData();
  }, []);

  console.log(data);
  return (
    <>
      {data === undefined ? (
        <p>Loading...</p>
      ) : (
        data.map((item, index) => {
          return (
            <div className="mb-5" key={index}>
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
                      <p className="mb-0">20 Apr, 14:04</p>
                    </div>
                    <p className="mb-0">{item.product.product_name}</p>
                    <p className="mb-0">Rp {item.product.product_harga}</p>
                    <p className="mb-0">Ditawar Rp {item.harga_penawaran}</p>
                  </div>
                </div>
                <div className="mt-3 row justify-content-center justify-content-md-end justify-content-lg-end">
                  <div className="offer-btn d-grid col-6">
                    <Button className="form-button2 bg-light button-border text-dark">
                      Tolak
                    </Button>
                  </div>
                  <div className="offer-btn d-grid col-6">
                    <Button className="form-button">Terima</Button>
                  </div>
                </div>
              </div>
            </div>
          );
        })
      )}
    </>
  );
}
