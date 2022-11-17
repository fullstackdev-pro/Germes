import React from "react";
import Goods from "./Goods/Goods";
import CatalogHeader from './Catalog/CatalogHeader';
import CatalogBody from './Catalog/CatalogBody';
import ShowRoom from "./Info/ShowRoom";

function HomePage(props) {
  return (
    <section>
      <CatalogHeader />
      <CatalogBody />
      <Goods/>
      <ShowRoom/>
    </section>
  );
}

export default HomePage;
