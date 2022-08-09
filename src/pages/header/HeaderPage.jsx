import React from "react";
import { Link } from "react-router-dom";
import logo from "./images/germes_logo.png";
import logo1440 from "./images/germes_logo1440.png";
import star from "./images/Star.png";
import card from "./images/Card.png";
import phone from "./images/Group 70.png";
import vector from "./images/Vector.png";

function HeaderPage(props) {
  return (
    <section>
      <div className="lg:hidden block">
        <div className="flex justify-between mt-[14px] mx-5">
          <div>
            <img src={logo} alt="logo" />
          </div>
          <div className="flex mt-[2px]">
            <p className="w-[13rem] text-[20px] hidden md:flex">
              8 (843) 203-93-43
            </p>
            <img src={phone} alt="phone" className="mr-8 md:hidden" />
            <img src={vector} alt="Vector" />
          </div>
        </div>
      </div>
      <div className="hidden lg:flex xxl:ml-[232px] xxl:mr-[248px] border-b-[1px] pb-3">
        <div className="flex justify-between mt-[24px] mx-[22px] w-full">
          <div>
            <img src={logo} alt="logo" className="xl:hidden" />
            <img src={logo1440} alt="logo" className="lg:hidden xl:flex" />
          </div>
          <div className="flex justify-between mt-3 w-[26rem] xl:w-[30rem]">
            <p className="px-6 xl:text-[18px] xl:px-10">Услуги</p>
            <p className="px-6 xl:text-[18px] xl:px-10">Доставка</p>
            <p className="px-6 xl:text-[18px] xl:px-10">Оплата</p>
            <p className="px-6 xl:text-[18px] xl:px-10 lg:hidden xl:flex">
              Проекты
            </p>
            <p className="px-6 xl:text-[18px] xl:px-10 xl:hidden">Контакты</p>
          </div>
          <div className="flex justify-between py-4">
            <img src={star} alt="star" className="mx-2 xl:mx-6"></img>
            <img src={card} alt="card" className="mx-2 xl:ml-6"></img>
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
