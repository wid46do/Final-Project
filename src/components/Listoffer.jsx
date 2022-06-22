import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import Product from '../images/product-pict.png';
import Profile from '../images/profile-pict.png'; 
import "bootstrap/dist/js/bootstrap.bundle.min.js";

export default function Listoffer(){
    return(
        <>
            <div className="bidder d-flex p-3 border">
                <img src={Profile} alt="" />
                <div className='ms-3'>
                    <p className='fw-bold mb-0'>Nama Pembeli</p>
                    <p className='mb-0'>Kota</p>
                </div>
            </div>
            <p className='fw-bold my-4 p-0'>Daftar Produkmu yang Ditawar</p>
            <div className="list-offered-product px-0 pt-0 pb-3 border-bottom mb-3">
                <div className='d-flex'>
                    <div className="product-pict">
                        <img src={Product} alt="" />
                    </div>
                    <div className='ket ps-3'>
                        <div className='time d-flex justify-content-between'>
                            <p className='mb-0'>Penawaran produk</p>
                            <p className='mb-0'>20 Apr, 14:04</p>
                        </div>
                        <p className='mb-0'>Jam Tangan Casio</p>
                        <p className='mb-0'>Rp 250.000</p>
                        <p className='mb-0'>Ditawar Rp 200.000</p>
                    </div>
                </div>
                <div className='mt-3 row justify-content-center justify-content-md-end justify-content-lg-end'>
                    <div className="offer-btn d-grid col-6">
                        <Button className='form-button2 bg-light button-border text-dark'>
                            Tolak
                        </Button>
                    </div>
                    <div className="offer-btn d-grid col-6">
                        <Button className='form-button'>
                            Terima
                        </Button>
                    </div>
                </div>
            </div> 
        </>
    )
}