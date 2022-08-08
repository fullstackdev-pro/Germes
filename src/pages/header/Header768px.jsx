import React from "react";
import logo from "./images/germeslogo.png";
import vector from "./images/Vector.png";


function Header768px(props) {
  return (
    <section>
      <div className="flex justify-between mt-[14px] mx-5">
        <div>
          <img src={logo} alt="logo" />
        </div>
        <div className="flex justify-between mt-[2px]">
          <p className="w-[13rem] text-[20px]">8 (843) 203-93-43</p>
          <img src={vector} alt="Vector" />
        </div>
      </div>
      
    </section>
  );
}

export default Header768px;
