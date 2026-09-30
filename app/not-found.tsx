"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import NavBar from "@/components/shared/NavBar/NavBar";
import Footer from "@/components/shared/Footer/Footer";

export default function NotFoundPage() {
  return (
    <div className="relative min-h-screen w-full bg-[#003be2] bg-hero-grid flex flex-col justify-between overflow-x-hidden select-none">
      {/* 1. Header / Navigation */}
      <NavBar className="relative z-50" />

      {/* 2. Main 404 Hero Section */}
      <main className="relative flex-1 flex flex-col items-center justify-center py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 z-10">
        <div className="relative w-full max-w-[1200px] mx-auto flex flex-col items-center justify-center text-center">
          {/* Giant Background 404 with Lime Gradient */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="select-none font-poppins font-black text-[170px] sm:text-[260px] md:text-[340px] lg:text-[420px] leading-none tracking-tight bg-gradient-to-b from-[#d4fb20] via-[#c6f011]/80 to-[#003be2]/10 bg-clip-text text-transparent pointer-events-none drop-shadow-sm"
          >
            404
          </motion.div>

          {/* Overlaid Content (Headline, Subtitle, CTA) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-[48%] sm:top-[47%] md:top-[48%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[820px] px-4 flex flex-col items-center z-20"
          >
            {/* Headline */}
            <h1 className="font-poppins font-bold text-3xl sm:text-5xl md:text-6xl lg:text-[64px] text-white leading-[1.15] tracking-tight">
              The page you are looking<br />for doesn’t exist
            </h1>

            {/* Subtitle */}
            <p className="font-satoshi font-normal text-sm sm:text-base md:text-lg text-white/90 max-w-[540px] mt-4 sm:mt-5 mb-7 sm:mb-8 leading-relaxed">
              Try to use a correct url or go back to homepage to start again
            </p>

            {/* Back to Home CTA */}
            <Link
              href="/"
              className="inline-flex items-center justify-center px-8 sm:px-10 py-3.5 sm:py-4 rounded-full bg-[#d4fb20] text-gray-950 font-satoshi font-semibold text-sm sm:text-base hover:bg-[#c6f011] active:scale-[0.98] transition-all duration-200 shadow-md cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              Back to Home
            </Link>
          </motion.div>
        </div>
      </main>

      {/* 3. Global Footer */}
      <Footer />
    </div>
  );
}
