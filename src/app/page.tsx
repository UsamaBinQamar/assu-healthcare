import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { ProductShowcase } from "@/components/product-showcase";
import { Features } from "@/components/features";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Features />
      <ProductShowcase />
    </main>
  );
}
