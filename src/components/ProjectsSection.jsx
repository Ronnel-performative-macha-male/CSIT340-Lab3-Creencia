import SectionHeading from "./SectionHeading";
import ProjectCard from "./ProjectCard";

export default function ProjectsSection() {
  return (
    <section id="projects" className="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16">
      <SectionHeading title="Projects" subtitle="Things I have built." />
      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        <ProjectCard
          year="2026"
          title="About Me in React"
          description="This portfolio site, built with React and Tailwind CSS for CSIT340."
          tech="React · Tailwind CSS"
          link="https://github.com/Ronnel-performative-macha-male/CSIT340G7-Lab3-Creencia.git"
        />
       
      </div>
    </section>
  );
}
