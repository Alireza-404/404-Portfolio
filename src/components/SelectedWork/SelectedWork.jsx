import WorkHeader from "./WorkHeader";
import WorkList from "./WorkList";

export default function SelectedWork() {
  return (
    <section id="selected-work-section">
      <div className="relative px-6 2xl:px-40 py-20 flex flex-col gap-y-20">
        <WorkHeader />

        <WorkList />
      </div>
    </section>
  );
}
