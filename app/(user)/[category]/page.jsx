import React from "react";
import ShopClient from "./ShopClient";
import getAllCategory from "@/app/actions/Category/getAllCategory";
import getCatSubCat from "@/app/actions/Category/getCatSubCat";
import getProducts from "@/app/actions/Products/getProducts";

const page = async ({ params }) => {
  const { category } = params;

  const data = await getCatSubCat(category);
  const allcategory = await getAllCategory();
  const products = await getProducts();
  return (
    <>
      <ShopClient allcategory={allcategory} products={products} data={data} />
    </>
  );
};

export default page;
