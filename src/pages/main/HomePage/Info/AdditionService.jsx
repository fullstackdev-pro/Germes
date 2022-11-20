import React from "react";
import { BsTruck, BsBricks } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineToday } from "react-icons/md";

function AdditionService(props) {
  return (
    <section className="mt-[45px] px-[20px] xxl:ml-[232px] xxl:mr-[266px]">
      <h2 className="text-[20px] font-medium">Дополнительные услуги</h2>
      <div className="hidden mt-[22px] md:grid gap-4 grid-cols-3 xl:grid-cols-4">
        <div className="text-center shadow-md rounded-xl hover:bg-[#5661CB] hover:text-white lg:text-left cursor-pointer">
          <BsTruck className="p-2 m-1 mt-[21px] mx-auto w-[25%] h-[25%] rounded-full bg-[#9FA6EE1A] lg:ml-[38px] lg:w-[18%] lg:h-[27%]" />
          <p className="text-[15px] font-bold mt-[10px] lg:ml-[38px] ">
            Доставка стройматериалов{" "}
          </p>
          <p className="text-[13px] font-normal mt-[7px] mb-[17px] mx-[7px] lg:ml-[38px]">
            Комплекс услуг по доставке товара на Ваш строительный объект
          </p>
        </div>
        <div className="text-center shadow-md rounded-xl hover:bg-[#5661CB] hover:text-white lg:text-left cursor-pointer">
          <BsBricks className="p-2 m-1 mt-[21px] mx-auto w-[25%] h-[50px] rounded-full bg-[#9FA6EE1A] lg:ml-[38px] lg:w-[18%] lg:h-[27%]" />
          <p className="text-[15px] font-bold mt-[10px] lg:ml-[38px]">
            Кладка кирпича{" "}
          </p>
          <p className="text-[13px] font-normal mt-[7px] mb-[17px] mx-[7px] lg:ml-[38px]">
            Кладка кирпича и блоков Pototherm
          </p>
        </div>
        <div className="text-center shadow-md rounded-xl hover:bg-[#5661CB] hover:text-white lg:text-left cursor-pointer">
          <FaRegUser className="p-2 m-1 mt-[21px] mx-auto w-[25%] h-[50px] rounded-full bg-[#9FA6EE1A] lg:ml-[38px] lg:w-[18%] lg:h-[27%]" />
          <p className="text-[15px] font-bold mt-[10px] lg:ml-[38px]">
            Шеф-монтаж{" "}
          </p>
          <p className="text-[13px] font-normal mt-[7px] mb-[17px] mx-[7px] lg:ml-[38px]">
            Демонстрация секретов успешного строительства
          </p>
        </div>
        <div className="hidden xl:block text-center shadow-md rounded-xl hover:bg-[#5661CB] hover:text-white lg:text-left cursor-pointer">
          <MdOutlineToday className="p-2 m-1 mt-[21px] mx-auto w-[25%] h-[50px] rounded-full bg-[#9FA6EE1A] lg:ml-[38px] lg:w-[18%] lg:h-[27%]" />
          <p className="text-[15px] font-bold mt-[10px] lg:ml-[38px]">
            Сезонное хранение{" "}
          </p>
          <p className="text-[13px] font-normal mt-[7px] mb-[17px] mx-[7px] lg:ml-[38px]">
            Хранение стройматериалов приобретенных зимой
          </p>
        </div>
      </div>
    </section>
  );
}

export default AdditionService;
