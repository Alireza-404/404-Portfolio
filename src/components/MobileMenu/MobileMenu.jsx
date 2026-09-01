import { AnimatePresence, motion } from "framer-motion";
import { LuX } from "react-icons/lu";

import Overlay from "../Overlay/Overlay";
import NavLinks from "../NavLinks/NavLinks";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function MobileMenu({ isOpen, onClose }) {
  const { t } = useTranslation();
  const dir = document.documentElement.dir;

  return (
    <AnimatePresence initial={false}>
      {isOpen && (
        <>
          <motion.aside
            initial={{ x: dir === "ltr" ? "-100%" : "100%" }}
            animate={{ x: 0 }}
            exit={{ x: dir === "ltr" ? "-100%" : "100%" }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className={`fixed inset-y-0 z-30 flex w-80 flex-col
              overflow-y-auto bg-[#0b0e0c] p-6 md:hidden ${
                dir === "ltr" ? "left-0" : "right-0"
              }`}
          >
            <div className="flex items-center justify-between border-b border-white/10 pb-6">
              <span className="text-xs font-bold tracking-[0.3em] text-secondary">
                {t("common.menu")}
              </span>

              <button
                type="button"
                onClick={onClose}
                aria-label="Close menu"
                className="flex h-10 w-10 items-center justify-center rounded-full
                  border border-white/10 text-xl text-foreground
                  transition-all duration-200
                  hover:border-primary/40 hover:text-primary"
              >
                <LuX />
              </button>
            </div>

            <div className="flex flex-1 flex-col pt-12">
              <NavLinks />

              <div className="mt-auto pt-12">
                <PrimaryButton
                  type="button"
                  className="w-full hover:-translate-y-1 hover:shadow-[0_4px_24px_#c8f36a4d]"
                >
                  <Link
                    to="#"
                    onClick={onClose}
                    className="flex py-3 w-full items-center justify-center"
                  >
                    {t("common.letsTalk")}
                  </Link>
                </PrimaryButton>
              </div>
            </div>

            <div className="mt-8 border-t border-white/10 pt-6">
              <p className="mb-3 text-[10px] font-bold tracking-[0.25em] text-secondary">
                {t("common.language")}
              </p>

              <LanguageSwitcher />
            </div>
          </motion.aside>

          <Overlay click={onClose} className={"md:hidden"} />
        </>
      )}
    </AnimatePresence>
  );
}
