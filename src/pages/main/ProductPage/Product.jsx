import React from "react";
import CatalogHeader from "../HomePage/Catalog/CatalogHeader";
import ProductDetails from "./ProductDetails/ProductDetails";
import ShowRoom from '../HomePage/Info/ShowRoom';
import PartnerCarousel from '../HomePage/Info/PartnerCarousel';

function Product(props) {
  return (
    <section>
      <div className="mx-[11px] md:mx-0 md:pl-3">
        <CatalogHeader />
      </div>
      <ProductDetails />
      <ShowRoom />
      <PartnerCarousel />
    </section>
  );
}

export default Product;
