import gsap from "gsap";
import { useTranslation } from "react-i18next";
import { useLayoutEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import worklistArray from "../../data/Worklist";
import PrimaryButton from "../PrimaryButton/PrimaryButton";

gsap.registerPlugin(ScrollTrigger);

export default function WorkList() {
  const { i18n, t } = useTranslation();
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context((self) => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 1024px)", () => {
        gsap.utils.toArray(self.selector(".work-box")).forEach((box) => {
          const image = box.querySelector(".work-image");
          const content = box.querySelector(".work-content");

          const isEven = box.dataset.id % 2 === 0;

          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: box,
              start: "bottom bottom",
              toggleActions: "play none none reverse",
            },
          });

          tl.from(image, {
            x: isEven ? 250 : -250,
            opacity: 0,
            duration: 0.5,
            ease: "power3.out",
          }).from(
            content,
            {
              x: isEven ? -250 : 250,
              opacity: 0,
              duration: 0.5,
              ease: "power3.out",
            },
            "<",
          );
        });
      });

      mm.add("(max-width: 1023px)", () => {
        gsap.utils.toArray(self.selector(".work-box")).forEach((box) => {
          const image = box.querySelector(".work-image");
          const content = box.querySelector(".work-content");

          gsap.from(self.selector(image), {
            scrollTrigger: {
              trigger: image,
              start: "bottom bottom",
              toggleActions: "play none none reverse",
            },
            x: -250,
            opacity: 0,
            ease: "power3.out",
            duration: 0.5,
          });

          gsap.from(self.selector(content), {
            scrollTrigger: {
              trigger: content,
              start: "top 70%",
              toggleActions: "play none none reverse",
            },
            x: -250,
            opacity: 0,
            ease: "power3.out",
            duration: 0.5,
          });
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="flex flex-col gap-y-16">
      {worklistArray.map((work) => {
        return (
          <div
            key={work.id}
            className={`work-box flex flex-col lg:gap-x-12 gap-y-8 ${
              work.id % 2 === 0 ? "lg:flex-row-reverse" : "lg:flex-row"
            }`}
          >
            <div
              className="work-image relative border border-white/10 rounded-2xl overflow-hidden p-2 
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

            <div className="work-content flex flex-col lg:justify-center gap-y-8 lg:w-1/2">
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
                <a
                  href={work.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full h-full flex items-center justify-center sm:px-6"
                >
                  {t("work.project.viewLive")}
                </a>
              </PrimaryButton>
            </div>
          </div>
        );
      })}
    </div>
  );
}
