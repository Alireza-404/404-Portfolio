import AboutContent from "./AboutContent";
import AboutHeader from "./AboutHeader";

export default function About() {
  return (
    <section id="about-section">
      <div className="relative px-6 2xl:px-40 py-20 flex flex-col gap-y-20">
        <AboutHeader />

        <AboutContent />
      </div>
    </section>
  );
}
