"use server";
import prisma from "@/lib/prismadb";

export default async function updateDiscProducts(formData) {
  try {
    await Promise.all(
      formData.map(async (item) => {
        await prisma.product.update({
          where: {
            id: parseInt(item.id),
          },
          data: {
            inprice: parseFloat(item.inprice.toFixed(0)),
            indirim: item.indirim,
            indirimsize: item.indirimsize,
          },
        });
      })
    );

    return true;
  } catch (error) {
    throw new Error(error);
  }
}
