"use client";

import React from "react";
import HeroSection from "./Hero/HeroSection";
import PartnersSection from "./Partners/PartnersSection";
import CoursesSection from "./Courses/CoursesSection";

const HomeComponent = () => {
  return (
    <main className="w-full">
      {/* Section 1: Hero Section */}
      <HeroSection />

      {/* Section 2: Partner / Client Logos */}
      <PartnersSection />

      {/* Section 3: Courses Section */}
      <CoursesSection />
    </main>
  );
};

export default HomeComponent;
