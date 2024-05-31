"use server";
import prisma from "@/lib/prismadb";
import slugify from "slugify";

export default async function updateProduct(data) {
  try {
    console.log(data);
    const CharacterMap = {
      Ç: "C",
      Ş: "S",
      Ğ: "G",
      İ: "I",
      Ö: "O",
      Ü: "U",
      ç: "c",
      ş: "s",
      ğ: "g",
      ı: "i",
      ö: "o",
      ü: "u",
    };

    const slug = slugify(data.name, {
      lower: true,
      replacement: (char) => CharacterMap[char] || (char === " " ? "" : char),
      remove: /[*+~.()'"!:@]/g,
    });
    const check = data.Image.length > 0 ? true : false;
    await prisma.product.update({
      where: {
        id: parseInt(data.id),
      },
      data: {
        name: data.name,
        slug: slug,
        desc: data.desc,
        price: parseFloat(data.price),
        inprice: parseFloat(data.inprice),
        quill: data.quill,
        stock: parseInt(data.stock),
        categoryId: parseInt(data.category),
        subCategoryId: parseInt(data.altcategory),
        images: check ? data.Image : undefined,
      },
    });

    return true;
  } catch (error) {
    throw new Error(error);
  }
}
