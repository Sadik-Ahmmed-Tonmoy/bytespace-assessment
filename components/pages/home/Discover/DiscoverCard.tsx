"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  avatar: string;
  content: string;
}

interface DiscoverCardProps {
  testimonial: TestimonialItem;
  index: number;
}

export const DiscoverCard: React.FC<DiscoverCardProps> = ({
  testimonial,
  index,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay: index * 0.15,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="group relative flex flex-col justify-between h-full bg-white rounded-[28px] sm:rounded-[32px] p-7 sm:p-8 lg:p-9 xl:p-10 border border-[#F2F4F7] shadow-[0_12px_36px_rgba(15,23,42,0.035)] hover:shadow-[0_22px_50px_rgba(15,23,42,0.07)] transition-all duration-300 hover:-translate-y-1.5"
    >
      <div>
        {/* Avatar */}
        <div className="relative w-16 h-16 sm:w-[68px] sm:h-[68px] rounded-full overflow-hidden shrink-0 mb-6 border border-gray-100/80 shadow-sm">
          <Image
            src={testimonial.avatar}
            alt={testimonial.name}
            fill
            sizes="68px"
            className="object-cover"
          />
        </div>

        {/* User Info */}
        <div className="space-y-1">
          <h3
            className="font-poppins font-semibold text-[20px] leading-[120%] tracking-[-0.01em] text-gray-950"
            style={{
              fontFamily: "var(--font-poppins), 'Poppins', sans-serif",
              fontWeight: 600,
              fontSize: "20px",
              lineHeight: "120%",
              letterSpacing: "-1%",
            }}
          >
            {testimonial.name}
          </h3>
          <p
            className="font-satoshi font-normal text-[18px] leading-[160%] tracking-[0%] text-[#003be2]"
            style={{
              fontFamily: "Satoshi, sans-serif",
              fontWeight: 400,
              fontSize: "18px",
              lineHeight: "160%",
              letterSpacing: "0%",
            }}
          >
            {testimonial.role}
          </p>
        </div>

        {/* Testimonial Quote */}
        <p
          className="font-satoshi font-normal text-[18px] leading-[160%] tracking-[0%] text-[#525866] mt-6 sm:mt-7"
          style={{
            fontFamily: "Satoshi, sans-serif",
            fontWeight: 400,
            fontSize: "18px",
            lineHeight: "160%",
            letterSpacing: "0%",
          }}
        >
          &ldquo;{testimonial.content}&rdquo;
        </p>
      </div>
    </motion.div>
  );
};

export default DiscoverCard;
