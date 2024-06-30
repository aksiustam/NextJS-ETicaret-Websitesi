"use server";
import prisma from "@/lib/prismadb";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export default async function setBannerSettings(data) {
  try {
    const ayarlar = await prisma.ayarlar.findFirst();

    const formData = {
      banner: ayarlar.banner.banner,
      bannerb: ayarlar.banner.bannerb,
    };

    if (data.banner !== null) {
      await cloudinary.uploader.destroy(ayarlar.banner.banner.imageid);
      formData.banner = data.banner;
    }
    if (data.bannerb !== null) {
      await cloudinary.uploader.destroy(ayarlar.banner.bannerb.imageid);
      formData.bannerb = data.bannerb;
    }

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
