import { useTranslation } from "react-i18next";
import { principlesArray } from "../../data/PrinciplesData";
import { skillsAndStackArray } from "../../data/SkillsAndStack";

export default function SkillsAndStackContent() {
  const { t, i18n } = useTranslation();

  return (
    <div className="flex flex-col gap-y-6">
      <div className="flex flex-col lg:flex-row gap-6">
        <div
          className="group relative px-6 py-9 bg-[#111511] border border-white/10 rounded-2xl 
            flex flex-col justify-between gap-y-12 overflow-hidden lg:w-[37%]"
        >
          <span className="text-neutral-600 text-xs">
            {t("skillsStack.content.toolkit")}
          </span>

          <div className="flex flex-col gap-y-5">
            <span className="text-xs text-primary">
              {t("skillsStack.content.coreExpertise")}
            </span>

            <h3 className="text-foreground text-4xl lg:text-6xl lg:leading-19 font-bold">
              {t("skillsStack.content.title")}
            </h3>

            <p className="text-sm text-secondary lg:leading-7">
              {t("skillsStack.content.description")}
            </p>
          </div>

          <div
            className="absolute w-58 lg:w-70 h-58 lg:h-70 border border-white/10 rounded-full top-1/2 
            lg:top-50 right-0 lg:right-10 -translate-y-1/2 translate-x-1/2"
          ></div>

          <div
            className="absolute w-40 lg:w-52 h-40 lg:h-52 border border-white/10 rounded-full top-1/2 
            lg:top-50 right-0 lg:right-10 -translate-y-1/2 translate-x-1/2"
          ></div>

          <div
            className="absolute w-2.5 h-2.5 border bg-primary rounded-full top-[45%] lg:top-40 
            right-20 lg:right-36 -translate-y-1/2"
          ></div>

          <div
            className="absolute w-40 h-40 lg:w-55 lg:h-55 rounded-full bg-primary/10 top-2 right-4 
            blur-2xl z-0"
          ></div>
        </div>

        <div className="flex flex-col gap-y-6 lg:w-[63%]">
          {skillsAndStackArray.map((item) => (
            <div
              key={item.id}
              className="group p-6 bg-[#111511] border border-white/10 rounded-2xl 
                flex flex-col gap-y-5 hover:border-primary/30 transition-colors duration-200"
            >
              <div className="flex items-center justify-between">
                <h3
                  className="text-foreground font-bold flex items-center gap-x-2.5 
                    lg:text-lg"
                >
                  <span
                    className="h-5 w-1 inline-block bg-primary/40 rounded-full 
                    group-hover:bg-primary transition-colors duration-200"
                  ></span>

                  {item.title}
                </h3>

                <span
                  className="text-neutral-600 text-xs transition-all duration-200 
                    group-hover:text-primary group-hover:drop-shadow-[0_0_12px_#c8f36a80]"
                >
                  0{item.id}
                </span>
              </div>

              <ul className="flex items-center flex-wrap gap-3">
                {item.skills.map((skill) => (
                  <li
                    key={skill}
                    className="text-xs text-secondary p-2 border border-white/10 rounded-lg 
                      hover:text-primary hover:border-primary/20 hover:bg-primary/5 
                      transition-colors duration-200 select-none"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {principlesArray.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.id}
              className="p-6 bg-[#111511] border border-white/10 rounded-2xl flex flex-col 
                gap-y-6"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs text-secondary">
                  {i18n.language.startsWith("en")
                    ? item.label_en
                    : item.label_de}
                </span>

                <Icon className="text-primary text-sm" />
              </div>

              <span className="text-foreground text-xl font-bold lg:text-2xl">
                {i18n.language.startsWith("en") ? item.title_en : item.title_de}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
