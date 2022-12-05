import React from "react";
import CatalogHeader from "../HomePage/Catalog/CatalogHeader";
import CategoryDetails from "./CategoryDetails/CategoryDetails";

function Category(props) {
  return (
    <section className="">
      <CatalogHeader />
      <CategoryDetails />
    </section>
  );
}

export default Category;
