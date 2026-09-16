import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import worklistArray from "../../data/Worklist";
import PrimaryButton from "../PrimaryButton/PrimaryButton";

export default function WorkList() {
  const { i18n, t } = useTranslation();

  return (
    <div className="flex flex-col gap-y-16">
      {worklistArray.map((work) => {
        return (
          <div
            key={work.id}
            className={`flex flex-col lg:gap-x-12 gap-y-8 ${
              work.id % 2 === 0 ? "lg:flex-row-reverse" : "lg:flex-row"
            }`}
          >
            <div
              className="relative border border-white/10 rounded-2xl overflow-hidden p-2 
                w-full lg:w-1/2 h-fit"
            >
              <img
                src={work.src}
                alt={
                  i18n.language.startsWith("en") ? work.title_en : work.title_de
                }
                className="relative z-10 w-full rounded-2xl object-cover select-none"
              />

              <div
                className={`absolute left-0 bottom-0 w-[120%] h-[120%] bg-primary/30 blur-3xl 
                translate-y-1/2 ${
                  work.id % 2 === 0 ? "translate-x-1/2" : "-translate-x-1/2"
                }`}
              ></div>
            </div>

            <div className="flex flex-col lg:justify-center gap-y-8 lg:w-1/2">
              <span className="text-neutral-600 text-sm">
                <span className="text-primary">0{work.id}</span> / 0
                {worklistArray.length}
              </span>

              <h3 className="text-3xl lg:text-4xl lg:leading-12 font-bold text-foreground">
                {i18n.language.startsWith("en") ? work.title_en : work.title_de}
              </h3>

              <p className="text-secondary text-sm leading-7 max-w-160">
                {i18n.language.startsWith("en")
                  ? work.description_en
                  : work.description_de}
              </p>

              <ul className="flex items-center gap-3 flex-wrap">
                {work.tags.map((tag, i) => (
                  <li
                    key={i}
                    className="text-xs text-secondary px-3 py-1.5 rounded-full border border-white/10
                    hover:text-primary hover:border-primary/20 hover:bg-primary/5
                    transition-colors duration-200 select-none"
                  >
                    {tag}
                  </li>
                ))}
              </ul>

              <PrimaryButton
                type={"button"}
                className={"hover:bg-primary/80 h-12 px-6 w-fit text-sm"}
              >
                <Link
                  to={work.liveUrl}
                  target="_blank"
                  className="w-full h-full flex items-center justify-center sm:px-6"
                >
                  {t("work.project.viewLive")}
                </Link>
              </PrimaryButton>
            </div>
          </div>
        );
      })}
    </div>
  );
}
