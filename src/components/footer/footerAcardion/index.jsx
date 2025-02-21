import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function AccordionExpandDefault() {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography component="span"> Информация</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div className="flex gap-10 max-[410px]:flex-col max-[410px]:gap-3 ">
            <div className="flex gap-4 flex-col ">
              <p className="text-[#404244]">О компании</p>
              <p className="text-[#404244]">Оплата</p>
              <p className="text-[#404244]">Доставка</p>
              <p className="text-[#404244]">Возврат</p>
              <p className="text-[#404244]">Отзывы</p>
            </div>
            <div className="flex gap-4 flex-col ">
              <p className="text-[#404244]">Вопрос-ответ</p>
              <p className="text-[#404244]">Новости</p>
              <p className="text-[#404244]">Контакты</p>
              <p className="text-[#404244]">Вход \ Регистрация</p>
              <p className="text-[#404244]">Все акции</p>
            </div>
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography component="span">Каталог</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div className="flex gap-10 max-[434px]:flex-col ">
            <div className="flex gap-4 flex-col  max-[913px]:*:max-w-[253px]">
              <h3 className="text-[18px] font-medium text-[#333436]"></h3>
              <p className="text-[#404244]">Общестроительные материалы</p>
              <p className="text-[#404244]">Все для сауны и бани</p>
              <p className="text-[#404244]">Инструмент</p>
              <p className="text-[#404244]">Отделочные материалы</p>
              <p className="text-[#404244]">Товары для дома, сада и огорода</p>
            </div>
            <div className="flex gap-4 flex-col *:max-w-[283px]  max-[913px]:*:max-w-[253px]  ">
              <p className="text-[#404244]">Электротовары</p>
              <p className="text-[#404244]">Сантехника</p>
              <p className="text-[#404244]">Столярные изделия</p>
              <p className="text-[#404244]">
                Спецодежда и средства индивидуальной пожарной защиты{" "}
              </p>
            </div>
            <div className="flex gap-4 flex-col  max-[744px]:hidden *:max-w-[283px] max-[1211px]:flex-row max-[1211px]:*:max-w-[253px] ">
              <p className="text-[#404244]">
                Водо-газоснабжение, отопление, вентиляция
              </p>
              <p className="text-[#404244]">
                Метизные, такелажные и скобяные изделия
              </p>
            </div>
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
