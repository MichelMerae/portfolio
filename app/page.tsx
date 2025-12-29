import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Experience } from "./components/Experience";
import { Services } from "./components/Services";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white selection:bg-white/20">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Services />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
