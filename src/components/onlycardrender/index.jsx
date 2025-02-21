import React, { useEffect, useRef, useState } from "react";
import { Autoplay, Navigation } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { ChevronLeft, ChevronRight } from "@mui/icons-material";

import myAxios from "../../hooks/my_axios";

import CardRander from "./cardRender";
import { Skeleton } from "@mui/material";

let OnlyCardRender = ({text}) => {
  let [product, setProduct] = useState([]);
  let [skelaton, setSkelaton] = useState(true);
  const prevRefbtnOnly = useRef(null);
  const nextRefbtnOnly = useRef(null);
  useEffect(() => {
    setSkelaton(true);
    myAxios.get("/product").then((res) => {
      setProduct(res.data), setSkelaton(false);
    });
  }, []);

  return (
    <div className=" py-7 flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <h1 className="text-[32px] font-bold text-[#2c333d] max-[400px]:text-[25px] max-[320px]:text-[20px]  ">
         {text}
        </h1>
      </div>

      <div className="relative   py-7  ">
        <button
          ref={prevRefbtnOnly}
          className="absolute max-[500px]:p-1 top-1/2 max-[489px]:top-[100%] max-[489px]:left-[35%]  -left-4 transform z-50 bg-white -translate-y-1/2 shadow-[0_4px_25px_0_rgba(0,0,0,0.10)] text-black p-3 rounded-full  hover:bg-gray-200 duration-500"
        >
          <ChevronLeft />
        </button>
        <button
          ref={nextRefbtnOnly}
          className="absolute max-[500px]:p-1 top-1/2 max-[489px]:top-[100%] max-[489px]:right-[35%]  w-fit   shadow-[0_10px_25px_0_rgba(0,0,0,0.10)] right-0 transform z-50 -translate-y-1/2 bg-white text-black p-3 rounded-full  hover:bg-gray-200 duration-500"
        >
          <ChevronRight />
        </button>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          navigation={{
            prevEl: prevRefbtnOnly.current,
            nextEl: nextRefbtnOnly.current,
          }}
          onNavigationNext={(swiper) => {
            swiper.navigation.update();
          }}
          onNavigationPrev={(swiper) => {
            swiper.navigation.update();
          }}
          autoplay={{
            delay: 6000,
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
              slidesPerView: 5,
              spaceBetween: 30,
            },
          }}
          modules={[Navigation, Autoplay]}
          className="h-full"
        >
          {!skelaton ? (
            product.map(
              (value) =>
                value.active !== "xit" && (
                  <SwiperSlide key={value.id} className="h-full flex">
                    <CardRander className="h-full flex flex-col" {...value} />
                  </SwiperSlide>
                )
            )
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
    </div>
  );
};

export { OnlyCardRender };
