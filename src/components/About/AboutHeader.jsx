import { useTranslation } from "react-i18next";

export default function AboutHeader() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end gap-y-6">
      <div className="flex flex-col gap-y-6">
        <span className="text-secondary tracking-widest flex items-center gap-x-2.5">
          <span className="w-9 h-px bg-primary inline-block"></span>
          {t("about.header.label")}
        </span>

        <h2 className="text-foreground text-5xl lg:text-6xl font-bold flex flex-col">
          <span>Alireza.</span>
          {t("about.header.title")}
        </h2>
      </div>

      <p className="text-secondary md:w-130 lg:w-80 lg:leading-7">
        {t("about.header.description")}
      </p>
    </div>
  );
}
