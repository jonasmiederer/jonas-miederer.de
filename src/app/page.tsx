
import About from "./components/about";
import Experience from "./components/experience";
import Portfolio from "./components/portfolio";
import Navbar from "./navbar";

export default function Home() {
  return (
    <div className="flex-col">
      <Navbar className="justify-center test"></Navbar>

      <div className="flex justify-center">
        <About></About>
      </div>

      <div className="flex justify-center">
        <Experience></Experience>
      </div>

      <div className="flex justify-center">
        <Portfolio></Portfolio>
      </div>
    </div>
  );
}
