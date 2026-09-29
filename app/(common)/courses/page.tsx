"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Search,
  ChevronDown,
  Filter,
  BarChart2,
  LayoutGrid,
  SlidersHorizontal,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import CourseCard, { type Course } from "@/components/pages/home/Courses/CourseCard";

const categories = [
  "Featured",
  "Music",
  "Drawing & Painting",
  "Marketing",
  "Animation",
  "Social Media",
  "UI/UX Design",
  "Creative Marketing",
  "Cooking",
];

const baseCourseList: Course[] = [
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
    lessonsCount: "17 Lessons",
    duration: "2 hours 16 mins",
    commentsCount: "59 Comments",
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
    category: "Drawing & Painting",
    lessonsCount: "17 Lessons",
    duration: "2 hours 16 mins",
    commentsCount: "59 Comments",
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
    category: "Marketing",
    lessonsCount: "17 Lessons",
    duration: "2 hours 16 mins",
    commentsCount: "59 Comments",
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
    category: "Featured",
    lessonsCount: "17 Lessons",
    duration: "2 hours 16 mins",
    commentsCount: "59 Comments",
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
    category: "Featured",
    lessonsCount: "17 Lessons",
    duration: "2 hours 16 mins",
    commentsCount: "59 Comments",
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
    category: "Featured",
    lessonsCount: "17 Lessons",
    duration: "2 hours 16 mins",
    commentsCount: "59 Comments",
  },
];

// 12 courses representing 4 rows of 3 as shown in the design
const allCourses: Course[] = [
  ...baseCourseList.map((c) => ({ ...c, id: `c-${c.id}-1` })),
  ...baseCourseList.map((c) => ({ ...c, id: `c-${c.id}-2` })),
];

export default function CoursesPage() {
  const [selectedCategory, setSelectedCategory] = useState("Featured");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5;

  // Filter courses based on search & category
  const filteredCourses = allCourses.filter((course) => {
    const matchesSearch =
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.author.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSearch;
  });

  return (
    <div className="w-full select-none">
      {/* ========================================================================= */}
      {/* 1. HERO BANNER: Title + Search & Course Filter Pill */}
      {/* ========================================================================= */}
      <section className="relative w-full pt-10 pb-16 sm:pt-14 sm:pb-20 md:pt-16 md:pb-24 px-4 sm:px-6">
        <div className="max-w-[1360px] mx-auto text-center">
          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="font-poppins font-semibold text-3xl sm:text-4xl md:text-[36px] leading-[1.2] tracking-[-0.01em] text-white text-center"
          >
            Find Your Next Course
          </motion.h1>

          {/* Search + Dropdown Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 sm:mt-8 flex items-center justify-center gap-3 sm:gap-4 max-w-[620px] mx-auto"
          >
            {/* Search Input Box */}
            <div className="relative flex-1">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search"
                aria-label="Search courses"
                className="w-full bg-white text-gray-900 placeholder:text-gray-400 font-satoshi text-sm sm:text-base pl-11 pr-5 py-3 sm:py-3.5 rounded-full border-none shadow-sm focus:outline-none focus:ring-2 focus:ring-[#d4fb20] transition-all"
              />
              <Search
                className="w-4 h-4 text-gray-400 absolute left-4.5 top-1/2 -translate-y-1/2 pointer-events-none"
                aria-hidden="true"
              />
            </div>

            {/* Courses Dropdown Pill */}
            <button
              type="button"
              className="inline-flex items-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-[#d4fb20] text-gray-950 font-satoshi font-medium text-sm sm:text-base hover:bg-[#c6f011] transition-all shadow-sm shrink-0 cursor-pointer"
            >
              <span>Courses</span>
              <ChevronDown className="w-4 h-4 text-gray-900" aria-hidden="true" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. MAIN CONTENT (WHITE BACKGROUND): Filters, Category Pills, Grid */}
      {/* ========================================================================= */}
      <section className="w-full bg-white text-gray-900 py-10 sm:py-14 md:py-16">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Filter Buttons Row */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 sm:mb-8">
            {/* Left: Filter, Level, Category Pills */}
            <div className="flex items-center gap-2.5 sm:gap-3 flex-wrap">
              <button
                type="button"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 bg-white text-gray-800 font-satoshi text-xs sm:text-sm font-medium hover:border-gray-400 transition-colors shadow-xs cursor-pointer"
              >
                <Filter className="w-3.5 h-3.5 text-gray-600" />
                <span>Filter</span>
              </button>

              <button
                type="button"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 bg-white text-gray-800 font-satoshi text-xs sm:text-sm font-medium hover:border-gray-400 transition-colors shadow-xs cursor-pointer"
              >
                <BarChart2 className="w-3.5 h-3.5 text-gray-600" />
                <span>Level</span>
              </button>

              <button
                type="button"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 bg-white text-gray-800 font-satoshi text-xs sm:text-sm font-medium hover:border-gray-400 transition-colors shadow-xs cursor-pointer"
              >
                <LayoutGrid className="w-3.5 h-3.5 text-gray-600" />
                <span>Category</span>
              </button>
            </div>

            {/* Right: Most relevant */}
            <button
              type="button"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 bg-white text-gray-800 font-satoshi text-xs sm:text-sm font-medium hover:border-gray-400 transition-colors shadow-xs cursor-pointer"
            >
              <SlidersHorizontal className="w-3.5 h-3.5 text-gray-600" />
              <span>Most relevant</span>
            </button>
          </div>

          {/* Category Filter Pills (Font: Satoshi 500 Medium 16px) */}
          <div className="flex items-center gap-2.5 sm:gap-3 overflow-x-auto pb-4 pt-1 mb-10 sm:mb-12 no-scrollbar">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`font-satoshi font-medium text-[15px] sm:text-[16px] leading-[1.2] tracking-normal text-center whitespace-nowrap px-5 py-2.5 rounded-full transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? "bg-[#d4fb20] text-gray-950 shadow-xs"
                      : "bg-[#f4f5f6] text-gray-600 hover:text-gray-950 hover:bg-[#eaecee]"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Courses Grid: 3 columns x 4 rows */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 lg:gap-8 items-stretch">
            {filteredCourses.map((course, idx) => (
              <CourseCard
                key={`${course.id}-${idx}`}
                course={course}
                index={idx}
                priority={idx < 3}
              />
            ))}
          </div>

          {/* ========================================================================= */}
          {/* Pagination Bar */}
          {/* ========================================================================= */}
          <div className="flex items-center justify-center gap-3 sm:gap-4 mt-14 sm:mt-18 md:mt-20">
            {/* Previous Page Button */}
            <button
              type="button"
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-gray-200 flex items-center justify-center text-gray-700 hover:bg-gray-50 active:scale-95 transition-all disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
              aria-label="Previous page"
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

            {/* Page Numbers */}
            <div className="flex items-center gap-1.5 sm:gap-2">
              {[1, 2, 3, 4, 5].map((pageNum) => {
                const isActive = currentPage === pageNum;
                return (
                  <button
                    key={pageNum}
                    onClick={() => setCurrentPage(pageNum)}
                    className={`font-poppins font-bold text-base sm:text-lg min-w-[32px] sm:min-w-[36px] py-1 text-center transition-colors cursor-pointer ${
                      isActive
                        ? "text-gray-400"
                        : "text-gray-950 hover:text-[#003be2]"
                    }`}
                  >
                    {pageNum}
                  </button>
                );
              })}
            </div>

            {/* Next Page Button */}
            <button
              type="button"
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-gray-200 flex items-center justify-center text-gray-700 hover:bg-gray-50 active:scale-95 transition-all disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
              aria-label="Next page"
            >
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
