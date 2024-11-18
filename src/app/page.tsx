import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Brands from "./components/brands";
import Products from "./components/productShowcase";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Brands />
      <Products />
    </>
  );
}
