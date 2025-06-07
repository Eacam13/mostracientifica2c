/* File: pages/index.tsx */
import HeroSection from "@/components/hero";
import AboutSection from "@/components/about";
import FeaturesSection from "@/components/feature";
import TestimonialsSection from "@/components/testimonials";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <TestimonialsSection />
    </>
  );
}