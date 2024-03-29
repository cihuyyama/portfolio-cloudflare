import AboutSection from "@/components/AboutSection";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";

export default function Home() {
  return (
    <main className="bg-white">
      <HeroSection/>
      <AboutSection/>
      <ProjectsSection/>
    </main>
  );
}
