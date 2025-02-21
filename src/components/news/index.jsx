import React, { useRef } from "react";

import { Autoplay, Navigation } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Button } from "@mui/material";

import news1 from "../../shared/assets/images/news1.png";
import news2 from "../../shared/assets/images/news2.png";
import news3 from "../../shared/assets/images/news3.png";
import news4 from "../../shared/assets/images/news4.png";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";

const News = () => {
  const prevRefbtnNew = useRef(null);
  const nextRefbtnNew = useRef(null);
  return (
    <div className="w-[95%] mx-auto py-7 max-w-[1440px] max-[320px]:w-[90%]">
      <div className="flex items-center justify-between   gap-2">
        <h1 className="text-[32px] font-bold text-[#2c333d] max-[648px]:text-[25px] max-[580px]:text-[20px] max-[415px]:text-[16px]  ">
        Последние новости
        </h1>
        <Button className="!bg-[#f6f8fb]  max-[415px]:!hidden">Больше новостей</Button>
      </div>
      <div className="relative   py-7  ">
        <button
          ref={prevRefbtnNew}
          className="absolute max-[500px]:p-1 top-1/2 max-[489px]:top-[100%] max-[489px]:left-[35%]  -left-3 transform z-50 bg-white -translate-y-1/2 shadow-[0_4px_25px_0_rgba(0,0,0,0.10)] text-black p-3 rounded-full  hover:bg-gray-200 duration-500"
        >
          <ChevronLeft />
        </button>
        <button
          ref={nextRefbtnNew}
          className="absolute max-[500px]:p-1 top-1/2 max-[489px]:top-[100%] max-[489px]:right-[35%]  w-fit   shadow-[0_10px_25px_0_rgba(0,0,0,0.10)] -right-3 transform z-50 -translate-y-1/2 bg-white text-black p-3 rounded-full  hover:bg-gray-200 duration-500"
        >
          <ChevronRight />
        </button>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          navigation={{
            prevEl: prevRefbtnNew.current,
            nextEl: nextRefbtnNew.current,
          }}
          onNavigationNext={(swiper) => {
            swiper.navigation.update();
          }}
          onNavigationPrev={(swiper) => {
            swiper.navigation.update();
          }}
          autoplay={{
            delay: 4500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            280: {
              slidesPerView: 1.2,
              spaceBetween: 20,
            },
            777: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            934: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1049: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
       
          }}
          modules={[Navigation, Autoplay]}
        >
          <SwiperSlide>
            <div className="flex flex-col gap-2">
              <img src={news1} alt="" />
              <div className="max-w-[400px]">
                <h3 className="text-[18px] text-[#2c333d] max-[320px]:text-[16px]  font-medium ">
                  Масштабное обновление каталога инструментов
                </h3>
                <p className="text-[#393939] text-[14px] max-[320px]:text-[12px]">
                  С радостью сообщаем вам о крупном пополнении нашего каталога
                  инструментов.
                </p>
                <p className="text-[12px]">5 Августа 2023</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col gap-2">
              <img src={news2} alt="" />
              <div className="max-w-[400px]">
                <h3 className="text-[18px] text-[#2c333d] max-[320px]:text-[16px]  font-medium ">
                  Масштабное обновление каталога инструментов
                </h3>
                <p className="text-[#393939] text-[14px] max-[320px]:text-[12px]">
                  С радостью сообщаем вам о крупном пополнении нашего каталога
                  инструментов.
                </p>
                <p className="text-[12px]">5 Августа 2023</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col gap-2">
              <img src={news3} alt="" />
              <div className="max-w-[400px]">
                <h3 className="text-[18px] text-[#2c333d] max-[320px]:text-[16px]  font-medium ">
                  Масштабное обновление каталога инструментов
                </h3>
                <p className="text-[#393939] text-[14px] max-[320px]:text-[12px]">
                  С радостью сообщаем вам о крупном пополнении нашего каталога
                  инструментов.
                </p>
                <p className="text-[12px]">5 Августа 2023</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col gap-2">
              <img src={news4} alt="" />
              <div className="max-w-[400px]">
                <h3 className="text-[18px] text-[#2c333d] max-[320px]:text-[16px]  font-medium ">
                  Масштабное обновление каталога инструментов
                </h3>
                <p className="text-[#393939] text-[14px] max-[320px]:text-[12px]">
                  С радостью сообщаем вам о крупном пополнении нашего каталога
                  инструментов.
                </p>
                <p className="text-[12px]">5 Августа 2023</p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default News;
