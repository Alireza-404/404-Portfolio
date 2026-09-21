import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

gsap.registerPlugin(ScrollTrigger);

export default function WorkHeader() {
  const { t } = useTranslation();
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context((self) => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 1024px)", () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "bottom bottom",
            toggleActions: "play none none reverse",
          },
          defaults: {
            duration: 0.4,
            ease: "power3.out",
            opacity: 0,
          },
        });

        tl.from(self.selector("#selected-work-label"), {
          x: -250,
        })
          .from(self.selector("#selected-work-title"), {
            x: -250,
          })
          .from(
            self.selector("#selected-work-description"),
            {
              x: 250,
            },
            "<",
          );
      });

      mm.add("(max-width: 1023px)", () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
          defaults: {
            duration: 0.4,
            ease: "power3.out",
            opacity: 0,
          },
        });

        tl.from(self.selector("#selected-work-label"), {
          x: -250,
        })
          .from(self.selector("#selected-work-title"), {
            x: -250,
          })
          .from(self.selector("#selected-work-description"), {
            x: -250,
          });
      });

      return () => mm.revert();
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="flex flex-col lg:flex-row lg:justify-between lg:items-end lg:gap-x-12 gap-y-6"
    >
      <div className="flex flex-col gap-y-6">
        <span
          id="selected-work-label"
          className="text-secondary tracking-widest flex items-center gap-x-2.5"
        >
          <span className="w-9 h-px bg-primary inline-block"></span>
          {t("work.header.label")}
        </span>

        <h2
          id="selected-work-title"
          className="text-foreground text-5xl lg:text-6xl font-bold"
        >
          {t("work.header.title")}{" "}
          <span className="text-primary">{t("work.header.titleAccent")}</span>
        </h2>
      </div>

      <p
        id="selected-work-description"
        className="text-secondary md:w-130 lg:w-80 lg:leading-7"
      >
        {t("work.header.description")}
      </p>
    </div>
  );
}
