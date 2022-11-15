import React from "react";
import CatalogBody from "./Catalog/CatalogBody";
import CatalogHeader from "./Catalog/CatalogHeader";

function HomePage(props) {
  return (
    <section>
      <CatalogHeader />
      <CatalogBody />
    </section>
  );
}

export default HomePage;
