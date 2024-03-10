import React from "react";
import location from "./images/Vector1.png";
import whatsapp from "./images/logos_whatsapp.png";
import phone from "./images/Vector.png";
import gphone from "./images/Vectorphone.png";
import telegram from "./images/logos_telegram.png";
import visa from "./images/Vectorvisa.png";
import master from "./images/logos_mastercard.png";
import { Link } from "react-router-dom";

function FooterPage(props) {
  return (
    <section className="bg-[#F7F7F7] bottom-0">
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
        <div
          className="text-[10px] text-left mt-3 border-t-2 pl-[21px] pr-[28px] pb-5
        sm:pl-[21px] sm:pr-[20px] sm:pb-[41px] md:pb-2 md:mt-[18px]"
        >
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
      <div className="hidden lg:block xxl:ml-[270px] xxl:mr-[271px]">
        <div className="flex justify-between mx-[19px]">
          <div>
            <p className="mb-[22px] mt-[41px] text-[24px] font-medium">
              Организация
            </p>
            <Link to="/">О компании</Link>
            <br />
            <Link to="/services">Услуги</Link> <br />
            <Link to="/">Вакансии</Link>
          </div>
          <div>
            <p className="mb-[22px] mt-[41px] text-[24px] font-medium">
              Как купить
            </p>
            <Link to="/delivery">Доставка</Link> <br />
            <Link to="/psyCash">Оплата</Link> <br />
            <Link to="/">Контакты</Link>
          </div>
          <div>
            <p className="mb-[22px] mt-[41px] text-[24px] font-medium">
              Мы на связи
            </p>
            <p>+00(0000) 000-00-00</p>
            <p>info@td-germes.ru</p>
            <div className="flex">
              <img src={gphone} alt="phone" />
              <img src={telegram} alt="telegram" className="ml-2" />
            </div>
          </div>
          <div>
            <p className="mb-[22px] mt-[41px] text-[24px] font-medium">
              Наш адрес
            </p>
            <p>Казань</p>
            <p>ул.Сары Садыковой 30, 2 этаж</p>
            <p>
              Пн - Пт c 8:30 до 17:30 <br />
              Суббота с 9:00 до 14:00
            </p>
          </div>
          <div className="xl:table hidden">
            <div className="align-middle table-cell">
              <div className=" text-[18px] text-white bg-[#5661CB] py-[5px] px-[35px] rounded-md">
                Оптовый заказ
              </div>
            </div>
          </div>
        </div>
        <div className="text-[14px] text-left mt-6 pb-4 px-[20px] border-t-2 flex justify-between">
          <div>
            <p className="mt-3">© 2012 — 2020, ООО «ТК «Гермес»</p>
            <p>
              Сайт www.td-germes.ru носит исключительно информационный характер
              и ни при каких <br className="xl:hidden" /> условиях не является
              публичной офертой.
            </p>
            <p className="hidden xl:flex">
              Для получения информации о стоимости товаров, пожалуйста,
              обращайтесь в отдел продаж компании Гермес.
            </p>
          </div>
          <div className="flex pt-6 pb-1 xl: mr-8">
            <img src={visa} alt="visa" className="mr-8" />
            <img src={master} alt="master card" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default FooterPage;
