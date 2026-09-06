import { useLayoutEffect } from "react";
import { useTranslation } from "react-i18next";

import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";

import "./App.css";

function App() {
  const { i18n } = useTranslation();

  useLayoutEffect(() => {
    document.documentElement.lang = i18n.language;
    document.documentElement.dir = i18n.language === "fa" ? "rtl" : "ltr";
  }, [i18n]);

  return (
    <div className="w-full min-h-screen overflow-x-hidden bg-[#0b0e0c]">
      <Header />

      <main>
        <Hero />
      </main>
    </div>
  );
}

export default App;
