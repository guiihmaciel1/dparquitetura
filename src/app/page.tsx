import {
  HeroSection,
  AboutPreview,
  ProjectsPreview,
  ServicesPreview,
  TestimonialsSection,
  InstagramFeed,
  CTASection,
} from "@/components/sections";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutPreview />
      <ProjectsPreview />
      <ServicesPreview />
      <TestimonialsSection />
      <InstagramFeed />
      <CTASection />
    </>
  );
}
