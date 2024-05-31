import getProductOne from "@/app/actions/Products/getProductOne";
import React from "react";
import AdminProductClient from "./AdminProductClient";
import getAllCategory from "@/app/actions/Category/getAllCategory";
export const dynamic = "force-dynamic";
const page = async ({ params }) => {
  const { id } = params;
  const product = await getProductOne(id);
  const allcategory = await getAllCategory();
  return <AdminProductClient product={product} allcategory={allcategory} />;
};

export default page;
