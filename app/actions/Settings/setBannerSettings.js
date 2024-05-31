"use server";
import prisma from "@/lib/prismadb";

export default async function setBannerSettings(data) {
  try {
    const ayarlar = await prisma.ayarlar.findFirst();

    const formData = ayarlar.banner !== null ? ayarlar.banner : data;

    if (data.banner !== null) formData.banner = data.banner;
    if (data.bannerb !== null) formData.bannerb = data.bannerb;

    await prisma.Ayarlar.update({
      where: {
        id: 1,
      },
      data: {
        banner: formData,
      },
    });

    return true;
  } catch (error) {
    throw new Error(error);
  }
}
