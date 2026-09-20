import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

gsap.registerPlugin(ScrollTrigger);

export default function AboutHeader() {
  const { t } = useTranslation();
  const containerRef = useRef(null);

  const getAge = () => {
    const birthDate = new Date(2010, 5, 2);
    const today = new Date();

    let age = today.getFullYear() - birthDate.getFullYear();

    const hasHadBirthday =
      today.getMonth() > birthDate.getMonth() ||
      (today.getMonth() === birthDate.getMonth() &&
        today.getDate() >= birthDate.getDate());

    if (!hasHadBirthday) age--;

    return age;
  };

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

        tl.from(self.selector("#about-label"), {
          x: -250,
        })
          .from(self.selector("#about-title"), {
            x: -250,
          })
          .from(
            self.selector("#about-description"),
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

        tl.from(self.selector("#about-label"), {
          x: -250,
        })
          .from(self.selector("#about-title"), {
            x: -250,
          })
          .from(self.selector("#about-description"), {
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
      className="flex flex-col lg:flex-row lg:justify-between lg:items-end gap-y-6"
    >
      <div className="flex flex-col gap-y-6">
        <span
          id="about-label"
          className="text-secondary tracking-widest flex items-center gap-x-2.5"
        >
          <span className="w-9 h-px bg-primary inline-block"></span>
          {t("about.header.label")}
        </span>

        <h2
          id="about-title"
          className="text-foreground text-5xl lg:text-6xl font-bold flex flex-col"
        >
          <span>{`Alireza.${getAge()}`}</span>
          {t("about.header.title")}
        </h2>
      </div>

      <p
        id="about-description"
        className="text-secondary md:w-130 lg:w-80 lg:leading-7"
      >
        {t("about.header.description")}
      </p>
    </div>
  );
}
