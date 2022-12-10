import React from "react";

function DeliveryPage(props) {
  return (
    <section className="m-4 sm:mx-8 md:mx-20 lg:mx-24 xl:mt-8 xl:mx-[14rem] xxl:mx-[20rem]">
      <div>
        <h1 className="text-[20px] font-medium md:text-[22px] xl:text-[32px] xxl:text-[36px]">
          Доставка автотранспортом
        </h1>
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
      </div>
      <div className="mt-4">
        <h1 className="text-[20px] font-medium md:text-[22px] xl:text-[32px] xxl:text-[36px]">
          Доставка по Республике Татарстан
        </h1>
        <p className="mt-4 xl:text-[20px] xxl:text-[24px]">
          Компания Гермес осуществляет доставку материалов 7 дней в неделю по
          всей территории Российской Федерации. Мы совершаем прямые поставки
          продукции с заводов-производителей России и Европы, а также доставку
          товара с собственных складов на территории Казани.
        </p>
      </div>
      <div className="mt-4">
        <h1 className="text-[20px] font-medium md:text-[22px] xl:text-[32px] xxl:text-[36px]">
          Самовывоз
        </h1>
        <p className="mt-4 xl:text-[20px] xxl:text-[24px]">
          Компания Гермес осуществляет доставку материалов 7 дней в неделю по
          всей территории Российской Федерации.{" "}
        </p>
      </div>
      <div className="my-8">
        <img src="" alt="" />
      </div>
    </section>
  );
}

export default DeliveryPage;
