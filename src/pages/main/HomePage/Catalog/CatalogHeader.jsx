import React, { useEffect, useState } from "react";
import Vector1 from "./images/Vector (1).png";
import Search from "./images/Search.png";
import Searchb from "./images/Searchb.png";
import rightarrow from "./images/rigtarrow.png";
import axios from "axios";
import { Link } from "react-router-dom";
import { dataFetching, loadingEnd } from "../../../../redux/actions";
import { useDispatch } from "react-redux";

function CatalogHeader(props) {
  const dispatch = useDispatch();
  const [catalog, setCatalog] = useState(false);
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
  let categories = category.map((catalogName, id) => {
    const {name} = catalogName
    return (
      <Link
        key={id}
        to={`/catalog/${name}`}
        className="flex justify-between mt-3 cursor-pointer"
        onClick={() => {
          setCatalog(false);
        }}
      >
        <p
          className={
            catalogName === "Распродажа товаров"
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
    <section>
      {/* small */}
      <div className="mt-[17px] ml-[12px] md:ml-2.6 bg-[#5661CB] px-3 rounded-lg md:flex md:justify-between lg:hidden relative w-[94%] sm:w-[95%] md:w-[97%] z-[5]">
        <div className="flex justify-between mt-16">
          <img
            src={Vector1}
            alt="Vector1"
            className="py-3"
            onClick={() => {
              setCatalog((prew) => !prew);
            }}
          />
          <div className="table xs:absolute xs:left-8 xs:top-2.5 sm:relative sm:left-0 sm:top-0">
            <span className="text-white ml-4 pl-4 md:w-[18rem] align-middle table-cell">
              Каталог товаров
            </span>
          </div>
          <img
            src={Search}
            alt="Search"
            className="mt-[0.8rem] mr-1 h-[50%] md:hidden"
          />
        </div>
        <div
          className={`${
            catalog ? "fixed" : "hidden"
          } top-30 p-[20px] left-0 rounded bg-white w-[100vw] h-[100vh]`}
        >
          {categories}
        </div>
        <div className="hidden md:flex md:justify-between">
          <div className="table">
            <span className="text-white border-x-[1px] text-[14px] text-center w-[12rem] align-middle table-cell">
              Акции
            </span>
          </div>
          <div className="table">
            <span className="text-white border-r-[1px] text-[14px] text-center w-[12rem] align-middle table-cell">
              О компании
            </span>
          </div>
          <div className="table">
            <span className="text-white border-r-[1px] text-[14px] text-center w-[12rem] align-middle table-cell">
              Контакты
            </span>
          </div>
          <img src={Search} alt="Search" className="mt-1 py-3 pl-10 pr-4" />
        </div>
      </div>

      <div className="hidden lg:flex lg:justify-start mt-4 xxl:ml-[232px] xxl:mr-[248px] lg:ml-[12px] ">
        <div className="flex justify-start bg-[#5661CB] px-4 mx-2 w-[29%] rounded-md ">
          <img src={Vector1} alt="Vector1" className="py-3 " />
          <div className="table">
            <span className="text-white ml-4 pl-4 align-middle table-cell">
              Каталог
            </span>
          </div>
        </div>
        <div className="flex justify-between ml-[30px] mr-[19px] w-full pt-2">
          <p className="ml-4 text-[14px] font-medium text-[red] mt-[0.6rem] cursor-pointer">
            АКЦИИ
          </p>
          <div className="relative flex">
            <input
              type="text"
              placeholder="Введите название товара"
              className="w-[250px] h-[40px] border-[1px] rounded pl-2 text-[12px]"
            />
            <img
              src={Searchb}
              alt="Search"
              className="absolute right-4 top-[0.7rem]"
            />
          </div>
          <p className="mt-[0.6rem] text-[14px] font-medium cursor-pointer">
            О КОМПАНИИ
          </p>
          <p className="mt-[0.6rem] text-[14px] font-medium cursor-pointer">
            КОНТАКТЫ
          </p>
          <p className="mt-[0.2rem] mb-[0.4rem] pt-[0.35rem] px-[27px] text-[14px] text-white bg-[#5661CB] rounded cursor-pointer">
            ОПТОВЫЙ ЗАКАЗ
          </p>
        </div>
      </div>
    </section>
  );
}

export default CatalogHeader;
