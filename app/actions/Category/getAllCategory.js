"use server";
import prisma from "@/lib/prismadb";

export default async function getAllCategory() {
  try {
    const category = await prisma.category.findMany({
      where: {
        archive: false,
      },
    });
    const subcat = await prisma.SubCategory.findMany({
      where: {
        archive: false,
      },
    });

    const data = {
      category: category,
      subcat: subcat,
    };
    return data;
  } catch (error) {
    throw new Error(error);
  }
}
