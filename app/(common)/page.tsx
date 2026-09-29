import HeroSection from "@/components/pages/home/Hero/HeroSection";
import PartnersSection from "@/components/pages/home/Partners/PartnersSection";
import CoursesSection from "@/components/pages/home/Courses/CoursesSection";

const HomePage = () => {
  return (
    <main className="w-full">
      {/* Section 1: Hero Section */}
      <HeroSection />

      {/* Section 2: Partner / Client Logos */}
      <PartnersSection />

      {/* Section 3: Courses Section (Discover Your Passion, Build Your Skills) */}
      <CoursesSection />
    </main>
  );
};

export default HomePage;
