import React, { useRef } from "react";

import { Autoplay, Navigation } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import brend from "../../shared/assets/images/brand1.png";
import brend2 from "../../shared/assets/images/brand2.png";
import brend3 from "../../shared/assets/images/brand3.png";
import brend4 from "../../shared/assets/images/brand4.png";
import brend5 from "../../shared/assets/images/brand5.png";
import brend6 from "../../shared/assets/images/brand6.png";
import brend7 from "../../shared/assets/images/brand7.png";

import { ChevronLeft, ChevronRight } from "@mui/icons-material";

const Brend = () => {
  const prevRefbtns = useRef(null);
  const nextRefbtns = useRef(null);
  return (
    <div className="bg-[#f9fafb]">
      <div className="w-[95%] mx-auto py-5 max-w-[1440px] flexx flex-col gap-4 ">
        <div className="flex flex-col gap-2">
          <h1 className="text-[32px] font-bold text-[#2c333d] max-[400px]:text-[25px] max-[320px]:text-[20px]  ">
            Популярные бренды
          </h1>
        </div>
        <div>
          <div className="relative   py-7 items-center bg-white rounded-lg">
            <button
              ref={prevRefbtns}
              className="absolute p-1 top-2/3 left-0 transform z-50 bg-white -translate-y-1/2 shadow-[0_4px_25px_0_rgba(0,0,0,0.10)] text-black rounded-full  hover:bg-gray-200 duration-500"
            >
              <ChevronLeft />
            </button>
            <button
              ref={nextRefbtns}
              className="absolute p-1 top-2/3 w-fit   shadow-[0_10px_25px_0_rgba(0,0,0,0.10)] right-0 transform z-50 -translate-y-1/2 bg-white text-black  rounded-full  hover:bg-gray-200 duration-500"
            >
              <ChevronRight />
            </button>
            <Swiper
              slidesPerView={1}
              spaceBetween={10}
              navigation={{
                prevEl: prevRefbtns.current,
                nextEl: nextRefbtns.current,
              }}
              onNavigationNext={(swiper) => {
                swiper.navigation.update();
              }}
              onNavigationPrev={(swiper) => {
                swiper.navigation.update();
              }}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
              breakpoints={{
                280: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                330: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
                473: {
                  slidesPerView: 4,
                  spaceBetween: 20,
                },
                682: {
                  slidesPerView: 5,
                  spaceBetween: 20,
                },
                921: {
                  slidesPerView: 6,
                  spaceBetween: 30,
                },

                1222: {
                  slidesPerView: 7,
                  spaceBetween: 30,
                },
              }}
              modules={[Navigation, Autoplay]}
            >
              <SwiperSlide>
                <div className="rounded-xl">
                  <img className="" src={brend} alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="rounded-xl">
                  <img className="" src={brend2} alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="rounded-xl">
                  <img className="" src={brend3} alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="rounded-xl">
                  <img className="" src={brend4} alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="rounded-xl">
                  <img className="" src={brend5} alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="rounded-xl">
                  <img className="" src={brend6} alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="rounded-xl">
                  <img className="" src={brend7} alt="" />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>{" "}
    </div>
  );
};

export default Brend;
