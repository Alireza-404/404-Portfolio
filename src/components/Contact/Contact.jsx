import ContactHeader from "./ContactHeader";
import ContactContent from "./ContactContent";

export default function Contact() {
  return (
    <section id="contact-section">
      <div className="px-6 2xl:px-40 py-20 flex flex-col gap-y-20">
        <ContactHeader />

        <ContactContent />
      </div>
    </section>
  );
}
