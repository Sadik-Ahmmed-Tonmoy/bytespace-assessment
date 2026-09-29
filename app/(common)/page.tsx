import HeroSection from "@/components/pages/home/Hero/HeroSection";
import PartnersSection from "@/components/pages/home/Partners/PartnersSection";
import CoursesSection from "@/components/pages/home/Courses/CoursesSection";
import LearningPathsSection from "@/components/pages/home/LearningPaths/LearningPathsSection";
import FeaturesSection from "@/components/pages/home/Features/FeaturesSection";

const HomePage = () => {
  return (
    <main className="w-full">
      {/* Section 1: Hero Section */}
      <HeroSection />

      {/* Section 2: Partner / Client Logos */}
      <PartnersSection />

      {/* Section 3: Courses Section (Discover Your Passion, Build Your Skills) */}
      <CoursesSection />

      {/* Section 4: Learning Paths Section */}
      <LearningPathsSection />

      {/* Section 5: Professional Growth & Course Management */}
      <FeaturesSection />
    </main>
  );
};

export default HomePage;
