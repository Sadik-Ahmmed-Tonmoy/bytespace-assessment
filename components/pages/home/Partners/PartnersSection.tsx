"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// 5 Partner Logo files from assets/icons
import logo1 from "@/assets/icons/logo-1.png";
import logo2 from "@/assets/icons/logo-2.png";
import logo3 from "@/assets/icons/logo-3.png";
import logo4 from "@/assets/icons/logo-4.png";
import logo5 from "@/assets/icons/logo-5.png";

const partnerLogos = [
  { id: 1, name: "Logoipsum Waves", src: logo1 },
  { id: 2, name: "Logoipsum Sunburst", src: logo2 },
  { id: 3, name: "Logoipsum Flash", src: logo3 },
  { id: 4, name: "Logoipsum Flower", src: logo4 },
  { id: 5, name: "Logoipsum Spiral", src: logo5 },
];

export const PartnersSection: React.FC = () => {
  return (
    <section className="relative z-20 w-full bg-[#f5f5f6] py-8 sm:py-10 md:py-14 lg:py-20 border-y border-gray-200/40 select-none">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12">
        {/* Desktop: single row justify-between | Mobile/Tablet: balanced responsive wrap */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:flex md:items-center md:justify-between items-center justify-items-center gap-6 sm:gap-8 md:gap-6 lg:gap-10">
          {partnerLogos.map((logo, index) => (
            <motion.div
              key={logo.id}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{ scale: 1.05 }}
              className={`relative flex items-center justify-center transition-all duration-300 opacity-85 hover:opacity-100 cursor-pointer ${
                index === 4 ? "col-span-2 sm:col-span-1 justify-self-center" : ""
              }`}
            >
              <div className="relative w-[130px] sm:w-[150px] md:w-[160px] lg:w-[185px] h-7 sm:h-8 md:h-9 lg:h-10">
                <Image
                  src={logo.src}
                  alt={logo.name}
                  fill
                  sizes="(max-width: 640px) 130px, (max-width: 1024px) 160px, 185px"
                  className="object-contain"
                  priority
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
