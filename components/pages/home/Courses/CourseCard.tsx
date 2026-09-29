"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Star, BarChart2 } from "lucide-react";

export interface Course {
  id: string | number;
  title: string;
  image: string;
  author: string;
  authorUrl?: string;
  rating: number;
  level: string;
  price: string;
  period: string;
  category?: string;
  avatars?: string[];
  enrolledStudentsCount?: string;
  href?: string;
}

export interface CourseCardProps {
  course: Course;
  index?: number;
  priority?: boolean;
  className?: string;
  avatars?: string[];
  enrolledCount?: string;
  onClick?: (course: Course) => void;
  onAuthorClick?: (author: string, e: React.MouseEvent) => void;
  showAnimation?: boolean;
}

const defaultCardAvatars = [
  "/assets/images/happy-students/student-2.png",
  "/assets/images/happy-students/student-4.png",
  "/assets/images/happy-students/student-5.png",
  "/assets/images/happy-students/student-6.png",
];

export const CourseCard: React.FC<CourseCardProps> = ({
  course,
  index = 0,
  priority = false,
  className = "",
  avatars,
  enrolledCount,
  onClick,
  onAuthorClick,
  showAnimation = true,
}) => {
  const displayAvatars = avatars || course.avatars || defaultCardAvatars;
  const displayCount =
    enrolledCount || course.enrolledStudentsCount || "26+";

  const cardContent = (
    <>
      {/* 1. Card Image Container */}
      <div className="relative w-full aspect-[700/395] rounded-[18px] overflow-hidden bg-gray-100">
        <Image
          src={course.image}
          alt={course.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          priority={priority || index < 3}
        />
      </div>

      {/* 2. Title & Rating Row */}
      <div className="mt-4 sm:mt-5 flex items-start justify-between gap-3">
        <h3 className="font-poppins font-bold text-lg sm:text-[21px] text-gray-950 tracking-tight leading-snug line-clamp-1 group-hover:text-[#003be2] transition-colors">
          {course.title}
        </h3>
        <div
          className="flex items-center gap-1 shrink-0 mt-0.5"
          aria-label={`Rating: ${course.rating} out of 5 stars`}
        >
          <span className="font-poppins font-semibold text-base sm:text-lg text-gray-700">
            {course.rating}
          </span>
          <Star
            className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-gray-300 fill-gray-300"
            aria-hidden="true"
          />
        </div>
      </div>

      {/* 3. Author Row */}
      <div className="mt-1 text-xs sm:text-sm text-gray-500 font-poppins">
        by{" "}
        <span
          onClick={(e) => {
            if (onAuthorClick) {
              e.stopPropagation();
              onAuthorClick(course.author, e);
            }
          }}
          className="text-[#003be2] hover:underline font-medium cursor-pointer transition-colors"
        >
          {course.author}
        </span>
      </div>

      {/* 4. Level Badge & Student Avatars Stack */}
      <div className="mt-4 sm:mt-5 flex items-center justify-between">
        {/* Level Pill */}
        <div className="bg-[#f4f5f6] text-gray-700 text-xs sm:text-[13px] font-medium px-3.5 py-1.5 rounded-full flex items-center gap-1.5 font-poppins">
          <BarChart2 className="w-3.5 h-3.5 text-gray-600" aria-hidden="true" />
          <span>{course.level}</span>
        </div>

        {/* Overlapping Student Avatars Stack */}
        <div
          className="flex items-center"
          aria-label={`Enrolled students: ${displayCount}`}
        >
          {displayAvatars.map((avatar, aIndex) => (
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
          {/* Lime Badge */}
          <div className="relative w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#d4fb20] border-2 border-white -ml-2 flex items-center justify-center shrink-0 shadow-xs">
            <span className="font-poppins text-[9px] sm:text-[10px] font-extrabold text-gray-950 tracking-tight select-none">
              {displayCount}
            </span>
          </div>
        </div>
      </div>

      {/* 5. Price Row */}
      <div className="mt-4 sm:mt-5 pt-1 flex items-baseline gap-1 font-poppins">
        <span className="font-poppins text-2xl sm:text-[26px] font-extrabold text-[#003be2] tracking-tight">
          {course.price}
        </span>
        <span className="font-poppins text-xs sm:text-sm text-gray-400 font-normal">
          {course.period}
        </span>
      </div>
    </>
  );

  const baseClasses = `group bg-white rounded-[26px] p-4 sm:p-5 border border-gray-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all duration-300 flex flex-col justify-between font-poppins text-left ${
    onClick ? "cursor-pointer focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#003be2]" : ""
  } ${className}`;

  if (!showAnimation) {
    return (
      <div
        className={baseClasses}
        onClick={() => onClick?.(course)}
        tabIndex={onClick ? 0 : undefined}
        onKeyDown={(e) => {
          if (onClick && (e.key === "Enter" || e.key === " ")) {
            e.preventDefault();
            onClick(course);
          }
        }}
      >
        {cardContent}
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
        ease: [0.16, 1, 0.3, 1],
      }}
      whileHover={{ y: -6 }}
      className={baseClasses}
      onClick={() => onClick?.(course)}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={(e) => {
        if (onClick && (e.key === "Enter" || e.key === " ")) {
          e.preventDefault();
          onClick(course);
        }
      }}
    >
      {cardContent}
    </motion.div>
  );
};

export default CourseCard;
