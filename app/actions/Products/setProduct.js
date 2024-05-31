"use server";
import prisma from "@/lib/prismadb";
import slugify from "slugify";

export default async function setProduct(data) {
  try {
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

    const prdct = await prisma.product.findFirst({
      where: {
        slug: slug,
      },
    });

    if (prdct) return { message: "Bu ürünün aynısından var " };

    await prisma.product.create({
      data: {
        name: data.name,
        slug: slug,
        desc: data.desc,
        Category: {
          connect: { id: parseInt(data.kategori) },
        },
        SubCategory: data.altkategori
          ? {
              connect: { id: parseInt(data.altkategori) },
            }
          : null,
        price: parseFloat(data.price),
        inprice: parseFloat(data.inprice),
        indirim: false,
        yeni: false,
        ilk: false,
        onclick: 0,
        sells: 0,
        stock: parseInt(data.stock),
        images: data.Image,
        archive: false,
        quill: data.quill,
      },
    });

    return true;
  } catch (error) {
    throw new Error(error);
  }
}
