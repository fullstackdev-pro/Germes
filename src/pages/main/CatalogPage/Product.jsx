import React from "react";
import CatalogHeader from "../HomePage/Catalog/CatalogHeader";
import ProductDetails from "./ProductDetails/ProductDetails";

function Product(props) {
  return (
    <section>
      <div className="mx-[11px]">
        <CatalogHeader />
      </div>
      <ProductDetails />
    </section>
  );
}

export default Product;
