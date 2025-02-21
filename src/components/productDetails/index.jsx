import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import myAxios from "../../hooks/my_axios";

import { CartContext } from "../../context/cartContext";

import {
  Check,
  CompareArrows,
  Discount,
  Favorite,
  FavoriteBorder,
  LocalShipping,
  Payment,
  Storefront,
} from "@mui/icons-material";

import card from "../../shared/assets/svg/card.svg";
import grid from "../../shared/assets/svg/catalog.svg";
import delevery from "../../shared/assets/svg/delivery.svg";
import percentage from "../../shared/assets/svg/discounts.svg";
import chart from "../../shared/assets/svg/chart.svg";
import { LikeContext } from "../../context/likeContext";
import { OnlyCardRender } from "../onlycardrender";

const ProductDetailsItem = () => {
  let { productId } = useParams();
  let [data, setData] = useState([]);
  let { state, dispatch } = useContext(CartContext);
  let [likes, setLikes] = useState(false);
  let { Liked, LikedDispatch } = useContext(LikeContext);
  let localLike = JSON.parse(localStorage.getItem("like")) || [];
  let loclike = () => {
    let toglle = localLike.find((value) => value.id == id);
    if (toglle) {
      localLike = localLike.filter((value) => value.id !== id);
      localStorage.setItem("like", JSON.stringify(localLike));
      LikedDispatch({ type: "delete", deletedId: id });
      setLikes(false);
    } else {
      localLike.push(data);
      localStorage.setItem("like", JSON.stringify(localLike));
      LikedDispatch({ type: "liked", like: data });
      setLikes(true);
    }
  };

  useEffect(() => {
    myAxios.get(`/product/${productId}`).then((res) => setData(res.data));
  }, []);

  let {
    id,
    active,
    name,
    article,
    oldPrice,
    currentPrice,
    discountPercentage,
    imageUrl,
    counter,
  } = data;

  return (
    <div className="w-[95%] mx-auto  max-w-[1440px] max-[320px]:w-[90%] py-7 ">
      <h1 className=" text-[18px] font-medium   truncat pb-13 ">
        Дрель-шуруповерт аккумуляторная MAKITA DF 347DWE14 В 1,5 А/ч
      </h1>
      <div className="flex gap-5 justify-between max-[753px]:flex-col">
        <div className="flex items-center max-[461px]:flex-col-reverse max-[461px]:gap-10 ">
          <div className="flex flex-col gap-10  max-[461px]:flex-row max-[461px]:*:w-[18%] max-[413px]:w-[75%] max-[400px]:gap-7 max-[370px]:*:w-[20%] max-[331px]:*:w-[28%]    *:h-fit">
            <img
              className="h-14 w-[50%] max-[900px]:w-[40%] object-cover  "
              src={imageUrl}
              alt=""
            />
            <img
              className="h-14 w-[50%] max-[900px]:w-[40%] object-cover rotate-180 "
              src={imageUrl}
              alt=""
            />
            <img
              className="h-14 w-[50%] max-[900px]:w-[40%] object-cover rotate-y-180"
              src={imageUrl}
              alt=""
            />
            <img
              className="h-14 w-[50%] max-[331px]:hidden max-[900px]:w-[40%] object-cover rotate-90"
              src={imageUrl}
              alt=""
            />
            <img
              className="h-14 w-[50%] max-[900px]:w-[40%] object-cover max-[461px]:hidden -rotate-45"
              src={imageUrl}
              alt=""
            />
          </div>

          <div className="w-full  *:object-contain ">
            <img className="h-full w-full   " src={imageUrl} alt="" />
          </div>
        </div>
        <div className="flex gap-4">
          <div className="p-6 bg-white shadow-md rounded-lg max-[1266px]:hidden ">
            <div className="space-y-3 ">
              <div className="flex justify-between gap-4 text-gray-600">
                <span>Тип товара</span>
                <span className="font-medium text-gray-900">
                  Дрель-шуруповерт
                </span>
              </div>
              <div className="flex justify-between gap-4 text-gray-600">
                <span>Бренд</span>
                <span className="font-medium text-gray-900">MAKITA</span>
              </div>
              <div className="flex justify-between gap-4 text-gray-600">
                <span>Назначение инструмента</span>
                <span className="font-medium text-gray-900">
                  профессиональный
                </span>
              </div>
              <div className="flex justify-between gap-4 text-gray-600">
                <span>Мощность (Вт)</span>
                <span className="border-b border-dotted  "></span>
                <span className="font-medium text-gray-900">18</span>
              </div>
              <div className="flex justify-between gap-4 text-gray-600">
                <span>Емкость АКБ (А/ч)</span>
                <span className="font-medium text-gray-900">1.5</span>
              </div>
              <div className="flex justify-between gap-4 text-gray-600">
                <span>Крутящий момент макс. (Н/м)</span>
                <span className="font-medium text-gray-900">30</span>
              </div>
              <div className="flex justify-between gap-4 text-gray-600">
                <span>Напряжение аккумулятора (В)</span>
                <span className="font-medium text-gray-900">14.4</span>
              </div>
              <a href="#" className="text-blue-600 font-medium">
                Больше характеристик
              </a>
            </div>

            {/* Qo'shimcha xizmatlar */}
            <div className="mt-6 p-4 bg-gray-100 rounded-lg space-y-3">
              <div className="flex items-center gap-3 text-gray-700">
                <img src={card} alt="" />
                <span>Оплата любым удобным способом</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <img src={grid} alt="" />
                <span>Большой выбор товаров в каталоге</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <img src={delevery} alt="" />
                <span>Осуществляем быструю доставку</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <img src={percentage} alt="" />
                <span>Делаем скидки на крупные покупки</span>
              </div>
            </div>
          </div>
          <div className="rounded-lg p-4 h-fit  max-[753px]:*:mx-auto max-[753px]:w-full  shadow-[0_4px_19px_0_rgba(23,27,32,0.07)] flex flex-col gap-4 max-[753px]:grid grid-cols-2 max-[461px]:!grid-cols-1 ">
            <p className="text-[13px] text-[#a8adb2]">Артикул: {article}</p>
            <p>
              <Check fontSize="14px" className="text-[#1b9665]" /> В наличии
            </p>
            <div className="flex items-center gap-2 ">
              <p className="text-[#003b73] font-medium  text-[20px]">
                {currentPrice?.toLocaleString("us-US")?.replace(",", " ")} ₽
              </p>
              <p className="text-[15px] text-[#8f9296] line-through  ">
                {oldPrice?.toLocaleString("us-US")?.replace(",", " ")} ₽
              </p>
              {discountPercentage ? (
                <p className="text-[11px] text-white w-fit rounded-md px-1 py-0.5 bg-[#1b9665]">
                  -{discountPercentage}%
                </p>
              ) : (
                ""
              )}
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => dispatch({ type: "decrement", decrement: id })}
                className="w-8 h-8 flex items-center justify-center border rounded-lg"
              >
                -
              </button>
              <p>{(counter = 1)}</p>
              <button
                onClick={() => dispatch({ type: "increment", increment: id })}
                className="w-8 h-8 flex items-center justify-center border rounded-lg"
              >
                +
              </button>
            </div>
            <button
              onClick={() => dispatch({ type: "add", product: { ...data } })}
              className="w-full bg-blue-600 text-white max-[900px]:text-[14px] py-3 px-5 rounded-lg text-lg font-medium hover:bg-blue-700"
            >
              ДОБАВИТЬ В КОРЗИНУ
            </button>

            <button
              onClick={() => dispatch({ type: "add", product: { ...data } })}
              className="w-full text-blue-600 py-3 px-5 text-lg font-medium hover:underline "
            >
              Купить в 1 клик
            </button>

            <div className="flex justify-between max-[753px]:col-span-2 max-[461px]:col-span-1 max-[753px]:w-full gap-4 text-gray-700 max-[322px]:**:text-[14px] max-[322px]:*:flex-col max-[322px]:items-center">
              <button
                onClick={loclike}
                className="!text-[#000] flex items-center max-[900px]:text-nowrap gap-2 p-2 !rounded-lg"
              >
                {likes ? (
                  <Favorite className="!text-red-500" />
                ) : (
                  <FavoriteBorder />
                )}
                В избранное
              </button>
              <button className="flex items-center gap-2 hover:text-gray-900">
                <img src={chart} alt="" />
                Сравнить
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="p-6 bg-white shadow-md rounded-lg  hidden max-[1266px]:flex gap-10 flex-row-reverse w-full max-[725px]:flex-col-reverse  max-[345px]:p-4">
        <div className="space-y-3  max-[378px]:**:text-[14px] w-full max-[311px]:**:text-[12px] ">
          <div className="flex justify-between gap-4 text-gray-600">
            <span>Тип товара</span>
            <span className="font-medium text-gray-900">Дрель-шуруповерт</span>
          </div>
          <div className="flex justify-between gap-4 text-gray-600">
            <span>Бренд</span>
            <span className="font-medium text-gray-900">MAKITA</span>
          </div>
          <div className="flex justify-between gap-4 text-gray-600">
            <span>Назначение инструмента</span>
            <span className="font-medium text-gray-900">профессиональный</span>
          </div>
          <div className="flex justify-between gap-4 text-gray-600">
            <span>Мощность (Вт)</span>
            <span className="border-b border-dotted  "></span>
            <span className="font-medium text-gray-900">18</span>
          </div>
          <div className="flex justify-between gap-4 text-gray-600">
            <span>Емкость АКБ (А/ч)</span>
            <span className="font-medium text-gray-900">1.5</span>
          </div>
          <div className="flex justify-between gap-4 text-gray-600">
            <span>Крутящий момент макс. (Н/м)</span>
            <span className="font-medium text-gray-900">30</span>
          </div>
          <div className="flex justify-between gap-4 text-gray-600">
            <span>Напряжение аккумулятора (В)</span>
            <span className="font-medium text-gray-900">14.4</span>
          </div>
          <a href="#" className="text-blue-600 font-medium">
            Больше характеристик
          </a>
        </div>

        <div className="mt-6 p-4 bg-gray-100 rounded-lg space-y-3 max-[1266px]:w-[40rem] max-[753px]:w-full flex flex-col gap-3 justify-between py-6 max-[345px]:**:text-[14px]">
          <div className="flex items-center gap-3 text-gray-700">
            <img src={card} alt="" />
            <span>Оплата любым удобным способом</span>
          </div>
          <div className="flex items-center gap-3 text-gray-700">
            <img src={grid} alt="" />
            <span>Большой выбор товаров в каталоге</span>
          </div>
          <div className="flex items-center gap-3 text-gray-700">
            <img src={delevery} alt="" />
            <span>Осуществляем быструю доставку</span>
          </div>
          <div className="flex items-center gap-3 text-gray-700">
            <img src={percentage} alt="" />
            <span>Делаем скидки на крупные покупки</span>
          </div>
        </div>
      </div>
      <OnlyCardRender text={"Похожие товары"} />
      <OnlyCardRender text={"С этим товаром покупают"} />
    </div>
  );
};

export default ProductDetailsItem;
