import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Experience } from "./components/Experience";
import { Services } from "./components/Services";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { getExperiences, getCaseStudies, getServices } from "@/lib/content";

export const metadata = { alternates: { canonical: "/" } };

export default function Home() {
  return (
    <main>
      <Hero />
      <Projects projects={getCaseStudies()} />
      <Services services={getServices()} />
      <section className="wrap section about-grid">
        <About />
        <Experience experience={getExperiences()} />
      </section>
      <Contact />
    </main>
  );
}
