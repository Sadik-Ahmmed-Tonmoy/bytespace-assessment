"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ShoppingBag } from "lucide-react";
import cart from "@/assets/icons/Style=Outlined.svg"

interface NavBarProps {
  className?: string;
}

const navLinks = [
  { name: "Home", href: "/", active: true },
  { name: "Courses", href: "#courses", active: false },
  { name: "Creators", href: "#creators", active: false },
];

export const NavBar: React.FC<NavBarProps> = ({ className = "" }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className={`w-full relative z-50 ${className}`}>
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-10 h-20 sm:h-24 flex items-center justify-between">
        {/* Brand Logo */}
        <Link
          href="/"
          className="flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d4fb20] rounded-lg"
          aria-label="ByteSpace Home"
        >
          <div className="relative w-7 h-7 sm:w-8 sm:h-8 flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
            <Image
              src="/assets/icons/logo-icon.png"
              alt="ByteSpace Logo Mark"
              fill
              priority
              sizes="32px"
              className="object-contain"
            />
          </div>
          <span className="text-xl sm:text-2xl font-bold tracking-tight text-white select-none">
            ByteSpace
          </span>
        </Link>

        {/* Center Desktop Navigation Links */}
        <nav
          className="hidden md:flex items-center gap-8 lg:gap-10"
          aria-label="Main Navigation"
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-sm lg:text-[15px] transition-colors duration-200 relative py-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d4fb20] rounded ${
                link.active
                  ? "text-white font-medium"
                  : "text-white/75 hover:text-white font-normal"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Right Desktop Actions */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          <Link
            href="/auth/login"
            className="text-sm lg:text-[15px] text-white/90 hover:text-white font-normal transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d4fb20] rounded"
          >
            Sign In
          </Link>

          <Link
            href="/auth/register"
            className="text-sm lg:text-[15px] text-white/90 hover:text-white font-normal transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d4fb20] rounded"
          >
            Join Us
          </Link>

          {/* Cart Icon */}
          <button
            type="button"
            aria-label="Shopping Cart"
            className="relative p-1 text-white hover:text-[#d4fb20] transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d4fb20] rounded cursor-pointer"
          >
            {/* <ShoppingBag className="w-5 h-5 stroke-[1.75]" /> */}
             <div className="relative w-6 h-6 flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
            <Image
              src={cart}
              alt="ByteSpace Logo Mark"
              fill
              priority
              sizes="32px"
              className="object-contain"
            />
          </div>
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center gap-3">
          <button
            type="button"
            aria-label="Shopping Cart"
            className="p-1.5 text-white hover:text-[#d4fb20] transition-colors"
          >
             <div className="relative w-6 h-6 flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
            <Image
              src={cart}
              alt="ByteSpace Logo Mark"
              fill
              priority
              sizes="32px"
              className="object-contain"
            />
          </div>
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle Menu"
            className="p-2 text-white hover:text-[#d4fb20] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d4fb20] rounded-lg transition-colors cursor-pointer"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-full left-0 w-full bg-[#003be2]/95 backdrop-blur-xl border-b border-white/15 px-6 py-6 shadow-2xl flex flex-col gap-4 z-50"
          >
            <nav className="flex flex-col gap-3.5">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-base py-1 transition-colors ${
                    link.active
                      ? "text-white font-semibold"
                      : "text-white/80 hover:text-white"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            <div className="h-px w-full bg-white/15 my-1" />

            <div className="flex items-center gap-4 pt-1">
              <Link
                href="/auth/login"
                onClick={() => setMobileMenuOpen(false)}
                className="flex-1 text-center py-2.5 rounded-full border border-white/30 text-white font-medium text-sm hover:bg-white/10 transition-colors"
              >
                Sign In
              </Link>
              <Link
                href="/auth/register"
                onClick={() => setMobileMenuOpen(false)}
                className="flex-1 text-center py-2.5 rounded-full bg-[#d4fb20] text-gray-950 font-semibold text-sm hover:brightness-105 transition-all shadow-md"
              >
                Join Us
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default NavBar;