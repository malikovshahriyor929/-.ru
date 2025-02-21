import React from "react";

import card from "../../shared/assets/svg/card.svg";
import grid from "../../shared/assets/svg/catalog.svg";
import delevery from "../../shared/assets/svg/delivery.svg";
import percentage from "../../shared/assets/svg/discounts.svg";
import { Divider } from "@mui/material";

const UnderTheShowcase = () => {
  return (
    <div className="w-[95%] max-w-[1440px] mx-auto py-5 flex items-center gap-2 justify-between max-[952px]:grid grid-cols-2 max-[952px]:gap-4 max-[376px]:grid-cols-1 max-[376px]:px-3
     ">
      <div className="flex items-center gap-2  text-[#3b3c3f] text-[15px] font-medium">
        <img src={card} alt="" />
        <p>Оплата любым удобным способом</p>
      </div>
      <Divider className="max-[952px]:hidden " variant="fullWidth" orientation="vertical" flexItem />
      <div className="flex items-center gap-2  text-[#3b3c3f] text-[15px] font-medium">
        <img src={grid} alt="" />
        <p>Большой выбор товаров в каталоге</p>
      </div>
      <Divider className="max-[952px]:hidden " variant="fullWidth" orientation="vertical" flexItem />

      <div className="flex items-center gap-2  text-[#3b3c3f] text-[15px] font-medium">
        <img src={delevery} alt="" />
        <p>Осуществляем быструю доставку</p>
      </div>
      <Divider className="max-[952px]:hidden " variant="fullWidth" orientation="vertical" flexItem />

      <div className="flex items-center gap-2  text-[#3b3c3f] text-[15px] font-medium">
        <img src={percentage} alt="" />
        <p>Делаем скидки на крупные покупки</p>
      </div>
    </div>
  );
};

export default UnderTheShowcase;
