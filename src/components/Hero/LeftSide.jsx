import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

import Typewriter from "typewriter-effect";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import { Link } from "react-router-dom";
import SecondaryButton from "../SecondaryButton/SecondaryButton";
import { LuArrowRight } from "react-icons/lu";

export default function LeftSide() {
  const { t, i18n } = useTranslation();

  const start = new Date("2023-12-17");
  const now = new Date();

  const years =
    now.getFullYear() -
    start.getFullYear() -
    (now < new Date(now.getFullYear(), 11, 17) ? 1 : 0);

  const codingYears = `${String(Math.max(1, years)).padStart(2, "0")}+`;

  return (
    <div className="flex flex-col gap-y-8 relative z-10">
      <span className="text-secondary tracking-widest flex items-center gap-x-2.5">
        <span className="w-9 h-px bg-primary inline-block"></span>
        {t("common.frontendDeveloper")}
      </span>

      <h1
        className="text-foreground font-[800] text-[55px] tracking-wider leading-15 
          sm:text-7xl sm:leading-18 select-none sm:w-140 lg:w-auto xl:text-[80px] xl:leading-24"
      >
        {t("hero.beforeTypeWriter")}{" "}
        <span className="text-primary">
          <Typewriter
            options={{
              strings: [
                t("hero.typeWriter.text1"),
                t("hero.typeWriter.text2"),
                t("hero.typeWriter.text3"),
              ],
              autoStart: true,
              loop: true,
              delay: 70,
              deleteSpeed: 40,
              pauseFor: 1800,
              skipAddStyles: true,
              wrapperClassName: "hero-typewriter",
              cursorClassName: "hero-cursor",
            }}
          />
        </span>{" "}
        {t("hero.afterTypeWriter")}
      </h1>

      <motion.p
        className="text-lg text-transparent bg-clip-text bg-gradient-to-r from-secondary via-white 
        to-secondary min-[660px]:w-170 lg:w-auto xl:w-150"
        style={{ backgroundSize: "200% 100%" }}
        animate={{ backgroundPositionX: ["0%", "200%"] }}
        transition={{ duration: 5, repeat: Infinity }}
      >
        {t("hero.description")}
      </motion.p>

      <div className="flex flex-col sm:flex-row gap-4">
        <PrimaryButton
          type={"button"}
          className={"hover:bg-primary/80 h-14 w-full sm:w-auto"}
        >
          <Link
            to={"#"}
            className="w-full h-full flex items-center justify-center sm:px-6"
          >
            {t("common.viewMyWork")}
          </Link>
        </PrimaryButton>

        <SecondaryButton
          type={"button"}
          className={
            "hover:border-white/20 hover:text-white h-14 w-full sm:w-auto"
          }
        >
          <Link
            to={"#"}
            className="w-full h-full flex items-center justify-center gap-x-1 sm:px-6"
          >
            {t("common.letsTalk")}

            <span className="text-lg -rotate-45">
              <LuArrowRight />
            </span>
          </Link>
        </SecondaryButton>
      </div>

      <div className="flex items-center gap-x-5 gap-y-2.5 flex-wrap sm:py-6">
        <span className="text-secondary/80 text-sm flex items-center">
          <span className="text-[22px] text-foreground mr-2">
            {codingYears}
          </span>

          {t("hero.stats.yearsCoding")}
        </span>

        <span className="text-secondary/80 text-sm flex items-center">
          <span className="text-[22px] text-foreground mr-2">06+</span>

          {t("hero.stats.projects")}
        </span>

        <span className="text-secondary/80 text-sm flex items-center">
          <span className="text-lg text-foreground mr-2">∞</span>

          {t("hero.stats.curiosity")}
        </span>
      </div>
    </div>
  );
}
