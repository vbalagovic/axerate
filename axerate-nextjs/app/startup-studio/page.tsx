import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Process from "@/components/sections/Process";
import About from "@/components/sections/About";
import Partnerships from "@/components/sections/Partnerships";
import Blog from "@/components/sections/Blog";
import Contact from "@/components/sections/Contact";

export const metadata = {
  title: "Startup Studio - Axerate",
  description:
    "The startup studio that builds from zero to funding. Ideate with us, get your MVP coded, legal setup handled, and investor doors opened.",
};

export default function StartupStudioPage() {
  return (
    <main>
      <Hero variant="startup" />
      <Services />
      <About />
      <Process />
      <Partnerships />
      <Blog />
      <Contact variant="startup" />
    </main>
  );
}
