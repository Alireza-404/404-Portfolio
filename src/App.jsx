import { useEffect } from "react";
import Lenis from "lenis";

import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import SelectedWork from "./components/SelectedWork/SelectedWork";
import MoreProjects from "./components/MoreProjects/MoreProjects";
import HowIBuild from "./components/HowIBuild/HowIBuild";
import SkillsAndStack from "./components/SkillsAndStack/SkillsAndStack";
import Contact from "./components/Contact/Contact";

import "./App.css";
import Footer from "./components/Footer/Footer";
import { useTranslation } from "react-i18next";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    const lenis = new Lenis({
      duration: 2.5,
      smoothWheel: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  useEffect(() => {
    ScrollTrigger.refresh(true);
  }, [i18n]);

  useEffect(() => {
    let timeout;

    const refresh = () => {
      clearTimeout(timeout);

      timeout = setTimeout(() => {
        requestAnimationFrame(() => {
          ScrollTrigger.refresh();
        });
      }, 100);
    };

    refresh();

    window.addEventListener("resize", refresh);
    window.addEventListener("load", refresh);
    window.addEventListener("orientationchange", refresh);
    window.visualViewport?.addEventListener("resize", refresh);

    return () => {
      clearTimeout(timeout);

      window.removeEventListener("resize", refresh);
      window.removeEventListener("load", refresh);
      window.removeEventListener("orientationchange", refresh);
      window.visualViewport?.removeEventListener("resize", refresh);
    };
  }, []);

  return (
    <div className="w-full min-h-screen overflow-x-hidden bg-[#0b0e0c]">
      <Header />

      <main>
        <Hero />

        <About />

        <SelectedWork />

        <MoreProjects />

        <HowIBuild />

        <SkillsAndStack />

        <Contact />

        <Footer />
      </main>
    </div>
  );
}

export default App;
