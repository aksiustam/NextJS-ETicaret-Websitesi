"use server";
import prisma from "@/lib/prismadb";
import slugify from "slugify";

export default async function setAllCategory(role, data) {
  try {
    const catbrand = role;

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

    switch (catbrand) {
      case "category":
        const slug = slugify(data.name, {
          lower: true,
          replacement: (char) =>
            CharacterMap[char] || (char === " " ? "" : char),
          remove: /[*+~.()'"!:@]/g,
        });

        const category = await prisma.category.findUnique({
          where: {
            slug: slug,
          },
        });
        if (category) {
          return { message: "Bu Kategoriden aynısı var!" };
        }

        await prisma.category.create({
          data: {
            index: parseInt(data.index),
            name: data.name,
            slug: slug,
            desc: data.desc,
            keywords: data.keywords,
            imageid: data.imageid || undefined,
            imageurl: data.imageurl || undefined,
            archive: false,
          },
        });

        break;
      case "subcat":
        const slug2 = slugify(data.name, {
          lower: true,
          replacement: (char) =>
            CharacterMap[char] || (char === " " ? "" : char),
          remove: /[*+~.()'"!:@]/g,
        });

        const subcat = await prisma.category.findUnique({
          where: {
            slug: slug2,
          },
        });
        if (subcat) {
          return { message: "Bu Alt Kategoriden aynısı var!" };
        }

        await prisma.SubCategory.create({
          data: {
            index: parseInt(data.index),
            name: data.name,
            categoryId: parseInt(data.cat),
            slug: slug2,
            desc: data.desc,
            keywords: data.keywords,
            imageid: data.imageid || undefined,
            imageurl: data.imageurl || undefined,
            archive: false,
          },
        });

        break;
      case "color":
        const color = await prisma.color.findFirst({
          where: {
            name: data.name,
          },
        });
        if (color) {
          return { message: "Bu Renkten aynısı var!" };
        }
        const slugcolor = slugify(data.name, {
          lower: true,
          replacement: (char) =>
            CharacterMap[char] || (char === " " ? "-" : char),
          remove: /[*+~.()'"!:@]/g,
        });
        await prisma.color.create({
          data: {
            index: parseInt(data.index),
            name: data.name,
            slug: slugcolor,
            hex: data.hex,
            archive: false,
          },
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
