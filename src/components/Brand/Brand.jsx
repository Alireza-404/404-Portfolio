import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function Brand() {
  const { t } = useTranslation();

  return (
    <Link to={"#"} className="flex items-center gap-x-3 select-none">
      <div
        className="border border-primary/50 rounded-lg w-10 h-10 font-bold text-primary
                    flex items-center justify-center text-[15px]"
      >
        FE
      </div>

      <span className="text-foreground font-bold text-lg">
        {t("brand.title")}
      </span>
    </Link>
  );
}
