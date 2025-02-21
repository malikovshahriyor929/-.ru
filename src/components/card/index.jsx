import React, { useEffect, useRef, useState } from "react";
import { Autoplay, Navigation } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import {
  ChevronLeft,
  ChevronRight,
  ShoppingCartOutlined,
} from "@mui/icons-material";

import BasicTabs from "./tabs";

import myAxios from "../../hooks/my_axios";

import CardRander from "./cardRender";
import { Skeleton } from "@mui/material";

const Card = () => {
  let [product, setProduct] = useState([]);
  let [skelaton, setSkelaton] = useState(true);
  const prevRefbtn = useRef(null);
  const nextRefbtn = useRef(null);
  useEffect(() => {
    setSkelaton(true);
    myAxios.get("/product").then((res) => {
      setProduct(res.data), setSkelaton(false);
    });
  }, []);

  return (
    <div className="w-[95%] mx-auto py-7 max-w-[1440px] max-[320px]:w-[90%]">
      <div className="flex flex-col gap-2">
        <h1 className="text-[32px] font-bold text-[#2c333d] max-[400px]:text-[25px] max-[320px]:text-[20px]  ">Хиты продаж</h1>

        {BasicTabs()}
      </div>

      <div className="relative flex py-4 items-center gap-3 ">
        <div className="relative w-[80%]  py-7  max-[1247px]:w-full">
          <button
            ref={prevRefbtn}
            className="absolute max-[500px]:p-1 top-1/2 -left-4 transform z-50 bg-white -translate-y-1/2 shadow-[0_4px_25px_0_rgba(0,0,0,0.05)] text-black p-3 rounded-full  hover:bg-gray-200 duration-500"
          >
            <ChevronLeft />
          </button>
          <button
            ref={nextRefbtn}
            className="absolute max-[500px]:p-1 top-1/2 w-fit   shadow-[0_10px_25px_0_rgba(0,0,0,0.10)] right-0 transform z-50 -translate-y-1/2 bg-white text-black p-3 rounded-full  hover:bg-gray-200 duration-500"
          >
            <ChevronRight />
          </button>
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            navigation={{
              prevEl: prevRefbtn.current,
              nextEl: nextRefbtn.current,
            }}
            onNavigationNext={(swiper) => {
              swiper.navigation.update();
            }}
            onNavigationPrev={(swiper) => {
              swiper.navigation.update();
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              443: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              682: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              934: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
              1125: {
                slidesPerView: 5,
                spaceBetween: 30,
              },
              1247: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
            }}
            modules={[Navigation, Autoplay]}
              className="h-full"
          >
            {!skelaton ? (
              product.map((value) => (
                <SwiperSlide key={value.id} className="h-full flex" >
                  <CardRander  {...value}  />
                </SwiperSlide>
              ))
            ) : (
              <div>
              <SwiperSlide>
                <div className="flex flex-col gap-3 ">
                  <Skeleton variant="rounded" width={"100%"} height={200} />
                  <div>
                    <Skeleton animation="wave" />
                    <Skeleton animation="wave" />
                    <Skeleton animation="wave" width={"50%"} />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex flex-col gap-3 ">
                  <Skeleton variant="rounded" width={"100%"} height={200} />
                  <div>
                    <Skeleton animation="wave" />
                    <Skeleton animation="wave" />
                    <Skeleton animation="wave" width={"50%"} />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex flex-col gap-3 ">
                  <Skeleton variant="rounded" width={"100%"} height={200} />
                  <div>
                    <Skeleton animation="wave" />
                    <Skeleton animation="wave" />
                    <Skeleton animation="wave" width={"50%"} />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex flex-col gap-3 ">
                  <Skeleton variant="rounded" width={"100%"} height={200} />
                  <div>
                    <Skeleton animation="wave" />
                    <Skeleton animation="wave" />
                    <Skeleton animation="wave" width={"50%"} />
                  </div>
                </div>
              </SwiperSlide>
            </div>
            )}
          </Swiper>
        </div>
        <div className="w-[20%] max-[1247px]:hidden">
          <div className="flex flex-col *:px-5 border-2 pt-3 border-[#117fe3] gap-3 rounded-xl">
            <div className="flex items-center justify-between gap-3">
              <p className="text-[#011120] text-[18px] max-[1316px]:text-[16px] font-bold">
                Успейте купить по скидке
              </p>
              <p className="text-[11px] text-white w-fit rounded-md px-1 py-0.5 bg-[#1b9665]">
                -15%
              </p>
            </div>
            <div className="*:px-4">
              <img
                src="https://s3-alpha-sig.figma.com/img/0497/db52/935e6d5d5c4df9a7a63bbaa61d53b7e9?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=a6vw5Ne2u5MvRMZ9GhVNuzisUUmlL1bzDDXINsO6chW62xuDdSSSwqVlhCxL25nK0QXy~kEIq649LHqQijQFMv6N3XYJ9gaD5aqA2LGoVDRkMal-qqSK97SFDDeOJL0-MJsjWcJIqUnDqdBKFhScN7gSREkdOnkd4l4lxjtU4sKO2bJLc9k9EEgViZugeHsalIwVpoeQtSRtZT7bYFgzxM4WfuKzd0ozDEx1hiUIzmWcKGN4KP1yLivsQEdZgt38AB72GZ8Ou-ytASCIKAXnbudvZhG3aQ9em3U--PHRU6jpmbmlm8HqK8vQLr0uotI1dTz2VpdwoA~Y8o6RoOD7-g__"
                alt=""
              />
            </div>
            <p className="text-[#020d17] max-[1316px]:text-[16px] text-center text-[19px] font-medium ">
              Клей для напольных покрытий Porret
            </p>
            <div className="flex items-center gap-3 justify-center">
              <p className="text-[17px] text-[#8f9296] line-through  ">
                15 999 ₽
              </p>
              <p className="text-[#1b9665] font-medium  text-[24px]">
                12 789 ₽
              </p>
            </div>
            <button className="bg-[#117fe3] w-full max-[1300px]:text-[14px] text-white py-2 rounded-b-md">
              <ShoppingCartOutlined /> Добавить в корзину
            </button>
          </div>
        </div>
      </div>
    </div> 
  );
};
//
// 12 789 ₽

export default Card;
