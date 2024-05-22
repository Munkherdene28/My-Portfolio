import HeroSection from "./components/homepage/hero-section";
import Skills from "./components/homepage/skills";
import ProjectSection from "./components/homepage/projects";
import ContactSection from "./components/homepage/contact";
export default function Home() {
  return (
    <div>
      <HeroSection />
      <Skills />
      <ProjectSection />
      <ContactSection />
    </div>
  );
}
