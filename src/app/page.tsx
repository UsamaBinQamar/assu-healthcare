import { ContactForm } from "@/components/contact-form";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Features } from "@/components/features";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Features />
      <ContactForm />
    </main>
  );
}
