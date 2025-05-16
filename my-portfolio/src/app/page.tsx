import Header from "../app/components/header";
import HeroSection from "../app/components/hero";
import AboutSection from "../app/components/About";
import ProjectsSection from "../app/components/projects-section";
import SkillsSection from "../app/components/skills-section";
import TestimonialsSection from "../app/components/testimonials-section";
import ContactSection from "./components/contact-section";
import Footer from "../app/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <Header />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
