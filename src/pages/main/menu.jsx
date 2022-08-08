import React from "react";

function menu(props) {
  return (
    <div>
        {/* 320 */}
      <div className="mx-[7px] mt-4 flex justify-between bg-[#5661CB] px-3 py-3 rounded-lg">
        <div className="flex">
          <img alt="Vector1" />
          <p className="text-white ml-4">Каталог товаров</p>
        </div>
        <div>
          <img alt="Search" className="mt-1" />
        </div>
      </div>
      {/* 480 */}
      <div className="mx-[7px] mt-4 flex justify-between bg-[#5661CB] px-3 py-3 rounded-lg">
        <img alt="Vector1" />
        <p className="text-white ml-4">Каталог товаров</p>
        <img alt="Search" className="mt-1" />
      </div>
      {/* 768 */}
      <div>
        <div>
          <div className="mx-[7px] mt-4 flex justify-between bg-[#5661CB] px-3 rounded-lg">
            <div className="flex">
              <img alt="Vector1" className="py-3" />
              <div className="table">
                <span className="text-white ml-4 border-r-[1px] pl-4 w-[18rem] align-middle table-cell">
                  Каталог товаров
                </span>
              </div>
            </div>
            <div className="flex justify-between">
              <div className="table">
                <span className="text-white border-r-[1px] text-[14px] text-center w-[12rem] align-middle table-cell">
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
              <img alt="Search" className="mt-1 py-3 pl-10 pr-4" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default menu;
