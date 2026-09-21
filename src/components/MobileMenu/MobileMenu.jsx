import { AnimatePresence, motion } from "framer-motion";
import { LuX } from "react-icons/lu";
import { Link } from "react-scroll";
import { useTranslation } from "react-i18next";

import Overlay from "../Overlay/Overlay";
import NavLinks from "../NavLinks/NavLinks";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";

export default function MobileMenu({ isOpen, onClose }) {
  const { t } = useTranslation();

  return (
    <AnimatePresence initial={false}>
      {isOpen && (
        <>
          <motion.aside
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-y-0 z-30 flex w-80 flex-col
              overflow-y-auto bg-[#0b0e0c] p-6 md:hidden left-0"
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
              <NavLinks onClose={onClose} />

              <div className="mt-auto pt-12">
                <PrimaryButton
                  type="button"
                  className="w-full hover:-translate-y-1 hover:shadow-[0_4px_24px_#c8f36a4d]"
                >
                  <Link
                    to={"selected-work-section"}
                    smooth={true}
                    duration={700}
                    className="flex py-3 w-full items-center justify-center"
                    onClick={onClose}
                  >
                    {t("common.viewMyWork")}
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
