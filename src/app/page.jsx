import Home from "@/components/Home";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Logos from "@/components/Logos";
import Projects from "@/components/Projects";

export default function Page() {
  return (
    <div className="flex flex-col">
      <Home />
      <About />
      <img
        src="/images/border2.png"
        alt="border"
        className="opacity-75 py-10 dark:invert"
      />
      {/* <Logos /> */}
      <Projects />
      <img
        src="/images/border2.png"
        alt="border"
        className="opacity-75 py-10 dark:invert"
      />
      <Contact />
    </div>
  );
}
