"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import CourseCard, { type Course } from "./CourseCard";

// 3 rows of categories matching reference design (Font: Satoshi)
const categoryRows = [
  [
    "Featured",
    "Music",
    "Drawing & Painting",
    "Marketing",
    "Animation",
    "Social Media",
    "UI/UX Design",
    "Creative Marketing",
  ],
  [
    "Digital Illustration",
    "Film & Video",
    "Crafts",
    "Freelance & Entrepreneurship",
    "Graphic Design",
    "Photography",
  ],
  [
    "Productivity",
    "Web Development",
    "Data Science",
    "Cooking",
    "+ More",
  ],
];

export { type Course } from "./CourseCard";

export const coursesData: Course[] = [
  {
    id: 1,
    title: "Learn Figma from Basic",
    image: "/assets/images/courses/course-1.png",
    author: "purepearl studio",
    rating: 4.5,
    level: "Beginner",
    price: "$25",
    period: "/lifetime",
    category: "UI/UX Design",
  },
  {
    id: 2,
    title: "Build Digital Asset",
    image: "/assets/images/courses/course-2.png",
    author: "purepearl studio",
    rating: 4.5,
    level: "Beginner",
    price: "$25",
    period: "/lifetime",
    category: "Digital Illustration",
  },
  {
    id: 3,
    title: "the Power of Big Data",
    image: "/assets/images/courses/course-3.png",
    author: "purepearl studio",
    rating: 4.5,
    level: "Beginner",
    price: "$25",
    period: "/lifetime",
    category: "Data Science",
  },
  {
    id: 4,
    title: "Balancing Productivity an...",
    image: "/assets/images/courses/course-4.png",
    author: "purepearl studio",
    rating: 4.5,
    level: "Beginner",
    price: "$25",
    period: "/lifetime",
    category: "Productivity",
  },
  {
    id: 5,
    title: "Mastering Money Manage...",
    image: "/assets/images/courses/course-5.png",
    author: "purepearl studio",
    rating: 4.5,
    level: "Beginner",
    price: "$25",
    period: "/lifetime",
    category: "Freelance & Entrepreneurship",
  },
  {
    id: 6,
    title: "From Idea to Startup Succ...",
    image: "/assets/images/courses/course-6.png",
    author: "purepearl studio",
    rating: 4.5,
    level: "Beginner",
    price: "$25",
    period: "/lifetime",
    category: "Marketing",
  },
];

export const CoursesSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("Featured");

  const displayedCourses =
    activeCategory === "Featured" || activeCategory === "+ More"
      ? coursesData
      : coursesData.filter((c) => c.category === activeCategory).length > 0
      ? coursesData.filter((c) => c.category === activeCategory)
      : coursesData;

  return (
    <section className="relative z-20 w-full bg-white py-16 sm:py-20 md:py-24 select-none">
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* 1. Header: Title & Description */}
        <div className="text-center max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-gray-950 text-3xl sm:text-4xl md:text-[44px] lg:text-[48px] font-bold sm:font-extrabold tracking-[-0.03em] leading-[1.15]"
          >
            Discover Your Passion,
            <br />
            Build Your Skills
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-gray-500 text-xs sm:text-sm md:text-[15px] font-normal max-w-7xl mx-auto mt-3.5 sm:mt-4 leading-relaxed"
          >
            At Bytespace Courses, we bring you closer to life-changing
            knowledge. Explore a variety of courses across different fields,
            from technology to the arts, and make a difference in your career
            and life.
          </motion.p>
        </div>

        {/* 2. Category Filter Pills (Font: Satoshi) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 sm:mt-10 md:mt-12 flex flex-col items-center gap-2.5 sm:gap-3 max-w-6xl mx-auto font-satoshi"
        >
          {categoryRows.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 font-satoshi"
            >
              {row.map((category) => {
                const isActive = activeCategory === category;
                const isMore = category === "+ More";

                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setActiveCategory(category)}
                    className={`font-satoshi rounded-full px-4 sm:px-5 py-2 text-xs sm:text-[13px] md:text-sm font-medium transition-all duration-200 cursor-pointer ${
                      isActive
                        ? "bg-[#d4fb20] text-gray-950 font-semibold shadow-xs scale-[1.02]"
                        : isMore
                        ? "bg-none text-[#003BE2] font-semibold hover:bg-gray-200"
                        : "bg-[#f3f4f6] text-gray-700 hover:bg-gray-200 hover:text-gray-900"
                    }`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>
          ))}
        </motion.div>

        {/* 3. Reusable Course Cards Grid (Font: Poppins) */}
        <div className="mt-12 sm:mt-14 md:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 lg:gap-8">
          {displayedCourses.map((course, index) => (
            <CourseCard
              key={course.id}
              course={course}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
