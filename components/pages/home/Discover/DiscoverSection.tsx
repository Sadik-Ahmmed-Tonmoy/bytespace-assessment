"use client";

import React from "react";
import { motion } from "framer-motion";
import DiscoverCard, { TestimonialItem } from "./DiscoverCard";

const testimonialsData: TestimonialItem[] = [
  {
    id: "sarah-m",
    name: "Sarah M.",
    role: "Enthusiastic Learner",
    avatar: "/assets/images/discover/sarah.png",
    content:
      "ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning.",
  },
  {
    id: "james-l",
    name: "James L.",
    role: "Lifelong Learner",
    avatar: "/assets/images/discover/james.png",
    content:
      "I've tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development.",
  },
  {
    id: "alex-b",
    name: "Alex B.",
    role: "Inspired Creator",
    avatar: "/assets/images/discover/alex.png",
    content:
      "As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It's fulfilling to see my courses making a positive impact on learners globally.",
  },
];

export const DiscoverSection: React.FC = () => {
  return (
    <section
      className="relative w-full py-20 sm:py-28 lg:py-36 overflow-hidden select-none"
      style={{
        backgroundColor: "#FFFFFF",
        backgroundImage: `
          radial-gradient(ellipse 65% 55% at 55% 10%, rgba(212, 251, 32, 0.42) 0%, rgba(220, 254, 70, 0.16) 50%, transparent 75%),
          radial-gradient(ellipse 45% 65% at 100% 32%, rgba(212, 251, 32, 0.28) 0%, transparent 70%),
          radial-gradient(ellipse 55% 55% at 3% 95%, rgba(191, 219, 254, 0.65) 0%, rgba(219, 234, 254, 0.25) 50%, transparent 75%)
        `,
      }}
    >
      {/* Ambient background glow accents matching Figma */}
      <div
        aria-hidden="true"
        className="absolute top-0 right-[22%] -translate-y-1/3 w-[620px] h-[520px] rounded-full bg-[#E5FC55]/25 blur-[120px] pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute top-[12%] -right-16 w-[420px] h-[560px] rounded-full bg-[#D4FB20]/20 blur-[110px] pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-16 -left-16 w-[560px] h-[560px] rounded-full bg-[#BFDBFE]/60 blur-[130px] pointer-events-none"
      />

      <div className="relative max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* ========================================================================= */}
        {/* Header: Title (Left) + Description (Right) */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start justify-between mb-14 sm:mb-16 lg:mb-20">
          {/* Left: Heading */}
          <div className="lg:col-span-6 xl:col-span-5 max-w-[500px]">
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="font-poppins font-semibold text-3xl sm:text-4xl lg:text-[44px] leading-[1.2] tracking-[-0.01em] text-gray-950"
            >
              Discover What Our Community Is Saying
            </motion.h2>
          </div>

          {/* Right: Description */}
          <div className="lg:col-span-6 xl:col-span-7 flex lg:justify-end">
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-[560px] font-satoshi font-normal text-base sm:text-lg leading-[1.6] tracking-normal text-[#525866]"
            >
              At ByteSpace, our vibrant community of learners and creators is at the heart of what we do. Hear directly from those who have experienced the transformative journey of learning and creating on our platform. Explore testimonials that reflect the diverse perspectives of enthusiastic learners and accomplished creators.
            </motion.p>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* Testimonials Cards Grid */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 lg:gap-8 items-stretch">
          {testimonialsData.map((item, index) => (
            <DiscoverCard
              key={item.id}
              testimonial={item}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DiscoverSection;
