import HeroSection from "./components/homepage/hero-section";
import Experience from "./components/homepage/experience";
import Skills from "./components/homepage/skills";
import ProjectSection from "./components/homepage/projects";
import ContactSection from "./components/homepage/contact";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <Experience />
      <Skills />
      <ProjectSection />
      <ContactSection />
    </div>
  );
}
