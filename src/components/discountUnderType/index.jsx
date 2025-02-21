import React from "react";

import bgDiscount from "../../shared/assets/images/bgimage1.png";
import bgDiscount2 from "../../shared/assets/images/bgimage2.png";
import bgDiscount3 from "../../shared/assets/images/bgimage3.png";
import bgDiscount4 from "../../shared/assets/images/bgimage4.png";
import { Button } from "@mui/material";

const DiscountUnderType = () => {
  return (
    <div className="w-[95%] mx-auto py-5 max-w-[1440px]">
      <div className="grid grid-cols-4 gap-4 max-[1195px]:grid-cols-2 max-[591px]:grid-cols-1  ">
        <div className=" rounded-xl relative ">
          <img className="max-[1195px]:w-full" src={bgDiscount} alt="" />
          <div className="text-[20px] text-[#2c333d] font-medium absolute top-5 left-5  max-[1266px]:top-3 max-[1266px]:left-4 max-[1195px]:top-5 max-[1195px]:left-5  max-[653px]:top-3 max-[653px]:left-4 max-w-[150px] max-[583px]:top-5 max-[583px]:left-5 max-[311px]:top-3 max-[311px]:left-4 ">
            <p>Метизные изделия</p>
            <Button size="small" className="!bg-[#011120] !text-white !p-1 !px-2 !font-bold !text-[14px]">до -15%</Button>
          </div>
        </div>
        <div className=" rounded-xl relative ">
          <img className="max-[1195px]:w-full" src={bgDiscount2} alt="" />
          <div className="text-[20px] text-[#2c333d] font-medium absolute top-5 left-5  max-[1266px]:top-3 max-[1266px]:left-4 max-[1195px]:top-5 max-[1195px]:left-5  max-[653px]:top-3 max-[653px]:left-4 max-w-[150px] max-[583px]:top-5 max-[583px]:left-5 max-[311px]:top-3 max-[311px]:left-4 ">
            <p>Лакокрасочные материалы</p>
            <Button size="small" className="!bg-[#011120] !text-white !p-1 !px-2 !font-bold !text-[14px]">до -30%</Button>
          </div>
        </div>
        <div className=" rounded-xl relative ">
          <img className="max-[1195px]:w-full" src={bgDiscount3} alt="" />
          <div className="text-[20px] text-[#2c333d] font-medium absolute top-5 left-5  max-[1266px]:top-3 max-[1266px]:left-4 max-[1195px]:top-5 max-[1195px]:left-5  max-[653px]:top-3 max-[653px]:left-4 max-w-[150px] max-[583px]:top-5 max-[583px]:left-5 max-[311px]:top-3 max-[311px]:left-4 ">
            <p> Напольные покрытия</p>
            <Button size="small" className="!bg-[#011120] !text-white !p-1 !px-2 !font-bold !text-[14px]">до -25%</Button>
          </div>
        </div>
        <div className=" rounded-xl relative ">
          <img className="max-[1195px]:w-full" src={bgDiscount4} alt="" />
          <div className="text-[20px] text-[#2c333d] font-medium absolute top-5 left-5  max-[1266px]:top-3 max-[1266px]:left-4 max-[1195px]:top-5 max-[1195px]:left-5  max-[653px]:top-3 max-[653px]:left-4 max-w-[150px] max-[583px]:top-5 max-[583px]:left-5 max-[311px]:top-3 max-[311px]:left-4 ">
            <p>Все для отоплления</p>
            <Button size="small" className="!bg-[#011120] !text-white !p-1 !px-2 !font-bold !text-[14px]">до -30%</Button>
          </div>
        </div>
      </div>
    </div>
  );
};


export default DiscountUnderType;
