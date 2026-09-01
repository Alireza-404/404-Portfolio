import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function NavLinks() {
  const { t, i18n } = useTranslation();

  const linksArray = [
    { id: 1, text: "nav.work", to: "#" },
    { id: 2, text: "nav.about", to: "#" },
    { id: 3, text: "nav.skills", to: "#" },
    { id: 4, text: "nav.contact", to: "#" },
  ];

  return (
    <ul
      className={`flex flex-col md:flex-row md:items-center gap-y-8 md:gap-x-6 lg:gap-x-10 ${
        i18n.language.startsWith("de") ? "xl:gap-x-8" : "xl:gap-x-10"
      }`}
    >
      {linksArray.map((link) => (
        <li key={link.id}>
          <Link
            to={link.to}
            className={`relative text-secondary text-base md:text-lg tracking-wider hover:text-foreground
            after:absolute after:w-[125%] after:bg-foreground
            after:h-px after:left-1/2 after:-translate-x-1/2
            after:scale-x-0 hover:after:scale-x-100 after:transition-transform
            after:duration-200 transition-colors duration-200 ${
              i18n.language.startsWith("fa")
                ? "after:-bottom-2"
                : "after:-bottom-1"
            }`}
          >
            {t(link.text)}
          </Link>
        </li>
      ))}
    </ul>
  );
}
