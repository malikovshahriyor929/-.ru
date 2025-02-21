import React from "react";

import { Menu } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const Katalog = () => {
  let navigate = useNavigate();
  return (
    <>
      <button
        onClick={() => navigate("/catalog")}
        className="cursor-pointer  text-[13px] max-[500px]:min-w-[50px] max-[500px]:px-3 max-[500px]:p-2 min-w-[70px] text-white font-bold uppercase flex items-center gap-3 bg-[#186fd4] rounded-lg px-6 py-3 max-[300px]:w-5
          "
      >
        <Menu />
        <p className=" max-[500px]:hidden">Каталог</p>
      </button>
    </>
  );
};

export default Katalog;
