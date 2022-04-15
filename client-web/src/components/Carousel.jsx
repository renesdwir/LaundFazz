import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../index.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function App() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="mb-10 px-16 flex-wrap flex flex-col text-white">
            <div className="w-16 h-16 mx-auto mb-4">
              <img
                className="rounded-full text-center"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Elon_Musk_2015.jpg/640px-Elon_Musk_2015.jpg"
                alt=""
              />
            </div>
            <h1 className="font-semibold text-xl">Elon Musk</h1>
            <span className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
              perferendis,
            </span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="mb-10 px-16 flex-wrap flex flex-col text-white">
            <div className="w-16 h-16 mx-auto mb-4">
              <img
                className="rounded-full text-center"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Elon_Musk_2015.jpg/640px-Elon_Musk_2015.jpg"
                alt=""
              />
            </div>
            <h1 className="font-semibold text-xl">Elon Musk</h1>
            <span className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
              perferendis,
            </span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="mb-10 px-16 flex-wrap flex flex-col text-white">
            <div className="w-16 h-16 mx-auto mb-4">
              <img
                className="rounded-full text-center"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Elon_Musk_2015.jpg/640px-Elon_Musk_2015.jpg"
                alt=""
              />
            </div>
            <h1 className="font-semibold text-xl">Elon Musk</h1>
            <span className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
              perferendis,
            </span>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
