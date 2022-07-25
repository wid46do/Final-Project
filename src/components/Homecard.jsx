import "../style/riostyle.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../actions/search";
import EllipsisText from "react-ellipsis-text";

export default function Homecard({ klik }) {
  const id = JSON.parse(localStorage.getItem("userId"));
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.search);

  useEffect(() => {
    dispatch(getData(id, klik));
  }, [klik]);

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
                <h5 style={{ fontWeight: "600" }}>
                  <EllipsisText text={res.product_name} length={16} />
                </h5>
                <h6>Category</h6>
                <h5>{res.product_harga}</h5>
              </div>
            </div>
          );
        })
      )}
    </>
  );
}
