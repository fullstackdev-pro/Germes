import React from "react";
import Goods from "./Goods/Goods";
import CatalogHeader from './Catalog/CatalogHeader';
import CatalogBody from './Catalog/CatalogBody';
import ShowRoom from "./Info/ShowRoom";
import PartnerCarousel from "./Info/PartnerCarousel";
import Services from "../ServicePage/Services";

function HomePage(props) {
  return (
    <section>
      <CatalogHeader/>
      <CatalogBody />
      <Goods/>
      <div className="hidden md:block">
        <Services/>
      </div>
      <ShowRoom/>
      <PartnerCarousel/>
    </section>
  );
}

export default HomePage;
