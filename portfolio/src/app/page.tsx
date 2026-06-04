import { HeroSection } from "@/features/home-page";
import Footer from "@/shared/components/layouts/Footer";
import Navbar from "@/shared/components/layouts/Navbar";



/**
 * HomePage — thin orchestration layer.
 * Add future sections here as you build them out:
 *   <AboutSection />
 *   <SkillsSection />
 *   <ProjectsSection />
 *   <JourneySection />
 *   <ContactSection />
 */
export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="pt-25">
        <HeroSection />
        {/* Future sections go here */}
      </main>
      <Footer />
    </>
  )
}
