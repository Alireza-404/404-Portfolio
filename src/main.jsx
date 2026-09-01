import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { I18nextProvider, initReactI18next } from "react-i18next";
import { BrowserRouter } from "react-router-dom";

import App from "./App.jsx";
import LanguageDetector from "i18next-browser-languagedetector";
import i18n from "i18next";

import translationEN from "./locales/en/translation.json";
import translationDE from "./locales/de/translation.json";
import translationFA from "./locales/fa/translation.json";

import "./index.css";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: translationEN,
      },
      de: {
        translation: translationDE,
      },
      fa: {
        translation: translationFA,
      },
    },
    fallbackLng: "en",
    debug: true,

    interpolation: {
      escapeValue: false, // For html < > / & * And Dynamic Syntax
    },

    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
    },
  });

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <I18nextProvider i18n={i18n}>
        <App />
      </I18nextProvider>
    </BrowserRouter>
  </StrictMode>
);
