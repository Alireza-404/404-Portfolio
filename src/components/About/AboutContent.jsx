import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

gsap.registerPlugin(ScrollTrigger);

export default function AboutContent() {
  const { t } = useTranslation();
  const containerRef = useRef();

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
            opacity: 0,
            ease: "power3.out",
            y: -100,
            duration: 0.5,
          },
        });

        tl.from(self.selector("#about-box-1"), {
          x: -100,
        }).from(
          self.selector("#about-box-2"),
          {
            x: 100,
          },
          "<",
        );
      });

      mm.add("(max-width: 1023px)", () => {
        gsap.from(self.selector("#about-box-1"), {
          scrollTrigger: {
            trigger: "#about-box-1",
            start: "bottom bottom",
            toggleActions: "play none none reverse",
          },
          x: -100,
          opacity: 0,
          ease: "power3.out",
          y: -200,
          duration: 0.5,
        });

        gsap.from(self.selector("#about-box-2"), {
          scrollTrigger: {
            trigger: "#about-box-2",
            start: "bottom bottom",
            toggleActions: "play none none reverse",
          },
          x: 100,
          opacity: 0,
          ease: "power3.out",
          y: -100,
          duration: 0.5,
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="flex flex-col lg:flex-row gap-6">
      <div
        id="about-box-1"
        className="group lg:w-[60%] xl:w-1/2 p-6 border border-white/10 rounded-3xl bg-[#111511]
        flex flex-col lg:justify-around lg:gap-y-0 gap-y-10 hover:border-primary/30 transition-colors duration-200"
      >
        <p className="text-foreground/70 leading-8">
          {t("about.content.beforeClarity")}{" "}
          <strong className="text-foreground">
            {t("about.content.clarity")}
          </strong>
          ,{" "}
          <strong className="text-foreground">
            {t("about.content.performance")}
          </strong>{" "}
          {t("about.content.and")}{" "}
          <strong className="text-foreground">
            {t("about.content.details")}
          </strong>
          . {t("about.content.afterDetails")}
        </p>

        <ul className="flex items-center gap-3 flex-wrap">
          <li
            className="text-xs text-secondary px-3 py-1.5 rounded-full border border-white/10
            hover:text-primary hover:bg-primary/5 hover:border-primary/20
            transition-colors duration-200 cursor-default"
          >
            React
          </li>

          <li
            className="text-xs text-secondary px-3 py-1.5 rounded-full border border-white/10
            hover:text-primary hover:bg-primary/5 hover:border-primary/20
            transition-colors duration-200 cursor-default"
          >
            Next.js
          </li>

          <li
            className="text-xs text-secondary px-3 py-1.5 rounded-full border border-white/10
            hover:text-primary hover:bg-primary/5 hover:border-primary/20
            transition-colors duration-200 cursor-default"
          >
            TypeScript
          </li>

          <li
            className="text-xs text-secondary px-3 py-1.5 rounded-full border border-white/10
            hover:text-primary hover:bg-primary/5 hover:border-primary/20
            transition-colors duration-200 cursor-default"
          >
            {t("about.content.modernFrontend")}
          </li>
        </ul>

        <div className="flex flex-col gap-y-2">
          <div className="flex flex-col gap-y-1 w-fit">
            <span className="text-3xl lg:text-4xl font-bold text-foreground">
              Alireza Shabani
            </span>

            <span
              className="h-px w-full bg-primary xl:inline-block hidden scale-x-0 group-hover:scale-x-100
                transition-transform duration-200"
            ></span>
          </div>

          <span className="text-sm text-secondary">
            {t("about.header.title")}
          </span>
        </div>
      </div>

      <div
        id="about-box-2"
        className="relative lg:w-[40%] xl:w-1/2 p-6 border border-white/10 rounded-3xl bg-[#111511]
        h-96 lg:h-110 overflow-hidden hover:border-primary/30 transition-colors duration-200"
      >
        <div
          className="absolute w-66 h-66 border border-white/10 rounded-full
          -right-16 top-1/2 -translate-y-1/2 z-10"
        />

        <div
          className="absolute w-38 h-38 border border-white/10 rounded-full
          right-6 top-1/2 -translate-y-1/2 z-10"
        />

        <div className="absolute w-28 h-28 rounded-full bg-primary/15 top-2 right-16 blur-2xl z-0" />

        <span
          className="absolute text-7xl sm:text-8xl lg:text-9xl text-foreground
          font-bold opacity-5 top-10 tracking-tighter select-none"
        >
          {t("about.visual.create")}
        </span>

        <div className="group relative z-20 flex flex-col justify-center gap-y-4 md:gap-y-6 mt-10 h-full">
          <span className="text-xs sm:text-sm text-primary">
            {t("about.visual.designCode")}
          </span>

          <p className="text-2xl sm:text-3xl text-foreground">
            {t("about.visual.title")}
          </p>

          <div
            className="flex items-center gap-x-2.5 bg-[#111511d1] w-fit px-3 py-2 rounded-full border border-white/10
            group-hover:ml-6 transition-all duration-200"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
            <span className="text-[10px] md:text-xs text-foreground">
              {t("about.visual.responsive")}
            </span>
          </div>

          <div className="flex justify-end w-full">
            <div
              className="flex items-center gap-x-2.5 bg-[#111511d1] w-fit px-3 py-2 rounded-full border 
                border-white/10 group-hover:mr-6 transition-all duration-200"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
              <span className="text-[10px] md:text-xs text-foreground">
                {t("about.visual.detailsMatter")}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
