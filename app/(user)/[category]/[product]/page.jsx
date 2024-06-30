import React from "react";
import ProductClient from "./ProductClient";
import getProductSlug from "@/app/actions/Products/getProductSlug";
import getProducts from "@/app/actions/Products/getProducts";
import setOnClick from "@/app/actions/Products/setOnClick";

const page = async ({ params }) => {
  const { product } = params;

  const data = await getProductSlug(product);
  const products = await getProducts();
  if (data !== null) await setOnClick(data);

  return (
    <>
      <ProductClient product={data} products={products} />
    </>
  );
};

export default page;
