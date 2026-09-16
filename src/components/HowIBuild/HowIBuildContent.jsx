import { useTranslation } from "react-i18next";
import { HowIBuildDataArray } from "../../data/HowIBuildData";

export default function HowIBuildContent() {
  const { t, i18n } = useTranslation();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <div
        className="group relative px-6 py-9 bg-[#111511] border border-white/10 rounded-2xl
        flex flex-col justify-between gap-y-24 sm:gap-y-38 overflow-hidden sm:col-span-2
        lg:col-span-1 lg:row-span-2"
      >
        <span className="text-xs text-neutral-600">
          {t("howIBuild.principle.label")}
        </span>

        <h3
          className="text-foreground text-[32px] lg:text-4xl xl:text-[44px] leading-10
          lg:leading-11 xl:leading-15"
        >
          {t("howIBuild.principle.before")}{" "}
          <span className="text-primary">
            {t("howIBuild.principle.highlight")}
          </span>
          . {t("howIBuild.principle.after")}
        </h3>

        <div
          className="absolute w-1/3 h-1/3 md:w-70 md:h-50 lg:h-76 lg:w-76 rounded-full
            bg-primary/10 top-2 left-4 blur-2xl z-0"
        ></div>

        <div
          className="absolute w-62 h-62 border border-white/10 rounded-full -bottom-20
            -right-20 z-10"
        ></div>
      </div>

      {HowIBuildDataArray.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.id}
            className="group relative px-6 py-9 bg-[#111511] border border-white/10 rounded-2xl
              flex flex-col justify-between gap-y-18 overflow-hidden"
          >
            <div className="flex items-center justify-between">
              <span
                className="text-neutral-600 text-xs transition-all duration-300
                group-hover:text-primary group-hover:drop-shadow-[0_0_12px_#c8f36a80]"
              >
                0{item.id}
              </span>

              <div
                className="w-10 h-10 border border-white/10 rounded-full flex items-center
                  justify-center"
              >
                <Icon className="text-primary text-lg" />
              </div>
            </div>

            <div className="flex flex-col gap-y-1.5">
              <h3 className="text-2xl text-foreground font-bold">
                {i18n.language.startsWith("en") ? item.title_en : item.title_de}
              </h3>

              <p className="text-secondary text-sm">
                {i18n.language.startsWith("en")
                  ? item.description_en
                  : item.description_de}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
