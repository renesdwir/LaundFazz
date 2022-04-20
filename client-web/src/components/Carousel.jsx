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
                src="https://cdn.discordapp.com/attachments/961924831002099712/966404841549205525/1508815757780.jpg"
                alt=""
              />
            </div>
            <h1 className="font-semibold text-xl">Bintang M W</h1>
            <span className="">
              Proses laundry dilakukan dengan sangat teliti dan hati-hati untuk
              setiap kamar. hasilnya sangat memuaskan dalam 24 jam.
            </span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="mb-10 px-16 flex-wrap flex flex-col text-white">
            <div className="w-16 h-16 mx-auto mb-4">
              <img
                className="rounded-full text-center"
                src="https://cdn.discordapp.com/attachments/961924831002099712/966405186681729145/Screenshot_117.png"
                alt=""
              />
            </div>
            <h1 className="font-semibold text-xl">Rio Ricad</h1>
            <span className="">
              Laundfazz datang tepat waktu dan melakukan laundry selama 1 hari.
              Saya sangat puas karena staff sopan dan ramah.
            </span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="mb-10 px-16 flex-wrap flex flex-col text-white">
            <div className="w-16 h-16 mx-auto mb-4">
              <img
                className="rounded-full text-center"
                src="https://cdn.discordapp.com/attachments/961924831002099712/966407903911215154/Screen_Shot_2022-04-21_at_01.39.47.png"
                alt=""
              />
            </div>
            <h1 className="font-semibold text-xl">Steven</h1>
            <span className="">
              Pekerjaan rapih banget. Drivernya juga datang tepat waktu dan
              ramah.
            </span>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
