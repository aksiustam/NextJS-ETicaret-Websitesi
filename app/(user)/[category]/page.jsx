import React from "react";
import ShopClient from "./comp/ShopClient";
import getAllCategory from "@/app/actions/Category/getAllCategory";
import getCatSubCat from "@/app/actions/Category/getCatSubCat";

const page = async ({ params }) => {
  const { category } = params;

  const data = await getCatSubCat(category);
  const allcategory = await getAllCategory();

  return (
    <>
      <ShopClient allcategory={allcategory} data={data} />
    </>
  );
};

export default page;
