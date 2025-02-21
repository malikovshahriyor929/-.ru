import React, { useEffect, useRef, useState } from "react";

import { Autoplay, Navigation, Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Button } from "@mui/material";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
let showcaseImg =
  "https://s3-alpha-sig.figma.com/img/fec4/beb8/65de6f4f3fe68f8255c19ee531b468d0?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=fiOVbvWr4VNB7NBQ3t6cQuVxU5e9IKN88reaxRmcziG~CWA4LHFQIivegwVYWk~DVyoXui1oYTUUWVDV6Jl1uyPuIBu2DDD9b5~1m7EO~iUMp-5C5bcMeA1e-NXVfXDw6Dhi7B-kMUrU3vWc3sySmkWKqzwTdv~0o2-LCIv1Hmluj5lSGrqK8OsDTs43xq~l0aUmnLLmmDXcF4q1Z~gDb2ezdWTrYFIzNegMYxQWuwQXhw0RQsushMyi8FZV~Sg4J7sXu1pg347Ft27GRo~E9iJ~991ntsfmfU7FJ3SnQryvhG943sOC4a8RDLRGf1LtwFVi5GfI4w3XTMbZOtZ3iw__";

const Showcase = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="relative  py-7 max-w-[1440px] mx-auto ">
      <button
        ref={prevRef}
        className="absolute max-[500px]:p-1 top-1/2 left-1 transform z-50 bg-white -translate-y-1/2 shadow-[0_4px_25px_0_rgba(0,0,0,0.05)] text-black p-3 rounded-full  hover:bg-gray-200 duration-500"
      >
        <ChevronLeft />
      </button>
      <button
        ref={nextRef}
        className="absolute max-[500px]:p-1 top-1/2  shadow-[0_10px_25px_0_rgba(0,0,0,0.05)] right-1 transform z-50 -translate-y-1/2 bg-white text-black p-3 rounded-full  hover:bg-gray-200 duration-500"
      >
        <ChevronRight />
      </button>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onNavigationNext={(swiper) => {
          swiper.navigation.update();
        }}
        onNavigationPrev={(swiper) => {
          swiper.navigation.update();
        }}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 1,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination, Navigation, Autoplay]}
        // className="mySwiper"
        loop={true}
      >
        <SwiperSlide>
          <div className="w-[95%] mx-auto relative">
            <div className="absolute top-0 max-[679px]:top-1/4 max-[417px]:top-[50px]  max-[360px]:top-1/4     max-[679px]:gap-5 left-0 z-50 flex flex-col justify-center   gap-2 px-7 py-4 max-[360px]:items-center max-[359px]:top-[40%] ">
              <div className="max-[360px]:text-center">
                <h1 className="text-[48px] max-[1137px]:text-[35px] max-[944px]:text-[29px] max-[873px]:text-[24px]  font-bold text-[#2c333d] max-w-[524px] max-[390px]:text-[20px]">
                  Электроинструмент для любых нужд
                </h1>
                <p className="text-[#2c333d] max-w-[466px] max-[360px]:hidden  text-[17px] max-[944px]:text-[14px]  max-[1137px]:text-[14px]">
                  У нас обновился ассортимент сантехники, мебели для ванной
                  комнаты, а так же других сопутствующих товаров.
                </p>
              </div>
              <Button className="!bg-[#011120] max-[300px]:!text-[10px] max-[300px]:!px-3 max-[300px]:!py-1 !text-white w-fit !px-5 !py-3 !text-[13px] !font-bold ">
                <p>перейти к товарам</p> <ChevronRight />
              </Button>
            </div>
            <img
              src={showcaseImg}
              className="rotate-y-180 rounded-lg  max-[873px]:h-[358px] object-cover    "
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-[95%] mx-auto relative">
            <div className="absolute top-0 max-[679px]:top-1/4 max-[417px]:top-[50px]  max-[360px]:top-1/4     max-[679px]:gap-5 left-0 z-50 flex flex-col justify-center   gap-2 px-7 py-4 max-[360px]:items-center max-[359px]:top-[40%] ">
              <div className="max-[360px]:text-center">
                <h1 className="text-[48px] max-[1137px]:text-[35px] max-[944px]:text-[29px] max-[873px]:text-[24px]  font-bold text-[#2c333d] max-w-[524px] max-[390px]:text-[20px]">
                  Электроинструмент для любых нужд
                </h1>
                <p className="text-[#2c333d] max-w-[466px] max-[360px]:hidden  text-[17px] max-[944px]:text-[14px]  max-[1137px]:text-[14px]">
                  У нас обновился ассортимент сантехники, мебели для ванной
                  комнаты, а так же других сопутствующих товаров.
                </p>
              </div>
              <Button className="!bg-[#011120] max-[300px]:!text-[10px] max-[300px]:!px-3 max-[300px]:!py-1 !text-white w-fit !px-5 !py-3 !text-[13px] !font-bold ">
                <p>перейти к товарам</p> <ChevronRight />
              </Button>
            </div>
            <img
              src={showcaseImg}
              className="rotate-y-180 rounded-lg  max-[873px]:h-[358px] object-cover    "
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-[95%] mx-auto relative">
            <div className="absolute top-0 max-[679px]:top-1/4 max-[417px]:top-[50px]  max-[360px]:top-1/4     max-[679px]:gap-5 left-0 z-50 flex flex-col justify-center   gap-2 px-7 py-4 max-[360px]:items-center max-[359px]:top-[40%] ">
              <div className="max-[360px]:text-center">
                <h1 className="text-[48px] max-[1137px]:text-[35px] max-[944px]:text-[29px] max-[873px]:text-[24px]  font-bold text-[#2c333d] max-w-[524px] max-[390px]:text-[20px]">
                  Электроинструмент для любых нужд
                </h1>
                <p className="text-[#2c333d] max-w-[466px] max-[360px]:hidden  text-[17px] max-[944px]:text-[14px]  max-[1137px]:text-[14px]">
                  У нас обновился ассортимент сантехники, мебели для ванной
                  комнаты, а так же других сопутствующих товаров.
                </p>
              </div>
              <Button className="!bg-[#011120] max-[300px]:!text-[10px] max-[300px]:!px-3 max-[300px]:!py-1 !text-white w-fit !px-5 !py-3 !text-[13px] !font-bold ">
                <p>перейти к товарам</p> <ChevronRight />
              </Button>
            </div>
            <img
              src={showcaseImg}
              className="rotate-y-180 rounded-lg  max-[873px]:h-[358px] object-cover    "
              alt=""
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Showcase;
