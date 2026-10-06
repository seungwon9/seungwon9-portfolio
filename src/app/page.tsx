import { ContactSection } from "@/components/home/contact-section";
import { ExperienceSection } from "@/components/home/experience-section";
import { FeaturedProjects } from "@/components/home/featured-projects";
import { HeroSection } from "@/components/home/hero-section";
import { SkillsSection } from "@/components/home/skills-section";
import { getPublishedProjects } from "@/lib/projects";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturedProjects projects={getPublishedProjects()} />
      <ExperienceSection />
      <SkillsSection />
      <ContactSection />
    </>
  );
}
