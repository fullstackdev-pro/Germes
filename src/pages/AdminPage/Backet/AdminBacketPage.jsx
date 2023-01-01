import React from "react";
import { AiOutlineFileAdd } from "react-icons/ai";
import { BiCategory } from "react-icons/bi";
import { FaUsers } from "react-icons/fa";
import { BsShopWindow } from "react-icons/bs";
import { Link } from "react-router-dom";

function AdminBacketPage(props) {
  return (
    <div className="mt-16">
      <div className="flex justify-between px-[10px] md:px-[20px] xxl:ml-[232px] xxl:mr-[266px] py-2">
        <Link to="/adminPage/goods">
          <AiOutlineFileAdd className="text-[2rem] text-[#5661CB] cursor-pointer" />
        </Link>
        <Link to="/adminPage/category">
          <BiCategory className="text-[2rem] text-[#5661CB] cursor-pointer" />
        </Link>
        <Link to="/adminPage/users">
          <FaUsers className="text-[2rem] text-[#5661CB] cursor-pointer" />
        </Link>
        <Link to="/adminPage/backet">
          <BsShopWindow className="text-[2rem] text-[#5661CB] cursor-pointer" />
        </Link>
      </div>
      <div>Nothing Found</div>
    </div>
  );
}

export default AdminBacketPage;
