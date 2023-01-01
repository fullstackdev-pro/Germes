import React from "react";
import { useDispatch, useSelector } from "react-redux";
import photo from "../../../img/goods/1.png";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import { changeAmount, deleteToBacked } from "../../../redux/actions";

function BacketPage(props) {
  let backedItems = useSelector((state) => state.backedItems);
  const dispatch = useDispatch();

  function handleChange(e) {
    let amount = parseInt(e.target.value);
    let index = parseInt(e.target.name);
    dispatch(changeAmount(amount, index));
  }

  if (backedItems.length > 0) {
    var backedItem = backedItems.map((item, index) => {
      const { title, remainder, amount, salePrice, idCode } = item;
      return (
        <div
          className="grid grid-cols-1 text-center overflow-hidden pt-2"
          key={idCode}
        >
          <div className="w-screen px-4 mt-8 md:flex md:justify-between">
            <div className="flex">
              <div className="p-2 md:p-0 max-h-[4rem] max-w-[4rem] xl:max-h-[5rem] xl:max-w-[5rem]">
                <img src={photo} alt="goods" />
              </div>
              <p className="text-[18px] md:w-[60%] lg:text-[24px] xl:text-[28px]">{title}</p>
            </div>
            <div className="lg:w-[35%] lg:mr-8 md:w-[50%]">
              <div className="flex justify-between text-[15px] mt-4 md:mt-0 lg:text-[20px] xl:text-[24px]">
                <p>в скальде: {remainder - amount} шт</p>
                <p>покупается: {amount} шт</p>
              </div>
              <div className="flex justify-between text-[15px] lg:text-[20px] xl:text-[24px]">
                <p>Стоимость: {salePrice}</p>
                <p>общий: {salePrice * amount}</p>
              </div>
            </div>
            <div className="flex justify-between mt-4 md:mt-0 md:pb-12 md:grid ml-4 lg:text-[20px] lg:flex xl:text-[24px]">
              <input
                type="number"
                defaultValue={amount}
                className="border-2 rounded p-1 text-center w-[80%]"
                onChange={handleChange}
                min="0"
                name={idCode}
              />
              <button
                onClick={() => {
                  dispatch(deleteToBacked(idCode));
                }}
                className="border-2 text-white bg-red-600 w-[60%] ml-4 rounded md:p-1 md:w-[80%] md:ml-0 md:mt-1 lg:mt-0 lg:ml-4 lg:mr-2"
              >
                Удалить
              </button>
            </div>
          </div>
        </div>
      );
    });
  }

  let notFound = (
    <div className="text-center pb-[27vh] mt-36">Nothing Found</div>
  );

  return (
    <div className="max-w-screen pb-4">
      <Link to="/" className="fixed right-4 top-[4.5rem]">
        <AiOutlineClose className="bg-white w-[2rem] h-[2rem] p-1.5 rounded " />
      </Link>
      {backedItem ? backedItem : notFound}
    </div>
  );
}

export default BacketPage;
