import { moreProjectsArray } from "../../data/MoreProjects";
import { useTranslation } from "react-i18next";
import Tilt from "react-parallax-tilt";

export default function MoreProjectsList() {
  const { i18n } = useTranslation();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      {moreProjectsArray.map((project) => (
        <Tilt key={project.id} tiltMaxAngleX={9.5} tiltMaxAngleY={9.5}>
          <a
            key={project.id}
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-[#111511] border border-white/10 rounded-2xl p-4
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
