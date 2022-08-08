import React from "react";
import logo from "./images/germeslogo.png";
import phone from "./images/Group 70.png";
import vector from "./images/Vector.png";


function Header320px(props) {
  return (
    <section>
      <div className="flex justify-between mt-[14px] mx-5">
        <div>
          <img src={logo} alt="logo" />
        </div>
        <div className="flex mt-[2px]">
          <img src={phone} alt="phone" className="mr-8"/>
          <img src={vector} alt="Vector" />
        </div>
      </div>
    </section>
  );
}

export default Header320px;
