import Impact from "@/components/Impact";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Product from "@/components/Product";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero/>
      <Product/>
      <Impact/>
      <CTA/>
      <Footer/>
    </div>
  );
}
