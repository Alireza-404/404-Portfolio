import { LuArrowUp } from "react-icons/lu";
import { Link } from "react-scroll";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  const backToUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer>
      <div className="px-6 2xl:px-40 pt-20">
        <div className="border-t border-white/10 flex flex-col gap-y-8 py-8">
          <div className="flex flex-col gap-y-8 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-foreground text-2xl font-bold select-none">
              <span className="text-primary">404</span> Portfolio
            </p>

            <ul className="flex gap-x-5 lg:gap-x-7.5 flex-wrap">
              <li className="relative">
                <Link
                  smooth
                  duration={700}
                  to="about-section"
                  className="text-sm text-secondary hover:text-foreground transition-colors duration-200 cursor-pointer after:absolute after:w-full after:bg-primary after:h-px after:left-1/2 after:-translate-x-1/2 after:-bottom-0.5 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-200 after:origin-left select-none"
                >
                  {t("nav.about")}
                </Link>
              </li>

              <li className="relative">
                <Link
                  smooth
                  duration={700}
                  to="selected-work-section"
                  className="text-sm text-secondary hover:text-foreground transition-colors duration-200 cursor-pointer after:absolute after:w-full after:bg-primary after:h-px after:left-1/2 after:-translate-x-1/2 after:-bottom-0.5 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-200 after:origin-left select-none"
                >
                  {t("nav.work")}
                </Link>
              </li>

              <li className="relative">
                <Link
                  smooth
                  duration={700}
                  to="skills-and-stack-section"
                  className="text-sm text-secondary hover:text-foreground transition-colors duration-200 cursor-pointer after:absolute after:w-full after:bg-primary after:h-px after:left-1/2 after:-translate-x-1/2 after:-bottom-0.5 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-200 after:origin-left select-none"
                >
                  {t("nav.skills")}
                </Link>
              </li>

              <li className="relative">
                <Link
                  smooth
                  duration={700}
                  to="contact-section"
                  className="text-sm text-secondary hover:text-foreground transition-colors duration-200 cursor-pointer after:absolute after:w-full after:bg-primary after:h-px after:left-1/2 after:-translate-x-1/2 after:-bottom-0.5 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-200 after:origin-left select-none"
                >
                  {t("nav.contact")}
                </Link>
              </li>
            </ul>

            <div className="flex justify-end">
              <button
                type="button"
                className="group flex items-center gap-x-2.5 w-fit cursor-pointer"
                onClick={backToUp}
              >
                <span className="text-sm text-secondary group-hover:text-foreground transition-colors duration-200">
                  {t("footer.backToTop")}
                </span>

                <div className="w-9 h-9 border border-white/10 rounded-full flex items-center justify-center text-secondary text-sm group-hover:-translate-y-0.5 group-hover:bg-primary group-hover:border-primary group-hover:text-neutral-900 transition-all duration-200">
                  <LuArrowUp />
                </div>
              </button>
            </div>
          </div>

          <span className="w-full h-px bg-white/10 inline-block"></span>

          <div className="flex flex-col sm:flex-row sm:justify-between gap-y-5">
            <span className="text-xs text-secondary">
              © 2026 Alireza. {t("footer.rights")}
            </span>

            <span className="flex items-center gap-x-2.5 text-secondary text-xs">
              <div className="w-2 h-2 rounded-full bg-primary shadow-[0_0px_16px_0.5px_#c8f36a] animate-pulse"></div>
              {t("footer.builtWithCare")}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
