import SectionHeading from "./SectionHeading";
import Fact from "./Fact";

export default function AboutSection() {
  return (
    <section id="about" className="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16">
      <SectionHeading title="About" subtitle="A little about who I am." />
      <p className="mt-6 max-w-2xl leading-relaxed text-stone-700">
        I'm from Bogo City, Cebu, and I'm currently a third year BSIT student at Cebu
        Institute of Technology. I enjoy building things end-to-end — from web apps in
        React to mobile apps in React Native — and I'm always looking for the next project
        to learn something new from.
      </p>
      <dl className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-4">
        <Fact label="Course" value="BS Information Technology" />
        <Fact label="Year level" value="Third year" />
        <Fact label="School" value="Cebu Institute of Technology" />
        <Fact label="Based in" value="Cebu City" />
      </dl>
    </section>
  );
}
