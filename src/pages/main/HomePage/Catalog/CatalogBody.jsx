import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import rightarrow from "./images/rigtarrow.png";
import { SlBasket } from "react-icons/sl";
import { AiOutlinePercentage } from "react-icons/ai";
import { BsTruck, BsCalendarDate } from "react-icons/bs";
import { BiRuble } from "react-icons/bi";
import axios from "axios";
import { useDispatch } from "react-redux";
import { dataFetching, loadingEnd } from "../../../../redux/actions";

function CatalogBody(props) {
  const dispatch = useDispatch();
  const [category, setCategory] = useState([]);
  useEffect(() => {
    dispatch(dataFetching());
    axios({
      method: "get",
      url: `${process.env.REACT_APP_API_KEY}/home/categories`,
    }).then(function (response) {
      dispatch(loadingEnd());
      setCategory(response.data.object);
    });
    // eslint-disable-next-line
  }, []);

  if (category.length <= 0) {
    return <div></div>;
  }
  let categories = category.map((catalogName, index) => {
    const {name} = catalogName
    return (
      <Link
        key={index}
        to={`/catalog/${name}`}
        className="flex justify-between mt-2 cursor-pointer"
      >
        <p
          className={
            name === "Распродажа товаров"
              ? "text-[14px] text-red-600"
              : "text-[14px]"
          }
        >
          {name}
        </p>
        <img
          src={rightarrow}
          alt="arrow "
          className="w-[6px] h-[11px] mt-[7px] mr-[10px]"
        />
      </Link>
    );
  });

  return (
    <section className="pt-16 lg:pt-0">
      <div className="lg:flex lg:justify-between lg:ml-[12px] lg:mx-[18px] lg:pb-4 xxl:ml-[232px] xxl:mr-[266px]">
        <div className="hidden lg:grid lg:pl-[11px] ml-[9px] lg:w-[28%] shadow lg:py-4">
          <div className="">{categories}</div>
        </div>
        <div
          className="bg-catalogbodyxs sm:bg-catalogbodysm md:bg-catalogbodymd xl:bg-catalogbodylg
          w-[96%] h-full bg-cover bg-no-repeat ml-[7px] mt-[10px] rounded-md md:w-[98%] xl:flex xl:justify-end"
        >
          <div
            className={`rounded-md md:pl-[40px] ${
              window.innerWidth > 767
                ? "categorybody py-10 xl:hidden"
                : "bg-[#5D68CF] opacity-80"
            }`}
          >
            <p
              className="text-white text-[18px] font-bold text-center pt-[28.7px] sm:pt-[36px] sm:text-[22px]
            md:text-left md:text-[30px] md:pt-[46]"
            >
              Лако-красочные материалы
            </p>
            <p className="text-white text-[12px] text-center sm:text-[16px] sm:mt-[9px] md:text-left md:text-[20px]">
              Скидки 30% на немецкую продукцию
            </p>
            <p className="text-white text-[12px] text-center sm:text-[16px] md:text-left md:text-[20px]">
              Alpina на нашем сайте
            </p>
            <div className="flex justify-center pb-[39px] sm:mt-[16px] sm:pb-[52px] md:justify-start md:pb-[69]">
              <p
                className="text-white text-[12px] w-[120px] border-[1px] border-white text-center rounded
              sm:text-[14px] sm:w-[155px] sm:py-[8px] sm:px-[16px] md:text-[14px]"
              >
                Перейти в каталог
              </p>
            </div>
          </div>
          <div className="w-[40%] ml-[45rem] h-full bg-[#5D68CF] pl-10 text-white rounded-r-lg hidden xl:grid ">
            <p className="pt-[31px] text-[22px]">
              Кирпич облицовочный M95 <br /> Воткинский
            </p>
            <p className="text-[14px] font-light pt-[10px]">
              Кол-во на поддоне, шт. - 297
            </p>
            <p className="text-[14px] font-light pt-[3px]">Формат одинарный</p>
            <div className="text-[14px] font-light pt-[10px] ">
              <Link
                to="/delivery"
                className="underline underline-offset-1 cursor-pointer"
              >
                бесплатная доставка
              </Link>
              <Link
                to="/"
                className="underline underline-offset-1 cursor-pointer pl-[28px]"
              >
                в наличии
              </Link>
            </div>
            <p className="pt-[13px]">
              <span className="text-[26px]">4500</span>
              {"\u20BD "} / шт
            </p>
            <div className="flex justify-start pb-[53px] pt-[18px]">
              <Link
                to="/"
                className="bg-white text-black text-[14px] py-[8px] px-[19px] rounded"
              >
                Купить в 1 клик
              </Link>
              <Link
                to="/"
                className="border-white border-[1px] px-[17px] ml-2 rounded"
              >
                <SlBasket className="mt-2" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between text-[11px] ml-[9px] mt-[19px] sm:px-4 md:px-0 md:ml-8 lg:ml-8 lg:mr-6 lg:text-[14px] xl:mr-[2rem] xl:ml-[23rem] xxl:ml-[600px] xxl:mr-[280px]">
        <div className="flex">
          <BsTruck className="bg-[#9FA6EE1A] text-[#5661CB] text-[2rem] p-[4px] rounded-md mr-[6px]" />{" "}
          Доставка товара и аренда спецтехники
        </div>
        <div className="flex">
          <AiOutlinePercentage className="bg-[#9FA6EE1A] text-[#5661CB] text-[2rem] p-[4px] rounded-md mr-[6px]" />{" "}
          Скидки оптовикам и застройщикам
        </div>
        <div className="hidden md:flex">
          <BiRuble className="bg-[#9FA6EE1A] text-[#5661CB] text-[2rem] p-[4px] rounded-md mr-[6px] hidden md:grid" />{" "}
          Предлагаем лучшую цену
        </div>
        <div className="hidden md:flex">
          <BsCalendarDate className="bg-[#9FA6EE1A] text-[#5661CB] text-[2rem] p-[4px] rounded-md mr-[6px] hidden md:grid" />{" "}
          Работаем 7 дней в неделю
        </div>
      </div>
    </section>
  );
}

export default CatalogBody;
