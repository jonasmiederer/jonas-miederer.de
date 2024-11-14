
import About from "./components/about";
import Contact from "./components/contact";
import Experience from "./components/experience";
import Portfolio from "./components/portfolio";
import Navbar from "./navbar";

export default function Home() {
  return (
    <div className="flex-col">
      <Navbar></Navbar>

      <div id="about" className="flex justify-center">
        <About></About>
      </div>

      <div id="experience" className="flex justify-center">
        <Experience></Experience>
      </div>

      <div id="portfolio" className="flex justify-center">
        <Portfolio></Portfolio>
      </div>

      <div id="contact" className="flex justify-center">
        <Contact></Contact>
      </div>
    </div>
  );
}
