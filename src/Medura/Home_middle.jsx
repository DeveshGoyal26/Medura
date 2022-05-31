import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";
import "swiper/css/autoplay";

// import required modules
import { Pagination, Autoplay } from "swiper";
import { Middle_div, Swiper_div } from "./Medora.styled";

const Home_middle = () => {
  return (
    <>
      <Middle_div>
        <div>
          <div>
            <p>Mordern Moments</p>
            <p>Stylish sofas? We've got it</p>
            <p></p>
            <button>Shop Now</button>
          </div>
        </div>
      </Middle_div>

      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        autoplay={true}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Swiper_div
            image={
              "https://m2.alothemes.com/funio/media/magiccart/magicslider/s/l/slide2.jpg"
            }
          >
            <p className="caption1">Modern, Unique &amp; Minimal</p>
            <h2 className="caption2">JENA CHAIR</h2>
            <div className="action" href="#" tabIndex="0">
              shop collection
            </div>
          </Swiper_div>
        </SwiperSlide>
        <SwiperSlide>
          <Swiper_div
            image={
              "https://m2.alothemes.com/funio/media/magiccart/magicslider/s/l/slide.jpg"
            }
          >
            <p className="caption3">Funio Seating Collection</p>
            <h2 className="caption4">NEW ARRIVALS</h2>
            <div className="action" href="" tabIndex="0">
              shop collection
            </div>
          </Swiper_div>
        </SwiperSlide>
        <SwiperSlide>
          <Swiper_div
            image={
              "https://m2.alothemes.com/funio/media/magiccart/magicslider/s/l/slide3.jpg"
            }
          >
            <p className="caption5">Fantastic Summer Event</p>
            <h2 className="caption6">LIGHTING</h2>
            <div className="action" tabIndex="0">
              shop collection
            </div>
          </Swiper_div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Home_middle;
