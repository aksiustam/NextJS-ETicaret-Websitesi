import SettingsClient from "./SettingsClient";
import getSettings from "@/app/actions/getSettings";
export const dynamic = "force-dynamic";
const page = async () => {
  const settings = await getSettings();
  return <SettingsClient settings={settings} />;
};

export default page;
