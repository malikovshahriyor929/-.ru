import React, { useContext, useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import CartProduct2 from "./cartProduct";

import { toast } from "react-toastify";
import AddToProduct from "./add";
import { adminContext } from "../../context/adminContext";
import { Button } from "@mui/material";

const AdminCrud = () => {
    let navigate = useNavigate();
  let { adminState } = useContext(adminContext);

  return (
    <div className="w-[95%] mx-auto py-7 max-w-[1440px] max-[320px]:w-[90%]">
      <div>
        <div className="flex items-center gap-2   ">
          <NavLink to={"/"}>
            <p className="text-[15px] text-[#2c333d]">Стройоптторг</p>
          </NavLink>
          <p className="text-[15px] text-[#91969d]">/ Админ панель</p>
        </div>

        <h1 className="text-[32px] font-bold text-[#2c333d] max-[400px]:text-[25px] max-[320px]:text-[20px]  ">
          Админ панель
        </h1>
      </div>
      <div className="flex justify-end  gap-5 ">
        <AddToProduct />
        <Button
          onClick={() => {
            navigate("/");
            localStorage.removeItem("token");
          }}
          color="warning"
          variant="contained"
        >
          log out
        </Button>
      </div>
      <div>
        <div className="grid grid-cols-[2.5fr_1fr_1fr_1fr_1fr]  px-3 pb-5 pt-2 gap-4 border-b border-[#ebeef0]  font-semibold text-gray-600">
          <div>Товар</div>
          <div className="flex gap-1">
            <p>Цена</p>/ <p>старая цена</p>
          </div>
          <div>activenis</div>
          <div>discount</div>
          <div>actions</div>
        </div>
        <div className="flex flex-col gap-5  ">
          {adminState?.adminData?.map((value) => (
            <div key={value.id}>
              <CartProduct2 {...value} />
            </div>
          ))}
        </div>
      </div>

      {/* <div className="flex items-center gap-6 max-[612px]:flex-col">
        <form
          //   onSubmit={handleSubmit(formData)}
          className="flex  flex-col gap-4 w-full"
        >
          <div
            className="flex flex-col gap-1 rounded-lg
                "
          >
            {errors?.email?.message ? (
              <input
                {...register("email")}
                className=" rounded-lg w-full bg-red-300 border border-red-500  placeholder:text-red-900  px-2 py-1"
                type="text"
                placeholder="Адрес эл. почты"
              />
            ) : (
              <input
                {...register("email")}
                className="border border-[#a0a3bc] rounded-lg w-full  px-2 py-1"
                type="text"
                placeholder="Адрес эл. почты"
              />
            )}
            <p className="text-red-500"> {errors?.email?.message}</p>
          </div>
          <div className="flex flex-col gap-1 rounded-lg">
            {errors?.password?.message ? (
              <input
                {...register("password")}
                className="bg-red-300 border border-red-500  placeholder:text-red-900 rounded-lg  w-full px-2 py-1"
                type="password"
                placeholder="Пароль"
              />
            ) : (
              <input
                {...register("password")}
                className="border border-[#a0a3bc] rounded-lg  w-full px-2 py-1"
                type="password"
                placeholder="П"
              />
            )}
          </div>
        </form>
      </div> */}
    </div>
  );
};

export default AdminCrud;
