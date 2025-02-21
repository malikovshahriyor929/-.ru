import { Search } from "@mui/icons-material";
import React from "react";

const HeaderSearch = () => {
  return (
    <>
      <div className="bg-[#186fd4] w-full p-1 rounded-lg flex items-center gap-2 max-[350px]:h-10 ">
        <input
          className="bg-white w-full px-3 py-2 rounded-md max-[350px]:h-8  "
          type="text"
          placeholder="Найти среди 50000 товаров. Например: Дрель Bosch"
        />
        <button
          className="bg-[#186fd4] text-white px-2
                  "
        >
          <Search />
        </button>
      </div>
    </>
  );
};

export default HeaderSearch;
