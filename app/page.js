import Nav from "@/components/Nav";
import Aurora from "@/components/Aurora";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Product from "@/components/Product";
import Pricing from "@/components/Pricing";
import About from "@/components/About";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";

export default function Home() {
  return (
    <SmoothScroll>
      <Aurora />
      <Nav />
      <main className="relative z-10 flex-1">
        <Hero />
        <Features />
        <Product />
        <Pricing />
        <About />
      </main>
      <Footer />
    </SmoothScroll>
  );
}
