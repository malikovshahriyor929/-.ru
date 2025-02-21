import React from "react";
import AccordionExpandDefault from "./footerAcardion";

import logo from "../../shared/assets/svg/logo 1.svg";

// card
import visa from "../../shared/assets/svg/visa.svg";
import mastercard from "../../shared/assets/svg/mastercard.svg";
import mir from "../../shared/assets/svg/mir.svg";
import tickoff from "../../shared/assets/svg/tinkoff.svg";
import tickbank from "../../shared/assets/svg/tickbank.svg";
import xolva from "../../shared/assets/svg/xolva.svg";
import { SendRounded } from "@mui/icons-material";

const Footer = () => {
  return (
    <div className="bg-[#f3f4f5]">
      <div className="w-[95%] mx-auto py-7 max-w-[1440px] max-[320px]:w-[90%]">
        <div className="flex items-center justify-between gap-4 max-[651px]:flex-wrap max-[281px]:gap-2 border-b border-[#dce1e7] pb-5">
          <div className="flex items-center gap-4">
            <img
              src={logo}
              className="max-[800px]:w-[175px] max-[712px]:w-[150px] max-[341px]:w-[120px] "
              alt=""
            />
            <p className="text-[13px] max-[1050px]:hidden text-[#35383a] ">
              ООО «Стройоптторг»
            </p>
          </div>
          <div className="text-[13px] max-[894px]:hidden text-[#35383a] flex flex-col  ">
            <p>ИНН: 0901051787 </p>
            <p>КПП 090101001</p>
          </div>
          <div className="flex flex-col max-[673px]:*:text-[12px]  max-[651px]:*:text-[14px] max-[341px]:*:text-[12px]  ">
            <p className="max-w-[129px] text-[13px] text-[#35383a]">Email:</p>
            <a
              href="mailto:info@stroiopttorg.ru"
              className="text-[#117fe3] text-[14px] font-medium underline"
            >
              info@stroiopttorg.ru
            </a>
          </div>
          <div className="flex items-center gap-3   ">
            <div className="flex flex-col items-center max-[687px]:items-end  ">
              <a href="tel:8 800 444 00 65" className="">
                <p className="text-[21px] font-medium max-[687px]:text-[16px] max-[341px]:text-[14px] max-[286px]:text-[12px]">
                  8 800 444 00 65
                </p>
              </a>
              <p className=" text-[13px] text-[#4e5760] max-[687px]:text-[12px] max-[341px]:text-[10px] max-[309px]:hidden">
                Ежедневно, с 8:00 до 18:00
              </p>
            </div>
            <button className="bg-[#f2f6fc] border border-[#ee0906] rounded max-[341px]:p-2  px-4 py-3">
              <p className="text-[11px] font-bold  uppercase text-[#474b4e] ">
                Заказать звонок
              </p>
            </button>
          </div>
        </div>
        <div className="py-5 flex gap-5 justify-between max-[744px]:hidden">
          <div className="flex gap-10">
            <div className="flex gap-4 flex-col ">
              <h3 className="text-[18px] font-medium text-[#333436]">
                Информация
              </h3>
              <p className="text-[#404244]">О компании</p>
              <p className="text-[#404244]">Оплата</p>
              <p className="text-[#404244]">Доставка</p>
              <p className="text-[#404244]">Возврат</p>
              <p className="text-[#404244]">Отзывы</p>
            </div>
            <div className="flex gap-4 flex-col ">
              <h3 className="text-[18px] opacity-0  font-medium text-[#333436]">
                Информация
              </h3>
              <p className="text-[#404244]">Вопрос-ответ</p>
              <p className="text-[#404244]">Новости</p>
              <p className="text-[#404244]">Контакты</p>
              <p className="text-[#404244]">Вход \ Регистрация</p>
              <p className="text-[#404244]">Все акции</p>
            </div>
          </div>
          <div className="flex  gap-10 max-[1211px]:flex-col max-[1211px]:gap-4 ">
            <div className="flex gap-10">
              <div className="flex gap-4 flex-col  max-[913px]:*:max-w-[253px]">
                <h3 className="text-[18px] font-medium text-[#333436]">
                  Каталог
                </h3>
                <p className="text-[#404244]">Общестроительные материалы</p>
                <p className="text-[#404244]">Все для сауны и бани</p>
                <p className="text-[#404244]">Инструмент</p>
                <p className="text-[#404244]">Отделочные материалы</p>
                <p className="text-[#404244]">
                  Товары для дома, сада и огорода
                </p>
              </div>
              <div className="flex gap-4 flex-col *:max-w-[283px]  max-[913px]:*:max-w-[253px]  ">
                <h3 className="text-[18px] opacity-0  font-medium text-[#333436]">
                  Информация
                </h3>
                <p className="text-[#404244]">Электротовары</p>
                <p className="text-[#404244]">Сантехника</p>
                <p className="text-[#404244]">Столярные изделия</p>
                <p className="text-[#404244]">
                  Спецодежда и средства индивидуальной пожарной защиты{" "}
                </p>
              </div>
            </div>
            <div className="flex gap-4 flex-col  *:max-w-[283px] max-[1211px]:flex-row max-[1211px]:*:max-w-[250px] ">
              <h3 className="text-[18px] max-[1211px]:hidden font-medium opacity-0 text-[#333436]">
                Каталог
              </h3>
              <p className="text-[#404244]">
                Водо-газоснабжение, отопление, вентиляция
              </p>
              <p className="text-[#404244]">
                Метизные, такелажные и скобяные изделия
              </p>
            </div>
          </div>
        </div>
        <div className="max-[744px]:block hidden">
          {AccordionExpandDefault()}
        </div>
        <div className="hidden max-[1235px]:block py-4">
          <div className="grid grid-cols-6 gap-4 opacity-60  w-full max-[358px]:!grid-cols-4 ">
            <img src={visa} alt="" />
            <img src={mastercard} alt="" />
            <img src={tickbank} alt="" />
            <img src={mir} alt="" />
            <img src={xolva} alt="" className="col-span-2  " />
            <img src={tickoff} alt="" className="col-span-2  " />
          </div>
        </div>
        <div className="flex items-center justify-between gap-7 max-[405px]:flex-col ">
          <div className="*:max-w-[110px] max-[1000px]:hidden">
            <p className="text-[14px] text-[#979da3]">Мы принимаем к оплате:</p>
          </div>
          <div className="grid grid-cols-6 gap-5 opacity-60 max-[1235px]:hidden ">
            <img src={visa} alt="" />
            <img src={mastercard} alt="" />
            <img src={tickbank} alt="" />
            <img src={mir} alt="" />
            <img src={xolva} alt="" />
            <img src={tickoff} alt="" />
          </div>
          <div className="flex gap-3 items-center max-[1235px]:w-full max-[405px]:flex-col">
            <p className="text-[14px] text-[#4c5054] font-medium max-w-[200px] max-[405px]:max-w-none">
              Подпишитесь на рассылку и будьте в курсе!
            </p>
            <div className="bg-white flex  items-center gap-2 max-[1235px]:w-full py-3 px-5  rounded-lg">
              <input
                type="text"
                className="w-full outline-none  text-[14px] text-[#6b6f73] placeholder:txet-[#6b6f73]"
                placeholder="Ваш email"
              />
              <SendRounded />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
