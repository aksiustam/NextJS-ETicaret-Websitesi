import ProfilLayout from "../ProfilLayout";
import AdressClient from "./AdressClient";
import { getCurrentUser } from "@/app/actions/getCurrentUser";
import { redirect } from "next/navigation";
const page = async () => {
  const user = await getCurrentUser();

  if (user !== null) {
    return (
      <ProfilLayout>
        <AdressClient />
      </ProfilLayout>
    );
  } else {
    redirect("/login");
  }
};

export default page;
