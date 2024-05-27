"use server";
import prisma from "@/lib/prismadb";
import slugify from "slugify";
export default async function putAllCategory(role, data) {
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

        await prisma.category.update({
          where: { id: data.id },
          data: {
            index: parseInt(data.index),
            name: data.name,
            slug: slug,
            desc: data.desc,
            keywords: data.keywords,
            archive: data.archive,
            imageid: data.imageid || undefined,
            imageurl: data.imageurl || undefined,
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

        await prisma.SubCategory.update({
          where: { id: data.id },
          data: {
            index: parseInt(data.index),
            name: data.name,
            slug: slug2,
            categoryId: data.categoryId,
            desc: data.desc,
            keywords: data.keywords,
            archive: data.archive,
            imageid: data.imageid || undefined,
            imageurl: data.imageurl || undefined,
          },
        });
        break;
      case "color":
        const slugcolor = slugify(data.name, {
          lower: true,
          replacement: (char) =>
            CharacterMap[char] || (char === " " ? "-" : char),
          remove: /[*+~.()'"!:@]/g,
        });
        const colorData = {
          index: parseInt(data.index),
          name: data.name,
          slug: slugcolor,
          hex: data.hex,
          archive: data.archive,
        };
        await prisma.color.update({
          where: { id: data.id },
          data: colorData,
        });

        break;

      case "size":
        break;

      default:
        break;
    }
    return true;
  } catch (error) {
    throw new Error(error);
  }
}
