import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

function PayCash(props) {
  const [option, setOption] = useState("cash");
  let trueClass =
    "text-[#1D2B5B] underline underline-offset-1 cursor-pointer xl:text-[20px] xxl:text-[24px]";
  let falseClass =
    "underline underline-offset-1 text-[#5661CB] cursor-pointer xl:text-[20px] xxl:text-[24px]";
  return (
    <section className="m-4 sm:mx-8 md:mx-20 lg:mx-24 xl:mt-8 xl:mx-[14rem] xxl:mx-[20rem]">
      <h1 className="text-[18px] font-medium md:text-[22px] xl:text-[26px] xxl:text-[30px]">
        Способы оплаты товаров и услуг
      </h1>
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 ">
        <Link
          to="/payCash"
          onClick={() => {
            setOption("cash");
          }}
          className={option === "cash" ? trueClass : falseClass}
        >
          Наличный расчет
        </Link>
        <Link
          to="/payCash"
          onClick={() => {
            setOption("card");
          }}
          className={option === "card" ? trueClass : falseClass}
        >
          Банковской картой
        </Link>
        <Link
          to="/payCash"
          onClick={() => {
            setOption("noCash");
          }}
          className={option === "noCash" ? trueClass : falseClass}
        >
          Безналичный расчет
        </Link>
        <Link
          to="/payCash"
          onClick={() => {
            setOption("online");
          }}
          className={option === "online" ? trueClass : falseClass}
        >
          Online оплата
        </Link>
      </div>

      <div className="my-8">
        <p className="mt-4 xl:text-[20px] xxl:text-[24px]">
          Стоимость доставки зависит от веса заказа, поэтому точную стоимость
          доставки просьба уточнять у менеджера магазина по тел.{" "}
          <br className="xl:hidden" /> +00(0000) 000-00-00.
        </p>
        <p className="mt-4 xl:text-[20px] xxl:text-[24px]">
          Сроки доставки: в день заказать и до 3-х рабочих дней для отдельных
          позиций.
        </p>
        <ul className="mt-4 xl:text-[20px] xxl:text-[24px]">
          <li>до 1,5 тонн - 2500 руб.</li>
          <li>до 1,5 тонн - 2500 руб.</li>
          <li>до 2 тонн - 3500 руб.</li>
          <li>до 3 тонн - 4000 руб.</li>
          <li>до 5 тонн - 9000 руб.</li>
          <li>до 8 тонн - 11000 руб.</li>
          <li>до 20 тонн - 18000 руб.</li>
        </ul>
        <p className="mt-4 xl:text-[20px] xxl:text-[24px]">
          Компания Гермес осуществляет доставку материалов 7 дней в неделю по
          всей территории Российской Федерации. Мы совершаем прямые поставки
          продукции с заводов-производителей России и Европы, а также доставку
          товара с собственных складов на территории Казани.
        </p>
        <p className="mt-4 xl:text-[20px] xxl:text-[24px]">
          Компания Гермес осуществляет доставку материалов 7 дней в неделю по
          всей территории Российской Федерации.{" "}
        </p>
      </div>
    </section>
  );
}

export default PayCash;
