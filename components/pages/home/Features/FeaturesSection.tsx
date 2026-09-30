"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { BarChart2, Star } from "lucide-react";
import CourseCard from "../Courses/CourseCard";
import { coursesData } from "../Courses/CoursesSection";
import NeonLimeCoil from "@/public/assets/images/spring.png";
import rightBoy from "@/public/assets/images/unlock/Frame 11.png";
import girl from "@/public/assets/images/Frame 12.png";

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
      className="relative w-full py-20 sm:py-28 lg:py-24 overflow-hidden select-none"
      style={{
        backgroundColor: "#FFFFFF",
        backgroundImage: `
          radial-gradient(ellipse 40% 40% at 32% 5%, rgba(212, 251, 32, 0.35) 0%, rgba(212, 251, 32, 0.08) 50%, transparent 75%),
          radial-gradient(ellipse 25% 35% at 88% 18%, rgba(191, 219, 254, 0.65) 0%, rgba(219, 234, 254, 0.2) 50%, transparent 95%),
          radial-gradient(ellipse 45% 45% at 10% 85%, rgba(212, 251, 32, 0.35) 0%, rgba(212, 251, 32, 0.08) 50%, transparent 75%),
          radial-gradient(ellipse 65% 45% at 90% 90%, rgba(186, 215, 255, 0.65) 0%, rgba(210, 230, 255, 0.2) 50%, transparent 75%)
        `,
      }}
    >
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* ========================================================================= */}
        {/* BLOCK 1: Your Path to Professional Growth Starts Here! */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Text & Stats */}
          <div className="lg:col-span-6 xl:col-span-6 max-w-[720px]">
            <motion.h2
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="font-poppins font-semibold text-3xl sm:text-4xl lg:text-[44px] leading-[1.2] tracking-[-0.01em] text-gray-950"
            >
              Your Path to Professional
              <br />
              Growth Starts Here!
             
              
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
          <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="relative z-20 w-[300px] sm:w-[370px] md:w-[420px] lg:w-[550px] pt-16 sm:pt-12"
              >
                <Image
                  src={rightBoy}
                  alt="Student with laptop"
                  width={450}
                  height={530}
                  priority
                  className="w-full h-auto object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.12)]"
                />
              </motion.div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* BLOCK 2: Create & Manage Courses Easily. */}
        {/* ========================================================================= */}
        <div className="mt-24 sm:mt-32 lg:mt-40 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Visual Composition */}
          <div className="lg:col-span-6 xl:col-span-6 w-full flex justify-center lg:justify-start order-2 lg:order-1">
            <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="relative z-20 w-[300px] sm:w-[370px] md:w-[420px] lg:w-[550px] pt-16 sm:pt-12"
              >
                <Image
                  src={girl}
                  alt="Student "
                  width={450}
                  height={530}
                  priority
                  className="w-full h-auto object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.12)]"
                />
              </motion.div>
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
