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
    </>
  );
}
