import { LuArrowUpRight } from "react-icons/lu";
import { useTranslation } from "react-i18next";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

export default function ContactContent() {
  const { t } = useTranslation();
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 1024px)", () => {
        gsap.from(containerRef.current, {
          scrollTrigger: {
            trigger: containerRef.current,
            start: "bottom bottom",
            toggleActions: "play none none reverse",
          },
          scale: 0.6,
          opacity: 0,
          ease: "power3.out",
          duration: 0.5,
        });
      });

      mm.add("(max-width: 1023px)", () => {
        gsap.from(containerRef.current, {
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 73%",
            toggleActions: "play none none reverse",
          },
          scale: 0.6,
          opacity: 0,
          ease: "power3.out",
          duration: 0.5,
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="flex flex-col lg:flex-row overflow-hidden border border-white/10 rounded-2xl bg-[#111511]"
    >
      <div
        className="flex flex-col gap-y-16 border-b border-white/10
        lg:border-b-0 lg:border-r p-6 lg:p-12 lg:w-1/2"
      >
        <span className="text-xs lg:text-sm text-primary">
          {t("contact.content.startConversation")}
        </span>

        <p className="text-3xl lg:text-4xl text-foreground">
          {t("contact.content.title")}{" "}
          <span className="text-foreground/55">
            {t("contact.content.titleAccent")}
          </span>
        </p>

        <a
          href="mailto:alireza.shabaniii.404@gmail.com"
          className="group p-4 border border-primary/20 bg-primary/5 rounded-full text-xs
          flex items-center gap-x-4 w-fit text-foreground hover:bg-primary
          hover:border-primary hover:-translate-y-1.5 hover:text-neutral-900
          transition-all duration-200"
        >
          alireza.shabaniii.404@gmail.com
          <span
            className="p-3 rounded-full bg-primary text-neutral-900 text-sm
            group-hover:text-primary group-hover:bg-neutral-900"
          >
            <LuArrowUpRight />
          </span>
        </a>
      </div>

      <div className="relative flex flex-col gap-y-16 justify-between p-6 lg:p-12 overflow-hidden lg:w-1/2">
        <span className="text-xs lg:text-sm text-secondary">
          {t("contact.content.findOnline")}
        </span>

        <ul className="flex flex-col gap-y-2.5">
          <li>
            <a
              href="https://github.com/Alireza-404"
              target="_blank"
              rel="noopener noreferrer"
              className="group text-secondary flex items-center text-xs lg:text-sm hover:text-foreground transition-colors duration-200"
            >
              <span
                className="w-1.5 h-1.5 bg-neutral-600 inline-block rounded-full mr-2.5
                group-hover:bg-primary transition-colors duration-200"
              />
              GitHub
              <span className="ml-1.5">
                <LuArrowUpRight />
              </span>
            </a>
          </li>

          <li>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="group text-secondary flex items-center text-xs lg:text-sm hover:text-foreground transition-colors duration-200"
            >
              <span
                className="w-1.5 h-1.5 bg-neutral-600 inline-block rounded-full mr-2.5
                group-hover:bg-primary transition-colors duration-200"
              />
              LinkedIn
              <span className="ml-1.5">
                <LuArrowUpRight />
              </span>
            </a>
          </li>

          <li>
            <a
              href="mailto:alireza.shabaniii.404@gmail.com"
              className="group text-secondary flex items-center text-xs lg:text-sm hover:text-foreground transition-colors duration-200"
            >
              <span
                className="w-1.5 h-1.5 bg-neutral-600 inline-block rounded-full mr-2.5
                group-hover:bg-primary transition-colors duration-200"
              />
              Email
              <span className="ml-1.5">
                <LuArrowUpRight />
              </span>
            </a>
          </li>

          <li>
            <a
              href="tel:+989044770260"
              className="group text-secondary flex items-center text-xs lg:text-sm hover:text-foreground transition-colors duration-200"
            >
              <span
                className="w-1.5 h-1.5 bg-neutral-600 inline-block rounded-full mr-2.5
                group-hover:bg-primary transition-colors duration-200"
              />
              +98 904 477 0260
              <span className="ml-1.5">
                <LuArrowUpRight />
              </span>
            </a>
          </li>
        </ul>

        <div className="flex items-center gap-x-2.5">
          <div
            className="h-2 w-2 bg-primary rounded-full
            shadow-[0_0px_16px_0.5px_#c8f36a] animate-pulse"
          />

          <span className="text-secondary text-xs lg:text-sm">
            {t("contact.content.availability")}
          </span>
        </div>

        <div
          className="absolute w-64 h-64 sm:w-78 sm:h-78 lg:w-101 lg:h-101
          border border-white/10 rounded-full top-1/2 -right-24 -translate-y-1/2"
        />

        <div
          className="absolute w-46 h-46 sm:w-54 sm:h-54 lg:w-70 lg:h-70
          border border-white/10 rounded-full top-1/2 -right-14 -translate-y-1/2"
        />

        <div
          className="absolute w-2.5 h-2.5 border bg-primary rounded-full
          top-[41%] lg:top-[30%] right-30 sm:right-38 lg:right-52
          -translate-y-1/2"
        />
      </div>
    </div>
  );
}
