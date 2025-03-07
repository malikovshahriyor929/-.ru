import React, { useEffect, useState } from "react";

import registersvg from "../../shared/assets/svg/register.svg";
import { Button } from "@mui/material";
import { ChevronRight } from "@mui/icons-material";

import { Close, ShoppingCart } from "@mui/icons-material";
import { Navigate, NavLink, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "react-toastify";

const Login = () => {
  const [open, setOpen] = useState(false);
  let [data, setData] = useState([]);
  let navigate = useNavigate();
  let [check, setCheck] = useState(false);

    const toggleDrawer = (newOpen) => () => {
      setOpen(newOpen);
    };

  let Schame = z.object({
    email: z
      .string()
      .min(11)
      .refine(
        (value) =>
          /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value),
        {
          message:
            "email faqat harflar va raqamlardan va @ iborat bo'lishi kerak",
        }
      ),
    password: z
      .string()
      .min(8)
      .refine((value) => /^[a-zA-Z0-9]+[a-z]+[0-9]{3}$/.test(value), {
        message:
          "password dingizga kamida bita kotta harf va kamida 3ta son bolishi kere",
      }),
  });

  let {
    handleSubmit,
    reset,
    register,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(Schame),
  });
  useEffect(() => {
    fetch("https://678944a52c874e66b7d8381f.mockapi.io/login")
      .then((data) => data.json())
      .then((data) => setData(data));
  }, []);
  let not_Admin = () => toast.error("Email yoki parol xato kiritildi");
  let tokenToast = () => toast.success("Siz muvaffaqiyatli kirdingiz");
  function formData({ email, password }) {
    data.filter((value) => {
      if (value.email === "admin@gmail.com" && value.password === "admin123") {
        localStorage.setItem("token", JSON.stringify(value));
        setCheck(true);
        navigate("/admin");
        tokenToast();
      }
    });
    if (!localStorage.getItem("token")) {
      not_Admin();
    }
    reset();
  }
  return (
    <div className="w-[95%] mx-auto py-7 max-w-[1440px] max-[320px]:w-[90%]">
      <div>
        <div className="flex items-center gap-2   ">
          <NavLink to={"/"}>
            <p className="text-[15px] text-[#2c333d]">Стройоптторг</p>
          </NavLink>
          <p className="text-[15px] text-[#91969d]">/ Авторизация</p>
        </div>

        <h1 className="text-[32px] font-bold text-[#2c333d] max-[400px]:text-[25px] max-[320px]:text-[20px]  ">
          Авторизация
        </h1>
      </div>
      <div className="flex items-center gap-6 max-[612px]:flex-col">
        <form
          onSubmit={handleSubmit(formData)}
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
          <div
            className="flex flex-col gap-1 rounded-lg
            "
          >
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
                placeholder="Пароль"
              />
            )}
            <p className="text-red-500">{errors?.password?.message}</p>
          </div>
          <div className="flex flex-col gap-4">
            {check ? (
              <button
                onClick={() => navigate("/admin")}
                type="submit"
                className="text-[#117fe3] text-[15px] bg-[#f6f8fb] px-5 py-3 rounded-lg  "
              >
                go to admin
              </button>
            ) : (
              <button
                type="submit"
                className="text-white text-[15px] bg-[#117fe3] px-5 py-3 rounded-lg  "
              >
                Восстановить пароль
              </button>
            )}
          </div>
        </form>
        <div className="flex gap-3 w-full">
          <div>
            <img src={registersvg} alt="" />
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-[22px] text-[#2c333d] font-medium">
              Еще нет аккаунта?
            </p>
            <p className="text-[#515151] max-w-[565px]">
              Регистрация на сайте позволяет получить доступ к статусу и истории
              вашего заказа. Просто заполните поля ниже, и вы получите учетную
              запись. Мы запрашиваем у вас только информацию, необходимую для
              того, чтобы сделать процесс покупки более быстрым и легким.
            </p>
            <Button className="!bg-[#011120] max-[300px]:!text-[10px] max-[300px]:!px-3 max-[300px]:!py-1 !text-white w-fit !px-5 !py-3 !text-[13px] !font-bold ">
              <p>перейти к товарам</p> <ChevronRight />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
