"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export interface LearningPath {
  id: string | number;
  title: string;
  icon: string;
  href?: string;
}

export interface LearningPathCardProps {
  item: LearningPath;
  index?: number;
  onClick?: (item: LearningPath) => void;
  className?: string;
}

export const LearningPathCard: React.FC<LearningPathCardProps> = ({
  item,
  index = 0,
  onClick,
  className = "",
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
        ease: [0.16, 1, 0.3, 1],
      }}
      whileHover={{ y: -6 }}
      onClick={() => onClick?.(item)}
      tabIndex={0}
      role="button"
      aria-label={`Explore ${item.title} courses`}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClick?.(item);
        }
      }}
      className={`group bg-white rounded-[24px] border border-gray-200/90 py-8 px-3 sm:py-9 sm:px-4 flex flex-col items-center justify-center text-center shadow-xs hover:shadow-[0_16px_36px_rgba(0,0,0,0.06)] hover:border-gray-300 transition-all duration-300 cursor-pointer select-none focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#003be2] ${className}`}
    >
      {/* Lime Circular Icon Badge */}
      <div className="w-16 h-16 sm:w-[70px] sm:h-[70px] rounded-full bg-[#d4fb20] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300 shadow-xs">
        <div className="relative w-8 h-8 sm:w-9 sm:h-9">
          <Image
            src={item.icon}
            alt={item.title}
            fill
            className="object-contain"
          />
        </div>
      </div>

      {/* Category Label */}
      <h3 className="font-satoshi font-medium text-lg sm:text-[19px] md:text-[20px] leading-[1.2] tracking-normal text-gray-950 mt-5 sm:mt-6 group-hover:text-[#003be2] transition-colors whitespace-nowrap">
        {item.title}
      </h3>
    </motion.div>
  );
};

export default LearningPathCard;
