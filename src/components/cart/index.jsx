import React, { useContext } from "react";

import { Navigate, NavLink, useNavigate } from "react-router-dom";

import { OnlyCardRender } from "../onlycardrender";
import CartProduct from "./cartProduct";
import { CartContext } from "../../context/cartContext";

import emptycart from "../../shared/assets/svg/emptyCart.svg";
import { Button } from "@mui/material";

let reducer = 0;
const Cart = () => {
  let { state,dispatch } = useContext(CartContext);
  let navigate = useNavigate();
  state.cart.reduce(
    (acc, value) => (reducer = acc + value.currentPrice * value.counter),
    0
  );

  

  return (
    <div className="w-[95%] mx-auto py-4 max-w-[1440px] max-[320px]:w-[90%]">
      {state.cart.length > 0 ? (
        <div>
          <div className="flex items-center gap-2   ">
            <NavLink to={"/"}>
              <p className="text-[15px] text-[#2c333d]">Стройоптторг</p>
            </NavLink>
            <p className="text-[15px] text-[#91969d]">/ Корзина товаров</p>
          </div>
          <h1 className="text-[32px] font-bold text-[#2c333d] max-[400px]:text-[25px] max-[320px]:text-[20px]  ">
            Корзина товаров
          </h1>

          <div>
            <div className="flex gap-4 max-[1172px]:flex-col max-[1172px]:w-full">
              <div className="w-full p-4 bg-white shadow-md rounded-lg">
                <div className="grid grid-cols-[2.5fr_1fr_1fr_1fr] max-[600px]:hidden gap-4 border-b border-[#ebeef0] pb-2 font-semibold text-gray-600">
                  <div>Товар</div>
                  <div>Цена</div>
                  <div>Количество</div>
                  <div>Сумма</div>
                </div>

                <div className="space-y-4 mt-4">
                  {state.cart.map((value, index) => (
                    <CartProduct key={index} {...value} />
                  ))}
                </div>
              </div>
              <div className="bg-white p-6 rounded-xl max-[1172px]:max-w-full max-[1172px]:flex flex-col  gap-5 shadow-md w-full h-fit max-w-sm">
                <h2 className="text-xl font-semibold mb-4 w-full ">Итого</h2>

                <div className="flex justify-between text-sm text-gray-500 border-b w-full border-[#ebeef0] pb-2">
                  <span>Скидка по промокоду</span>
                  <span>0 ₽</span>
                </div>

                <div className="flex justify-between text-sm text-gray-500 border-b border-[#ebeef0] w-full  py-2">
                  <span>Скидка от суммы заказа</span>
                  <span>0 ₽</span>
                </div>

                <div className="flex justify-between font-semibold text-lg pt-4 w-full">
                  <span className="text-[15px] font-medium">Сумма</span>
                  <span className="text-blue-600">
                    {reducer.toLocaleString("us-US").replace(",", " ")}₽
                  </span>
                </div>

                <input
                  type="text"
                  placeholder="Промокод"
                  className="w-full mt-4 px-4 py-2 border border-[#ebeef0] rounded-lg outline-none focus:ring "
                />

                <button className="w-full mt-3 bg-[#f6f8fb] text-blue-500 py-2 rounded-lg font-medium ">
                  Применить промокод
                </button>

                <button
                  className="w-full mt-3 max-[322px]:text-[14px] max-[293px]:text-[12px] bg-[#186fd4] text-white py-3 rounded-lg  font-medium hover:bg-[#1870d4ee]"
                >
                  ПЕРЕЙТИ К ОФОРМЛЕНИЮ
                </button>
              </div>
            </div>
          </div>

          <OnlyCardRender text={"Возможно вас заинтересуют:"} />
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
              onClick={() => navigate("/")}
            >
              Перейти в каталог
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};


export default Cart;
