import { ExperienceSection } from "@/components/home/experience-section";
import { FieldExperienceSection } from "@/components/home/field-experience-section";
import { FeaturedProjects } from "@/components/home/featured-projects";
import { HeroSection } from "@/components/home/hero-section";
import { SkillsSection } from "@/components/home/skills-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <SkillsSection />
      <ExperienceSection />
      <FieldExperienceSection />
      <FeaturedProjects />
    </>
  );
}
