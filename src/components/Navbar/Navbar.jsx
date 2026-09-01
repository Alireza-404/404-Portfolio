import NavLinks from "../NavLinks/NavLinks";
import PrimaryButton from "../PrimaryButton/PrimaryButton";

import { Link } from "react-router-dom";
import { LuMenu } from "react-icons/lu";
import { useEffect, useState } from "react";
import MobileMenu from "../MobileMenu/MobileMenu";
import Brand from "../Brand/Brand";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";
import { useTranslation } from "react-i18next";

export default function Navbar() {
  const { t } = useTranslation();
  const root = document.documentElement;

  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    if (showMenu) {
      root.classList.add("overflow-y-hidden");
    } else {
      root.classList.remove("overflow-y-hidden");
    }
  }, [showMenu]);

  return (
    <>
      <nav className="h-28 border-b border-white/10 flex items-center justify-between">
        <Brand />

        <span
          className="sm:hidden block text-foreground text-3xl cursor-pointer"
          onClick={() => setShowMenu(true)}
        >
          <LuMenu />
        </span>

        <div className="hidden md:block">
          <NavLinks />
        </div>

        <div className="hidden sm:flex sm:items-center sm:gap-x-5">
          <div className="hidden 2xl:flex lg:items-center lg:gap-x-2.5">
            <div
              className="h-2 w-2 bg-primary rounded-full shadow-[0_0px_16px_0.5px_#c8f36a]
            animate-pulse"
            ></div>

            <span className="text-secondary">{t("availability")}</span>
          </div>

          <PrimaryButton
            type={"button"}
            className={
              "hover:-translate-y-1 hover:shadow-[0_4px_24px_#c8f36a4d] hidden lg:block"
            }
          >
            <Link
              to={"#"}
              className="w-full h-full flex items-center justify-center px-5 py-2.5"
            >
              {t("common.letsTalk")}
            </Link>
          </PrimaryButton>

          <LanguageSwitcher />
        </div>
      </nav>

      <MobileMenu isOpen={showMenu} onClose={() => setShowMenu(false)} />
    </>
  );
}
