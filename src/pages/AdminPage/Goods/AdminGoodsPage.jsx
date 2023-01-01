import React, { useState } from "react";
import { AiOutlineFileAdd } from "react-icons/ai";
import { BiCategory } from "react-icons/bi";
import { FaUsers } from "react-icons/fa";
import { BsShopWindow } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import { dataFetched } from "../../../redux/actions";
import { useDispatch } from "react-redux";

function AdminGoodsPage(props) {
  const dispatch = useDispatch();
  const [have, setHave] = useState("");
  const [data, setData] = useState("");
  const [idCode, setIdCode] = useState("");
  const [title, setTitle] = useState("");
  const [incomePrice, setIncomePrice] = useState("");
  const [salePrice, setSalePrice] = useState("");
  const [amount, setAmount] = useState("");
  const [status, setStatus] = useState("");
  const [category, setCategory] = useState("");
  const [info, setInfo] = useState("");
  const [message, setMessage] = useState("");
  const goods = useSelector((data) => data.data.item);

  function handleChangeCode(e) {
    let idCode = parseInt(e.target.value);
    setIdCode((prew) => (prew = idCode));
  }

  let oneData;
  const handleKeyDown = (event) => {
    if (event.key === "Enter" || event.key === "Tab") {
      if (goods) {
        //eslint-disable-next-line
        goods.filter((goods) => {
          if (goods.idCode === idCode) {
            setData((prew) => (prew = goods));
            setHave((prew) => (prew = true));
            oneData = goods;
          } else {
            setHave((prew) => (prew = false));
          }
        });
      }
    }

    if (oneData) {
      setTitle((prew) => (prew = oneData.title));
      setIncomePrice((prew) => (prew = oneData.incomePrice));
      setSalePrice((prew) => (prew = oneData.salePrice));
      setAmount((prew) => (prew = oneData.remainder));
      setStatus((prew) => (prew = oneData.status));
      setCategory((prew) => (prew = oneData.category));
      setInfo((prew) => (prew = oneData.info));
    } else {
      setTitle("");
      setIncomePrice("");
      setSalePrice("");
      setAmount("");
      setStatus("");
      setCategory("");
      setInfo("");
    }
  };

  function handleChangeTitle(e) {
    setTitle((prew) => (prew = e.target.value));
  }

  function handleChangeIncomePrice(e) {
    setIncomePrice((prew) => (prew = parseInt(e.target.value)));
  }

  function handleChangeSalePrice(e) {
    setSalePrice((prew) => (prew = parseInt(e.target.value)));
  }

  function handleChangeAmount(e) {
    setAmount((prew) => (prew = parseInt(e.target.value)));
  }

  function handleChangeStatus(e) {
    setStatus((prew) => (prew = e.target.value));
  }

  function handleChangeCategory(e) {
    setCategory((prew) => (prew = e.target.value));
  }

  function handleChangeInfo(e) {
    setInfo((prew) => (prew = e.target.value));
  }

  function allZero() {
    setIdCode("");
    setTitle("");
    setIncomePrice("");
    setSalePrice("");
    setAmount("");
    setStatus("");
    setCategory("");
    setInfo("");
  }

  function yuborish() {
    setMessage((prew) => (prew = ""));
    if (have) {
      //put metodi
      axios({
        method: "put",
        url: `${process.env.REACT_APP_API_KEY}/admin/update/product/${idCode}`,
        data: {
          idCode: idCode,
          title: title ? title : data.title,
          incomePrice: parseInt(incomePrice ? incomePrice : data.incomePrice),
          salePrice: parseInt(salePrice ? salePrice : data.salePrice),
          remainder: parseInt(amount ? amount : data.remainder),
          status: status ? status : data.status,
          category: category ? category : data.category,
          info: info ? info : data.info,
        },
      })
        .then((response) => {
          console.log(response.data);
          setMessage((prew) => (prew = response));
          dispatch(dataFetched(response.data.goods));
          allZero();
        })
        .catch((error) => {
          setMessage((prew) => (prew = error));
        });
    } else {
      //post metodi
      axios({
        method: "post",
        url: `${process.env.REACT_APP_API_KEY}/admin/product`,
        data: {
          idCode: idCode,
          title: title,
          incomePrice: parseInt(incomePrice),
          salePrice: parseInt(salePrice),
          remainder: parseInt(amount),
          status: String(status),
          category: String(category),
          info: String(info),
        },
      })
        .then((response) => {
          setMessage((prew) => (prew = response));
          dispatch(dataFetched(response.data.goodsRes));
          allZero();
        })
        .catch((error) => {
          setMessage((prew) => (prew = error));
        });
    }
  }

  return (
    <div className="mt-16 px-[10px] md:px-[20px] xxl:ml-[232px] xxl:mr-[266px] py-2">
      <div className="flex justify-between">
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
      <div className="mt-4">
        <input
          id="idCode"
          type="number"
          placeholder="Shtrix Kod"
          required
          className="border-[1px] w-full p-1 rounded px-4"
          value={idCode}
          onChange={handleChangeCode}
          onKeyDown={handleKeyDown}
        />
        <input
          type="text"
          id="title"
          placeholder="Nomi"
          required
          className="border-[1px] w-full p-1 rounded px-4 mt-2"
          value={title}
          onChange={handleChangeTitle}
        />
        <input
          type="number"
          id="incomePrice"
          placeholder="Kelish narxi"
          required
          className="border-[1px] w-full p-1 rounded px-4 mt-2"
          min="0"
          value={incomePrice}
          onChange={handleChangeIncomePrice}
        />
        <input
          type="number"
          id="foiz"
          placeholder="Foiz"
          required
          className="border-[1px] w-full p-1 rounded px-4 mt-2"
          min="0"
          value={
            incomePrice ? ((salePrice - incomePrice) * 100) / incomePrice : ""
          }
        />
        <input
          type="number"
          id="salePrice"
          placeholder="Sotilish narxi"
          required
          className="border-[1px] w-full p-1 rounded px-4 mt-2"
          min="0"
          value={salePrice}
          onChange={handleChangeSalePrice}
        />
        <input
          type="number"
          id="amount"
          placeholder="Maxsulot soni"
          required
          className="border-[1px] w-full p-1 rounded px-4 mt-2"
          value={amount}
          onChange={handleChangeAmount}
        />
        <input
          type="text"
          id="status"
          placeholder="Status - ixtiyoriy"
          className="border-[1px] w-full p-1 rounded px-4 mt-2"
          value={status}
          onChange={handleChangeStatus}
        />
        <input
          type="text"
          id="category"
          placeholder="Kategoriya - ixtiyoriy"
          className="border-[1px] w-full p-1 rounded px-4 mt-2"
          value={category}
          onChange={handleChangeCategory}
        />
        <input
          type="text"
          id="info"
          placeholder="Ma'lumot - ixtiyoriy"
          className="border-[1px] w-full p-1 rounded px-4 mt-2"
          value={info}
          onChange={handleChangeInfo}
        />
        <button
          className="border-[1px] w-full p-1 rounded px-4 mt-2 bg-[#5661CB] text-white text-[1.2rem]"
          onClick={yuborish}
        >
          Yuborish
        </button>
        <div className={message ? "flex" : "hidden"}>
          {message ? message.data.message : ""}
        </div>
      </div>
    </div>
  );
}

export default AdminGoodsPage;
