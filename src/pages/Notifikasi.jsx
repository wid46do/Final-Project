import { GrMenu } from "react-icons/gr";

export default function Notifikasi(){
    return(
        <>
            <div className="d-flex">
                <div 
                    style={{ padding: "16px"}}
                >
                    <GrMenu/>
                </div>
                <p className="fw-bold mb-0"  style={{ paddingTop: "16px", marginLeft: "16px"}}>Notifikasi</p>
            </div>
            <div className="notif d-flex m-3">
                <img src="" alt="" className="image-user"/>
                <div className="notif-desc ms-3">
                    <div className="d-flex justify-content-between">
                        <p style={{fontSize: "8px"}} className="mb-1">Penawaran produk</p>
                        <p style={{fontSize: "8px"}} className="mb-1">20 Apr, 14:04</p>
                    </div>
                    <p className="mb-1">Jam Tangan Casio</p>
                    <p className="mb-1">Rp 250.000</p>
                    <p className="mb-3">Ditawar Rp 200.000</p>
                </div>
            </div>
        </>
    )
}