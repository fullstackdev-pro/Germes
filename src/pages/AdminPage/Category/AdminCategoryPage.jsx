import React, { useState } from "react";
import { AiOutlineFileAdd, AiOutlineDelete } from "react-icons/ai";
import { BiCategory } from "react-icons/bi";
import { FaUsers } from "react-icons/fa";
import { BsShopWindow } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { categoryFetched } from "../../../redux/actions";
import axios from "axios";

function AdminCategoryPage(props) {
  const category = useSelector((data) => data.category);
  const [categoryName, setCategoryName] = useState("");

  function handleChangeCategory(e) {
    setCategoryName((prew) => (prew = e.target.value));
  }

  function addCategory() {
    axios({
      method: "post",
      url: `${process.env.REACT_APP_API_KEY}/admin/category`,
      data: { name: categoryName },
    }).then((response) => {
      console.log(response);
      categoryFetched(response.data.object);
      setCategoryName("");
    });
  }

  function deleteCategory(name) {
    axios({
      method: "delete",
      url: `${process.env.REACT_APP_API_KEY}/admin/category/${name}`,
    }).then((response) => {
      console.log(response);
    });
  }

  let categories = category.map((catalogName) => {
    const { name } = catalogName;
    return (
      <div className="flex justify-between ml-1" key={name}>
        <p
          className={
            name === "Распродажа товаров"
              ? "text-[16px] mt-2 text-red-600"
              : "text-[16px] mt-2"
          }
        >
          {name}
        </p>
        <AiOutlineDelete
          className="text-[1.1rem] text-red-600 mt-2 cursor-pointer mr-2"
          onClick={() => {
            deleteCategory(name);
          }}
        />
      </div>
    );
  });

  return (
    <div className="mt-16 mb-4 px-[10px] md:px-[20px] xxl:ml-[232px] xxl:mr-[266px]">
      <div className="flex justify-between  py-2">
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
      <div className="flex mt-2">
        <input
          type="text"
          placeholder="Category name"
          className="w-full mr-4 py-1 px-4 border-[1px] mt-1 rounded"
          value={categoryName}
          onChange={handleChangeCategory}
        />
        <button
          className="border-[1px] px-6 rounded bg-green-600 text-white"
          id="addCategory"
          onClick={() => {
            addCategory();
          }}
        >
          Add
        </button>
      </div>
      <div>{categories}</div>
    </div>
  );
}

export default AdminCategoryPage;
