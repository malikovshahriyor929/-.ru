import React, { useContext, useEffect, useState } from "react";

import { Button } from "@mui/material";

import chart from "../../../shared/assets/svg/chart.svg";

import {
  Favorite,
  FavoriteBorder,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import { CartContext } from "../../../context/cartContext";
import { LikeContext } from "../../../context/likeContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const CardRander = (props) => {
  let { dispatch } = useContext(CartContext);
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
      localLike.push(props);
      localStorage.setItem("like", JSON.stringify(localLike));
      LikedDispatch({ type: "liked", like: props });
      setLikes(true);
    }
  };

  let {
    id,
    active,
    name,
    article,
    oldPrice,
    currentPrice,
    discountPercentage,
    imageUrl,
    isLiked,
  } = props;
  let navigate = useNavigate();

  return (
    <>
      <div className="flex flex-col justify-between h-full min-h-[400px]    gap-4 relative ">
        <div
          onClick={() => navigate(`/productdetails/${id}`)}
          className="absolute top-0 left-0     rounded-lg "
        >
          {active == "xit" ? (
            <p className="border rounded-lg  p-1 px-2 border-[#f90] text-[#f90]">
              хит
            </p>
          ) : active == "new" ? (
            <p className="border rounded-lg  p-1 px-2 border-[#ee063e] text-[#ee063e]">
              новинка
            </p>
          ) : active == "sale" ? (
            <p className="border rounded-lg  p-1 px-2 border-[#1b9665] text-[#1b9665]">
              распродажа
            </p>
          ) : null}
        </div>
        <div
          onClick={() => navigate(`/productdetails/${id}`)}
          className=" p-4 min-h-[200px] mt-7 flex justify-center items-center "
        >
          <img className="h-[150px] object-contain" src={imageUrl} alt="" />
        </div>
        <div
          onClick={() => navigate(`/productdetails/${id}`)}
          className="flex flex-col gap-2"
        >
          <p className="text-[13px] text-[#a8adb2]">Артикул: {article}</p>
          <h2 className=" text-[18px] font-medium ellipsis line-clamp-2  truncate ">
            {name}
          </h2>
          <div className="flex items-center gap-2  ">
            <p className="text-[15px] max-[1152px]:text-[13px] text-[#8f9296] line-through  ">
              {oldPrice.toLocaleString("us-US").replace(",", " ")} ₽
            </p>
            <p className="text-[#003b73] font-medium max-[1152px]:text-[18px]  text-[20px]">
              {currentPrice.toLocaleString("us-US").replace(",", " ")} ₽
            </p>

            {discountPercentage ? (
              <p className="text-[11px] text-white w-fit rounded-md px-1 py-0.5 bg-[#1b9665]">
                -{discountPercentage}%
              </p>
            ) : (
              ""
            )}
          </div>
        </div>
        <div className="flex items-center gap-3 justify-between">
          <Button
            onClick={() => {
              dispatch({ type: "add", product: { ...props } }),
                toast.success("add to cart");
            }}
            className="!bg-[#186fd4] !py-2 !text-white  flex gap-2 items-center "
          >
            <ShoppingCartOutlined /> Купить
          </Button>
          <div className="flex items-center gap-2">
            <button className="!text-[#000] !border !border-[#f3f4f5] p-2.5  !rounded-lg">
              <img src={chart} alt="" />
            </button>

            {/* {!localLike ? (
              <button
                onClick={() =>
                 loclike()
                }
                className="!text-[#000] !border !border-[#f3f4f5] p-2  !rounded-lg"
              >
                <FavoriteBorder />
              </button>
            ) : (
              <button
                onClick={() =>  loclike()}
                className="!text-[#000] !border !border-[#f3f4f5] p-2  !rounded-lg"
              >
                <Favorite className="text-red-500" />
              </button>
            )} */}
            <button
              onClick={() => {
                toast.success("liked"), loclike();
              }}
              className="!text-[#000] !border !border-[#f3f4f5] p-2 !rounded-lg"
            >
              {likes ? (
                <Favorite className="!text-red-500" />
              ) : (
                <FavoriteBorder />
              )}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardRander;
