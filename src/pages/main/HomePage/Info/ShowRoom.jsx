import React from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

function ShowRoom(props) {
  return (
    <div className="mt-[36px] px-[20px] md:px-[16px] xxl:ml-[232px] xxl:mr-[266px] ">
      <div className="lg:flex lg:justify-between">
        <p className="text-center text-[18px] font-medium md:text-left md:text-[20px] md:ml-4 lg:text-[26px] xl:text-[36px]">
          Наш шоурум
        </p>
        <p className="hidden lg:flex mt-4 text-[16px] font-medium text-[#5661CB]">
          Перейти в контакты {" "}
          <HiOutlineArrowNarrowRight className="mt-1 ml-2" />
        </p>
      </div>
      <div className="mt-[20px] cursor-pointer grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
        <img src={require("../../../../img/showroom/1.png")} alt="showroom" />
        <img src={require("../../../../img/showroom/2.png")} alt="showroom" />
        <img src={require("../../../../img/showroom/3.png")} alt="showroom" className="hidden md:flex"/>
        <img src={require("../../../../img/showroom/2.png")} alt="showroom" className="hidden xl:flex"/>
      </div>
    </div>
  );
}

export default ShowRoom;
