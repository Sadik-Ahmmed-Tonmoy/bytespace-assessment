"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Filter,
  BarChart2,
  LayoutGrid,
  Menu,
  ChevronDown,
  Check,
} from "lucide-react";
import { toast } from "sonner";
import CourseCard, { type Course } from "@/components/pages/home/Courses/CourseCard";

const creatorCourses: Course[] = [
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
    category: "Design",
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
    category: "Development",
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
    category: "Business",
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
    category: "Finance",
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
    category: "Business",
    lessonsCount: "17 Lessons",
    duration: "2 hours 16 mins",
    commentsCount: "59 Comments",
  },
];

const levelOptions = ["All Levels", "Beginner", "Intermediate", "Advanced"];
const categoryOptions = ["All Categories", "UI/UX Design", "Design", "Development", "Business", "Finance"];
const sortOptions = ["Most relevant", "Newest", "Highest Rated", "Price: Low to High"];

export default function CreatorProfilePage() {
  const router = useRouter();
  const [isFollowing, setIsFollowing] = useState(false);
  const [followerCount, setFollowerCount] = useState(12);

  // Filters state
  const [selectedLevel, setSelectedLevel] = useState("All Levels");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [selectedSort, setSelectedSort] = useState("Most relevant");

  // Dropdown open states
  const [levelDropdownOpen, setLevelDropdownOpen] = useState(false);
  const [categoryDropdownOpen, setCategoryDropdownOpen] = useState(false);
  const [sortDropdownOpen, setSortDropdownOpen] = useState(false);

  const handleFollowToggle = () => {
    if (isFollowing) {
      setIsFollowing(false);
      setFollowerCount((prev) => Math.max(0, prev - 1));
      toast.info("Unfollowed PurePearl Studio");
    } else {
      setIsFollowing(true);
      setFollowerCount((prev) => prev + 1);
      toast.success("Following PurePearl Studio! You'll receive updates on new courses.");
    }
  };

  // Filtered courses
  const filteredCourses = creatorCourses.filter((course) => {
    if (selectedLevel !== "All Levels" && course.level !== selectedLevel) return false;
    if (selectedCategory !== "All Categories" && course.category !== selectedCategory) return false;
    return true;
  });

  return (
    <div className="w-full select-none">
      {/* ========================================================================= */}
      {/* 1. TOP HERO SECTION (Blue Background with Grid) */}
      {/* ========================================================================= */}
      <section className="relative w-full bg-[#003be2] bg-hero-grid pt-10 sm:pt-14 pb-14 sm:pb-18 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1360px] mx-auto">
          {/* Creator Profile Header (Avatar + Name + Badge + Subtitle) */}
          <div className="flex items-start gap-4 sm:gap-5 md:gap-6">
            {/* Creator Avatar with Pink/Salmon Background matching Screenshot */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-[20px] sm:rounded-[24px] overflow-hidden bg-[#fca5a5] shadow-lg shrink-0 border border-white/20"
            >
              <Image
                src="/assets/images/happy-students/student-2.png"
                alt="PurePearl Studio Creator Avatar"
                fill
                priority
                className="object-cover scale-110"
              />
            </motion.div>

            {/* Name, Creator Badge, and Subtitle */}
            <div className="flex-1 min-w-0">
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="flex items-center gap-3 flex-wrap"
              >
                <h1 className="font-poppins font-semibold text-2xl sm:text-3xl md:text-[36px] leading-[1.2] tracking-[-0.01em] text-white">
                  PurePearl Studio
                </h1>
                <span className="bg-[#d4fb20] text-gray-950 font-satoshi font-semibold text-xs sm:text-[13px] px-3.5 py-1 rounded-full shadow-xs">
                  Creator
                </span>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="font-poppins font-normal text-sm sm:text-base md:text-[17px] text-white/90 mt-1.5"
              >
                Passionate UI/UX, Web designer
              </motion.p>
            </div>
          </div>

          {/* Bio Description Paragraphs matching Screenshot */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.14 }}
            className="mt-6 sm:mt-8 space-y-2.5 font-satoshi text-sm sm:text-base leading-[1.6] text-white/95 max-w-[1000px]"
          >
            <p>
              Welcome to the creative world of PurePearl Studio. Here, you&apos;ll discover the passion, expertise, and inspiration that drive my creative journey. Let&apos;s explore and learn together!
            </p>
            <p>
              Dive into my creative portfolio, showcasing a glimpse of my artistic endeavors. From digital designs to multimedia projects, each piece tells a unique story. Explore the world of creativity with me.
            </p>
          </motion.div>

          {/* Stats Badges and Follow Button Row */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center justify-between gap-4 mt-8 sm:mt-10 flex-wrap"
          >
            {/* Left Stats Pills */}
            <div className="flex items-center gap-3">
              <div className="bg-white rounded-full px-5 py-2 flex items-center gap-1.5 shadow-xs font-poppins text-xs sm:text-[13px] text-gray-900">
                <span className="font-bold text-gray-950">3</span>
                <span className="font-medium text-gray-700">Products</span>
              </div>

              <div className="bg-white rounded-full px-5 py-2 flex items-center gap-1.5 shadow-xs font-poppins text-xs sm:text-[13px] text-gray-900">
                <span className="font-bold text-gray-950">{followerCount}</span>
                <span className="font-medium text-gray-700">Followers</span>
              </div>
            </div>

            {/* Follow Button */}
            <button
              type="button"
              onClick={handleFollowToggle}
              className={`px-8 py-2.5 rounded-full font-satoshi font-semibold text-sm sm:text-base transition-all duration-200 shadow-sm active:scale-95 cursor-pointer ${
                isFollowing
                  ? "bg-white text-gray-950 hover:bg-gray-100"
                  : "bg-[#d4fb20] text-gray-950 hover:bg-[#c6f011]"
              }`}
            >
              {isFollowing ? "Following" : "Follow"}
            </button>
          </motion.div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. LOWER WHITE SECTION: Filters & Course Cards Grid */}
      {/* ========================================================================= */}
      <section className="w-full bg-white py-10 sm:py-14 md:py-16">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Controls Bar: Filter, Level, Category on Left; Most Relevant on Right */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 relative z-30">
            {/* Left Filter Pills */}
            <div className="flex items-center gap-2.5 sm:gap-3 flex-wrap">
              {/* Filter Button */}
              <button
                type="button"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 bg-white text-gray-700 font-satoshi font-medium text-xs sm:text-sm hover:border-gray-300 hover:bg-gray-50 transition-colors shadow-2xs cursor-pointer"
              >
                <Filter className="w-3.5 h-3.5 text-gray-600" />
                <span>Filter</span>
              </button>

              {/* Level Dropdown */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => {
                    setLevelDropdownOpen(!levelDropdownOpen);
                    setCategoryDropdownOpen(false);
                    setSortDropdownOpen(false);
                  }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 bg-white text-gray-700 font-satoshi font-medium text-xs sm:text-sm hover:border-gray-300 hover:bg-gray-50 transition-colors shadow-2xs cursor-pointer"
                >
                  <BarChart2 className="w-3.5 h-3.5 text-gray-600" />
                  <span>{selectedLevel === "All Levels" ? "Level" : selectedLevel}</span>
                  <ChevronDown className="w-3 h-3 text-gray-400" />
                </button>

                <AnimatePresence>
                  {levelDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.96 }}
                      transition={{ duration: 0.15 }}
                      className="absolute left-0 mt-2 w-44 bg-white rounded-2xl shadow-xl border border-gray-100 py-2 z-40"
                    >
                      {levelOptions.map((lvl) => (
                        <button
                          key={lvl}
                          type="button"
                          onClick={() => {
                            setSelectedLevel(lvl);
                            setLevelDropdownOpen(false);
                          }}
                          className={`w-full px-4 py-2 text-left text-xs sm:text-sm font-satoshi flex items-center justify-between hover:bg-gray-50 cursor-pointer ${
                            selectedLevel === lvl ? "text-[#003be2] font-semibold" : "text-gray-700"
                          }`}
                        >
                          <span>{lvl}</span>
                          {selectedLevel === lvl && <Check className="w-3.5 h-3.5 text-[#003be2]" />}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Category Dropdown */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => {
                    setCategoryDropdownOpen(!categoryDropdownOpen);
                    setLevelDropdownOpen(false);
                    setSortDropdownOpen(false);
                  }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 bg-white text-gray-700 font-satoshi font-medium text-xs sm:text-sm hover:border-gray-300 hover:bg-gray-50 transition-colors shadow-2xs cursor-pointer"
                >
                  <LayoutGrid className="w-3.5 h-3.5 text-gray-600" />
                  <span>{selectedCategory === "All Categories" ? "Category" : selectedCategory}</span>
                  <ChevronDown className="w-3 h-3 text-gray-400" />
                </button>

                <AnimatePresence>
                  {categoryDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.96 }}
                      transition={{ duration: 0.15 }}
                      className="absolute left-0 mt-2 w-48 bg-white rounded-2xl shadow-xl border border-gray-100 py-2 z-40"
                    >
                      {categoryOptions.map((cat) => (
                        <button
                          key={cat}
                          type="button"
                          onClick={() => {
                            setSelectedCategory(cat);
                            setCategoryDropdownOpen(false);
                          }}
                          className={`w-full px-4 py-2 text-left text-xs sm:text-sm font-satoshi flex items-center justify-between hover:bg-gray-50 cursor-pointer ${
                            selectedCategory === cat ? "text-[#003be2] font-semibold" : "text-gray-700"
                          }`}
                        >
                          <span>{cat}</span>
                          {selectedCategory === cat && <Check className="w-3.5 h-3.5 text-[#003be2]" />}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Right Sort Dropdown */}
            <div className="relative self-start sm:self-auto">
              <button
                type="button"
                onClick={() => {
                  setSortDropdownOpen(!sortDropdownOpen);
                  setLevelDropdownOpen(false);
                  setCategoryDropdownOpen(false);
                }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 bg-white text-gray-700 font-satoshi font-medium text-xs sm:text-sm hover:border-gray-300 hover:bg-gray-50 transition-colors shadow-2xs cursor-pointer"
              >
                <Menu className="w-3.5 h-3.5 text-gray-600" />
                <span>{selectedSort}</span>
                <ChevronDown className="w-3 h-3 text-gray-400" />
              </button>

              <AnimatePresence>
                {sortDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.96 }}
                    transition={{ duration: 0.15 }}
                    className="absolute right-0 mt-2 w-48 bg-white rounded-2xl shadow-xl border border-gray-100 py-2 z-40"
                  >
                    {sortOptions.map((opt) => (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => {
                          setSelectedSort(opt);
                          setSortDropdownOpen(false);
                        }}
                        className={`w-full px-4 py-2 text-left text-xs sm:text-sm font-satoshi flex items-center justify-between hover:bg-gray-50 cursor-pointer ${
                          selectedSort === opt ? "text-[#003be2] font-semibold" : "text-gray-700"
                        }`}
                      >
                        <span>{opt}</span>
                        {selectedSort === opt && <Check className="w-3.5 h-3.5 text-[#003be2]" />}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Courses Grid: 3 columns x 2 rows */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 lg:gap-8 items-stretch mt-8 sm:mt-10">
            {filteredCourses.map((course, idx) => (
              <CourseCard
                key={`${course.id}-${idx}`}
                course={course}
                index={idx}
                priority={idx < 3}
                onClick={() => router.push("/courses/build-digital-asset")}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
