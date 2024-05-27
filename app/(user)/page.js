import SectionStyleFour from "./components/Helpers/SectionStyleFour";
import SectionStyleThreeHomeTwo from "./components/Helpers/SectionStyleThreeHomeTwo";
import SectionStyleTwo from "./components/Helpers/SectionStyleTwo";
import ViewMoreTitle from "./components/Helpers/ViewMoreTitle";
import Banner from "./components/Home/Banner";
import CampaignCountDown from "./components/Home/CampaignCountDown";
import CategoriesSection from "./components/Home/CategoriesSection";
import ProductsAds from "./components/Home/ProductsAds";
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
      <SectionStyleThreeHomeTwo
        products={products}
        showProducts={6}
        sectionTitle="Featured Products"
        seeMoreUrl="/all-products"
        className="new-products mb-[60px]"
      />
      <CampaignCountDown className="mb-[60px]" lastDate="2024-10-06 12:00:00" />
      <ProductsAds
        ads={[`/assets/images/ads-2.2.png`, `/assets/images/ads-2.1.png`]}
        sectionHeight="sm:h-[290px] h-full"
        className="products-ads-section mb-[60px]"
      />
      <SectionStyleThreeHomeTwo
        products={products.slice(3, 7)}
        showProducts={3}
        sectionTitle="Popular Sales"
        seeMoreUrl="/all-products"
        className="feature-products mb-[60px]"
      />

      <ViewMoreTitle
        className="top-selling-product mb-[60px]"
        seeMoreUrl="/all-products"
        categoryTitle="Top Selling Products"
      >
        <SectionStyleTwo products={products.slice(3, products.length)} />
      </ViewMoreTitle>
      <ProductsAds
        ads={[`/assets/images/ads-2.3.png`]}
        className="products-ads-section mb-[60px]"
      />
      <SectionStyleThreeHomeTwo
        products={products.reverse().slice(0, 10)}
        showProducts={9}
        sectionTitle="New Arrivals"
        seeMoreUrl="/all-products"
        className="new-arrivals mb-[60px]"
      />
      <ProductsAds
        sectionHeight="164"
        ads={[`/assets/images/ads-2.4.png`]}
        className="products-ads-section mb-[60px]"
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
