import About from "@/components/About";
import Contact from "@/components/Contact";
import Header from "@/components/Header";
import Home from "@/components/Home";
import Logos from "@/components/Logos";
import Projects from "@/components/Projects";
import Resume from "@/components/Resume";

export default function Page() {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Logos />
      <Projects />
      <Resume />
      <Contact />
    </>
  );
}
