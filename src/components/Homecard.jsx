import "../style/riostyle.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Clockone from "../images/clock1.png";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../actions/search";

export default function Homecard() {
  const id = JSON.parse(localStorage.getItem("userId"));
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.search);

  useEffect(() => {
    //   const getData = async () => {
    //     const res = await axios.get(
    //       "https://secondhand6.herokuapp.com/product/getAll?status=DIJUAL"
    //     );
    //     setData(res.data.filter((item) => item.user_Id !== id));
    //   };
    //   getData();
    dispatch(getData(id));
  }, []);

  return (
    <>
      {!data ? (
        <p>Loading...</p>
      ) : (
        data.map((res) => {
          return (
            <div
              onClick={() => {
                navigate(`/page-penawaran/${res.product_id}`);
              }}
              key={res.product_id}
              className="homegrid-item"
            >
              <div className="card-item">
                <img
                  src={res.product_gambar[0]?.gambar_url}
                  className="item-img"
                  alt="Item"
                />
                <h5 style={{ fontWeight: "600" }}>{res.product_name}</h5>
                <h6>Aksesoris</h6>
                <h5>{res.product_harga}</h5>
              </div>
            </div>
          );
        })
      )}
    </>
  );
}
