import React, { useContext, useEffect, useRef, useState } from "react";
import { LikeContext } from "../../context/likeContext";
import { Autoplay, Navigation } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import emptycart from "../../shared/assets/svg/emptyCart.svg";

import CardRander from "./cardRender";
import { Button } from "@mui/material";

const LikePage = () => {
  let { Liked } = useContext(LikeContext);

  return (
    <div className="w-[95%] mx-auto py-7 max-w-[1440px] max-[433px]:mx-auto max-[433px]:w-[90%]">
      {Liked.length > 0 ? (
        <div className=" py-4 flex flex-col gap-4">
          <div className=" grid grid-cols-4  max-[916px]:grid-cols-3 max-[728px]:grid-cols-2 max-[433px]:grid-cols-1 max-[441px]:gap-4 gap-7  ">
            {Liked.map((value) => (
              <div key={value.id} className="h-full flex">
                <CardRander {...value} />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-2 justify-center items-center py-10 mb-10  ">
          <div className="flex justify-center items-center">
            <img src={emptycart} alt="" />
          </div>
          <div className="flex flex-col items-center gap-3">
            <h1 className="text-[20px] font-medium text-[#2c333d]">
              В вашей корзине пусто
            </h1>
            <p className="text-[15px] text-[#383838] max-w-[543px] text-center">
              У вас пока нет товаров в корзине. На странице "Каталог" вы найдете
              много интересных товаров.
            </p>
            <Button
              size="large"
              variant="contained"
              className="!font-bold "
              onClick={() =>navigate("/")}
            >
              Перейти в каталог
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LikePage;
