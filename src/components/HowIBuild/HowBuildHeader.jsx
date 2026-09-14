import { useTranslation } from "react-i18next";

export default function HowIBuildHeader() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end lg:gap-x-12 gap-y-6">
      <div className="flex flex-col gap-y-6">
        <span className="text-secondary tracking-widest flex items-center gap-x-2.5">
          <span className="w-9 h-px bg-primary inline-block"></span>
          {t("howIBuild.header.label")}
        </span>

        <h2 className="text-foreground text-5xl lg:text-6xl font-bold max-w-[650px]">
          {t("howIBuild.header.title")}{" "}
          <span className="text-primary">
            {t("howIBuild.header.titleAccent")}
          </span>
        </h2>
      </div>

      <p className="text-secondary md:w-130 lg:w-80 lg:leading-7">
        {t("howIBuild.header.description")}
      </p>
    </div>
  );
}
