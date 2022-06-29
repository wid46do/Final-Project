// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

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
import Banner2 from "../images/bannerslide2.png";
import Clockone from "../images/clock1.png";
import Clocktwo from "../images/clock2.png";
export default function Homemain(){
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
                    <img src={Banner2} alt="banner2"  />
                </SwiperSlide>
                <SwiperSlide className="slider2">
                    <img src={Banner2} alt="banner2"  />
                </SwiperSlide>
                <SwiperSlide className="slider3">
                    <img src={Banner2} alt="banner2"  />
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
            {/* <div className="home-slider">
                <div className="slider1"><img src={Banner2} alt="banner2" /></div>
                <div className="slider2"><img src={Banner2} alt="banner2" /></div>
                <div className="slider3"><img src={Banner2} alt="banner2" /></div>
            </div> */}

            <div className="home-layout">
                <h4>Telusuri Kategori</h4>
                <div className="home-category">
                    <div>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.16667 15.8333C12.8486 15.8333 15.8333 12.8486 15.8333 9.16667C15.8333 5.48477 12.8486 2.5 9.16667 2.5C5.48477 2.5 2.5 5.48477 2.5 9.16667C2.5 12.8486 5.48477 15.8333 9.16667 15.8333Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M17.5 17.5L13.875 13.875" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        Semua
                    </div>
                    <div>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.16667 15.8333C12.8486 15.8333 15.8333 12.8486 15.8333 9.16667C15.8333 5.48477 12.8486 2.5 9.16667 2.5C5.48477 2.5 2.5 5.48477 2.5 9.16667C2.5 12.8486 5.48477 15.8333 9.16667 15.8333Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M17.5 17.5L13.875 13.875" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg> 
                        Hobi
                    </div>
                    <div>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.16667 15.8333C12.8486 15.8333 15.8333 12.8486 15.8333 9.16667C15.8333 5.48477 12.8486 2.5 9.16667 2.5C5.48477 2.5 2.5 5.48477 2.5 9.16667C2.5 12.8486 5.48477 15.8333 9.16667 15.8333Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M17.5 17.5L13.875 13.875" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        Kendaraan
                    </div>
                    <div>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.16667 15.8333C12.8486 15.8333 15.8333 12.8486 15.8333 9.16667C15.8333 5.48477 12.8486 2.5 9.16667 2.5C5.48477 2.5 2.5 5.48477 2.5 9.16667C2.5 12.8486 5.48477 15.8333 9.16667 15.8333Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M17.5 17.5L13.875 13.875" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        Baju
                    </div>
                    <div>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.16667 15.8333C12.8486 15.8333 15.8333 12.8486 15.8333 9.16667C15.8333 5.48477 12.8486 2.5 9.16667 2.5C5.48477 2.5 2.5 5.48477 2.5 9.16667C2.5 12.8486 5.48477 15.8333 9.16667 15.8333Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M17.5 17.5L13.875 13.875" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        Elektronik
                    </div>
                    <div>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.16667 15.8333C12.8486 15.8333 15.8333 12.8486 15.8333 9.16667C15.8333 5.48477 12.8486 2.5 9.16667 2.5C5.48477 2.5 2.5 5.48477 2.5 9.16667C2.5 12.8486 5.48477 15.8333 9.16667 15.8333Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M17.5 17.5L13.875 13.875" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>                    
                        Kesehatan
                    </div>
                </div>
                <div className="homecard-container">
                    <a href="" className="sell-btn">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 4.1665V15.8332" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M4.1665 10H15.8332" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        Jual
                    </a>
                    <div className="homegrid-container">
                        <div className="homegrid-item">
                            <div className="card-item">
                                <img src={Clockone} className="item-img" alt="Clock" />
                                <h5>Jam Tangan Casio</h5>
                                <h6>Aksesoris</h6>
                                <h5>Rp. 250.000</h5>
                            </div>
                        </div>
                        <div className="homegrid-item">
                            <div className="card-item">
                                <img src={Clocktwo} className="item-img" alt="Clock"/>
                                <h5>Jam Tangan Casio</h5>
                                <h6>Aksesoris</h6>
                                <h5>Rp. 250.000</h5>
                            </div>
                        </div>
                        <div className="homegrid-item">
                            <div className="card-item">
                                <div className="item-img"></div>
                                <h5>Jam Tangan Casio</h5>
                                <h6>Aksesoris</h6>
                                <h5>Rp. 250.000</h5>
                            </div>
                        </div>  
                        <div className="homegrid-item">
                            <div className="card-item">
                                <div className="item-img"></div>
                                <h5>Jam Tangan Casio</h5>
                                <h6>Aksesoris</h6>
                                <h5>Rp. 250.000</h5>
                            </div>
                        </div>
                        <div className="homegrid-item">
                            <div className="card-item">
                                <div className="item-img"></div>
                                <h5>Jam Tangan Casio</h5>
                                <h6>Aksesoris</h6>
                                <h5>Rp. 250.000</h5>
                            </div>
                        </div>
                        <div className="homegrid-item">
                            <div className="card-item">
                                <div className="item-img"></div>
                                <h5>Jam Tangan Casio</h5>
                                <h6>Aksesoris</h6>
                                <h5>Rp. 250.000</h5>
                            </div>
                        </div>  
                        <div className="homegrid-item">
                            <div className="card-item">
                                <div className="item-img"></div>
                                <h5>Jam Tangan Casio</h5>
                                <h6>Aksesoris</h6>
                                <h5>Rp. 250.000</h5>
                            </div>
                        </div>
                        <div className="homegrid-item">
                            <div className="card-item">
                                <div className="item-img"></div>
                                <h5>Jam Tangan Casio</h5>
                                <h6>Aksesoris</h6>
                                <h5>Rp. 250.000</h5>
                            </div>
                        </div>
                        <div className="homegrid-item">
                            <div className="card-item">
                                <div className="item-img"></div>
                                <h5>Jam Tangan Casio</h5>
                                <h6>Aksesoris</h6>
                                <h5>Rp. 250.000</h5>
                            </div>
                        </div>  
                        <div className="homegrid-item">
                            <div className="card-item">
                                <div className="item-img"></div>
                                <h5>Jam Tangan Casio</h5>
                                <h6>Aksesoris</h6>
                                <h5>Rp. 250.000</h5>
                            </div>
                        </div>  
                        <div className="homegrid-item">
                            <div className="card-item">
                                <div className="item-img"></div>
                                <h5>Jam Tangan Casio</h5>
                                <h6>Aksesoris</h6>
                                <h5>Rp. 250.000</h5>
                            </div>
                        </div>  
                        <div className="homegrid-item">
                            <div className="card-item">
                                <div className="item-img"></div>
                                <h5>Jam Tangan Casio</h5>
                                <h6>Aksesoris</h6>
                                <h5>Rp. 250.000</h5>
                            </div>
                        </div>
                        <div className="homegrid-item">
                            <div className="card-item">
                                <div className="item-img"></div>
                                <h5>Jam Tangan Casio</h5>
                                <h6>Aksesoris</h6>
                                <h5>Rp. 250.000</h5>
                            </div>
                        </div>  
                        <div className="homegrid-item">
                            <div className="card-item">
                                <div className="item-img"></div>
                                <h5>Jam Tangan Casio</h5>
                                <h6>Aksesoris</h6>
                                <h5>Rp. 250.000</h5>
                            </div>
                        </div>  
                        <div className="homegrid-item">
                            <div className="card-item">
                                <div className="item-img"></div>
                                <h5>Jam Tangan Casio</h5>
                                <h6>Aksesoris</h6>
                                <h5>Rp. 250.000</h5>
                            </div>
                        </div>  
                        <div className="homegrid-item">
                            <div className="card-item">
                                <div className="item-img"></div>
                                <h5>Jam Tangan Casio</h5>
                                <h6>Aksesoris</h6>
                                <h5>Rp. 250.000</h5>
                            </div>
                        </div> 
                    </div>
                </div>
            </div>
        </>
    )
}