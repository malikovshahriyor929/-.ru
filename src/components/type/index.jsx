import React from "react";

import just1 from "../../shared/assets/images/just1.png";
import just2 from "../../shared/assets/images/just2.png";
import just3 from "../../shared/assets/images/just3.png";

import just4 from "../../shared/assets/images/just4.png";
import just5 from "../../shared/assets/images/just5.png";
import just6 from "../../shared/assets/images/just6.png";
import just7 from "../../shared/assets/images/just7.png";
import arrow from "../../shared/assets/svg/arrow.svg";

const TypesOfUnderShowcase = () => {
  return (
    <div className="w-[95%] max-w-[1440px]  max-[320px]:w-[90%] mx-auto py-5 grid grid-cols-8 gap-4 max-[1207px]:grid-cols-4 max-[643px]:grid-cols-2 max-[320px]:grid-cols-1">
      <div className="bg-[#f3f4f5] rounded-xl justify-evenly text-[#3b3c3f] py-5 px-5 text-center  text-[15px] font-medium flex items-center flex-col gap-3 ">
        <img src={just1} alt="" />
        <p>Сантехника</p>
      </div>
      <div className="bg-[#f3f4f5] rounded-xl justify-evenly text-[#3b3c3f] py-5 px-5 text-center text-[15px] font-medium flex items-center flex-col gap-3 ">
        <img src={just2} alt="" />
        <p>Отделочные материалы</p>
      </div>
      <div className="bg-[#f3f4f5] rounded-xl justify-evenly text-[#3b3c3f] py-5 px-5 text-center text-[15px] font-medium flex items-center flex-col gap-3 ">
        <img src={just3} alt="" />
        <p>Электротовары</p>
      </div>
      <div className="bg-[#f3f4f5] rounded-xl justify-evenly text-[#3b3c3f] py-5 px-5 text-center text-[15px] font-medium flex items-center flex-col gap-3 ">
        <img src={just4} alt="" />
        <p>Инструменты</p>
      </div>
      <div className="bg-[#f3f4f5] rounded-xl justify-evenly text-[#3b3c3f] py-5 px-5 text-center text-[15px] font-medium flex items-center flex-col gap-3 ">
        <img src={just5} alt="" />
        <p>Столярные изделия</p>
      </div>
      <div className="bg-[#f3f4f5] rounded-xl justify-evenly text-[#3b3c3f] py-5 px-5 text-center text-[15px] font-medium flex items-center flex-col gap-3 ">
        <img src={just6} alt="" />
        <p className="max-[1400px]:text-[13px] ">Общестроительные материалы</p>
      </div>
      <div className="bg-[#f3f4f5] rounded-xl justify-evenly text-[#3b3c3f] py-5 px-5 text-center text-[15px] font-medium flex items-center flex-col gap-3 ">
        <img src={just7} alt="" />
        <p className="max-[1300px]:text-[13px]">Все для сауны и бани</p>
      </div>
      <div className="bg-[#fff] border-2 border-[#f6f7f9] rounded-xl justify-evenly text-[#3b3c3f] py-5 px-5 text-center text-[15px] font-medium flex items-center flex-col gap-3 ">
        <img src={arrow} alt="" />
        <p>Перейти в каталог</p>
      </div>
    </div>
  );
};

export default TypesOfUnderShowcase;
