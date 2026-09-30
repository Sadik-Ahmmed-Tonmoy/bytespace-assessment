"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export const Banner: React.FC = () => {
  return (
    <section
      className="relative w-full bg-[#003be2] py-20 sm:py-24 md:py-28 lg:py-32 overflow-hidden select-none"
      style={{
        backgroundImage: `
          linear-gradient(to right, rgba(255, 255, 255, 0.08) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(255, 255, 255, 0.08) 1px, transparent 1px)
        `,
        backgroundSize: "80px 80px",
      }}
    >
      {/* ========================================================================= */}
      {/* 3D Decorative Floating Elements */}
      {/* ========================================================================= */}

      {/* 1. Top-Left Lime Coil */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        animate={{ y: [0, -8, 0] }}
        transition={{
          opacity: { duration: 0.6 },
          scale: { duration: 0.6 },
          y: { repeat: Infinity, duration: 4, ease: "easeInOut" },
        }}
        className="absolute -top-3 sm:top-0 -left-4 sm:-left-2 md:left-0 w-28 sm:w-36 md:w-44 lg:w-56 pointer-events-none z-10"
      >
        <Image
          src="/assets/images/unlock/lime-coil-left.png"
          alt="Decorative lime coil"
          width={220}
          height={200}
          className="w-full h-auto object-contain"
        />
      </motion.div>

      {/* 2. Top-Left White Coil */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        animate={{ y: [0, 8, 0], rotate: [-2, 2, -2] }}
        transition={{
          opacity: { duration: 0.6, delay: 0.1 },
          scale: { duration: 0.6 },
          y: { repeat: Infinity, duration: 4.5, ease: "easeInOut" },
          rotate: { repeat: Infinity, duration: 5, ease: "easeInOut" },
        }}
        className="absolute top-3 sm:top-6 left-[14%] sm:left-[17%] md:left-[19%] w-12 sm:w-16 md:w-20 lg:w-44 pointer-events-none z-10"
      >
        <Image
          src="/assets/images/unlock/white-coil.png"
          alt="Decorative white coil"
          width={100}
          height={100}
          className="w-full h-auto object-contain"
        />
      </motion.div>

      {/* 3. Bottom-Left White Cone */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        animate={{ y: [0, -6, 0] }}
        transition={{
          opacity: { duration: 0.6, delay: 0.15 },
          scale: { duration: 0.6 },
          y: { repeat: Infinity, duration: 4.2, ease: "easeInOut" },
        }}
        className="absolute -bottom-4 sm:bottom-15 -left-3 sm:-left-2 md:left-0 w-20 sm:w-28 md:w-36 lg:w-40 pointer-events-none z-10"
      >
        <Image
          src="/assets/images/unlock/white-cone.png"
          alt="Decorative white cone"
          width={180}
          height={220}
          className="w-full h-auto object-contain"
        />
      </motion.div>

      {/* 4. Bottom-Left Lime Donut / Torus */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        animate={{ y: [0, 8, 0] }}
        transition={{
          opacity: { duration: 0.6, delay: 0.2 },
          scale: { duration: 0.6 },
          y: { repeat: Infinity, duration: 4.8, ease: "easeInOut" },
        }}
        className="absolute -bottom-10 sm:-bottom-14 md:bottom-0 left-[5%] sm:left-[7%] md:left-[9%] w-32 sm:w-44 md:w-56 lg:w-64 pointer-events-none z-10"
      >
        <Image
          src="/assets/images/unlock/lime-donut.png"
          alt="Decorative lime donut"
          width={260}
          height={200}
          className="w-full h-auto object-contain"
        />
      </motion.div>

      {/* 5. Top-Right Lime Pyramid */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        animate={{ y: [0, -7, 0], rotate: [-1, 2, -1] }}
        transition={{
          opacity: { duration: 0.6, delay: 0.1 },
          scale: { duration: 0.6 },
          y: { repeat: Infinity, duration: 4.3, ease: "easeInOut" },
          rotate: { repeat: Infinity, duration: 5, ease: "easeInOut" },
        }}
        className="absolute top-4 sm:top-8 right-[15%] sm:right-[18%]  w-14 sm:w-18 md:w-24 lg:w-44 pointer-events-none z-10"
      >
        <Image
          src="/assets/images/unlock/lime-pyramid.png"
          alt="Decorative lime pyramid"
          width={120}
          height={120}
          className="w-full h-auto object-contain"
        />
      </motion.div>

      {/* 6. Top-Right White 3D Slab */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        animate={{ y: [0, 6, 0] }}
        transition={{
          opacity: { duration: 0.6, delay: 0.2 },
          scale: { duration: 0.6 },
          y: { repeat: Infinity, duration: 4.6, ease: "easeInOut" },
        }}
        className="absolute -top-4 -right-4 sm:-right-2 md:right-0 w-36 sm:w-48 md:w-60 lg:w-56 pointer-events-none z-10"
      >
        <Image
          src="/assets/images/unlock/white-slab.png"
          alt="Decorative white slab"
          width={300}
          height={300}
          className="w-full h-auto object-contain"
        />
      </motion.div>

      {/* 7. Bottom-Right Lime Coil */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        animate={{ y: [0, 8, 0] }}
        transition={{
          opacity: { duration: 0.6, delay: 0.25 },
          scale: { duration: 0.6 },
          y: { repeat: Infinity, duration: 4.5, ease: "easeInOut" },
        }}
        className="absolute -bottom-8 sm:-bottom-12 md:-bottom-14 right-[4%] sm:right-[6%] md:right-[8%] w-28 sm:w-36 md:w-48 lg:w-56 pointer-events-none z-10"
      >
        <Image
          src="/assets/images/unlock/lime-coil-right.png"
          alt="Decorative lime coil"
          width={240}
          height={200}
          className="w-full h-auto object-contain"
        />
      </motion.div>

      {/* ========================================================================= */}
      {/* Central Content */}
      {/* ========================================================================= */}
      <div className="relative z-20 max-w-[1080px] mx-auto px-4 sm:px-6 text-center flex flex-col items-center">
        {/* Main Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="font-poppins font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-[44px] leading-[1.2] tracking-[-0.01em] text-center text-white max-w-[760px]"
        >
          Unlock Your Potential as a
          <br className="hidden sm:inline" /> Creator with ByteSpace
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-satoshi font-normal text-xs sm:text-sm md:text-base lg:text-[18px] leading-[1.6] tracking-normal text-center text-white/85 max-w-[840px] mx-auto mt-4 sm:mt-5"
        >
          Experience the collaboration of numerous creators and an expanding
          selection of courses. Register now and become a part of a community
          comprising over 10,000 local and international creators. Utilize our
          Course Editor, and showcase your expertise by publishing your finest
          course on the ByteSpace Course Library.
        </motion.p>

        {/* CTA Button: Join as Creator */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-7 sm:mt-9"
        >
          <button
            type="button"
            className="font-satoshi font-medium text-sm sm:text-[15px] md:text-base text-gray-950 bg-[#d4fb20] rounded-full px-7 sm:px-8 py-3 sm:py-3.5 hover:brightness-105 hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer shadow-[0_8px_24px_rgba(212,251,32,0.35)]"
          >
            Join as Creator
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Banner;