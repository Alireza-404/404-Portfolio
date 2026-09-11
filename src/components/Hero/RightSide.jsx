import { useTranslation } from "react-i18next";

export default function RightSide() {
  const { t, i18n } = useTranslation();

  return (
    <div className="relative z-10 h-fit xl:w-fit xl:mx-auto" dir="ltr">
      <div
        className={`w-[87%] xl:w-160 mx-auto rounded-3xl border border-white/10 overflow-hidden
          h-82 lg:h-150
            ${i18n.language.startsWith("de") ? "xl:h-135" : "xl:h-125"}`}
      >
        <div className="grid-layer w-full h-full"></div>
      </div>

      <div
        className="absolute -bottom-2.5 -left-1 flex items-center gap-x-2.5 bg-[#111511] w-fit px-4 py-3
        rounded-full border border-white/10 z-20"
      >
        <span className="w-2 h-2 rounded-full bg-primary"></span>

        <span className="text-xs text-foreground lg:text-sm">
          {t("hero.rightSide.interestingProjects")}
        </span>
      </div>

      <div
        className="absolute w-36 md:w-52 lg:w-auto -right-3 lg:right-12 -bottom-4 lg:bottom-5 -rotate-3 bg-primary
        rounded-2xl flex flex-col gap-y-2 p-5 z-10"
      >
        <span className="font-medium lg:text-2xl">{t("hero.build.title")}</span>
        <span className="text-xs font-normal lg:text-base lg:w-44 leading-7">
          {t("hero.build.subtitle")}
        </span>
      </div>

      <div
        className="absolute top-2 right-0 w-44 lg:w-66 p-6 rounded-2xl bg-[#141914] flex flex-col gap-y-2.5 xl:gap-y-5
        border border-white/10 rotate-4 z-10"
      >
        <span className="text-xs text-secondary flex items-center justify-between">
          component.jsx
          <span className="w-2 h-2 rounded-full bg-primary inline-block animate-pulse"></span>
        </span>

        <div className="flex flex-col gap-y-2.5 w-full">
          <div className="h-2 w-[85%] rounded-full bg-secondary/20 animate-pulse"></div>
          <div className="h-2 w-[65%] rounded-full bg-primary/40 animate-pulse"></div>
          <div className="h-2 w-[70%] rounded-full bg-secondary/20 animate-pulse"></div>
          <div className="h-2 w-[80%] rounded-full bg-secondary/20 animate-pulse"></div>
          <div className="h-2 w-[40%] rounded-full bg-secondary/20 animate-pulse"></div>
          <div className="h-2 w-[60%] rounded-full bg-secondary/20 animate-pulse"></div>
        </div>
      </div>

      <div
        className="absolute w-[90%] left-0 top-10 lg:top-20 xl:top-5 -rotate-5 rounded-2xl
        overflow-hidden border border-white/10"
      >
        <div className="bg-[#151a15] flex items-center gap-x-4 p-4 border-b border-white/10">
          <div className="flex items-center gap-x-1">
            <div className="w-2 h-2 rounded-full bg-secondary"></div>
            <div className="w-2 h-2 rounded-full bg-secondary"></div>
            <div className="w-2 h-2 rounded-full bg-secondary"></div>
          </div>

          <span className="text-secondary text-xs">
            portfolio.dev / selected-work
          </span>
        </div>

        <div className="bg-[#0e120e] grid grid-cols-3 gap-x-6">
          <div className="flex flex-col gap-y-10 pl-4 px-4 py-7 md:py-10 border-r border-white/10">
            <div className="w-6.5 h-6.5 flex items-center justify-center text-sm rounded font-semibold bg-primary">
              A
            </div>

            <div className="flex flex-col gap-y-4">
              <div className="h-2 w-[90%] rounded-full bg-primary/40 animate-pulse"></div>
              <div className="h-2 w-[70%] rounded-full bg-secondary/20 animate-pulse"></div>
              <div className="h-2 w-[70%] rounded-full bg-secondary/20 animate-pulse"></div>
              <div className="h-2 w-[70%] rounded-full bg-secondary/20 animate-pulse"></div>
            </div>
          </div>

          <div className="flex flex-col gap-y-6 px-4 py-7 md:py-10 col-span-2">
            <div className="h-2 w-[30%] rounded-full bg-secondary/20 animate-pulse"></div>

            <div className="flex flex-col gap-y-3">
              <div className="h-7 w-full rounded-lg bg-foreground animate-pulse"></div>
              <div className="h-7 w-[50%] rounded-lg bg-foreground animate-pulse"></div>
            </div>

            <div className="flex flex-col gap-y-3">
              <div className="h-2 w-[60%] rounded-full bg-secondary/20 animate-pulse"></div>
              <div className="h-2 w-[90%] rounded-full bg-secondary/20 animate-pulse"></div>
            </div>

            <div className="h-7 w-[50%] rounded-lg bg-primary lg:block hidden animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
