"use server";
import prisma from "@/lib/prismadb";

export default async function delProduct(id) {
  try {
    await prisma.product.delete({
      where: {
        id: parseInt(id),
      },
    });

    return true;
  } catch (error) {
    throw new Error(error);
  }
}
