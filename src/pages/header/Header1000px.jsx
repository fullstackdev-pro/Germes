import React from "react";
import { Link } from "react-router-dom";
import logo from "./images/germes_logo.png";
import star from "./images/Star.png"
import card from "./images/Card.png"

function Header1000px(props) {
  return (
    <section>
      <div className="flex justify-between mt-[14px] mx-5">
        <div>
          <img src={logo} alt="logo" />
        </div>
        <div className="flex justify-between w-[26rem] mt-3">
          <p className="px-6">Услуги</p>
          <p className="px-6">Доставка</p>
          <p className="px-6">Оплата</p>
          <p className="px-6">Контакты</p>
        </div>
        <div className="flex justify-between py-4">
          <img src={star} alt="star" className="mx-2"></img>
          <img src={card} alt="card" className="mx-2"></img>
        </div>
        <div className="">
          <p className="w-[10.5rem] text-[20px]">8 (843) 203-93-43</p>
          <Link to='/' className="text-[#5661CB] text-[14px] underline">заказать обратный звонок</Link>
        </div>
      </div>
      
    </section>
  );
}

export default Header1000px;
