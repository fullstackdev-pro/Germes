import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "./images/germes_logo.png";
import logo1440 from "./images/germes_logo1440.png";
import star from "./images/Star.png";
import card from "./images/Card.png";
import phone from "./images/Group 70.png";
import vector from "./images/Vector.png";
import close from "./images/symbol-+.png";
import Searchb from "../main/HomePage/Catalog/images/Searchb.png";

function HeaderPage(props) {
  const [menu, setMenu] = useState(false);
  
  return (
    <section className="sticky top-0 w-full bg-white z-[9999]">
      <div className="lg:hidden block ">
        <div className="flex justify-between pt-[14px] mx-5">
          <div>
            <img src={logo} alt="logo" />
          </div>
          <div className="flex mt-[2px] ">
            <p className="w-[13rem] text-[20px] hidden md:flex">
              8 (843) 203-93-43
            </p>
            <img src={phone} alt="phone" className="mr-2 md:hidden p-2" />
            <img
              src={menu ? close : vector}
              alt="Vector"
              className={`${menu ? "p-1" : "p-2"} `}
              onClick={() => {
                setMenu((prew) => !prew);
              }}
            /> 
            
            <div
              className={`${
                menu ? "block" : "hidden"
              } top-14 p-[20px] right-1 rounded absolute z-2 bg-white w-[100vw] h-[100vh]`}
            >
              <div className="relative flex">
                <input
                  type="text"
                  placeholder="Введите название товара"
                  className="w-full h-[40px] border-[1px] rounded pl-16 text-[14px]"
                />
                <img
                  src={Searchb}
                  alt="Search"
                  className="absolute left-4 top-[0.7rem]"
                />
              </div>
              <Link
                to="/"
                className="inline-block py-2 font-normal cursor-pointer hover:bg-slate-100 w-full rounded mt-[20px]"
              >
                Акции
              </Link>{" "}
              <br />
              <Link
                to="/"
                className="inline-block py-2 font-normal cursor-pointer hover:bg-slate-100 w-full rounded mt-[13px]"
              >
                Услуги
              </Link>{" "}
              <br />
              <Link
                to="/"
                className="inline-block py-2 font-normal cursor-pointer hover:bg-slate-100 w-full rounded mt-[13px]"
              >
                Доставка
              </Link>{" "}
              <br />
              <Link
                to="/"
                className="inline-block py-2 font-normal cursor-pointer hover:bg-slate-100 w-full rounded mt-[13px]"
              >
                Оплата
              </Link>{" "}
              <br />
              <Link
                to="/"
                className="inline-block py-2 font-normal cursor-pointer hover:bg-slate-100 w-full rounded mt-[13px]"
              >
                Проекты
              </Link>{" "}
              <br />
              <Link
                to="/"
                className="inline-block py-2 font-normal cursor-pointer hover:bg-slate-100 w-full rounded mt-[13px]"
              >
                О компании
              </Link>{" "}
              <br />
              <Link
                to="/"
                className="inline-block py-2 font-normal cursor-pointer hover:bg-slate-100 w-full rounded mt-[13px]"
              >
                Контакты
              </Link>{" "}
              <br />
              <p className="bg-[#5661CB] mt-[20px] text-white text-[16px] text-center w-full rounded py-2 ">
                Позвонить
              </p>
              <p className="border-[#5661CB] border-[1px] mt-[20px] text-[#5661CB] text-[16px] text-center w-full rounded py-2 ">
                Оптовым клиентам
              </p>
            </div>
            
          </div>
        </div>
      </div>
      <div className="hidden lg:flex xxl:ml-[232px] xxl:mr-[248px] border-b-[1px] pb-3">
        <div className="flex justify-between mt-[14px] mx-[22px] w-full">
          <div>
            <img src={logo} alt="logo" className="xl:hidden" />
            <img src={logo1440} alt="logo" className="lg:hidden xl:flex" />
          </div>
          <div className="flex justify-between mt-3 w-[26rem] xl:w-[30rem]">
            <p className="px-6 xl:text-[18px] xl:px-10 cursor-pointer">
              Услуги
            </p>
            <p className="px-6 xl:text-[18px] xl:px-10 cursor-pointer">
              Доставка
            </p>
            <p className="px-6 xl:text-[18px] xl:px-10 cursor-pointer">
              Оплата
            </p>
            <p className="px-6 xl:text-[18px] xl:px-10 lg:hidden xl:flex cursor-pointer">
              Проекты
            </p>
            <p className="px-6 xl:text-[18px] xl:px-10 xl:hidden cursor-pointer">
              Контакты
            </p>
          </div>
          <div className="flex justify-between h-5 mt-[0.88rem] xl:h-6 xl:mt-[0.9rem]">
            <img
              src={star}
              alt="star"
              className="mx-2 xl:mx-6 cursor-pointer"
            ></img>
            <img
              src={card}
              alt="card"
              className="mx-2 ml-4 xl:ml-6 cursor-pointer"
            ></img>
          </div>
          <div className="">
            <p className="w-[10.5rem] text-[20px] xl:text-[24px] xl:w-[13rem]">
              8 (843) 203-93-43
            </p>
            <Link
              to="/"
              className="text-[#5661CB] underline text-[14px] xl:text-[16px]"
            >
              заказать обратный звонок
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeaderPage;
