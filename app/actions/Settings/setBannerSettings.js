"use server";
import prisma from "@/lib/prismadb";

export default async function setBannerSettings(data) {
  try {
    const ayarlar = await prisma.ayarlar.findFirst();

    const formData = {
      banner: ayarlar.banner.banner,
      bannerb: ayarlar.banner.bannerb,
    };

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
