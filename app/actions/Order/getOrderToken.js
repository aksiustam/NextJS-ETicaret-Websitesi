"use server";
import prisma from "@/lib/prismadb";
import { orderbillRequest } from "../../api/iyzico-order/route"; // In-memory store'dan veriyi alıyoruz

export default async function getOrderToken(token) {
  try {
    const request = orderbillRequest.get(token);

    if (request && Date.now() - request.createdAt < 3600000) {
      // 1 saatlik süre kontrolü
      const siparis = await prisma.SiparisOrderFinish.findUnique({
        where: {
          id: parseInt(request.id),
        },
      });

      setTimeout(() => {
        orderbillRequest.delete(token);
      }, 3600000);

      return siparis;
    } else {
      return null;
    }
  } catch (error) {
    throw new Error(error);
  }
}
