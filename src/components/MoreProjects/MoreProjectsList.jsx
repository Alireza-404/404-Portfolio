import gsap from "gsap";
import Tilt from "react-parallax-tilt";

import { useLayoutEffect, useRef } from "react";
import { moreProjectsArray } from "../../data/MoreProjects";
import { useTranslation } from "react-i18next";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function MoreProjectsList() {
  const { i18n } = useTranslation();
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context((self) => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 768px)", () => {
        gsap.from(self.selector(".more-projects-box"), {
          scrollTrigger: {
            trigger: containerRef.current,
            start: "bottom bottom",
            toggleActions: "play none none reverse",
          },
          y: -100,
          opacity: 0,
          ease: "power3.out",
          duration: 0.5,
          stagger: 0.2,
        });
      });

      mm.add("(max-width: 767px)", () => {
        gsap.utils
          .toArray(self.selector(".more-projects-box"))
          .forEach((box) => {
            gsap.from(box, {
              scrollTrigger: {
                trigger: box,
                start: "top 70%",
                toggleActions: "play none none reverse",
              },
              y: -100,
              opacity: 0,
              ease: "power3.out",
              duration: 0.6,
            });
          });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
    >
      {moreProjectsArray.map((project) => (
        <Tilt key={project.id} tiltMaxAngleX={9.5} tiltMaxAngleY={9.5}>
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="more-projects-box group bg-[#111511] border border-white/10 rounded-2xl p-4
            hover:border-primary/30 transition-colors duration-200 flex flex-col gap-y-4"
          >
            <div>
              <img
                src={project.src}
                alt={
                  i18n.language.startsWith("en")
                    ? project.title_en
                    : project.title_de
                }
                className="rounded-2xl select-none"
              />
            </div>

            <div className="flex flex-col gap-y-4">
              <h3 className="text-foreground font-semibold text-lg xl:text-xl">
                {i18n.language.startsWith("en")
                  ? project.title_en
                  : project.title_de}
              </h3>

              <ul className="flex items-center gap-3 flex-wrap">
                {project.tags.map((tag, i) => (
                  <li
                    key={i}
                    className="text-xs text-secondary px-3 py-1.5 rounded-full border border-white/10
                    hover:text-primary hover:border-primary/20 hover:bg-primary/5
                    transition-colors duration-200 cursor-default select-none"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
          </a>
        </Tilt>
      ))}
    </div>
  );
}
