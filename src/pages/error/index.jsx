import React from "react";

import errorImg from "../../shared/assets/svg/404page.svg";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  let navigate = useNavigate();
  return (
    <div className="flex items-center flex-col gap-4 py-16 w-[95%] mx-auto  max-w-[1440px] max-[320px]:w-[90%]">
      <img src={errorImg} className="max-[800px]:w-[70%]" alt="" />
      <p className="max-w-[727px] text-[18px] text-[#535557] text-center max-[393px]:text-[14px]">
        Запрашиваемая страница не найдена. Возможно она была удалена, либо её
        адрес был изменен. Попробуйте воспользоваться поиском.
      </p>
      <div className="flex justify-center gap-4 mt-10 max-[400px]:flex-col ">
        <Button
          onClick={() => navigate(-1)}
          size="large"
          className="!px-5 !bg-[#f6f8fb]"
        >
          Вернуться назад
        </Button>
        <Button
          onClick={() => navigate("/")}
          className="uppercase !font-bold text-[13px] "
          variant="contained"
        >
          На главную
        </Button>
      </div>
    </div>
  );
};

export default ErrorPage;
