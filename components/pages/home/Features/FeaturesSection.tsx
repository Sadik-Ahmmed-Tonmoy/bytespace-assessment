"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { BarChart2, Star } from "lucide-react";

const happyStudentAvatars = [
  "/assets/images/happy-students/student-1.png",
  "/assets/images/happy-students/student-2.png",
  "/assets/images/happy-students/student-3.png",
  "/assets/images/happy-students/student-4.png",
  "/assets/images/happy-students/student-5.png",
  "/assets/images/happy-students/student-6.png",
];

const courseManagementChecklist = [
  "Share Your Expertise",
  "Monetize Your Passion",
  "Flexibility and Autonomy",
  "Build a Community",
];

export const FeaturesSection: React.FC = () => {
  return (
    <section
      className="relative w-full py-20 sm:py-28 lg:py-36 overflow-hidden select-none"
      style={{
        backgroundColor: "#FFFFFF",
        backgroundImage: `
          radial-gradient(ellipse 60% 45% at 12% 15%, rgba(212, 251, 32, 0.35) 0%, rgba(212, 251, 32, 0.08) 50%, transparent 75%),
          radial-gradient(ellipse 55% 45% at 88% 18%, rgba(191, 219, 254, 0.65) 0%, rgba(219, 234, 254, 0.2) 50%, transparent 75%),
          radial-gradient(ellipse 55% 45% at 10% 75%, rgba(212, 251, 32, 0.35) 0%, rgba(212, 251, 32, 0.08) 50%, transparent 75%),
          radial-gradient(ellipse 55% 45% at 90% 80%, rgba(186, 215, 255, 0.65) 0%, rgba(210, 230, 255, 0.2) 50%, transparent 75%)
        `,
      }}
    >
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* ========================================================================= */}
        {/* BLOCK 1: Your Path to Professional Growth Starts Here! */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Text & Stats */}
          <div className="lg:col-span-6 xl:col-span-6 max-w-[520px]">
            <motion.h2
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="font-poppins font-semibold text-3xl sm:text-4xl lg:text-[44px] leading-[1.2] tracking-[-0.01em] text-gray-950"
            >
              Your Path to
              <br />
              Professional Growth
              <br />
              Starts Here!
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-satoshi font-normal text-sm sm:text-base lg:text-[18px] leading-[1.6] tracking-normal text-gray-500 mt-5 sm:mt-6 max-w-[470px]"
            >
              Explore our curated selection of courses tailored to enhance your
              capabilities and accelerate your career journey. Whether you are
              looking to sharpen specific skills, gain industry expertise, or
              embark on a new career path entirely, we have the resources you
              need.
            </motion.p>

            {/* Stats Row */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 sm:mt-10 md:mt-12 flex items-center gap-8 sm:gap-12 md:gap-14"
            >
              {/* Stat 1: 12K Students */}
              <div>
                <span className="font-poppins font-medium text-2xl sm:text-3xl lg:text-[36px] leading-[44px] tracking-[-0.01em] text-[#003be2] block">
                  12K
                </span>
                <span className="font-satoshi font-normal text-sm sm:text-base lg:text-[18px] leading-[1.6] tracking-normal text-gray-500 block mt-0.5">
                  Students
                </span>
              </div>

              {/* Stat 2: 70+ Courses */}
              <div>
                <span className="font-poppins font-medium text-2xl sm:text-3xl lg:text-[36px] leading-[44px] tracking-[-0.01em] text-[#003be2] block">
                  70+
                </span>
                <span className="font-satoshi font-normal text-sm sm:text-base lg:text-[18px] leading-[1.6] tracking-normal text-gray-500 block mt-0.5">
                  Courses
                </span>
              </div>

              {/* Stat 3: 16 Creators */}
              <div>
                <span className="font-poppins font-medium text-2xl sm:text-3xl lg:text-[36px] leading-[44px] tracking-[-0.01em] text-[#003be2] block">
                  16
                </span>
                <span className="font-satoshi font-normal text-sm sm:text-base lg:text-[18px] leading-[1.6] tracking-normal text-gray-500 block mt-0.5">
                  Creators
                </span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Visual Composition */}
          <div className="lg:col-span-6 xl:col-span-6 w-full flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[550px] flex items-center justify-center min-h-[490px] sm:min-h-[540px] lg:min-h-[600px]">
              {/* 3D Neon Lime Coil (Top-Right, angled) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                animate={{ y: [0, -10, 0], rotate: [12, 16, 12] }}
                transition={{
                  opacity: { duration: 0.6 },
                  scale: { duration: 0.6 },
                  y: { repeat: Infinity, duration: 4, ease: "easeInOut" },
                  rotate: { repeat: Infinity, duration: 5, ease: "easeInOut" },
                }}
                className="absolute top-0 sm:top-2 right-2 sm:right-6 md:right-8 w-28 sm:w-32 md:w-36 z-10 pointer-events-none"
              >
                <Image
                  src="/assets/images/Frame.png"
                  alt="Neon Lime 3D Coil"
                  width={140}
                  height={190}
                  className="object-contain"
                />
              </motion.div>

              {/* Floating Figma Course Card (Behind the student) */}
              <motion.div
                initial={{ opacity: 0, x: -30, y: 20 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -4 }}
                className="absolute -top-5 sm:-top-8 left-[-10px] sm:left-0 md:left-2 w-[270px] sm:w-[305px] md:w-[330px] bg-white rounded-[26px] p-3.5 sm:p-4 shadow-[0_16px_40px_rgba(0,0,0,0.06)] border border-gray-100/90 z-10"
              >
                {/* Course Image */}
                <div className="relative w-full aspect-[700/395] rounded-[16px] overflow-hidden bg-gray-100">
                  <Image
                    src="/assets/images/courses/course-1.png"
                    alt="Learn Figma Course Mockup"
                    fill
                    sizes="(max-width: 640px) 270px, 330px"
                    className="object-cover"
                  />
                </div>
                {/* Course Info */}
                <div className="mt-3.5">
                  <h4 className="font-poppins font-bold text-sm sm:text-base text-gray-950 leading-snug truncate">
                    Learn Figma from Basic
                  </h4>
                  <p className="text-[11px] sm:text-xs text-gray-400 font-poppins mt-0.5">
                    by <span className="text-[#003be2] font-medium">purepearl studio</span>
                  </p>
                  <div className="mt-2.5 flex items-center justify-between">
                    <span className="bg-[#f4f5f6] text-gray-700 text-xs font-medium px-3 py-1 rounded-full flex items-center gap-1.5 font-poppins">
                      <BarChart2 className="w-3 h-3 text-gray-500" />
                      Beginner
                    </span>
                    <div className="flex items-baseline gap-0.5 font-poppins">
                      <span className="text-base font-extrabold text-[#003be2]">$25</span>
                      <span className="text-xs text-gray-400 font-normal">/lifetime</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Main Student Cutout */}
              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="relative z-20 w-[300px] sm:w-[370px] md:w-[420px] lg:w-[450px] pt-16 sm:pt-12"
              >
                <Image
                  src="/assets/images/hero-student.png"
                  alt="Student with laptop"
                  width={450}
                  height={530}
                  priority
                  className="w-full h-auto object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.12)]"
                />
              </motion.div>

              {/* Floating Learning Progress Card */}
              <motion.div
                initial={{ opacity: 0, x: 30, y: 20 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -4 }}
                className="absolute top-[40%] sm:top-[38%] right-[-10px] sm:right-0 md:right-2 z-30 bg-white/95 backdrop-blur-md rounded-[20px] p-5 sm:p-5.5 shadow-[0_20px_45px_rgba(0,0,0,0.08)] border border-gray-100/90 min-w-[170px] sm:min-w-[190px]"
              >
                <span className="font-poppins text-xs font-normal text-gray-500 block">
                  Learning Progress
                </span>
                <span className="font-poppins font-bold text-3xl sm:text-[38px] text-gray-950 block mt-1.5 leading-none tracking-tight">
                  55%
                </span>
                <div className="w-full h-2 bg-[#F3F4F6] rounded-full mt-3 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "55%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
                    className="h-full bg-[#d4fb20] rounded-full"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* BLOCK 2: Create & Manage Courses Easily. */}
        {/* ========================================================================= */}
        <div className="mt-24 sm:mt-32 lg:mt-40 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Visual Composition */}
          <div className="lg:col-span-6 xl:col-span-6 w-full flex justify-center lg:justify-start order-2 lg:order-1">
            <div className="relative w-full max-w-[550px] flex items-center justify-center min-h-[490px] sm:min-h-[540px] lg:min-h-[600px]">
              {/* 3D Neon Lime Coil (Right side of woman, at waist) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                animate={{ y: [0, 10, 0], rotate: [0, -3, 0] }}
                transition={{
                  opacity: { duration: 0.6 },
                  scale: { duration: 0.6 },
                  y: { repeat: Infinity, duration: 4.5, ease: "easeInOut" },
                  rotate: { repeat: Infinity, duration: 5.5, ease: "easeInOut" },
                }}
                className="absolute top-[30%] sm:top-[32%] right-2 sm:right-6 md:right-10 w-28 sm:w-32 md:w-36 z-10 pointer-events-none"
              >
                <Image
                  src="/assets/images/frame-lime.png"
                  alt="Neon Lime 3D Coil"
                  width={140}
                  height={190}
                  className="object-contain"
                />
              </motion.div>

              {/* Main Instructor Cutout */}
              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="relative z-20 w-[270px] sm:w-[330px] md:w-[370px] lg:w-[400px] pt-8"
              >
                <Image
                  src="/assets/images/instructor-woman.png"
                  alt="Course instructor with tablet"
                  width={410}
                  height={510}
                  className="w-full h-auto object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.12)]"
                />
              </motion.div>

              {/* Floating Badge 1: Total Revenue (Top-Left) */}
              <motion.div
                initial={{ opacity: 0, x: -30, y: -20 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -4 }}
                className="absolute top-4 sm:top-8 left-[-15px] sm:left-[-5px] md:left-2 z-30 bg-[#003be2] text-white rounded-[18px] p-4 shadow-[0_14px_30px_rgba(0,59,226,0.35)] min-w-[160px] sm:min-w-[180px]"
              >
                <span className="text-xs font-normal text-white/80 font-poppins block">
                  Total Revenue
                </span>
                <span className="text-[10px] text-white/60 font-poppins block mt-0.5">
                  July 1-28
                </span>
                <span className="text-xl sm:text-[23px] font-bold text-white font-poppins block mt-1 tracking-tight">
                  $120.29
                </span>
                {/* Lime Progress Bar */}
                <div className="w-full h-1.5 bg-white/20 rounded-full mt-2.5 overflow-hidden">
                  <div className="w-[65%] h-full bg-[#d4fb20] rounded-full" />
                </div>
              </motion.div>

              {/* Floating Badge 2: Year to Date (Middle-Left) */}
              <motion.div
                initial={{ opacity: 0, x: -30, y: 20 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -4 }}
                className="absolute top-[36%] sm:top-[38%] left-[-15px] sm:left-[-5px] md:left-2 z-30 bg-[#003be2] text-white rounded-[18px] p-4 shadow-[0_14px_30px_rgba(0,59,226,0.35)] min-w-[160px] sm:min-w-[180px]"
              >
                <span className="text-xs font-normal text-white/80 font-poppins block">
                  Year to Date
                </span>
                <span className="text-[10px] text-white/60 font-poppins block mt-0.5">
                  2023
                </span>
                <span className="text-xl sm:text-[23px] font-bold text-white font-poppins block mt-1 tracking-tight">
                  $1,200.38
                </span>
                {/* Lime Pill Badge */}
                <div className="mt-2">
                  <span className="bg-[#d4fb20] text-gray-950 font-extrabold text-[10px] px-2.5 py-0.5 rounded-full inline-block font-poppins shadow-xs">
                    +12$
                  </span>
                </div>
              </motion.div>

              {/* Floating Badge 3: Happy Students (Bottom-Right) */}
              <motion.div
                initial={{ opacity: 0, x: 30, y: 20 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -4 }}
                className="absolute bottom-2 sm:bottom-4 right-[-10px] sm:right-0 md:right-4 z-30 bg-white/95 backdrop-blur-md rounded-[20px] p-4 sm:p-4.5 shadow-[0_18px_40px_rgba(0,0,0,0.08)] border border-gray-100/90 min-w-[195px] sm:min-w-[215px]"
              >
                <span className="font-poppins text-xs font-semibold text-gray-900 block">
                  Happy Students
                </span>
                <div className="flex items-center gap-1 mt-0.5">
                  <span className="font-poppins text-[11px] font-bold text-gray-800">
                    4.5
                  </span>
                  <span className="font-poppins text-[10px] text-gray-400">
                    (240)
                  </span>
                  <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                </div>
                {/* Overlapping Avatars + 2K+ badge */}
                <div className="flex items-center mt-2.5">
                  {happyStudentAvatars.map((avatar, idx) => (
                    <div
                      key={idx}
                      className="relative w-6.5 h-6.5 rounded-full border-2 border-white -ml-1.5 first:ml-0 overflow-hidden bg-gray-200 shrink-0 shadow-xs"
                    >
                      <Image
                        src={avatar}
                        alt={`Student ${idx + 1}`}
                        fill
                        sizes="26px"
                        className="object-cover"
                      />
                    </div>
                  ))}
                  <div className="relative w-6.5 h-6.5 rounded-full bg-[#d4fb20] border-2 border-white -ml-1.5 flex items-center justify-center shrink-0 shadow-xs">
                    <span className="font-poppins text-[9px] font-extrabold text-gray-950 tracking-tight select-none">
                      2K+
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Right Column: Text & Checklist */}
          <div className="lg:col-span-6 xl:col-span-6 max-w-[520px] order-1 lg:order-2">
            <motion.h2
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="font-poppins font-semibold text-3xl sm:text-4xl lg:text-[44px] leading-[1.2] tracking-[-0.01em] text-gray-950"
            >
              Create &amp; Manage
              <br />
              Courses Easily.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-satoshi text-sm sm:text-base lg:text-[18px] leading-[28px] tracking-normal text-gray-500 mt-5 sm:mt-6 max-w-[490px]"
            >
              <strong className="font-satoshi font-bold text-gray-900">
                ByteSpace
              </strong>{" "}
              supports individuals or entities in the creation, publication,
              <br className="hidden sm:inline" />
              and administration of educational courses.
            </motion.p>

            {/* Checklist */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 sm:mt-10 space-y-4"
            >
              {courseManagementChecklist.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 group/item transition-transform duration-200 hover:translate-x-1 cursor-default"
                >
                  <div className="w-5 h-5 rounded-full bg-[#003be2] flex items-center justify-center shrink-0 shadow-xs">
                    <svg
                      className="w-3 h-3 text-white stroke-[3]"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <span className="font-satoshi font-medium text-base sm:text-lg lg:text-[18px] leading-[1.2] tracking-normal text-gray-900">
                    {item}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
