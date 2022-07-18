import "../style/riostyle.css";
import Clockone from "../images/clock1.png";
import axios from "axios";
import { useState, useEffect } from "react";
export default function Homecard(){
    const [data, setData] = useState();

    useEffect(() => {
        const getData = async () => {
            const res = await axios.get("https://jsonplaceholder.typicode.com/users");
            setData(res.data);
        };
        getData();
    },[]);
    console.log(data);

    return(
        <>
        {data === undefined ? (<p>loading</p>) : (
            data.map((res) => {
                return(
                        <div className="homegrid-item">
                            <div className="card-item">
                                <img src={Clockone} className="item-img" alt="Clock" />
                                <h5>{res.name}</h5>
                                <h6>Aksesoris</h6>
                                <h5>Rp. 250.000</h5>
                            </div>
                        </div>
                )
            }
            )
        )}
        </>
    );
}