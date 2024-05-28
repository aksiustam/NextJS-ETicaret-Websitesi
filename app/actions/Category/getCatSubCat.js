"use server";
import prisma from "@/lib/prismadb";

export default async function getCatSubCat(slug) {
  try {
    const category = await prisma.category.findUnique({
      where: {
        slug: slug,
        archive: false,
      },
      include: {
        SubCategory: true,
      },
    });

    const subcat = await prisma.SubCategory.findUnique({
      where: {
        slug: slug,
        archive: false,
      },
    });

    const data = {
      category: category || null,
      subcat: subcat || null,
    };
    return data;
  } catch (error) {
    throw new Error(error);
  }
}
