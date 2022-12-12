import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "./images/germes_logo.png";
import logo1440 from "./images/germes_logo1440.png";
import star from "./images/Star.png";
import card from "./images/Card.png";
import phone from "./images/Group 70.png";
import vector from "./images/Vector.png";
import close from "./images/symbol-+.png";
import { useSelector } from "react-redux";

function HeaderPage(props) {
  const [menu, setMenu] = useState(false);
  let backedItems = useSelector((state) => state.backedItems);

  return (
    <section className="h-full w-full bg-white overflow-x-hidden mb-16">
      <div className="lg:hidden block ">
        <div className="flex justify-between pt-[14px] pl-3 mr-3 fixed bg-white w-full">
          <Link to="/" className="w-[50%]">
            <img src={logo} alt="logo" />
          </Link>
          <div className="flex mt-[2px]">
            <p className="w-[13rem] text-[20px] hidden md:flex">
              8 (843) 203-93-43
            </p>
            <img
              src={phone}
              alt="phone"
              className="md:hidden p-2 cursor-pointer"
            />
            <Link to="/backet" className="relative">
              <span className="absolute right-1.5 text-[#5661CB] text-[12px]">
                {backedItems.length}
              </span>
              <img
                src={card}
                alt="card"
                className="mx-4 mt-3 cursor-pointer lg:hidden"
              />
            </Link>
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
              } p-[20px] right-1 rounded absolute z-[500] bg-white w-[100vw] h-[100vh] overflow-y-auto`}
            >
              <Link
                to="/"
                className="inline-block py-2 font-normal cursor-pointer hover:bg-slate-100 w-full rounded mt-[20px]"
              >
                Акции
              </Link>{" "}
              <br />
              <Link
                to="/services"
                className="inline-block py-2 font-normal cursor-pointer hover:bg-slate-100 w-full rounded mt-[13px]"
              >
                Услуги
              </Link>{" "}
              <br />
              <Link
                to="/delivery"
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

      <div className="hidden lg:flex xxl:ml-[232px] xxl:mr-[248px] border-b-[1px] py-3">
        <div className="flex justify-between px-[22px] pt-2 w-full top-0 fixed bg-white z-[100]">
          <Link to="/">
            <img src={logo} alt="logo" className="xl:hidden" />
            <img src={logo1440} alt="logo" className="lg:hidden xl:flex" />
          </Link>
          <div className="flex justify-between mt-3 w-[26rem] xl:w-[30rem]">
            <Link
              to="/services"
              className="px-6 xl:text-[18px] xl:px-10 cursor-pointer"
            >
              Услуги
            </Link>
            <Link
              to="/delivery"
              className="px-6 xl:text-[18px] xl:px-10 cursor-pointer"
            >
              Доставка
            </Link>
            <Link
              to="/payCash"
              className="px-6 xl:text-[18px] xl:px-10 cursor-pointer"
            >
              Оплата
            </Link>
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
            />
            <Link to="/backet" className="relative cursor-pointer">
              <span className="absolute right-1.5 text-[#5661CB] text-[12px]">
                {backedItems.length}
              </span>
              <img src={card} alt="card" className="p-1 mx-2 ml-4 xl:ml-6" />
            </Link>
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
