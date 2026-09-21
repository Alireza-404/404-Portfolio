import gsap from "gsap";
import { LuArrowRight, LuGithub } from "react-icons/lu";
import { useTranslation } from "react-i18next";
import { useLayoutEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function MoreProjectsFooter() {
  const { t } = useTranslation();
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context((self) => {
      gsap.from(containerRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "bottom bottom",
          toggleActions: "play none none reverse",
        },
        y: 100,
        opacity: 0,
        ease: "power3.out",
        duration: 0.5,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <a
      ref={containerRef}
      href="https://github.com/Alireza-404"
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-start gap-x-4 bg-[#111511] p-4 rounded-2xl border border-white/10"
    >
      <span
        className="border border-primary/50 rounded-full w-9 h-9 text-primary
        flex items-center justify-center text-xs shrink-0"
      >
        GH
      </span>

      <div className="flex flex-col sm:flex-row sm:justify-between w-full gap-y-6">
        <div className="flex flex-col gap-y-1">
          <span className="text-foreground text-sm font-semibold flex items-center gap-x-1">
            {t("moreProjects.footer.title")}
            <span>
              <LuGithub />
            </span>
          </span>

          <span className="text-xs text-secondary">
            {t("moreProjects.footer.description")}
          </span>
        </div>

        <span
          className="text-neutral-600 text-xs group-hover:text-foreground transition-colors
          duration-200 flex items-center gap-x-1"
        >
          {t("moreProjects.footer.viewGithub")}
          <LuArrowRight
            className="-rotate-45 text-sm text-primary/30 group-hover:text-primary
            transition-colors duration-200"
          />
        </span>
      </div>
    </a>
  );
}
