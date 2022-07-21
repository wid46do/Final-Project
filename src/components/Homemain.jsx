import { useState } from "react";
import Homecard from "./Homecard";
import { Link, useNavigate } from "react-router-dom";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Slider from "react-slick";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/free-mode";
// import "swiper/css/autoplay";

// import required modules
import { Autoplay, EffectCoverflow, Pagination } from "swiper";
import "../style/riostyle.css";
import Kado from "../images/kado.png";
import Mosq from "../images/mosq.png";
import Banner1 from "../images/banner-1.png";
import Banner2 from "../images/banner-2.png";
import Banner3 from "../images/banner-3.png";
import Banner4 from "../images/banner-4.png";
import Banner5 from "../images/banner-5.png";
import Clockone from '../images/clock1.png';
import { FiSearch } from "react-icons/fi";
import { BsPlusLg } from "react-icons/bs";
export default function Homemain(){
    const navigate = useNavigate();
    let settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        draggable: true,
        slide:'div',
        slidesToScroll: 1,
        arrows: false,
        className:"slider-category variable-width",
        variableWidth: true,
        responsive: [
            {
                breakpoint: 450,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    loop: false,
                    draggable: true,
                },
            },
        ],
        
    }
    return(
        <>
            <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={"auto"}
                autoplay= {{
                delay: 1500,
                disableOnInteraction: false
                }}
                coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 300,
                modifier: 1,
                slideShadows: false,
                }}
                loop={true}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="home-slider">
                <SwiperSlide className="slider1">
                    <img src={Banner1} alt="banner2"  />
                </SwiperSlide>
                <SwiperSlide className="slider2">
                    <img src={Banner2} alt="banner2"  />
                </SwiperSlide>
                <SwiperSlide className="slider3">
                    <img src={Banner3} alt="banner2"  />
                </SwiperSlide>
                <SwiperSlide className="slider3">
                    <img src={Banner4} alt="banner2"  />
                </SwiperSlide>
                <SwiperSlide className="slider3">
                    <img src={Banner5} alt="banner2"  />
                </SwiperSlide>
            </Swiper>
            <div className="home-rect-bg">
                <div className="slider2-body">
                    <div className="slider2-info">
                        <h1 className="home-title">Bulan Ramadhan<br />Banyak diskon!</h1>
                        <h5>Diskon Hingga</h5>
                        <h1 className="disc">60%</h1>
                    </div>
                    <img className="kado" src={Kado} alt="Kado" />
                    <img className="imagebg" src={Mosq} alt="Mosq" />
                </div>
            </div>

            <div className="home-layout">
                <h4>Telusuri Kategori</h4>
                <Slider {...settings}>
                    <div className="category-btn semua">
                        <FiSearch style={{width: '20px', height: '20px'}}/>
                        Semua
                    </div>
                    <div className="category-btn hobi">
                        <FiSearch style={{width: '20px', height: '20px'}}/>
                        Hobi
                    </div>
                    <div className="category-btn kendaraan">
                        <FiSearch style={{width: '20px', height: '20px'}}/>
                        Kendaraan
                    </div>
                    <div className="category-btn baju">
                        <FiSearch style={{width: '20px', height: '20px'}}/>
                        Baju
                    </div>
                    <div className="category-btn elektronik">
                        <FiSearch style={{width: '20px', height: '20px'}}/>
                        Elektronik
                    </div>
                    <div className="category-btn kesehatan">
                        <FiSearch style={{width: '20px', height: '20px'}}/>                  
                        Kesehatan
                    </div>
                    <div className="holder-category">
                        
                    </div>
                </Slider>

                <div className="homecard-container">
                    <Link to={'/daftar-jual'} className="sell-btn">
                        <BsPlusLg />
                        Jual
                    </Link>
                    
                    <div className="homegrid-container">                        
                        <Homecard />
                        {/* <div className="homegrid-item">
                            <div className="card-item">
                                <img src={Clockone} className="item-img" alt="Item" />
                                <h5>Jam Tangan</h5>
                                <h6>Aksesoris</h6>
                                <h5>Rp. 150000</h5>
                            </div>
                        </div>
                        <div className="homegrid-item">
                            <div className="card-item">
                                <img src={Clockone} className="item-img" alt="Item" />
                                <h5>Jam Tangan</h5>
                                <h6>Aksesoris</h6>
                                <h5>Rp. 150000</h5>
                            </div>
                        </div>
                        <div className="homegrid-item">
                            <div className="card-item">
                                <img src={Clockone} className="item-img" alt="Item" />
                                <h5>Jam Tangan</h5>
                                <h6>Aksesoris</h6>
                                <h5>Rp. 150000</h5>
                            </div>
                        </div>
                        <div className="homegrid-item">
                            <div className="card-item">
                                <img src={Clockone} className="item-img" alt="Item" />
                                <h5>Jam Tangan</h5>
                                <h6>Aksesoris</h6>
                                <h5>Rp. 150000</h5>
                            </div>
                        </div>
                        <div className="homegrid-item">
                            <div className="card-item">
                                <img src={Clockone} className="item-img" alt="Item" />
                                <h5>Jam Tangan</h5>
                                <h6>Aksesoris</h6>
                                <h5>Rp. 150000</h5>
                            </div>
                        </div>
                        <div className="homegrid-item">
                            <div className="card-item">
                                <img src={Clockone} className="item-img" alt="Item" />
                                <h5>Jam Tangan</h5>
                                <h6>Aksesoris</h6>
                                <h5>Rp. 150000</h5>
                            </div>
                        </div>
                        <div className="homegrid-item">
                            <div className="card-item">
                                <img src={Clockone} className="item-img" alt="Item" />
                                <h5>Jam Tangan</h5>
                                <h6>Aksesoris</h6>
                                <h5>Rp. 150000</h5>
                            </div>
                        </div>
                        <div className="homegrid-item">
                            <div className="card-item">
                                <img src={Clockone} className="item-img" alt="Item" />
                                <h5>Jam Tangan</h5>
                                <h6>Aksesoris</h6>
                                <h5>Rp. 150000</h5>
                            </div>
                        </div>
                        <div className="homegrid-item">
                            <div className="card-item">
                                <img src={Clockone} className="item-img" alt="Item" />
                                <h5>Jam Tangan</h5>
                                <h6>Aksesoris</h6>
                                <h5>Rp. 150000</h5>
                            </div>
                        </div>
                        <div className="homegrid-item">
                            <div className="card-item">
                                <img src={Clockone} className="item-img" alt="Item" />
                                <h5>Jam Tangan</h5>
                                <h6>Aksesoris</h6>
                                <h5>Rp. 150000</h5>
                            </div>
                        </div>
                        <div className="homegrid-item">
                            <div className="card-item">
                                <img src={Clockone} className="item-img" alt="Item" />
                                <h5>Jam Tangan</h5>
                                <h6>Aksesoris</h6>
                                <h5>Rp. 150000</h5>
                            </div>
                        </div>
                        <div className="homegrid-item">
                            <div className="card-item">
                                <img src={Clockone} className="item-img" alt="Item" />
                                <h5>Jam Tangan</h5>
                                <h6>Aksesoris</h6>
                                <h5>Rp. 150000</h5>
                            </div>
                        </div>
                        <div className="homegrid-item">
                            <div className="card-item">
                                <img src={Clockone} className="item-img" alt="Item" />
                                <h5>Jam Tangan</h5>
                                <h6>Aksesoris</h6>
                                <h5>Rp. 150000</h5>
                            </div>
                        </div>
                        <div className="homegrid-item">
                            <div className="card-item">
                                <img src={Clockone} className="item-img" alt="Item" />
                                <h5>Jam Tangan</h5>
                                <h6>Aksesoris</h6>
                                <h5>Rp. 150000</h5>
                            </div>
                        </div>
                        <div className="homegrid-item">
                            <div className="card-item">
                                <img src={Clockone} className="item-img" alt="Item" />
                                <h5>Jam Tangan</h5>
                                <h6>Aksesoris</h6>
                                <h5>Rp. 150000</h5>
                            </div>
                        </div>
                        <div className="homegrid-item">
                            <div className="card-item">
                                <img src={Clockone} className="item-img" alt="Item" />
                                <h5>Jam Tangan</h5>
                                <h6>Aksesoris</h6>
                                <h5>Rp. 150000</h5>
                            </div>
                        </div>
                        <div className="homegrid-item">
                            <div className="card-item">
                                <img src={Clockone} className="item-img" alt="Item" />
                                <h5>Jam Tangan</h5>
                                <h6>Aksesoris</h6>
                                <h5>Rp. 150000</h5>
                            </div>
                        </div>
                        <div className="homegrid-item">
                            <div className="card-item">
                                <img src={Clockone} className="item-img" alt="Item" />
                                <h5>Jam Tangan</h5>
                                <h6>Aksesoris</h6>
                                <h5>Rp. 150000</h5>
                            </div>
                        </div>
                        <div className="homegrid-item">
                            <div className="card-item">
                                <img src={Clockone} className="item-img" alt="Item" />
                                <h5>Jam Tangan</h5>
                                <h6>Aksesoris</h6>
                                <h5>Rp. 150000</h5>
                            </div>
                        </div>
                        <div className="homegrid-item">
                            <div className="card-item">
                                <img src={Clockone} className="item-img" alt="Item" />
                                <h5>Jam Tangan</h5>
                                <h6>Aksesoris</h6>
                                <h5>Rp. 150000</h5>
                            </div>
                        </div>
                        <div className="homegrid-item">
                            <div className="card-item">
                                <img src={Clockone} className="item-img" alt="Item" />
                                <h5>Jam Tangan</h5>
                                <h6>Aksesoris</h6>
                                <h5>Rp. 150000</h5>
                            </div>
                        </div>
                        <div className="homegrid-item">
                            <div className="card-item">
                                <img src={Clockone} className="item-img" alt="Item" />
                                <h5>Jam Tangan</h5>
                                <h6>Aksesoris</h6>
                                <h5>Rp. 150000</h5>
                            </div>
                        </div>
                        <div className="homegrid-item">
                            <div className="card-item">
                                <img src={Clockone} className="item-img" alt="Item" />
                                <h5>Jam Tangan</h5>
                                <h6>Aksesoris</h6>
                                <h5>Rp. 150000</h5>
                            </div>
                        </div>
                        <div className="homegrid-item">
                            <div className="card-item">
                                <img src={Clockone} className="item-img" alt="Item" />
                                <h5>Jam Tangan</h5>
                                <h6>Aksesoris</h6>
                                <h5>Rp. 150000</h5>
                            </div>
                        </div>
                        <div className="homegrid-item">
                            <div className="card-item">
                                <img src={Clockone} className="item-img" alt="Item" />
                                <h5>Jam Tangan</h5>
                                <h6>Aksesoris</h6>
                                <h5>Rp. 150000</h5>
                            </div>
                        </div>
                        <div className="homegrid-item">
                            <div className="card-item">
                                <img src={Clockone} className="item-img" alt="Item" />
                                <h5>Jam Tangan</h5>
                                <h6>Aksesoris</h6>
                                <h5>Rp. 150000</h5>
                            </div>
                        </div>
                        <div className="homegrid-item">
                            <div className="card-item">
                                <img src={Clockone} className="item-img" alt="Item" />
                                <h5>Jam Tangan</h5>
                                <h6>Aksesoris</h6>
                                <h5>Rp. 150000</h5>
                            </div>
                        </div>
                        <div className="homegrid-item">
                            <div className="card-item">
                                <img src={Clockone} className="item-img" alt="Item" />
                                <h5>Jam Tangan</h5>
                                <h6>Aksesoris</h6>
                                <h5>Rp. 150000</h5>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </>
    )
}