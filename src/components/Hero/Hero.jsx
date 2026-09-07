import LeftSide from "./LeftSide";
import RightSide from "./RightSide";

export default function Hero() {
  return (
    <section id="hero-section">
      <div
        className="relative px-6 2xl:px-40 py-20 grid grid-cols-1 lg:grid-cols-2 gap-y-12
        lg:gap-x-6 items-center"
      >
        <LeftSide />

        <RightSide />

        <div
          className="w-111 h-111 rounded-full bg-primary/2 absolute top-10 -right-20
          blur-3xl z-0"
        ></div>
      </div>
    </section>
  );
}
