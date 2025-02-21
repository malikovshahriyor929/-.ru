import React, { useContext, useState } from "react";

import { NavLink, useNavigate } from "react-router-dom";

import { Badge, Button, Drawer } from "@mui/material";

import logo from "../../shared/assets/svg/logo 1.svg";
import gift from "../../shared/assets/svg/gift.svg";
import user from "../../shared/assets/svg/user.svg";
import chart from "../../shared/assets/svg/chart.svg";

import {
  Close,
  FavoriteBorder,
  Menu,
  ShoppingCartOutlined,
  WidthFull,
} from "@mui/icons-material";
import HeaderSearch from "./headerSearch";
import Katalog from "./katalog";
import { CartContext } from "../../context/cartContext";
import { LikeContext } from "../../context/likeContext";

const Header = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  let { state, dispatch } = useContext(CartContext);
  let { Liked, LikedDispatch } = useContext(LikeContext);
  let navigate = useNavigate();
  let data = JSON.parse(localStorage.getItem("token")) || [];
  return (
    <div className="flex flex-col gap-1">
      <div className=" border-b border-[#ebeef0] ">
        <div className="flex items-center justify-between max-w-[1440px]  py-2 w-[95%] mx-auto">
          <div className="max-[1111px]:flex hidden">
            <Button
              onClick={toggleDrawer(true)}
              className=" flex items-center gap-2"
            >
              <Menu />
              <p className="max-[381px]:hidden">Меню</p>
            </Button>
            <Drawer
              size="md"
              className="relative  w-full"
              open={open}
              onClose={toggleDrawer(false)}
            >
              <div className="!w-full flex  flex-col gap-3   !bg-white">
                <div className="!flex items-center justify-between gap-3 p-3">
                  <p>Menu</p>
                  <Button
                    onClick={toggleDrawer(false)}
                    className="  bg-[#f2f6fc] rounded-lg p-1 !w-fit "
                  >
                    <Close />
                  </Button>
                </div>
                <div className="*:text-[14px] font-medium flex-col  !w-full *:px-5 *:pr-10 *:py-3 *:text-[#2e3032] *:uppercase flex *:border-b *:border-[#ebeef0] gap-3">
                  <p className="border-b border-[#ebeef0]">
                    <NavLink to={"/"}>О компании</NavLink>
                  </p>
                  <p className="border-b border-[#ebeef0]">
                    <NavLink to={"/"}>Оплата</NavLink>
                  </p>
                  <p className="border-b border-[#ebeef0]">
                    <NavLink to={"/"}>Доставка</NavLink>
                  </p>
                  <p className="border-b border-[#ebeef0]">
                    <NavLink to={"/"}>Возврат</NavLink>
                  </p>
                  <p className="border-b border-[#ebeef0]">
                    <NavLink to={"/"}>Отзывы</NavLink>
                  </p>
                  <p className="border-b border-[#ebeef0]">
                    <NavLink to={"/"}>Вопрос-ответ</NavLink>
                  </p>
                  <p className="border-b border-[#ebeef0]">
                    <NavLink to={"/"}>Новости</NavLink>
                  </p>
                  <p className="border-b border-[#ebeef0]">
                    <NavLink to={"/"}>Контакты</NavLink>
                  </p>
                </div>
              </div>
            </Drawer>
          </div>
          <div className="*:text-[14px] max-[1111px]:hidden *:text-[#6c6f71] flex items-center gap-3 max-[]:">
            <p>
              <NavLink to={"/"}>О компании</NavLink>
            </p>
            <p>
              <NavLink to={"/"}>Оплата</NavLink>
            </p>
            <p>
              <NavLink to={"/"}>Доставка</NavLink>
            </p>
            <p>
              <NavLink to={"/"}>Возврат</NavLink>
            </p>
            <p>
              <NavLink to={"/"}>Отзывы</NavLink>
            </p>
            <p>
              <NavLink to={"/"}>Вопрос-ответ</NavLink>
            </p>
            <p>
              <NavLink to={"/"}>Новости</NavLink>
            </p>
            <p>
              <NavLink to={"/"}>Контакты</NavLink>
            </p>
          </div>
          <div className="flex items-center gap-3  ">
            <p className=" text-[13px] text-[#4e5760] max-[597px]:hidden">
              Ежедневно, с 8:00 до 18:00
            </p>
            <a href="tel:8 800 444 00 65" className="max-[345px]:hidden">
              <p className="text-[14px] font-medium">8 800 444 00 65</p>
            </a>
            <button className="bg-[#f2f6fc] rounded  px-3 py-1.5">
              <p className="text-[11px] font-bold  uppercase text-[#2a5e8d] ">
                Заказать звонок
              </p>
            </button>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between gap-5 w-[95%] mx-auto py-4 max-w-[1440px]">
        <NavLink to={"/"}>
          <div className="min-w-[180px] max-[600px]:!w-[70px] max-[375px]:min-w-[130px] max-[300px]:min-w-[100px]">
            <img src={logo} alt="" />
          </div>
        </NavLink>
        {/* katalog btn */}
        <div className="max-[1000px]:hidden ">
          <Katalog />
        </div>

        {/* search */}
        <div className="w-full max-[1000px]:hidden">
          <HeaderSearch />
        </div>
        {/*  btn for_ex like  */}
        <div className="flex items-end gap-5 max-[1000px]:gap-10 max-[749px]:gap-5 max-[530px]:gap-3 ">
          <div className="flex items-center text-center justify-between max-[519px]:p-2 max-[415px]:p-1 max-[749px]:hidden  flex-col gap-1 text-nowrap  max-[321px]:*:w-3 ">
            <img src={gift} alt="" />
            <p className="text-[14px] text-[#6b7076] max-[519px]:hidden ">
              Все акции
            </p>
          </div>
          {}
          <div className="flex items-center text-center justify-between max-[519px]:p-2 max-[415px]:p-1  flex-col gap-1 text-nowrap  max-[321px]:*:w-3 ">
            <img src={chart} alt="" />
            {data ? (
              <p
                onClick={() => navigate("/")}
                className="text-[14px] text-[#6b7076] max-[519px]:hidden "
              >Сравнение</p>
            ) : (
              <div onClick={() => navigate("/login")}>Войти</div>
            )}
          </div>
          <NavLink to={"/login"}>
            <div className="flex items-center text-center justify-between max-[519px]:p-2 max-[415px]:p-1  flex-col gap-1 text-nowrap  max-[321px]:w-[32px] ">
              <img src={user} alt="" />
              <p className="text-[14px] text-[#6b7076] max-[519px]:hidden ">
                Войти
              </p>
            </div>
          </NavLink>
          <NavLink to={"/like"}>
            <div className="flex items-center text-center justify-between max-[519px]:p-2 max-[415px]:p-1  flex-col gap-1 text-nowrap  max-[321px]:*:!text-[8px] ">
              <Badge
                badgeContent={Liked.length}
                color="error"
                className="max-[321px]:*:!text-[16px]"
              >
                <FavoriteBorder className="" />
              </Badge>
              <p className="text-[14px] text-[#6b7076] max-[519px]:hidden ">
                Избранное
              </p>
            </div>
          </NavLink>
          <NavLink to={"/Корзина_товаров"}>
            <div className="flex items-center text-center justify-between max-[519px]:p-2 max-[415px]:p-1  flex-col gap-1 text-nowrap  max-[321px]:*:!text-[8px] ">
              <Badge
                badgeContent={state.cart.length}
                color="error"
                className="max-[321px]:*:!text-[16px]"
              >
                <ShoppingCartOutlined />
              </Badge>
              <p className="text-[14px] text-[#6b7076] max-[519px]:hidden ">
                Корзина
              </p>
            </div>
          </NavLink>
        </div>
      </div>
      <div className=" hidden  max-[1000px]:flex items-center w-[95%] mx-auto gap-5">
        <div className="max-[1000px]:flex hidden ">
          <Katalog />
        </div>
        <div className="w-full max-[1000px]:flex hidden">
          <HeaderSearch />
        </div>
      </div>
    </div>
  );
};

export default Header;
