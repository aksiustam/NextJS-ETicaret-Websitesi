"use server";
import prisma from "@/lib/prismadb";

export default async function setDiscPage(data) {
  try {
    const ayarlar = await prisma.ayarlar.findFirst();

    const formData = {
      bannerUst: data.bannerUst,
      bannerAlt: data.bannerAlt,
      buttonName: data.buttonName,
      buttonUrl: data.buttonUrl,
      checkbox: data.checkbox,
      date: data.date,
      discres: ayarlar.discountpage.discres,
    };

    if (data.discres !== null) {
      formData.discres = data.discres;
    }

    await prisma.ayarlar.update({
      where: { id: 1 },
      data: {
        discountpage: formData,
      },
    });

    return true;
  } catch (error) {
    throw new Error(error);
  }
}
