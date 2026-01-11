import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Experience } from "./components/Experience";
import { Services } from "./components/Services";
import BentoGrid from "./components/BentoGrid";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { getExperiences, getProjects, getServices } from "@/lib/content";

export default function Home() {
  const experiences = getExperiences();
  const services = getServices();
  const projects = getProjects();

  return (
    <main className="min-h-screen bg-zinc-950 text-white selection:bg-white/20">
      <Navbar />
      <Hero />
      <About />
      <Experience experience={experiences} />
      <Services services={services} />
      <BentoGrid projects={projects} />
      <Contact />
      <Footer />
    </main>
  );
}
