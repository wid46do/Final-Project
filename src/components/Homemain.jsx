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
import { FiSearch } from "react-icons/fi";
import { BsPlusLg } from "react-icons/bs";
import axios from "axios";
import { useEffect } from "react";
export default function Homemain({ dataSearch }) {
  let settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
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
  };
  const [category, setCategory] = useState();
  const [klik, setKlik] = useState(false);
  const getCategory = () => {
    axios
      .get("https://secondhand6.herokuapp.com/category/getAll")
      .then((res) => setCategory(res.data))
      .catch((e) => console.log(e));
  };
  useEffect(() => {
    getCategory();
  }, []);

  console.log(category);
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
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
        className="home-slider"
      >
        <SwiperSlide className="slider1">
          <img src={Banner1} alt="banner2" />
        </SwiperSlide>
        <SwiperSlide className="slider2">
          <img src={Banner2} alt="banner2" />
        </SwiperSlide>
        <SwiperSlide className="slider3">
          <img src={Banner3} alt="banner2" />
        </SwiperSlide>
        <SwiperSlide className="slider3">
          <img src={Banner4} alt="banner2" />
        </SwiperSlide>
        <SwiperSlide className="slider3">
          <img src={Banner5} alt="banner2" />
        </SwiperSlide>
      </Swiper>
      <div className="home-rect-bg">
        <div className="slider2-body">
          <div className="slider2-info">
            <h1 className="home-title">
              Bulan Ramadhan
              <br />
              Banyak diskon!
            </h1>
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
          <div className="category-btn">
            <div className="category-btn-inside" onClick={() => setKlik("all")}>
              <FiSearch
                style={{
                  width: "20px",
                  height: "20px",
                  marginRight: "24px",
                }}
              />
              Semua
            </div>
          </div>
          {category?.map((item, index) => {
            return (
              <div className="category-btn">
                <div
                  className="category-btn-inside"
                  key={index}
                  onClick={() => setKlik(item.category_id)}
                >
                  <FiSearch
                    style={{
                      width: "20px",
                      height: "20px",
                      marginRight: "16px",
                    }}
                  />
                  {item.category_name}
                </div>
              </div>
            );
          })}
          <div className="holder-category"></div>
        </Slider>

        <div className="homecard-container">
          <Link to={"/daftar-jual"} className="sell-btn">
            <BsPlusLg />
            Jual
          </Link>

          <div className="homegrid-container">
            <Homecard dataSearch={dataSearch} klik={klik} />
          </div>
        </div>
      </div>
    </>
  );
}
