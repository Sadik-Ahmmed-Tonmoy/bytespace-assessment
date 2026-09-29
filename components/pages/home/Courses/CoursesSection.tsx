"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Star, BarChart2 } from "lucide-react";

// Student avatars for the course cards
const cardAvatars = [
  "/assets/images/happy-students/student-2.png",
  "/assets/images/happy-students/student-4.png",
  "/assets/images/happy-students/student-5.png",
  "/assets/images/happy-students/student-6.png",
];

// 3 rows of categories matching reference design
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
    "+ More"
  ],
];

export interface Course {
  id: number;
  title: string;
  image: string;
  author: string;
  rating: number;
  level: string;
  price: string;
  period: string;
  category?: string;
}

const coursesData: Course[] = [
  {
    id: 1,
    title: "Learn Figma from Basic",
    image: "/assets/images/courses/course-1.png",
    author: "purepearl studio",
    rating: 4.5,
    level: "Beginner",
    price: "$25",
    period: "/lifetime",
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
  },
];

export const CoursesSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("Featured");

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

        {/* 2. Category Filter Pills */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 sm:mt-10 md:mt-12 flex flex-col items-center gap-2.5 sm:gap-3 max-w-6xl mx-auto"
        >
          {categoryRows.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5"
            >
              {row.map((category) => {
                const isActive = activeCategory === category;
                const isMore = category === "+ More";

                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setActiveCategory(category)}
                    className={`rounded-full px-4 sm:px-5 py-2 text-xs sm:text-[13px] md:text-sm font-medium transition-all duration-200 cursor-pointer ${
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

        {/* 3. Course Cards Grid (3 Columns on Desktop, 2 on Tablet, 1 on Mobile) */}
        <div className="mt-12 sm:mt-14 md:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 lg:gap-8">
          {coursesData.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{ y: -6 }}
              className="group bg-white rounded-[26px] p-4 sm:p-5 border border-gray-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all duration-300 flex flex-col justify-between"
            >
              {/* Card Image Container (image includes frosted badges) */}
              <div className="relative w-full aspect-[700/395] rounded-[18px] overflow-hidden bg-gray-100">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  priority={index < 3}
                />
              </div>

              {/* Title & Rating Row */}
              <div className="mt-4 sm:mt-5 flex items-start justify-between gap-3">
                <h3 className="font-bold text-lg sm:text-[21px] text-gray-950 tracking-tight leading-snug line-clamp-1 group-hover:text-[#003be2] transition-colors">
                  {course.title}
                </h3>
                <div className="flex items-center gap-1 shrink-0 mt-0.5">
                  <span className="font-semibold text-base sm:text-lg text-gray-700">
                    {course.rating}
                  </span>
                  <Star className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-gray-300 fill-gray-300" />
                </div>
              </div>

              {/* Author Row */}
              <div className="mt-1 text-xs sm:text-sm text-gray-500">
                by{" "}
                <span className="text-[#003be2] hover:underline font-medium cursor-pointer">
                  {course.author}
                </span>
              </div>

              {/* Level Badge & Student Avatar Cluster */}
              <div className="mt-4 sm:mt-5 flex items-center justify-between">
                {/* Level Pill */}
                <div className="bg-[#f4f5f6] text-gray-700 text-xs sm:text-[13px] font-medium px-3.5 py-1.5 rounded-full flex items-center gap-1.5">
                  <BarChart2 className="w-3.5 h-3.5 text-gray-600" />
                  <span>{course.level}</span>
                </div>

                {/* Overlapping Student Avatars Stack */}
                <div className="flex items-center">
                  {cardAvatars.map((avatar, aIndex) => (
                    <div
                      key={aIndex}
                      className="relative w-6 h-6 sm:w-7 sm:h-7 rounded-full border-2 border-white -ml-2 first:ml-0 overflow-hidden bg-gray-200 shrink-0 shadow-xs"
                    >
                      <Image
                        src={avatar}
                        alt={`Student ${aIndex + 1}`}
                        fill
                        sizes="28px"
                        className="object-cover"
                      />
                    </div>
                  ))}
                  {/* 26+ Lime Badge */}
                  <div className="relative w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#d4fb20] border-2 border-white -ml-2 flex items-center justify-center shrink-0 shadow-xs">
                    <span className="text-[9px] sm:text-[10px] font-extrabold text-gray-950 tracking-tight select-none">
                      26+
                    </span>
                  </div>
                </div>
              </div>

              {/* Price Row */}
              <div className="mt-4 sm:mt-5 pt-1 flex items-baseline gap-1">
                <span className="text-2xl sm:text-[26px] font-extrabold text-[#003be2] tracking-tight">
                  {course.price}
                </span>
                <span className="text-xs sm:text-sm text-gray-400 font-normal">
                  {course.period}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
