import MoreProjectsFooter from "./MoreProjectsFooter";
import MoreProjectsHeader from "./MoreProjectsHeader";
import MoreProjectsList from "./MoreProjectsList";

export default function MoreProjects() {
  return (
    <section id="more-projects-section">
      <div className="relative px-6 2xl:px-40 py-20 flex flex-col gap-y-20">
        <MoreProjectsHeader />

        <div className="flex flex-col gap-y-6">
          <MoreProjectsList />

          <MoreProjectsFooter />
        </div>
      </div>
    </section>
  );
}
