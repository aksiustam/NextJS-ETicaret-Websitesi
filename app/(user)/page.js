import SectionStyleFour from "./components/Helpers/SectionStyleFour";
import SectionStyleThreeHomeTwo from "./components/Helpers/SectionStyleThreeHomeTwo";
import ViewMoreTitle from "./components/Helpers/ViewMoreTitle";
import Banner from "./components/Home/Banner";
import CampaignCountDown from "./components/Home/CampaignCountDown";
import CategoriesSection from "./components/Home/CategoriesSection";
import getProducts from "@/app/actions/Products/getProducts";
import getSettings from "@/app/actions/getSettings";
import getAllCategory from "@/app/actions/Category/getAllCategory";
export default async function Home() {
  const products = await getProducts();
  const settings = await getSettings();
  const allcategory = await getAllCategory();

  return (
    <>
      <Banner settings={settings} allcategory={allcategory} />
      <ViewMoreTitle
        className="my-categories mb-[60px]"
        categoryTitle="Kategorilerimiz"
      >
        <CategoriesSection allcategory={allcategory} />
      </ViewMoreTitle>
      {settings?.discountpage?.checkbox === "true" && (
        <CampaignCountDown className="mb-[60px] " settings={settings} />
      )}

      <SectionStyleThreeHomeTwo
        products={products}
        sectionTitle="Popüler Ürünler"
        className="new-products mb-[60px] "
      />

      <SectionStyleFour
        products={products}
        sectionTitle="En Çok Satanlar"
        className="category-products mb-[60px]"
      />
      <div className="w-full h-full flex items-center justify-center mb-6">
        <div
          className="px-4 py-2 bg-gray-50 shadow rounded"
          data-aos="fade-top"
        >
          <h1 className="text-2xl font-bold text-[#ffee00] text-center text-shadow-xl">
            Bıçakcı Serkan Av ve Bıçak Hediyelik Kullanımlık Ürünler
          </h1>
        </div>
      </div>
    </>
  );
}
