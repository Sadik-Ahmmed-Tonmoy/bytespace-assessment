"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { toast } from "sonner";

interface FooterLink {
  label: string;
  href: string;
}

const columnOne: FooterLink[] = [
  { label: "Featured Courses", href: "#courses" },
  { label: "Featured Categories", href: "#categories" },
  { label: "Business", href: "#business" },
  { label: "IT", href: "#it" },
  { label: "Design", href: "#design" },
];

const columnTwo: FooterLink[] = [
  { label: "Development", href: "#development" },
  { label: "Marketing", href: "#marketing" },
  { label: "Photography", href: "#photography" },
  { label: "Finance", href: "#finance" },
  { label: "Sport", href: "#sport" },
];

const columnThree: FooterLink[] = [
  { label: "Become a Creator", href: "#creator" },
  { label: "Affiliate Program", href: "#affiliate" },
  { label: "Contact", href: "#contact" },
  { label: "Help", href: "#help" },
  { label: "About", href: "#about" },
];

const legalLinks: FooterLink[] = [
  { label: "Privacy Policy", href: "#privacy" },
  { label: "Terms of Service", href: "#terms" },
  { label: "Cookies Settings", href: "#cookies" },
];

export const Footer: React.FC = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !email.includes("@")) {
      toast.error("Please enter a valid email address.");
      return;
    }
    toast.success("Thank you for subscribing to our newsletter!");
    setEmail("");
  };

  return (
    <footer className="w-full bg-white text-gray-900 border-t border-gray-100 select-none">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 lg:pt-24 pb-10 sm:pb-12">
        {/* ========================================================================= */}
        {/* Main Footer: Newsletter (Left) + Links Grid (Right) */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 xl:gap-20 items-start">
          {/* Left Column: Brand & Newsletter */}
          <div className="lg:col-span-5 xl:col-span-5 max-w-[480px]">
            {/* Brand Logo */}
            <Link
              href="/"
              className="inline-flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d4fb20] rounded-lg"
              aria-label="ByteSpace Home"
            >
              <div className="relative w-7 h-7 sm:w-8 sm:h-8 flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/assets/icons/logo-icon.png"
                  alt="ByteSpace Logo Mark"
                  width={32}
                  height={32}
                  className="w-full h-full object-contain"
                />
              </div>
              <span
                className="font-clash font-bold text-[24px] leading-none tracking-normal text-gray-950 select-none"
                style={{
                  fontFamily: "var(--font-clash-display), 'Clash Display', sans-serif",
                  fontWeight: 700,
                  fontSize: "24px",
                  lineHeight: "100%",
                  letterSpacing: "0%",
                }}
              >
                ByteSpace
              </span>
            </Link>

            {/* Newsletter Tagline */}
            <p
              className="font-satoshi font-normal text-[14px] leading-[160%] tracking-[0%] text-[#525866] mt-5 sm:mt-6 mb-6 sm:mb-7"
              style={{
                fontFamily: "Satoshi, sans-serif",
                fontWeight: 400,
                fontSize: "14px",
                lineHeight: "160%",
                letterSpacing: "0%",
              }}
            >
              Stay Up to date with our latest features and releases by joining our newsletter.
            </p>

            {/* Newsletter Input Form */}
            <form onSubmit={handleSubmit} className="w-full">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  aria-label="Email address for newsletter"
                  className="flex-1 w-full px-5 sm:px-6 py-3.5 rounded-full border border-gray-300 text-gray-900 placeholder:text-gray-400 font-satoshi text-sm sm:text-[15px] bg-white focus:outline-none focus:border-gray-900 focus:ring-1 focus:ring-gray-900 transition-all"
                />
                <button
                  type="submit"
                  className="px-7 py-3.5 rounded-full bg-[#d4fb20] text-gray-950 font-satoshi font-medium text-sm sm:text-[15px] hover:bg-[#c6f011] active:scale-[0.98] transition-all duration-200 shadow-sm shrink-0 cursor-pointer"
                >
                  Search
                </button>
              </div>
            </form>

            {/* Disclaimer */}
            <p
              className="font-satoshi font-normal text-[12px] leading-[160%] tracking-[0%] text-[#667085] mt-3.5"
              style={{
                fontFamily: "Satoshi, sans-serif",
                fontWeight: 400,
                fontSize: "12px",
                lineHeight: "160%",
                letterSpacing: "0%",
              }}
            >
              By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
            </p>
          </div>

          {/* Right Columns: Links Navigation */}
          <div className="lg:col-span-7 xl:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 pt-2 lg:pt-1">
            {/* Column 1 */}
            <ul className="space-y-3.5 sm:space-y-4">
              {columnOne.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="font-satoshi font-normal text-[14px] leading-[160%] tracking-[0%] text-[#344054] hover:text-[#003be2] transition-colors duration-200 inline-block focus:outline-none focus-visible:ring-2 focus-visible:ring-[#003be2] rounded"
                    style={{
                      fontFamily: "Satoshi, sans-serif",
                      fontWeight: 400,
                      fontSize: "14px",
                      lineHeight: "160%",
                      letterSpacing: "0%",
                    }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Column 2 */}
            <ul className="space-y-3.5 sm:space-y-4">
              {columnTwo.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="font-satoshi font-normal text-[14px] leading-[160%] tracking-[0%] text-[#344054] hover:text-[#003be2] transition-colors duration-200 inline-block focus:outline-none focus-visible:ring-2 focus-visible:ring-[#003be2] rounded"
                    style={{
                      fontFamily: "Satoshi, sans-serif",
                      fontWeight: 400,
                      fontSize: "14px",
                      lineHeight: "160%",
                      letterSpacing: "0%",
                    }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Column 3 */}
            <ul className="space-y-3.5 sm:space-y-4">
              {columnThree.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="font-satoshi font-normal text-[14px] leading-[160%] tracking-[0%] text-[#344054] hover:text-[#003be2] transition-colors duration-200 inline-block focus:outline-none focus-visible:ring-2 focus-visible:ring-[#003be2] rounded"
                    style={{
                      fontFamily: "Satoshi, sans-serif",
                      fontWeight: 400,
                      fontSize: "14px",
                      lineHeight: "160%",
                      letterSpacing: "0%",
                    }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* Divider */}
        {/* ========================================================================= */}
        <div className="w-full border-t border-gray-200 mt-14 sm:mt-18 lg:mt-20 mb-8 sm:mb-9" />

        {/* ========================================================================= */}
        {/* Bottom Sub-footer */}
        {/* ========================================================================= */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-[14px] text-[#667085] font-satoshi">
          <p
            className="font-satoshi font-normal text-[12px] leading-[160%] tracking-[0%] text-[#667085]"
            style={{
              fontFamily: "Satoshi, sans-serif",
              fontWeight: 400,
              fontSize: "12px",
              lineHeight: "160%",
              letterSpacing: "0%",
            }}
          >
            @ 2023 ByteSpace. All rights reserved.
          </p>

          <div className="flex items-center gap-5 sm:gap-7 flex-wrap justify-center">
            {legalLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="font-satoshi font-normal text-[12px] leading-[160%] tracking-[0%] text-[#667085] hover:text-gray-950 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 rounded"
                style={{
                  fontFamily: "Satoshi, sans-serif",
                  fontWeight: 400,
                  fontSize: "12px",
                  lineHeight: "160%",
                  letterSpacing: "0%",
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;