import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

gsap.registerPlugin(ScrollTrigger);

export default function ContactHeader() {
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

        tl.from(self.selector("#contact-label"), {
          x: -250,
        })
          .from(self.selector("#contact-title"), {
            x: -250,
          })
          .from(
            self.selector("#contact-description"),
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

        tl.from(self.selector("#contact-label"), {
          x: -250,
        })
          .from(self.selector("#contact-title"), {
            x: -250,
          })
          .from(self.selector("#contact-description"), {
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
          id="contact-label"
          className="text-secondary tracking-widest flex items-center gap-x-2.5"
        >
          <span className="w-9 h-px bg-primary inline-block"></span>
          {t("contact.header.label")}
        </span>

        <h2
          id="contact-title"
          className="text-foreground text-5xl lg:text-6xl font-bold max-w-[650px]"
        >
          {t("contact.header.title")}{" "}
          <span className="text-primary">
            {t("contact.header.titleAccent")}
          </span>
        </h2>
      </div>

      <p
        id="contact-description"
        className="text-secondary md:w-130 lg:w-80 lg:leading-7"
      >
        {t("contact.header.description")}
      </p>
    </div>
  );
}
