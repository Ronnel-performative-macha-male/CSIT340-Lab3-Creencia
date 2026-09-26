import SectionHeading from "./SectionHeading";
import ContactLink from "./ContactLink";

export default function ContactSection() {
  return (
    <section id="contact" className="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16">
      <SectionHeading title="Contact" subtitle="Say hi." />
      <ul className="mt-8 space-y-3">
        <ContactLink label="Email" href="mailto:crmchs.creencia.ronnell@gmail.com" text="crmchs.creencia.ronnell@gmail.com" />
        <ContactLink label="GitHub" href="https://github.com/Ronnel-performative-macha-male" text="github.com/Ronnel-performative-macha-male" />
        <ContactLink label="LinkedIn" href="https://www.linkedin.com/in/ronnel-creencia-b67a7243a/" text="linkedin.com/in/ronnel-creencia-b67a7243a" />
      </ul>
    </section>
  );
}
