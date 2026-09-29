"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Search, Star } from "lucide-react";
import NavBar from "@/components/shared/NavBar/NavBar";

// 6 student avatars from happy-students folder
const studentAvatars = [
  "/assets/images/happy-students/student-1.png",
  "/assets/images/happy-students/student-2.png",
  "/assets/images/happy-students/student-3.png",
  "/assets/images/happy-students/student-4.png",
  "/assets/images/happy-students/student-5.png",
  "/assets/images/happy-students/student-6.png",
];

export const HeroSection: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <section className="relative w-full flex flex-col justify-between select-none overflow-hidden min-h-[calc(100vh-80px)]  ">

      {/* 2. Main Hero Content Container (Higher Stacking Context z-20) */}
      <div className="relative w-full max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 flex-1 flex flex-col items-center justify-between">
        {/* Top Text Content (Title, Subtitle, Search) */}
        <div className="text-center max-w-4xl mx-auto w-full pt-8">
          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-white text-[28px] sm:text-[42px] md:text-[52px] lg:text-[60px] xl:text-[64px] font-bold sm:font-extrabold tracking-[-0.03em] leading-[1.1] sm:leading-[1.08]"
          >
            Get Access to Hundreds
            <br />
            Courses Available
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-white/85 text-xs sm:text-sm md:text-[15px] font-normal max-w-[540px] lg:max-w-7xl mx-auto  leading-relaxed px-2 sm:px-4 my-10 lg:mb-14"
          >
            Unlock your creativity, gain valuable knowledge, and grow your
            business with our wide range of courses.
          </motion.p>

          {/* Search Bar */}
          <motion.form
            onSubmit={handleSearch}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-[360px] sm:max-w-[420px] md:max-w-[450px] bg-white rounded-full p-1 md:p-0 pl-3 md:pl-4 sm:pl-5 flex items-center justify-between shadow-[0_14px_36px_rgba(0,0,0,0.18)] mx-auto mt-4 sm:mt-5 md:mt-6 z-20"
          >
            <div className="flex items-center gap-2 sm:gap-2.5 flex-1 min-w-0 pr-2">
              <Search className="w-4 h-4 text-gray-400 shrink-0" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Course, topic, creator"
                className="w-full bg-transparent text-gray-800 placeholder-gray-400 text-xs sm:text-[13px] md:text-sm outline-none font-normal truncate"
                aria-label="Search courses, topics, or creators"
              />
            </div>
            <button
              type="submit"
              className="md:-mr-28 bg-[#d4fb20] hover:bg-[#c7f215] active:scale-95 text-gray-950 font-semibold px-4.5 sm:px-6 py-1.5 sm:py-2 md:py-3 rounded-full text-xs sm:text-sm transition-all duration-200 shadow-xs shrink-0 cursor-pointer"
            >
              Search
            </button>
          </motion.form>
        </div>

        {/* 3. Center Stage: Lime Arch + Student + Floating Badges */}
        <div className=" relative w-full max-w-[780px] md:max-w-[940px] lg:max-w-[980px] mx-auto flex items-end justify-center">
          {/* Lime Semicircle Arch Background */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[340px] sm:w-[520px] md:w-[660px] lg:w-[760px] xl:w-[1100px] aspect-[2/1] overflow-hidden pointer-events-none select-none z-0">
            <div className="relative w-full h-full">
              <Image
                src="/assets/images/ellipse-arch.png"
                alt=""
                fill
                priority
                sizes="(max-width: 640px) 340px, (max-width: 1024px) 660px, 820px"
                className="object-contain object-bottom"
              />
            </div>
          </div>

          {/* Center Student Photo with Laptop and Headphones */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="relative lg:-mr-20 z-10 w-[240px] sm:w-[340px] md:w-[420px] lg:w-[480px] xl:w-[710px] flex items-end justify-center pointer-events-none select-none"
          >
            <div className="relative w-full aspect-[750/520]">
              <Image
                src="/assets/images/hero-student.png"
                alt="Student learning on ByteSpace with laptop and headphones"
                fill
                priority
                sizes="(max-width: 640px) 240px, (max-width: 1024px) 420px, 510px"
                className="object-contain object-bottom drop-shadow-[0_20px_40px_rgba(0,0,0,0.22)]"
              />
            </div>
          </motion.div>

          {/* ================= FLOATING BADGES ================= */}

          {/* Badge 1: UI/UX Design (Left of student's head) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, x: -15 }}
            animate={{
              opacity: 1,
              scale: 1,
              x: 0,
              y: [0, -6, 0],
            }}
            transition={{
              opacity: { duration: 0.5, delay: 0.25 },
              scale: { duration: 0.5, delay: 0.25 },
              x: { duration: 0.5, delay: 0.25 },
              y: {
                repeat: Infinity,
                duration: 4,
                ease: "easeInOut",
              },
            }}
            className="absolute top-[6%] sm:top-[10%] md:top-[12%] lg:top-[25%] left-[0%] sm:left-[4%] md:left-[8%] lg:left-[19%] z-30 pointer-events-auto scale-[0.78] sm:scale-90 md:scale-100 origin-top-left"
          >
            <div className="bg-white rounded-xl sm:rounded-2xl p-2.5 sm:p-3 md:p-3.5 shadow-[0_16px_36px_rgba(0,0,0,0.18)] border border-white/70 backdrop-blur-sm min-w-[130px] sm:min-w-[145px] md:min-w-[160px]">
              <h3 className="font-bold text-gray-900 text-xs sm:text-[13px] md:text-sm leading-tight tracking-tight">
                UI/UX Design
              </h3>
              {/* <p className="text-[9px] sm:text-[10px] md:text-[11px] text-gray-500 font-medium tracking-tight mt-0.5 whitespace-nowrap">
                200 Courses
                <span className=" mx-1.5 -mt-10 text-gray-400 text-[8px] text-start">&bull;</span> 1000+ Students
              </p> */}

              <div className="flex items-center text-[9px] sm:text-[10px] md:text-[11px] text-gray-500 font-medium tracking-tight mt-0.5 whitespace-nowrap">
                <p>200 Courses</p>
                <p className=" mx-1.5 -mt-1.5 text-gray-400 text-[8px] text-start">&bull;</p> <p className="text-center">1000+ Students</p>
              </div>
            </div>
          </motion.div>

          {/* Badge 2: Learning Progress 55% (Right of student's shoulder) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, x: 15 }}
            animate={{
              opacity: 1,
              scale: 1,
              x: 0,
              y: [0, 6, 0],
            }}
            transition={{
              opacity: { duration: 0.5, delay: 0.3 },
              scale: { duration: 0.5, delay: 0.3 },
              x: { duration: 0.5, delay: 0.3 },
              y: {
                repeat: Infinity,
                duration: 4.5,
                ease: "easeInOut",
              },
            }}
            className="absolute top-[10%] sm:top-[14%] md:top-[16%] lg:top-[28%] right-[0%] sm:right-[4%] md:right-[8%] lg:right-[11%]  xl:right-[19%] z-30 pointer-events-auto scale-[0.78] sm:scale-90 md:scale-100 origin-top-right"
          >
            <div className="bg-white rounded-xl sm:rounded-2xl p-2.5 sm:p-3.5 md:p-4 shadow-[0_16px_36px_rgba(0,0,0,0.18)] border border-white/70 backdrop-blur-sm min-w-[120px] sm:min-w-[140px] md:min-w-[200px]">
              <span className="text-[9px] sm:text-[10px] md:text-[11px] text-gray-500 font-medium tracking-tight block">
                Learning Progress
              </span>
              <div className="text-xl sm:text-2xl md:text-[28px] lg:text-[40px] font-extrabold text-gray-950 leading-none mt-1 tracking-tight">
                55%
              </div>
              {/* Progress bar */}
              <div className="w-full h-1.5 sm:h-2 bg-[#f0f2f5] rounded-full mt-2 sm:mt-2.5 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "55%" }}
                  transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                  className="h-full bg-[#d4fb20] rounded-full"
                />
              </div>
            </div>
          </motion.div>

          {/* Badge 3: Happy Students (Left of student's hip/laptop) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 15 }}
            animate={{
              opacity: 1,
              scale: 1,
              y: [0, -5, 0],
            }}
            transition={{
              opacity: { duration: 0.5, delay: 0.35 },
              scale: { duration: 0.5, delay: 0.35 },
              y: {
                repeat: Infinity,
                duration: 5,
                ease: "easeInOut",
              },
            }}
            className="absolute bottom-[6%] sm:bottom-[10%] md:bottom-[12%] left-[0%] sm:left-[2%] md:left-[4%] lg:left-[11%] z-30 pointer-events-auto scale-[0.78] sm:scale-90 md:scale-100 origin-bottom-left"
          >
            <div className="bg-white rounded-xl sm:rounded-2xl p-2.5 sm:p-3 md:p-3.5 shadow-[0_16px_36px_rgba(0,0,0,0.18)] border border-white/70 backdrop-blur-sm">
              <h3 className="font-bold text-gray-900 text-xs sm:text-[13px] md:text-sm leading-tight tracking-tight">
                Happy Students
              </h3>
              <div className="flex items-center gap-1 mt-0.5 mb-1.5 sm:mb-2">
                <span className="text-[11px] sm:text-xs font-semibold text-gray-800">
                  4.5
                </span>
                <span className="text-[10px] sm:text-[11px] text-gray-400">
                  (240)
                </span>
                <Star className="w-3 h-3 text-[#D4FB20] fill-[#D4FB20] ml-0.5" />
              </div>

              {/* Avatar Stack */}
              <div className="flex items-center">
                {studentAvatars.map((src, index) => (
                  <div
                    key={index}
                    className="relative w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 rounded-full border-[1.5px] sm:border-2 border-white -ml-3 first:ml-0 overflow-hidden bg-gray-200 shrink-0 shadow-xs"
                  >
                    <Image
                      src={src}
                      alt={`Happy Student ${index + 1}`}
                      fill
                      sizes="34px"
                      className="object-cover"
                    />
                  </div>
                ))}
                {/* 2K+ Lime Circle */}
                <div className="relative w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 rounded-full bg-[#d4fb20] border-[1.5px] sm:border-2 border-white -ml-1.5 flex items-center justify-center shrink-0 shadow-xs">
                  <span className="text-[8px] sm:text-[9px] font-bold text-gray-950 tracking-tight select-none">
                    2K+
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ================= 3D FLOATING DECORATIVE SHAPES (Stacking Context z-10) ================= */}

      {/* 1. Lime Squiggle (Top-Left) */}
      <motion.div
        animate={{
          y: [0, -10, 0],
          rotate: [0, 0, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 6,
          ease: "easeInOut",
        }}
        className="absolute top-[18%] sm:top-[20%] left-[-6%] sm:left-[-2%] md:left-[-1%] lg:left-[0%] w-20 sm:w-32 md:w-38 lg:w-56 aspect-[1068/1548] pointer-events-none select-none z-10 opacity-40 sm:opacity-100"
      >
        <Image
          src="/assets/images/frame-lime.png"
          alt=""
          fill
          sizes="(max-width: 640px) 80px, 176px"
          className="object-contain"
        />
      </motion.div>

      {/* 2. White Squiggle (Mid-Left) */}
      <motion.div
        animate={{
          y: [0, 8, 0],
          rotate: [0, 3, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 5.2,
          ease: "easeInOut",
        }}
        className="absolute top-[44%] sm:top-[46%] left-[4%] sm:left-[9%] md:left-[11%] lg:left-[14%] w-10 sm:w-16 md:w-20 lg:w-44 aspect-[707/704] pointer-events-none select-none z-10"
      >
        <Image
          src="/assets/images/frame-white-left.png"
          alt=""
          fill
          sizes="(max-width: 640px) 40px, 250px"
          className="object-contain"
        />
      </motion.div>

      {/* 3. White Donut/Torus (Bottom-Left) */}
      <motion.div
        animate={{
          y: [0, -8, 0],
          rotate: [0, -4, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 6.8,
          ease: "easeInOut",
        }}
        className="absolute bottom-[1%] sm:bottom-[3%] left-[-4%] sm:left-[0%] md:left-[1%] lg:left-[4.5%] w-20 sm:w-32 md:w-40 lg:w-72 aspect-[1383/1371] pointer-events-none select-none z-20"
      >
        <Image
          src="/assets/images/cone-donut.png"
          alt=""
          fill
          sizes="(max-width: 640px) 80px, 192px"
          className="object-contain"
        />
      </motion.div>

      {/* 4. Lime Cylinder (Top-Right) */}
      <motion.div
        animate={{
          y: [0, -12, 0],
          rotate: [0, 0, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 6.4,
          ease: "easeInOut",
        }}
        className="absolute top-[16%] sm:top-[18%] right-[-6%] sm:right-[-2%] md:right-[-1%] lg:right-[0%] w-20 sm:w-32 md:w-38 lg:w-48 aspect-[852/1488] pointer-events-none select-none z-10 opacity-40 sm:opacity-100"
      >
        <Image
          src="/assets/images/cone-lime.png"
          alt=""
          fill
          sizes="(max-width: 640px) 80px, 176px"
          className="object-contain"
        />
      </motion.div>

      {/* 5. White Pyramid (Mid-Right) */}
      <motion.div
        animate={{
          y: [0, 8, 0],
          rotate: [0, -3, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 5.6,
          ease: "easeInOut",
        }}
        className="absolute top-[42%] sm:top-[44%] right-[5%] sm:right-[9%] md:right-[11%] lg:right-[13%] w-12 sm:w-18 md:w-22 lg:w-44 aspect-[760/756] pointer-events-none select-none z-10"
      >
        <Image
          src="/assets/images/cone-pyramid.png"
          alt=""
          fill
          sizes="(max-width: 640px) 48px, 104px"
          className="object-contain"
        />
      </motion.div>

      {/* 6. White Squiggle (Bottom-Right) */}
      <motion.div
        animate={{
          y: [0, -8, 0],
          rotate: [0, 2, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 5.8,
          ease: "easeInOut",
        }}
        className="absolute bottom-[2%] sm:bottom-[4%] right-[1%] sm:right-[2%] md:right-[3%] lg:right-[4%] w-20 sm:w-28 md:w-34 lg:w-72 aspect-[1265/1327] pointer-events-none select-none z-10"
      >
        <Image
          src="/assets/images/frame-white-right.png"
          alt=""
          fill
          sizes="(max-width: 640px) 80px, 160px"
          className="object-contain"
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;
