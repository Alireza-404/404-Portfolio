import { useTranslation } from "react-i18next";

const languages = [
  { code: "fa", label: "FA" },
  { code: "en", label: "EN" },
  { code: "de", label: "DE" },
];

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguageHandler = (lng) => {
    i18n.changeLanguage(lng);

    document.documentElement.lang = lng;
    document.documentElement.dir = lng === "fa" ? "rtl" : "ltr";
  };

  return (
    <div className="w-fit flex items-center rounded-full border border-white/10 bg-white/5 p-1">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => changeLanguageHandler(lang.code)}
          className={`h-11 w-11 rounded-full text-xs font-bold tracking-wide transition-all duration-200 ${
            i18n.language.startsWith(lang.code)
              ? "bg-primary text-black shadow-[0_0_20px_#c8f36a40]"
              : "text-secondary hover:text-foreground"
          }`}
        >
          {lang.label}
        </button>
      ))}
    </div>
  );
}
