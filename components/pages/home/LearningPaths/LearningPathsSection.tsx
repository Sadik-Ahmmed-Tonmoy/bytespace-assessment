"use client";

import React from "react";
import { motion } from "framer-motion";
import LearningPathCard, { type LearningPath } from "./LearningPathCard";

export const learningPathsData: LearningPath[] = [
  {
    id: "design",
    title: "Design",
    icon: "/assets/icons/design.svg",
  },
  {
    id: "development",
    title: "Development",
    icon: "/assets/icons/development.svg",
  },
  {
    id: "it-software",
    title: "IT & Software",
    icon: "/assets/icons/it-software.svg",
  },
  {
    id: "business",
    title: "Business",
    icon: "/assets/icons/business.svg",
  },
  {
    id: "marketing",
    title: "Marketing",
    icon: "/assets/icons/marketing.svg",
  },
  {
    id: "photography",
    title: "Photography",
    icon: "/assets/icons/photography.svg",
  },
];

export const LearningPathsSection: React.FC = () => {
  return (
    <section className="relative z-20 w-full bg-white pb-14 sm:pb-18 md:pb-20 select-none">
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto">
          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="font-poppins font-semibold text-2xl sm:text-3xl md:text-[36px] leading-[1.2] tracking-[-0.01em] text-center text-gray-950"
          >
            Explore Diverse Learning Paths at Bytespace
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-satoshi font-normal text-sm sm:text-base md:text-[18px] leading-[1.6] tracking-normal text-center text-gray-500 max-w-[890px] mx-auto mt-3.5 sm:mt-4"
          >
            At Bytespace, we believe in empowering individuals through knowledge.
            Our diverse range of courses spans various fields, ensuring
            there&apos;s something for everyone. Unleash your potential and
            explore our carefully curated categories.
          </motion.p>
        </div>

        {/* Categories Grid (6 Columns on Desktop, 3 on Tablet, 2 on Mobile) */}
        <div className="mt-10 sm:mt-12 md:mt-14 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-5 lg:gap-6">
          {learningPathsData.map((item, index) => (
            <LearningPathCard
              key={item.id}
              item={item}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LearningPathsSection;
