import React from "react";
import Goods from "./Goods/Goods";
import CatalogHeader from './Catalog/CatalogHeader';
import CatalogBody from './Catalog/CatalogBody';
import ShowRoom from "./Info/ShowRoom";
import AdditionService from "./Info/AdditionService";
import PartnerCarousel from "./Info/PartnerCarousel";

function HomePage(props) {
  return (
    <section>
      <CatalogHeader/>
      <CatalogBody />
      <Goods/>
      <AdditionService/>
      <ShowRoom/>
      <PartnerCarousel/>
    </section>
  );
}

export default HomePage;
