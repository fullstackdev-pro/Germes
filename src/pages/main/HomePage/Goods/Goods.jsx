import React, { Fragment} from "react";
import { useDispatch, useSelector } from "react-redux";
import { SlBasket, SlStar } from "react-icons/sl";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { AiOutlineCheck } from "react-icons/ai";
import { Link } from "react-router-dom";
import { addToBacket } from "../../../../redux/actions";

function Goods(props) {
  const goodsArr = useSelector((state) => state.home);
  const backet = useSelector((state) => state.backedItems);
  const dispatch = useDispatch();
  // console.log(goodsArr);

  function toBacket(id, title, price, amount) {
    dispatch(addToBacket({ id, title, price, amount }));
  }
  // console.log(backet);

  let goodsList = goodsArr.map((data) => {
    if(data == null) return ''
    const { title, id, price, info, status } = data;
    let action = (
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

        <img
          src={require("../../../../img/goods/1.png")}
          className="p-4 md:mt-[30px] md:mx-[40px]"
          alt="goods"
        />

        <div className="text-[12px] font-medium mx-2 md:text-[16px]">
          <Link to={`/product/${id}`}>{title}</Link>
        </div>

        <p className="hidden md:grid md:text-[14px] md:font-light md:px-2 md:mt-[8px]">
          {info}
        </p>

        <div className="md:flex md:justify-between md:mt-[10px]">
          <Link
            to="/delivery"
            className="px-2 underline underline-offset-1 text-[11px] text-[#7D7D7D] font-light cursor-pointer md:text-[12px] "
          >
            бесплатная доставка
          </Link>
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
            className={`hidden md:flex px-2 mt-[9px] md:mt-[11px] text-[12px] md:text-[18px] ${
              status === "Лучшая цена" ? "line-through" : "hidden"
            }`}
          >
            <span className="font-medium">{price + 200}</span>
            {" \u20BD "} / шт
          </div>
        </div>
        <div className="flex">
          <Link
            to={`/product/${id}`}
            className="mx-2 py-[8px] mt-[10px] w-[95%] bg-[#5661CB] text-white rounded-md cursor-pointer md:w-[70%] hover:bg-[#219653] text-center"
          >
            Купить в 1 клик
          </Link>
          <button
            className="hidden md:grid px-4 pt-[0.7rem] h-10 mt-[0.7rem] text-[#5661CB] border-[1px] border-[#5661CB] rounded-md cursor-pointer"
            onClick={() => {
              toBacket(id, title, price, 1);
            }}
          >
            <SlBasket className="" />
            <AiOutlineCheck className="hidden " />
          </button>
        </div>
      </div>
    );

    return action;
  });

  return (
    <Fragment>
      <div className="mt-[20px] md:flex md:justify-between md:px-[20px] xxl:ml-[232px] xxl:mr-[266px]">
        <h1 className="text-[18px] text-center font-medium md:text-left px-[16px] md:text-[20px] lg:text-[26px] xl:text-[36px] ">
          Спецпредложения
        </h1>
        <p className="hidden lg:flex text-[14px] text-red-600 font-medium mt-1 cursor-pointer xl:text-[16px]">
          Перейти в раздел скидок{" "}
          <HiOutlineArrowNarrowRight className="mt-1 ml-2" />
        </p>
      </div>
      <div className="px-[12px] mt-[22px] grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 lg:ml-[20px] lg:mr-[10px] xxl:ml-[232px] xxl:mr-[266px]">
        {goodsList}
      </div>
    </Fragment>
  );
}

export default Goods;
