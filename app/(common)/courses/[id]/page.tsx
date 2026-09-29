"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Share2,
  BarChart2,
  Star,
  Users,
  Play,
  Check,
  Video,
  FolderArchive,
  Award,
  Headphones,
} from "lucide-react";
import { toast } from "sonner";

// Reviewers data matching Screenshot 5
const reviewsData = [
  {
    id: 1,
    name: "PurePearl Studio",
    role: "UI/UX Designer",
    time: "a year ago",
    avatar: "/assets/images/discover/alex.png",
    rating: 5,
    text: "The course provided me with a comprehensive understanding of digital asset creation. The lessons were in-depth, practical, and immediately applicable to my work. Highly recommended!",
  },
  {
    id: 2,
    name: "Albert Flores",
    role: "UI/UX Designer",
    time: "a year ago",
    avatar: "/assets/images/discover/sarah.png",
    rating: 5,
    text: "This course transformed my approach to digital design. The combination of theory, hands-on exercises, and real-world applications made it a truly enriching experience. Excited to implement what I've learned!",
  },
  {
    id: 3,
    name: "Cody Fisher",
    role: "UI/UX Designer",
    time: "a year ago",
    avatar: "/assets/images/discover/james.png",
    rating: 5,
    text: "The project showcase and critique module created a collaborative environment where I could showcase my work, receive valuable feedback, and refine my skills. It added a unique and valuable dimension to the learning process.",
  },
  {
    id: 4,
    name: "Brooklyn Simmons",
    role: "UI/UX Designer",
    time: "a year ago",
    avatar: "/assets/images/happy-students/student-3.png",
    rating: 5,
    text: "The lessons on optimizing digital assets for various platforms were particularly insightful. The course adapts to the evolving digital landscape, and the engaging content kept me motivated throughout.",
  },
];

// Modules list matching Screenshot 3
const modulesData = [
  {
    number: "Module 1",
    title: "Introduction to Digital Assets",
    description:
      "Lay the groundwork with lessons like 'Understanding Digital Elements' and 'Navigating Design Software Tools.' Dive into the essentials of digital asset creation.",
  },
  {
    number: "Module 2",
    title: "Design Principles for Impact",
    description:
      "Master the principles that drive impactful designs with lessons such as 'Color Theory in Digital Design' and 'Typography Essentials.' Elevate your visual communication skills.",
  },
  {
    number: "Module 4",
    title: "User-Centric Design Strategies",
    description:
      "Understand 'Design Thinking in Digital Creation' and delve into 'User Experience (UX) Essentials.' Craft digital assets with a focus on user-centric design.",
  },
  {
    number: "Module 5",
    title: "Interactive Media and Engagement",
    description:
      "Engage your audience with lessons like 'Creating Interactive Presentations' and 'Integrating Multimedia Elements.' Master the art of creating immersive digital experiences.",
  },
  {
    number: "Module 6",
    title: "Project Showcase and Critique",
    description:
      "Perfect your presentation skills with 'Effective Presentation Techniques' and embrace collaboration with 'Peer Critique and Collaboration.' Showcase your work with confidence.",
  },
  {
    number: "Module 7",
    title: "Optimizing Digital Assets for Various Platforms",
    description:
      "Adapt your digital creations for 'Mobile Platforms' and optimize for 'Social Media.' Ensure widespread accessibility and engagement across diverse digital landscapes.",
  },
];

// Key points checklist matching Screenshot 2
const keyPoints = [
  "Foundational Concepts",
  "Design Principles Mastery",
  "Advanced Techniques in Digital Creation",
  "Project Showcase and Critique",
  "Optimizing for Various Platforms",
  "Digital Asset Management Best Practices",
  "Monetization Strategies",
  "Capstone Project: Building Your Portfolio",
];

// Sneak peak images matching Screenshot 2
const sneakPeakItems = [
  {
    src: "/assets/images/courses/sneak-1.jpg",
    alt: "Wireframing sketches and design planning on desk",
  },
  {
    src: "/assets/images/courses/course-3.png",
    alt: "UI/UX Analytics dashboard design",
  },
  {
    src: "/assets/images/courses/course-4.png",
    alt: "Desktop iMac creative workstation with plant",
  },
  {
    src: "/assets/images/courses/course-2.png",
    alt: "Icon set design and layout principles",
  },
];

export default function CourseDetailsPage() {
  const [activeTab, setActiveTab] = useState<"about" | "lessons" | "reviews">("about");
  const [reviewFilter, setReviewFilter] = useState("all");
  const [isPlaying, setIsPlaying] = useState(false);
  const [heroHeight, setHeroHeight] = useState<number>(750);

  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLDivElement>(null);

  // Dynamically compute the bottom of the video player using offsetTop so the blue hero grid background
  // cuts off cleanly right below the video player, matching Screenshot 1, immune to scrolling
  useEffect(() => {
    const updateHeroHeight = () => {
      if (videoRef.current) {
        setHeroHeight(videoRef.current.offsetTop + videoRef.current.offsetHeight + 36);
      }
    };

    updateHeroHeight();
    window.addEventListener("resize", updateHeroHeight);
    const timer = setTimeout(updateHeroHeight, 200);
    return () => {
      window.removeEventListener("resize", updateHeroHeight);
      clearTimeout(timer);
    };
  }, []);

  const handleShare = () => {
    if (typeof navigator !== "undefined" && navigator.share) {
      navigator
        .share({
          title: "Build Digital Asset: A Comprehensive Guide",
          url: window.location.href,
        })
        .catch(() => {});
    } else if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      toast.success("Course link copied to clipboard!");
    }
  };

  const handleEnroll = () => {
    toast.success("Enrolled successfully in Build Digital Asset!");
  };

  const filteredReviews =
    reviewFilter === "all"
      ? reviewsData
      : reviewsData.filter((r) => r.rating === Number(reviewFilter));

  return (
    <div
      ref={containerRef}
      className="course-detail-container relative w-full bg-white select-none overflow-x-hidden min-h-screen"
    >
      {/* ========================================================================= */}
      {/* Dynamic Blue Hero Grid Background (extends exactly below the video player) */}
      {/* ========================================================================= */}
      <div
        className="absolute top-0 left-0 right-0 bg-[#003be2] bg-hero-grid pointer-events-none transition-all duration-300 z-0"
        style={{ height: `${heroHeight}px` }}
      />

      {/* ========================================================================= */}
      {/* Main Content Container (z-10) */}
      {/* ========================================================================= */}
      <div className="relative z-10 max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-10 pb-20 sm:pb-28">
        {/* Title Row with Share Button */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-5 mb-8 sm:mb-10">
          <div className="max-w-[880px]">
            {/* Title: Poppins 600 SemiBold 36px line-height 120% letter-spacing -1% */}
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="font-poppins font-semibold text-2xl sm:text-3xl md:text-[36px] leading-[1.2] tracking-[-0.01em] text-white"
            >
              Build Digital Asset: A Comprehensive Guide
            </motion.h1>

            {/* Subtitle: Poppins 600 SemiBold 20px line-height 120% letter-spacing -1% */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="font-poppins font-semibold text-base sm:text-lg md:text-[20px] leading-[1.2] tracking-[-0.01em] text-white/95 mt-2.5"
            >
              Unlock the Power of Digital Creation with Expert Guidance
            </motion.p>

            {/* Author Byline */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.12 }}
              className="font-satoshi text-sm text-white/80 mt-2.5"
            >
              by{" "}
              <span className="text-[#d4fb20] font-medium hover:underline cursor-pointer">
                purepearl studio
              </span>
            </motion.p>

            {/* Badges Row */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.16 }}
              className="flex items-center gap-2.5 sm:gap-3 mt-4 flex-wrap"
            >
              {/* Intermediate Pill */}
              <div className="bg-white rounded-full px-4 py-1.5 flex items-center gap-1.5 shadow-xs font-poppins text-xs sm:text-[13px] text-gray-900 font-medium">
                <BarChart2 className="w-3.5 h-3.5 text-[#003be2]" />
                <span>Intermediate</span>
              </div>

              {/* Rating Pill */}
              <div className="bg-white rounded-full px-4 py-1.5 flex items-center gap-1.5 shadow-xs font-poppins text-xs sm:text-[13px] text-gray-900 font-medium">
                <Star className="w-3.5 h-3.5 text-[#003be2] fill-[#003be2]" />
                <span>4.8 (172 reviews)</span>
              </div>

              {/* Students Pill */}
              <div className="bg-white rounded-full px-4 py-1.5 flex items-center gap-1.5 shadow-xs font-poppins text-xs sm:text-[13px] text-gray-900 font-medium">
                <Users className="w-3.5 h-3.5 text-[#003be2]" />
                <span>199 Students</span>
              </div>
            </motion.div>
          </div>

          {/* Share Button (Top Right aligned with header) */}
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            type="button"
            onClick={handleShare}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#d4fb20] text-gray-950 font-satoshi font-semibold text-sm hover:bg-[#c6f011] transition-all shadow-sm active:scale-95 shrink-0 cursor-pointer self-start"
          >
            <Share2 className="w-4 h-4 text-gray-950" />
            <span>Share</span>
          </motion.button>
        </div>

        {/* ======================================================================= */}
        {/* Main Two-Column Layout (Video + Tabs on Left, Sticky Sidebar on Right) */}
        {/* ======================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* ===================================================================== */}
          {/* Left Column: Video Player -> Tabs -> Tab Content (About/Lesson/Reviews) */}
          {/* ===================================================================== */}
          <div className="lg:col-span-7 xl:col-span-8 w-full">
            {/* 1. Video Player Container */}
            <motion.div
              ref={videoRef}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-[28px] sm:rounded-[32px] overflow-hidden shadow-2xl bg-gray-900 border border-white/20 group cursor-pointer mb-12 sm:mb-14"
              onClick={() => setIsPlaying(!isPlaying)}
            >
              <Image
                src="/assets/images/courses/course-detail-video.jpg"
                alt="Build Digital Asset Video Lecture Preview"
                fill
                priority
                className="object-cover group-hover:scale-102 transition-transform duration-700"
              />

              {/* Dark Ambient Overlay */}
              <div className="absolute inset-0 bg-black/15 group-hover:bg-black/10 transition-colors" />

              {/* Center Translucent Glass Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/75 backdrop-blur-md flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                  <Play className="w-6 h-6 sm:w-8 sm:h-8 text-white fill-white ml-1 drop-shadow-sm" />
                </div>
              </div>
            </motion.div>

            {/* 2. Lower Content Area (White Background) */}
            <div className="w-full">
              {/* Tab Switcher Pills */}
              <div className="flex items-center gap-2.5 sm:gap-3 flex-wrap">
                <button
                  type="button"
                  onClick={() => setActiveTab("about")}
                  className={`font-satoshi font-semibold text-sm sm:text-base px-6 py-2.5 rounded-full transition-all duration-200 cursor-pointer ${
                    activeTab === "about"
                      ? "bg-[#d4fb20] text-gray-950 shadow-xs"
                      : "bg-[#f4f5f6] text-gray-600 hover:text-gray-950 hover:bg-[#eaecee]"
                  }`}
                >
                  About
                </button>

                <button
                  type="button"
                  onClick={() => setActiveTab("lessons")}
                  className={`font-satoshi font-semibold text-sm sm:text-base px-6 py-2.5 rounded-full transition-all duration-200 cursor-pointer ${
                    activeTab === "lessons"
                      ? "bg-[#d4fb20] text-gray-950 shadow-xs"
                      : "bg-[#f4f5f6] text-gray-600 hover:text-gray-950 hover:bg-[#eaecee]"
                  }`}
                >
                  Lesson
                </button>

                <button
                  type="button"
                  onClick={() => setActiveTab("reviews")}
                  className={`font-satoshi font-semibold text-sm sm:text-base px-6 py-2.5 rounded-full transition-all duration-200 cursor-pointer ${
                    activeTab === "reviews"
                      ? "bg-[#d4fb20] text-gray-950 shadow-xs"
                      : "bg-[#f4f5f6] text-gray-600 hover:text-gray-950 hover:bg-[#eaecee]"
                  }`}
                >
                  Reviews
                </button>
              </div>

              {/* Tab Content Display */}
              <AnimatePresence mode="wait">
                {/* ============================================================= */}
                {/* TAB 1: ABOUT (Screenshot 1 & 2) */}
                {/* ============================================================= */}
                {activeTab === "about" && (
                  <motion.div
                    key="about"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.28 }}
                    className="mt-8 sm:mt-10"
                  >
                    {/* Description Heading */}
                    <h3 className="font-poppins font-bold text-xl sm:text-2xl text-gray-950 mb-4">
                      Description
                    </h3>

                    {/* Exact User Provided Paragraphs in Satoshi 400 16px leading 160% */}
                    <div className="space-y-4 font-satoshi font-normal text-sm sm:text-base leading-[1.6] text-gray-700">
                      <p>
                        Embark on an enlightening exploration into the world of digital creation with our comprehensive course, &ldquo;Build Digital Assets: A Comprehensive Guide.&rdquo; This transformative learning experience invites you to delve deep into the intricacies of crafting impactful digital content. From laying the groundwork with foundational concepts to mastering advanced techniques, this guide is meticulously curated to empower you with the skills essential for navigating the dynamic landscape of digital asset creation.
                      </p>
                      <p>
                        In the initial modules, you&apos;ll establish a solid foundation by immersing yourself in the foundational concepts that form the backbone of digital asset creation. Understand the fundamental elements that constitute compelling digital content and gain proficiency in leveraging these elements to communicate effectively in the digital realm.
                      </p>
                      <p>
                        As you progress through the course, you&apos;ll ascend to higher levels of expertise, delving into the nuances of design principles that drive impactful creations. Uncover the secrets behind effective visual communication, exploring color theory, typography, and layout strategies that elevate your digital assets to new heights. Engage in hands-on exercises that reinforce your understanding, allowing you to apply these principles in practical scenarios.
                      </p>
                    </div>

                    {/* Sneak Peak Section (Screenshot 2) */}
                    <div className="mt-10 sm:mt-12">
                      <h4 className="font-poppins font-bold text-lg sm:text-xl text-gray-950 mb-4">
                        Sneak Peak
                      </h4>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 sm:gap-4">
                        {sneakPeakItems.map((item, idx) => (
                          <div
                            key={idx}
                            className="relative w-full aspect-[4/3] rounded-[18px] sm:rounded-[20px] overflow-hidden bg-gray-100 shadow-sm border border-gray-100 group"
                          >
                            <Image
                              src={item.src}
                              alt={item.alt}
                              fill
                              sizes="(max-width: 640px) 50vw, 25vw"
                              className="object-cover object-top scale-125 -translate-y-2 group-hover:scale-130 transition-transform duration-300"
                            />
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Key Points Section (Screenshot 2) */}
                    <div className="mt-10 sm:mt-12">
                      <h4 className="font-poppins font-bold text-lg sm:text-xl text-gray-950 mb-4">
                        Key Points
                      </h4>
                      <ul className="space-y-3 font-satoshi text-sm sm:text-base text-gray-800">
                        {keyPoints.map((point) => (
                          <li key={point} className="flex items-center gap-3">
                            <div className="w-5 h-5 rounded-full bg-[#003be2] flex items-center justify-center shrink-0">
                              <Check className="w-3 h-3 text-white stroke-[3]" />
                            </div>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                )}

                {/* ============================================================= */}
                {/* TAB 2: LESSONS (Screenshot 3 & 4) */}
                {/* ============================================================= */}
                {activeTab === "lessons" && (
                  <motion.div
                    key="lessons"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.28 }}
                    className="mt-8 sm:mt-10"
                  >
                    <h3 className="font-poppins font-bold text-xl sm:text-2xl text-gray-950 mb-2">
                      Explore the Modules
                    </h3>
                    <p className="font-satoshi text-sm sm:text-base text-gray-600 leading-relaxed max-w-[700px]">
                      Immerse yourself in the course content as we break down each module into comprehensive lessons, providing practical insights and hands-on experiences.
                    </p>

                    <h4 className="font-poppins font-bold text-lg text-gray-950 mt-8 mb-5">
                      Lesson List
                    </h4>

                    {/* Modules with Lime Video Icon */}
                    <div className="space-y-5">
                      {modulesData.map((mod) => (
                        <div key={mod.number} className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-[16px] bg-[#d4fb20] flex items-center justify-center shrink-0 shadow-xs mt-0.5">
                            <Video className="w-5 h-5 text-gray-950 fill-gray-950" />
                          </div>
                          <div>
                            <h5 className="font-poppins font-semibold text-sm sm:text-base text-gray-950">
                              {mod.number}: {mod.title}
                            </h5>
                            <p className="font-satoshi text-xs sm:text-sm text-gray-600 leading-relaxed mt-1">
                              {mod.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Lesson Content */}
                    <div className="mt-10">
                      <h4 className="font-poppins font-bold text-lg text-gray-950 mb-2">
                        Lesson Content
                      </h4>
                      <p className="font-satoshi text-sm sm:text-base text-gray-600 leading-relaxed">
                        Engage with each lesson through captivating video content, detailed textual explanations, and interactive elements. Download resources, complete assignments, and test your understanding with quizzes.
                      </p>
                    </div>

                    {/* Lesson Progress Tracking */}
                    <div className="mt-8">
                      <h4 className="font-poppins font-bold text-lg text-gray-950 mb-2">
                        Lesson Progress Tracking
                      </h4>
                      <p className="font-satoshi text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
                        Witness your growth as you complete lessons, with an intuitive progress tracking feature guiding you through your learning journey.
                      </p>

                      <div className="w-full max-w-[500px] bg-white rounded-[22px] p-6 border border-gray-200/90 shadow-xs">
                        <span className="font-satoshi text-xs text-gray-500 block">
                          Learning Progress
                        </span>
                        <span className="font-poppins font-bold text-3xl sm:text-4xl text-gray-950 block mt-1.5">
                          55%
                        </span>
                        <div className="w-full h-2.5 bg-gray-100 rounded-full mt-3.5 overflow-hidden">
                          <div className="h-full bg-[#d4fb20] rounded-full w-[55%]" />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* ============================================================= */}
                {/* TAB 3: REVIEWS (Screenshot 5) */}
                {/* ============================================================= */}
                {activeTab === "reviews" && (
                  <motion.div
                    key="reviews"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.28 }}
                    className="mt-8 sm:mt-10"
                  >
                    <h3 className="font-poppins font-bold text-xl sm:text-2xl text-gray-950 mb-2">
                      What Learners Are Saying
                    </h3>
                    <p className="font-satoshi text-sm sm:text-base text-gray-600 leading-relaxed max-w-[700px] mb-6">
                      Discover what our learners have to say about their experience with &apos;Build Digital Assets: A Comprehensive Guide.&apos; Read reviews and ratings from individuals who have embarked on the transformative journey of mastering digital asset creation.
                    </p>

                    {/* Ratings Summary Box */}
                    <div className="w-full bg-white rounded-[24px] p-6 sm:p-7 border border-gray-200/90 shadow-xs flex flex-col sm:flex-row items-center gap-6 sm:gap-10">
                      {/* Big Lime Rating Block */}
                      <div className="w-28 h-28 rounded-[20px] bg-[#d4fb20] flex flex-col items-center justify-center shrink-0 shadow-xs">
                        <span className="font-satoshi font-medium text-xs text-gray-950">
                          Ratings
                        </span>
                        <span className="font-poppins font-extrabold text-3xl sm:text-[34px] text-gray-950 leading-tight">
                          4.7
                        </span>
                      </div>

                      {/* Stars Bar Breakdown */}
                      <div className="flex-1 w-full space-y-2.5 font-satoshi text-xs sm:text-sm">
                        {[
                          { count: 720, width: "80%" },
                          { count: 120, width: "35%" },
                          { count: 21, width: "12%" },
                          { count: 12, width: "8%" },
                          { count: 16, width: "10%" },
                        ].map((row, idx) => (
                          <div key={idx} className="flex items-center gap-3">
                            <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                              <div
                                className="h-full bg-[#d4fb20] rounded-full"
                                style={{ width: row.width }}
                              />
                            </div>
                            <div className="flex items-center gap-0.5 text-gray-700">
                              {[...Array(5)].map((_, sIdx) => (
                                <Star
                                  key={sIdx}
                                  className="w-3.5 h-3.5 text-gray-700 fill-gray-700"
                                />
                              ))}
                            </div>
                            <span className="w-8 text-right text-gray-500 font-medium">
                              {row.count}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Individual Reviews Heading & Filter */}
                    <h4 className="font-poppins font-bold text-base sm:text-lg text-gray-950 mt-10 mb-4">
                      Individual Reviews:
                    </h4>

                    {/* Filter Pills */}
                    <div className="flex items-center gap-2 sm:gap-2.5 flex-wrap mb-6">
                      <button
                        type="button"
                        onClick={() => setReviewFilter("all")}
                        className={`font-satoshi font-medium text-xs sm:text-sm px-4 py-1.5 rounded-full transition-colors cursor-pointer ${
                          reviewFilter === "all"
                            ? "bg-[#d4fb20] text-gray-950"
                            : "bg-[#f4f5f6] text-gray-600 hover:text-gray-950"
                        }`}
                      >
                        All rating
                      </button>
                      {[5, 4, 3, 2, 1].map((stars) => (
                        <button
                          key={stars}
                          type="button"
                          onClick={() => setReviewFilter(String(stars))}
                          className={`font-satoshi font-medium text-xs sm:text-sm px-4 py-1.5 rounded-full flex items-center gap-1 transition-colors cursor-pointer ${
                            reviewFilter === String(stars)
                              ? "bg-[#d4fb20] text-gray-950"
                              : "bg-[#f4f5f6] text-gray-600 hover:text-gray-950"
                          }`}
                        >
                          <Star className="w-3 h-3 text-gray-700 fill-gray-700" />
                          <span>{stars}</span>
                        </button>
                      ))}
                    </div>

                    {/* Review Cards */}
                    <div className="space-y-4">
                      {filteredReviews.map((rev) => (
                        <div
                          key={rev.id}
                          className="bg-white rounded-[22px] p-5 sm:p-6 border border-gray-200/80 shadow-xs"
                        >
                          <div className="flex items-center justify-between gap-3">
                            <div className="flex items-center gap-3">
                              <div className="relative w-10 h-10 rounded-full overflow-hidden bg-gray-200 shrink-0">
                                <Image
                                  src={rev.avatar}
                                  alt={rev.name}
                                  fill
                                  className="object-cover"
                                />
                              </div>
                              <div>
                                <h5 className="font-poppins font-semibold text-sm text-gray-950">
                                  {rev.name}
                                </h5>
                                <p className="font-satoshi text-xs text-gray-500">
                                  {rev.role}
                                </p>
                              </div>
                            </div>
                            <span className="font-satoshi text-xs text-gray-400">
                              {rev.time}
                            </span>
                          </div>

                          <div className="flex items-center gap-1 my-3 text-gray-900">
                            {[...Array(rev.rating)].map((_, sIdx) => (
                              <Star
                                key={sIdx}
                                className="w-3.5 h-3.5 text-gray-900 fill-gray-900"
                              />
                            ))}
                          </div>

                          <p className="font-satoshi text-xs sm:text-sm leading-relaxed text-gray-700">
                            &ldquo;{rev.text}&rdquo;
                          </p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* ===================================================================== */}
          {/* Right Column: Sticky Sidebar Card (Screenshots 1, 3, 4, 5) */}
          {/* ===================================================================== */}
          <div className="lg:col-span-5 xl:col-span-4 lg:sticky lg:top-8 w-full z-20">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="w-full bg-white rounded-[28px] sm:rounded-[32px] p-6 sm:p-7 shadow-[0_20px_50px_rgba(0,0,0,0.12)] border border-gray-100 text-gray-950"
            >
              {/* Header: Poppins 600 SemiBold 20px line-height 120% letter-spacing -1% */}
              <h2 className="font-poppins font-semibold text-lg sm:text-[20px] leading-[1.2] tracking-[-0.01em] text-gray-950">
                112 Lessons (24 hours)
              </h2>

              {/* Sample Lessons Preview */}
              <div className="mt-4 space-y-3 font-satoshi text-xs sm:text-[13px]">
                <div className="flex items-center justify-between gap-3 text-gray-700">
                  <span className="truncate">01 Introduction to Digital Assets</span>
                  <span className="text-[#003be2] font-semibold shrink-0">12 mins</span>
                </div>
                <div className="flex items-center justify-between gap-3 text-gray-700">
                  <span className="truncate">02 Design Principles for Impacts</span>
                  <span className="text-[#003be2] font-semibold shrink-0">21 mins</span>
                </div>
                <div className="flex items-center justify-between gap-3 text-gray-700">
                  <span className="truncate">03 Advanced Techniques in Digital Creation</span>
                  <span className="text-[#003be2] font-semibold shrink-0">16 mins</span>
                </div>
              </div>

              <span className="font-satoshi text-xs text-gray-400 mt-2.5 block">
                99 more videos
              </span>

              {/* CTA Tagline */}
              <p className="font-satoshi text-xs text-gray-600 mt-4 leading-relaxed">
                Ready to Dive In? Enroll Now and Start Building Your Digital Future!
              </p>

              {/* Price Row */}
              <div className="mt-3.5 flex items-baseline gap-1 font-poppins">
                <span className="text-3xl font-extrabold text-[#003be2] tracking-tight">
                  $25
                </span>
                <span className="text-xs text-gray-400 font-normal">/lifetime</span>
              </div>

              {/* Enroll Button */}
              <button
                type="button"
                onClick={handleEnroll}
                className="w-full mt-3.5 py-3.5 sm:py-4 rounded-full bg-[#d4fb20] text-gray-950 font-satoshi font-semibold text-sm sm:text-base hover:bg-[#c6f011] active:scale-[0.98] transition-all shadow-sm cursor-pointer"
              >
                Enroll Now
              </button>

              {/* This course include */}
              <div className="mt-6 pt-5 border-t border-gray-100">
                <h3 className="font-poppins font-bold text-sm sm:text-base text-gray-950 mb-3.5">
                  This course include
                </h3>
                <ul className="space-y-3 font-satoshi text-xs sm:text-[13px] text-gray-700">
                  <li className="flex items-center gap-2.5">
                    <FolderArchive className="w-4 h-4 text-[#003be2]" />
                    <span>Learning Resources</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Video className="w-4 h-4 text-[#003be2]" />
                    <span>Quality Lesson Videos</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Award className="w-4 h-4 text-[#003be2]" />
                    <span>Certificate of Completion</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Headphones className="w-4 h-4 text-[#003be2]" />
                    <span>Private Consultation</span>
                  </li>
                </ul>
              </div>

              {/* Instructor Profile Box */}
              <div className="mt-6 pt-5 border-t border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="relative w-11 h-11 rounded-full overflow-hidden bg-gray-200 shrink-0">
                    <Image
                      src="/assets/images/discover/alex.png"
                      alt="PurePearl Studio Instructor"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-poppins font-semibold text-sm text-gray-950 leading-tight">
                      PurePearl Studio
                    </h4>
                    <p className="font-satoshi text-xs text-gray-500 mt-0.5">
                      Professional Creator
                    </p>
                  </div>
                </div>

                <p className="font-satoshi text-xs text-gray-500 mt-3 mb-4 leading-relaxed">
                  Ready to Dive In? Enroll Now and Start Building Your Digital Future!
                </p>

                <button
                  type="button"
                  className="w-full sm:w-auto px-5 py-2 rounded-full border border-gray-300 text-gray-800 text-xs sm:text-sm font-satoshi font-medium hover:bg-gray-50 transition-colors cursor-pointer"
                >
                  See Full Profile
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
