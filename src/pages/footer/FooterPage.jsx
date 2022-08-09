import React from "react";
import location from "./images/Vector1.png";
import whatsapp from "./images/logos_whatsapp.png";
import phone from "./images/Vector.png";

function FooterPage(props) {
  return (
    <section className="bg-[#F7F7F7]">
      <div className="lg:hidden block text-center">
        <div className="sm:mx-[80px] md:mx-[220px]">
          <div className="flex justify-between underline mx-[38px] text-[14px] font-medium pt-[23px]">
            <p>8 (843) 203-93-43</p>
            <p>info@td-germes.ru</p>
          </div>
          <div className="mt-[21px] flex justify-center">
            <img src={location} alt="location" />
          </div>
          <p className="font-medium text-[14px]">Казань</p>
          <p className="underline text-[14px]">ул.Сары Садыковой 30, 2 этаж</p>
          <div className="mt-[16px] flex justify-center">
            <img src={whatsapp} alt="whatsapp" className="pr-2" />
            <p className="text-[12px] text-[#828282]">- задайте вопрос</p>
          </div>
          <div className="flex justify-between mx-[21px] border-[#5661CB] border-[1px] rounded-sm px-[35px] py-1 mt-[16px]">
            <img src={phone} alt="phone" className="my-1" />
            <p className="text-[14px]">Заказать обратный звонок</p>
          </div>
        </div>
        <div className="text-[10px] text-left mt-3 border-t-2 pl-[21px] pr-[28px] pb-5
        sm:pl-[21px] sm:pr-[20px] sm:pb-[41px] md:pb-2 md:mt-[18px]">
          <p className="mt-3">© 2012 — 2020, ООО «ТК «Гермес»</p>
          <p>
            Сайт www.td-germes.ru носит исключительно информационный характер и
            ни при каких условиях не является публичной офертой.
          </p>
          <p>
            Для получения информации о стоимости товаров, пожалуйста,
            обращайтесь в отдел продаж компании Гермес.
          </p>
        </div>
      </div>
      <div className="hidden lg:flex xxl:ml-[232px] xxl:mr-[248px]"></div>
    </section>
  );
}

export default FooterPage;
