"use server";
import prisma from "@/lib/prismadb";

export default async function delAllCategory(role, data) {
  try {
    const catbrand = role;

    switch (catbrand) {
      case "category":
        await prisma.category.delete({
          where: { id: data.id },
        });

        break;
      case "subcat":
        await prisma.SubCategory.delete({
          where: { id: data.id },
        });

        break;
      case "color":
        await prisma.color.update({
          where: { id: data.id },
          data: { archive: data.archive },
        });

        break;

      case "size":
        await prisma.size.update({
          where: { id: data.id },
          data: { archive: data.archive },
        });

        break;

      default:
        break;
    }
    return true;
  } catch (error) {
    throw new Error(error);
  }
}
