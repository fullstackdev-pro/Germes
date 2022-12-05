import React from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { AiOutlineCheck, AiOutlineDown } from "react-icons/ai";
import { SlBasket } from "react-icons/sl";
import { SlStar } from "react-icons/sl";
import CategoryAds from "./CategoryAds";

function CategoryDetails(props) {
  const { catalogName } = useParams();
  const data = useSelector((state) => state.data);

  let goodsList = data.map((data, index) => {
    const { title, id, price, info, status, catalog } = data;
    if (catalog !== catalogName) return "";
    return (
      <div
        key={id}
        className="border-none md:border-solid md:border-[1px] md:border-[#8686864D] md:rounded md:pr-1 md:py-4 md:relative"
      >
        <SlStar className="hidden md:block md:absolute w-6 h-6 right-3 mt-1 text-[#5661CB]" />
        <div
          className={`hidden md:block md:absolute text-[12px] text-white rounded-r ${
            status === "Лидер продаж"
              ? "bg-[#F2994A] py-[4px] px-[12px] "
              : status === "Лучшая цена"
              ? "bg-[#DD4747] py-[4px] px-[12px] "
              : status === "Привезем сегодня"
              ? "bg-[#27AE60E5] py-[4px] px-[12px] "
              : ""
          }`}
        >
          {status}
        </div>

        <div className="flex justify-center">
          <img
            src={require("../../../../img/goods/1.png")}
            className="p-4 md:mt-[30px] md:mx-[40px]"
            alt="goods"
          />
        </div>

        <div className="text-[12px] font-medium mx-2 md:text-[16px]">
          <Link to={`/product/${id}`}>{title}</Link>
        </div>

        <p className="hidden md:grid md:text-[14px] md:font-light md:px-2 md:mt-[8px]">
          {info}
        </p>

        <div className="md:flex md:justify-between md:mt-[10px]">
          <button className="px-2 underline underline-offset-1 text-[11px] text-[#7D7D7D] font-light cursor-pointer md:text-[12px] ">
            бесплатная доставка
          </button>
          <button className="hidden underline underline-offset-1 md:grid md:text-[#219653] md:font-light md:text-[12px] md:pr-1 cursor-pointer">
            в наличии
          </button>
        </div>

        <div className="flex justify-between">
          <div className={`px-2 mt-[7px] md:mt-[11px]`}>
            <span
              className={`font-medium text-[14px] md:text-[18px] ${
                status === "Лучшая цена" ? "text-red-600" : ""
              }`}
            >
              {price}
            </span>
            {" \u20BD "} / шт
          </div>
          <div
            className={`hidden md:flex px-1 mt-[9px] md:mt-[11px] text-[12px] md:text-[16px] ${
              status === "Лучшая цена" ? "md:line-through" : "md:hidden"
            }`}
          >
            <span className="font-medium">{price + 200}</span>
            {" \u20BD "} / шт
          </div>
        </div>
        <div className="flex">
          <button className="mx-2 py-[8px] mt-[10px] w-[95%] bg-[#5661CB] text-white rounded-md cursor-pointer md:w-[70%] hover:bg-[#219653]">
            Купить в 1 клик
          </button>
          <button className="hidden md:grid px-4 pt-[0.7rem] h-10 mt-[0.7rem] text-[#5661CB] border-[1px] border-[#5661CB] rounded-md cursor-pointer">
            <SlBasket className="" />
            <AiOutlineCheck className="hidden " />
          </button>
        </div>
      </div>
    );
  });

  console.log(window.innerHeight);

  return (
    <section className="lg:relative xxl:ml-[240px] xxl:mr-[245px] ml-7 pb-8">
      <div className="hidden lg:block lg:absolute mt-[15px] w-[22%] shadow-lg bg-white rounded-md">
        <fieldset className="pl-4 m-4 mt-1">
          <legend className="text-[24px] font-medium">Производитель</legend>
          <div className="mt-1">
            <input type="checkbox" name="winnerberger" id="" />
            <label htmlFor="winnerberger" className="ml-4 text-[18px]">
              winnerberger
            </label>
          </div>
          <div className="mt-1">
            <input type="checkbox" name="Алексеевский" id="" />
            <label htmlFor="Алексеевский" className="ml-4 text-[18px]">
              Алексеевский
            </label>
          </div>
          <div className="mt-1">
            <input type="checkbox" name="Бакалинский" id="" />
            <label htmlFor="Бакалинский" className="ml-4 text-[18px]">
              Бакалинский
            </label>
          </div>
          <div className="mt-1">
            <input type="checkbox" name="Богданович" id="" />
            <label htmlFor="Богданович" className="ml-4 text-[18px]">
              Богданович
            </label>
          </div>
          <div className="mt-1">
            <input type="checkbox" name="Воткинский" id="" />
            <label htmlFor="Воткинский" className="ml-4 text-[18px]">
              Воткинский
            </label>
          </div>
        </fieldset>
        <fieldset className="pl-4 m-4 mt-1">
          <legend className="text-[24px] font-medium">Марка прочности</legend>
          <div className="mt-1">
            <input type="checkbox" name="M125" id="" />
            <label htmlFor="M125" className="ml-4 text-[16px]">
              M125
            </label>
          </div>
          <div className="mt-1">
            <input type="checkbox" name="M150" id="" />
            <label htmlFor="M150" className="ml-4 text-[16px]">
              M150
            </label>
          </div>
        </fieldset>
        <fieldset className="pl-4 m-4 mt-1">
          <legend className="text-[24px] font-medium">Формат</legend>
          <div className="mt-1">
            <input type="checkbox" name="Двойной кирпич" id="" />
            <label htmlFor="Двойной кирпич" className="ml-4 text-[18px]">
              Двойной кирпич
            </label>
          </div>
          <div className="mt-1">
            <input type="checkbox" name="Огнеупорный" id="" />
            <label htmlFor="Огнеупорный" className="ml-4 text-[18px]">
              Огнеупорный
            </label>
          </div>
          <div className="mt-1">
            <input type="checkbox" name="Ординарный" id="" />
            <label htmlFor="Ординарный" className="ml-4 text-[18px]">
              Ординарный
            </label>
          </div>
        </fieldset>
        <fieldset className="pl-4 mx-4 mt-1 mb-2">
          <legend className="text-[24px] font-medium">Пустотность</legend>
          <div className="mt-1">
            <input type="checkbox" name="Полнотелый" id="" />
            <label htmlFor="Полнотелый" className="ml-4 text-[18px]">
              {" "}
              Полнотелый
            </label>
          </div>
          <div className="mt-1">
            <input type="checkbox" name="Пустотелый" id="" />
            <label htmlFor="Пустотелый" className="ml-4 text-[18px]">
              Пустотелый
            </label>
          </div>
        </fieldset>
      </div>
      <div className="lg:flex lg:justify-end px-[12px] lg:mr-[10px] ">
        <div className="lg:w-[76%]">
          <CategoryAds />
          <div className="mt-4 ml-1">
            <div className="flex justify-between">
              Сортировать по:{" "}
              <span className="ml-2 text-[#5661CB] underline underline-offset-1 font-medium cursor-pointer">
                популярности
              </span>{" "}
              <AiOutlineDown className="mt-[6px] ml-2 cursor-pointer" />
            </div>
            <div></div>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {goodsList}
          </div>
        </div>
      </div>
    </section>
  );
}

export default CategoryDetails;
