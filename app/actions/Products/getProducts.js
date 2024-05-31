"use server";
import prisma from "@/lib/prismadb";

export default async function getProducts() {
  try {
    const productsWithDetails = await prisma.product.findMany({
      where: {
        archive: false,
      },
      include: {
        Category: true,
        SubCategory: true,
      },
    });

    return productsWithDetails;
  } catch (error) {
    throw new Error(error);
  }
}
