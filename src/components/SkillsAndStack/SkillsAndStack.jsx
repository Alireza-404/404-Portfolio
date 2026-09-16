import SkillsAndStackContent from "./SkillsAndStackContent";
import SkillsAndStackHeader from "./SkillsAndStackHeader";

export default function SkillsAndStack() {
  return (
    <section id="skills-and-stack-section">
      <div className="px-6 2xl:px-40 py-20 flex flex-col gap-y-20">
        <SkillsAndStackHeader />

        <SkillsAndStackContent />
      </div>
    </section>
  );
}
