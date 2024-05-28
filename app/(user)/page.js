import SectionStyleFour from "./components/Helpers/SectionStyleFour";
import SectionStyleThreeHomeTwo from "./components/Helpers/SectionStyleThreeHomeTwo";
import ViewMoreTitle from "./components/Helpers/ViewMoreTitle";
import Banner from "./components/Home/Banner";
import CampaignCountDown from "./components/Home/CampaignCountDown";
import CategoriesSection from "./components/Home/CategoriesSection";
import datas from "./components/data/products.json";
export default function Home() {
  const { products } = datas;
  const brands = [];
  products.forEach((product) => {
    brands.push(product.brand);
  });
  return (
    <>
      <Banner />
      <ViewMoreTitle
        className="my-categories mb-[60px]"
        seeMoreUrl="/all-products"
        categoryTitle="My Market Category"
      >
        <CategoriesSection />
      </ViewMoreTitle>
      <CampaignCountDown className="mb-[60px]" lastDate="2024-10-06 12:00:00" />
      <SectionStyleThreeHomeTwo
        products={products}
        showProducts={6}
        sectionTitle="Featured Products"
        seeMoreUrl="/all-products"
        className="new-products mb-[60px]"
      />

      <SectionStyleFour
        products={products}
        sectionTitle="Popular Sales"
        seeMoreUrl="/all-products"
        className="category-products mb-[60px]"
      />
    </>
  );
}
