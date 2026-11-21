
import About from "./components/about";
import Certification from "./components/certification";
import Contact from "./components/contact";
import Experience from "./components/experience";
import Portfolio from "./components/portfolio";
import Navbar from "./navbar";

export default function Home() {
  return (
    <main className="flex-col">
      {/* <Navbar></Navbar> */}

      <section id="about" className="flex justify-center">
        <About></About>
      </section>

      <section id="certification" className="flex justify-center">
        <Certification></Certification>
      </section>

      <section id="experience" className="flex justify-center">
        <Experience></Experience>
      </section>

      <section id="portfolio" className="flex justify-center">
        <Portfolio></Portfolio>
      </section>

      <section id="contact" className="flex justify-center">
        <Contact></Contact>
      </section>
    </main>
  );
}
