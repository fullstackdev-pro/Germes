import React from "react";
import Goods from "./Goods/Goods";
import CatalogHeader from './Catalog/CatalogHeader';
import CatalogBody from './Catalog/CatalogBody';


function HomePage(props) {
  return (
    <section>
      <CatalogHeader />
      <CatalogBody />
      <Goods/>
    </section>
  );
}

export default HomePage;
