import HowIBuildHeader from "./HowBuildHeader";
import HowIBuildContent from "./HowIBuildContent";

export default function HowIBuild() {
  return (
    <section id="selected-work-section">
      <div className="px-6 2xl:px-40 py-20 flex flex-col gap-y-20">
        <HowIBuildHeader />

        <HowIBuildContent />
      </div>
    </section>
  );
}
