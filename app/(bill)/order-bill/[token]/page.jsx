import React from "react";
import OdemeFaturaClient from "./OdemeFaturaClient";
import getOrderToken from "../../../actions/Order/getOrderToken";

export const metadata = {
  title: "Bıçakcı Serkan",
  description: "Bıçakcı Serkan Bıçak Malzemeleri",
};
const page = async ({ params }) => {
  const { token } = params;

  const siparis = await getOrderToken(token);
  return <OdemeFaturaClient sipdata={siparis} />;
};

export default page;
