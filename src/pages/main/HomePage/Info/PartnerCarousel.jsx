import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import { GrPrevious, GrNext } from "react-icons/gr";
// Import Swiper styles
import "swiper/css";

function PartnerCarousel(props) {
  let number 
  window.innerWidth <= 320
    ? (number = 3)
    : window.innerWidth <= 480
    ? (number = 4)
    : window.innerWidth <= 768
    ? (number = 5)
    : window.innerWidth <= 1000
    ? (number = 5)
    : (number = 7);
  return (
    <section className="flex px-[20px] xxl:ml-[232px] xxl:mr-[266px] mt-[40px] lg:mt-[100px] mb-[15px]">
      {/* <GrPrevious className="lg:mt-5 mt-1 cursor-pointer" /> */}
      <Swiper spaceBetween={50} slidesPerView={number} className="" autoplay>
        <SwiperSlide>
          <img
            src={require("../../../../img/partnerCarousel/Снимок экрана 2020-12-06 в 17.09.png")}
            alt="partner"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={require("../../../../img/partnerCarousel/Снимок экрана 2020-12-06 в 17.09-1.png")}
            alt="partner"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={require("../../../../img/partnerCarousel/Снимок экрана 2020-12-06 в 17.09-2.png")}
            alt="partner"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={require("../../../../img/partnerCarousel/Снимок экрана 2020-12-06 в 17.09-3.png")}
            alt="partner"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={require("../../../../img/partnerCarousel/Снимок экрана 2020-12-06 в 17.09-4.png")}
            alt="partner"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={require("../../../../img/partnerCarousel/Снимок экрана 2020-12-06 в 17.10.png")}
            alt="partner"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={require("../../../../img/partnerCarousel/Снимок экрана 2020-12-06 в 17.10-1.png")}
            alt="partner"
          />
        </SwiperSlide>
      </Swiper>
      {/* <GrNext className="lg:mt-5 mt-1 cursor-pointer" /> */}
    </section>
  );
}

export default PartnerCarousel;
