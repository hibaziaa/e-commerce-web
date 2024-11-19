import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Brands from "./components/brands";
import Products from "./components/productShowcase";
import TopSellingProducts from "./components/topSellingProducts";
import Styles from "./components/styles";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Brands />
      <Products />
      <TopSellingProducts/>
      <Styles />
    </>
  );
}
