// import React, { useEffect, useState } from "react";

// import Slider from "@mui/material/Slider";
// import myAxios from "../../hooks/my_axios";

// const CatalogPage = () => {
//   const [value, setValue] = useState([0, 10000]);
//   let [data, setData] = useState([]);
//   useEffect(() => {
//     myAxios.get("/product").then((res) => setData(res.data));
//   }, []);
//   function RangeSlider() {
//     const handleChange = (event, newValue) => {
//       setValue(newValue);
//     };
//     console.log(value);

//     return (
//       <Slider
//         getAriaLabel={() => "Temperature range"}
//         value={value}
//         onChange={handleChange}
//         valueLabelDisplay="auto"
//         max={10000}
//         min={1}
//         defaultValue={[10, 5000]}
//       />
//     );
//   }

//  let rangeData =   data?.filter((item) =>{
//       item.currentPrice >= value[0] && item.currentPrice <= value[1]
//         ? console.log(data)
//         : ""
//    } );
// //   console.log(data);

//     console.log(rangeData);

//   return (
//     <div className="w-[95%] mx-auto py-7 max-w-[1440px] max-[320px]:w-[90%]">
//       <div className="flex flex-col w-72">{RangeSlider()}</div>
//       <div></div>
//     </div>
//   );
// };

// export default CatalogPage;
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Slider from "@mui/material/Slider";
import myAxios from "../../hooks/my_axios";
import CardRander from "./cardRender";

const CatalogPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  // Read values from URL (fallback to defaults if not found)
  const minPrice = Number(searchParams.get("min")) || 0;
  const maxPrice = Number(searchParams.get("max")) || 20000;

  const [value, setValue] = useState([minPrice, maxPrice]);
  const [data, setData] = useState([]);

  // Fetch data from API
  useEffect(() => {
    myAxios.get("/product").then((res) => setData(res.data));
  }, []);

  // Update range and URL params on slider change
  const handleChange = (event, newValue) => {
    setValue(newValue);
    setSearchParams({ min: newValue[0], max: newValue[1] });
  };

  // Filter data based on price range
  const rangeData = data?.filter(
    (item) => item.currentPrice >= value[0] && item.currentPrice <= value[1]
  );

  return (
    <div className="w-[95%] mx-auto py-7 max-w-[1440px] max-[320px]:w-[90%]">
      <div className="flex items-center   gap-3">
        <h1 className="text-[32px] font-bold text-[#2c333d] max-[540px]:text-[25px] max-[400px]:text-[20px]  max-[330px]:text-[18px] max-[305px]:text-[16px] ">
          Электроинструмент
        </h1>
        <p className="text-[#6c7177] max-[350px]:text-[14px] max-[340px]:text-[12px]">{data.length} товаров</p>
      </div>

      {/*  */}
      <div className="flex flex-col w-72 max-[350px]:w-60  pl-3 pb-7">
        <div className="flex items-center gap-2  py-4">
          <p className="border border-[#dfe0e2] w-full px-4 max-[350px]:px-3 max-[350px]:py-1 py-3 rounded-lg">
            от {value[0]?.toLocaleString("us-US")?.replace(",", " ")}
          </p>
          <p className="border border-[#dfe0e2] w-full px-4 max-[350px]:px-3 max-[350px]:py-1 py-3 rounded-lg">
            до {value[1]?.toLocaleString("us-US")?.replace(",", " ")}
          </p>
        </div>
        <Slider
          value={value}
          onChange={handleChange}
          valueLabelDisplay="auto"
          max={20000}
          min={1}
        />
      </div>

      {/* Display Filtered Products */}
      <div className="grid grid-cols-4  max-[916px]:grid-cols-3 max-[728px]:grid-cols-2 max-[433px]:grid-cols-1 max-[441px]:gap-4 gap-7 ">
        {rangeData.length > 0 ? (
          rangeData.map((item) => <CardRander key={item.id} {...item} />)
        ) : (
          <p className="flex items-center justify-center text-red-500">
            not have in that price
          </p>
        )}
      </div>
    </div>
  );
};

export default CatalogPage;
