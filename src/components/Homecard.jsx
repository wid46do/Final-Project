import "../style/riostyle.css";
import axios from "axios";
import { useState, useEffect } from "react";
export default function Homecard(){
    const [data, setData] = useState();

    useEffect(() => {
        const getData = async () => {
            const res = await axios.get("https://secondhand6.herokuapp.com/product/getAll");
            setData(res.data);
        };
        getData();
    },[]);
    console.log(data);

    return(
        <>
        {data === undefined ? (<p>Loading...</p>) : (
            data.map((res) => {
                return(
                        <div key={res.product_id} className="homegrid-item">
                            <div className="card-item">
                                <img src={res.product_gambar[0].gambar_url} className="item-img" alt="Clock" />
                                <h5>{res.product_name}</h5>
                                <h6>Aksesoris</h6>
                                <h5>{res.product_harga}</h5>
                            </div>
                        </div>
                )
            }
            )
        )}
        </>
    );
}