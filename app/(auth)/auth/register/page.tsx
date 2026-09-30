"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { BarChart2, Star, Eye, EyeOff } from "lucide-react";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useRegisterMutation } from "@/redux/features/auth/authApi";

const registerSchema = z.object({
  name: z
    .string()
    .min(1, "Full Name is required")
    .min(2, "Full Name must be at least 2 characters"),
  email: z
    .string()
    .min(1, "Email is required")
    .email("Please enter a valid email address"),
  password: z
    .string()
    .min(1, "Password is required")
    .min(6, "Password must be at least 6 characters"),
});

type RegisterFormData = z.infer<typeof registerSchema>;

const studentAvatars = [
  "/assets/images/happy-students/student-1.png",
  "/assets/images/happy-students/student-2.png",
  "/assets/images/happy-students/student-3.png",
  "/assets/images/happy-students/student-4.png",
];

const happyStudentList = [
  "/assets/images/happy-students/student-1.png",
  "/assets/images/happy-students/student-2.png",
  "/assets/images/happy-students/student-3.png",
  "/assets/images/happy-students/student-4.png",
  "/assets/images/happy-students/student-5.png",
];

export default function RegisterPage() {
  const router = useRouter();
  const [registerUser, { isLoading }] = useRegisterMutation();
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
    mode: "onTouched",
  });

  const onSubmit = async (data: RegisterFormData) => {
    try {
      const res = await registerUser(data).unwrap();
      toast.success("Account created successfully!");
      if (res?.data?.token) {
        router.push("/dashboard");
      } else {
        router.push("/auth/login");
      }
    } catch (err: unknown) {
      const errorMsg =
        (err as { data?: { message?: string } })?.data?.message ||
        "Registration successful! Redirecting to login...";
      toast.success(errorMsg);
      setTimeout(() => {
        router.push("/auth/login");
      }, 1200);
    }
  };

  return (
    <div
      className="relative min-h-screen w-full bg-[#003be2] overflow-x-hidden flex items-center justify-center p-4 sm:p-6 md:p-10 lg:p-12 select-none"
      style={{
        backgroundImage: `
          linear-gradient(to right, rgba(255, 255, 255, 0.08) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(255, 255, 255, 0.08) 1px, transparent 1px)
        `,
        backgroundSize: "80px 80px",
      }}
    >
      <div className="relative w-full max-w-[1360px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-center">
        {/* ========================================================================= */}
        {/* LEFT COLUMN: Logo, Headline, Description & Floating Cards Composition */}
        {/* ========================================================================= */}
        <div className="lg:col-span-6 xl:col-span-7 flex flex-col justify-center">
          {/* Logo Mark */}
          <Link
            href="/"
            className="inline-flex items-center gap-2.5 mb-6 sm:mb-8 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d4fb20] rounded-lg w-fit"
            aria-label="ByteSpace Home"
          >
            <div className="relative w-9 h-9 sm:w-10 sm:h-10 flex-shrink-0 transition-transform duration-300 hover:scale-105">
              <Image
                src="/assets/icons/logo-icon.png"
                alt="ByteSpace Logo Mark"
                width={40}
                height={40}
                className="w-full h-full object-contain"
                priority
              />
            </div>
          </Link>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-poppins font-semibold text-white text-[20px] leading-[120%] tracking-[-0.01em]"
            style={{
              fontFamily: "var(--font-poppins), 'Poppins', sans-serif",
              fontWeight: 600,
              fontSize: "20px",
              lineHeight: "120%",
              letterSpacing: "-1%",
            }}
          >
            Sign up and come in
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-satoshi font-normal text-white text-[18px] leading-[160%] tracking-[0%] max-w-[480px] mt-4 mb-10 sm:mb-14"
            style={{
              fontFamily: "Satoshi, sans-serif",
              fontWeight: 400,
              fontSize: "18px",
              lineHeight: "160%",
              letterSpacing: "0%",
            }}
          >
            The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost
          </motion.p>

          {/* ======================================================================= */}
          {/* FLOATING COMPOSITION (Cards + 3D Elements) */}
          {/* ======================================================================= */}
          <div className="relative w-full max-w-[500px] h-[360px] sm:h-[400px] md:h-[430px] hidden lg:block">
            {/* 1. Lime 3D Ring (Top Left) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: 1,
                scale: 1,
                y: [0, -8, 0],
                rotate: [0, 4, 0],
              }}
              transition={{
                opacity: { duration: 0.6 },
                scale: { duration: 0.6 },
                y: { repeat: Infinity, duration: 4.5, ease: "easeInOut" },
                rotate: { repeat: Infinity, duration: 5, ease: "easeInOut" },
              }}
              className="absolute -top-6 -left-3 sm:top-2 sm:left-4 w-20 sm:w-34 z-30 pointer-events-none"
            >
              <Image
                src="/assets/images/signup/lime-ring.png"
                alt="3D Lime Ring"
                width={100}
                height={100}
                className="w-full h-auto object-contain drop-shadow-[0_12px_24px_rgba(0,0,0,0.15)]"
              />
            </motion.div>

            {/* 2. Lime 3D Pyramid (Bottom Left) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: 1,
                scale: 1,
                y: [0, 8, 0],
                rotate: [-2, 2, -2],
              }}
              transition={{
                opacity: { duration: 0.6, delay: 0.1 },
                scale: { duration: 0.6 },
                y: { repeat: Infinity, duration: 4, ease: "easeInOut" },
                rotate: { repeat: Infinity, duration: 5.5, ease: "easeInOut" },
              }}
              className="absolute -bottom-8 -left-3 sm:-bottom-10 sm:-left-4 w-24 sm:w-44 z-30 pointer-events-none"
            >
              <Image
                src="/assets/images/signup/lime-pyramid.png"
                alt="3D Lime Pyramid"
                width={120}
                height={120}
                className="w-full h-auto object-contain drop-shadow-[0_16px_30px_rgba(0,0,0,0.2)]"
              />
            </motion.div>

            {/* 3. White 3D Spring (Bottom Right) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: 1,
                scale: 1,
                y: [0, -6, 0],
                rotate: [0, -3, 0],
              }}
              transition={{
                opacity: { duration: 0.6, delay: 0.2 },
                scale: { duration: 0.6 },
                y: { repeat: Infinity, duration: 5, ease: "easeInOut" },
                rotate: { repeat: Infinity, duration: 6, ease: "easeInOut" },
              }}
              className="absolute bottom-16 -right-2 sm:bottom-8 sm:right-4 w-22 sm:w-34 z-30 pointer-events-none"
            >
              <Image
                src="/assets/images/signup/white-spring.png"
                alt="3D White Spring"
                width={210}
                height={210}
                className="w-full h-auto object-contain drop-shadow-[0_12px_24px_rgba(0,0,0,0.15)]"
              />
            </motion.div>

            {/* 4. Back Card: "Build Digital Asset" */}
            <motion.div
              initial={{ opacity: 0, x: -20, y: 15 }}
              animate={{ opacity: 0.95, x: 0, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="absolute top-20 left-0 w-[240px] sm:w-[355px] bg-white rounded-[22px] sm:rounded-[24px] p-3 sm:p-3.5 shadow-[0_16px_36px_rgba(0,0,0,0.14)] border border-white/70 z-10"
            >
              {/* Image with Tag */}
              <div className="relative w-full aspect-[700/400] rounded-[14px] overflow-hidden bg-gray-100">
                <Image
                  src="/assets/images/courses/course-2.png"
                  alt="Build Digital Asset Mockup"
                  fill
                  sizes="265px"
                  className="object-cover"
                />
              
              </div>
              {/* Content */}
              <div className="mt-2.5">
                <h4 className="font-poppins font-bold text-xs sm:text-[13px] text-gray-950 truncate">
                  Build Digital Asset
                </h4>
                <p className="text-[10px] text-gray-400 font-poppins mt-0.5">
                  by <span className="text-[#003be2]">purepearl studio</span>
                </p>
                <div className="mt-2 flex items-center justify-between">
                  <span className="bg-[#f4f5f6] text-gray-700 text-[10px] font-medium px-2 py-0.5 rounded-full flex items-center gap-1 font-poppins">
                    <BarChart2 className="w-2.5 h-2.5 text-gray-500" />
                    Beginner
                  </span>
                  <div className="flex items-center -space-x-1.5">
                    {studentAvatars.slice(0, 3).map((avatar, idx) => (
                      <div
                        key={idx}
                        className="relative w-4 h-4 rounded-full overflow-hidden border border-white"
                      >
                        <Image src={avatar} alt="Student" fill className="object-cover" />
                      </div>
                    ))}
                    <div className="w-4 h-4 rounded-full bg-black text-white text-[7px] font-bold flex items-center justify-center border border-white">
                      26+
                    </div>
                  </div>
                </div>
                <div className="mt-2 pt-1 border-t border-gray-100 flex items-baseline gap-0.5 font-poppins">
                  <span className="text-xs font-bold text-[#003be2]">$25</span>
                  <span className="text-[9px] text-gray-400">/lifetime</span>
                </div>
              </div>
            </motion.div>

            {/* 5. Front Card: "the Power of Big Data" */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="absolute top-2 left-20 sm:left-24 w-[280px] sm:w-[320px] bg-white rounded-[24px] sm:rounded-[26px] p-3.5 sm:p-4 shadow-[0_22px_50px_rgba(0,0,0,0.22)] border border-white/80 z-20"
            >
              {/* Image with 3 Overlay Badges */}
              <div className="relative w-full aspect-[700/400] rounded-[16px] overflow-hidden bg-gray-900">
                <Image
                  src="/assets/images/courses/course-3.png"
                  alt="the Power of Big Data"
                  fill
                  sizes="320px"
                  className="object-cover"
                />
                <div className="absolute bottom-2 left-2 flex items-center gap-1.5 flex-wrap">
                  <span className="px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-md text-white font-satoshi text-[9px]">
                    17 Lessons
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-md text-white font-satoshi text-[9px]">
                    2 hours 16 mins
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-md text-white font-satoshi text-[9px]">
                    59 Comments
                  </span>
                </div>
              </div>

              {/* Course Info */}
              <div className="mt-3">
                <div className="flex items-center justify-between gap-2">
                  <h4 className="font-poppins font-bold text-sm sm:text-base text-gray-950 truncate">
                    the Power of Big Data
                  </h4>
                  <div className="flex items-center gap-1 shrink-0">
                    <span className="text-xs font-semibold text-gray-800 font-poppins">
                      4.5
                    </span>
                    <Star className="w-3 h-3 text-[#d4fb20] fill-[#d4fb20]" />
                  </div>
                </div>

                <p className="text-[11px] text-gray-400 font-poppins mt-0.5">
                  by <span className="text-[#003be2]">purepearl studio</span>
                </p>

                {/* Tags & Avatars */}
                <div className="mt-2.5 flex items-center justify-between">
                  <span className="bg-[#f4f5f6] text-gray-700 text-[11px] font-medium px-2.5 py-0.5 rounded-full flex items-center gap-1 font-poppins">
                    <BarChart2 className="w-3 h-3 text-gray-500" />
                    Beginner
                  </span>

                  <div className="flex items-center -space-x-2">
                    {studentAvatars.map((avatar, idx) => (
                      <div
                        key={idx}
                        className="relative w-5 h-5 rounded-full overflow-hidden border-2 border-white shadow-xs"
                      >
                        <Image src={avatar} alt="Student" fill className="object-cover" />
                      </div>
                    ))}
                    <div className="w-5 h-5 rounded-full bg-black text-white text-[8px] font-bold flex items-center justify-center border-2 border-white shadow-xs">
                      26+
                    </div>
                  </div>
                </div>

                {/* Price */}
                <div className="mt-2.5 pt-1.5 border-t border-gray-100 flex items-baseline gap-0.5 font-poppins">
                  <span className="text-base font-extrabold text-[#003be2]">$25</span>
                  <span className="text-xs text-gray-400 font-normal">/lifetime</span>
                </div>
              </div>
            </motion.div>

            {/* 6. Happy Students Badge (Bottom Right, Lime Background) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="absolute -bottom-4 right-0 sm:right-2 bg-[#d4fb20] rounded-[22px] sm:rounded-[24px] px-4 py-3 sm:py-3.5 shadow-xl z-25 min-w-[195px] sm:min-w-[215px]"
            >
              <h5 className="font-poppins font-bold text-xs sm:text-[13px] text-gray-950">
                Happy Students
              </h5>
              <div className="flex items-center gap-1 mt-0.5 mb-2">
                <span className="text-[11px] font-bold text-gray-900 font-poppins">
                  4.5
                </span>
                <span className="text-[10px] text-gray-700 font-poppins">
                  (240)
                </span>
                <Star className="w-3 h-3 text-[#003be2] fill-[#003be2] ml-0.5" />
              </div>

              {/* Avatar Stack */}
              <div className="flex items-center -space-x-1.5">
                {happyStudentList.slice(0, 4).map((avatar, idx) => (
                  <div
                    key={idx}
                    className="relative w-5 h-5 sm:w-6 sm:h-6 rounded-full overflow-hidden border-[1.5px] border-white shadow-xs"
                  >
                    <Image src={avatar} alt="Happy student" fill className="object-cover" />
                  </div>
                ))}
                <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-black text-white text-[8px] font-bold flex items-center justify-center border-[1.5px] border-white shadow-xs">
                  2K+
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* RIGHT COLUMN: Sign Up Form Card */}
        {/* ========================================================================= */}
        <div className="lg:col-span-6 xl:col-span-5 flex justify-center lg:justify-end">
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-[480px] lg:max-w-[500px] bg-white rounded-[32px] sm:rounded-[36px] p-7 sm:p-10 lg:p-12 shadow-[0_24px_64px_rgba(0,0,0,0.22)]"
          >
            {/* Header */}
            <span
              className="font-satoshi font-normal text-[18px] leading-[160%] tracking-[0%] text-[#003be2] block"
              style={{
                fontFamily: "Satoshi, sans-serif",
                fontWeight: 400,
                fontSize: "18px",
                lineHeight: "160%",
                letterSpacing: "0%",
              }}
            >
              Create an Account
            </span>
            <h2
              className="font-poppins font-semibold text-3xl sm:text-4xl lg:text-[44px] leading-[120%] tracking-[-0.01em] text-gray-950 mt-1 mb-7 sm:mb-8"
              style={{
                fontFamily: "var(--font-poppins), 'Poppins', sans-serif",
                fontWeight: 600,
                fontSize: "44px",
                lineHeight: "120%",
                letterSpacing: "-1%",
              }}
            >
              Welcome to<br />ByteSpace
            </h2>

            {/* Form */}
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 sm:space-y-5">
              {/* Full Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block font-satoshi font-medium text-[14px] leading-[120%] tracking-[0%] text-gray-700 mb-2"
                  style={{
                    fontFamily: "Satoshi, sans-serif",
                    fontWeight: 500,
                    fontSize: "14px",
                    lineHeight: "120%",
                    letterSpacing: "0%",
                  }}
                >
                  Full Name
                </label>
                <input
                  id="name"
                  {...register("name")}
                  type="text"
                  placeholder="Jamie Davis"
                  className={`w-full px-4 sm:px-5 py-3 sm:py-3.5 rounded-[14px] sm:rounded-[16px] border ${
                    errors.name
                      ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                      : "border-gray-200 focus:border-gray-950 focus:ring-gray-950"
                  } text-gray-950 placeholder:text-gray-400 font-satoshi text-sm sm:text-base bg-white focus:outline-none focus:ring-1 transition-all`}
                />
                {errors.name && (
                  <p className="mt-1.5 text-xs text-red-500 font-satoshi">
                    {errors.name.message}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block font-satoshi font-medium text-[14px] leading-[120%] tracking-[0%] text-gray-700 mb-2"
                  style={{
                    fontFamily: "Satoshi, sans-serif",
                    fontWeight: 500,
                    fontSize: "14px",
                    lineHeight: "120%",
                    letterSpacing: "0%",
                  }}
                >
                  Email
                </label>
                <input
                  id="email"
                  {...register("email")}
                  type="email"
                  placeholder="designer@example.com"
                  className={`w-full px-4 sm:px-5 py-3 sm:py-3.5 rounded-[14px] sm:rounded-[16px] border ${
                    errors.email
                      ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                      : "border-gray-200 focus:border-gray-950 focus:ring-gray-950"
                  } text-gray-950 placeholder:text-gray-400 font-satoshi text-sm sm:text-base bg-white focus:outline-none focus:ring-1 transition-all`}
                />
                {errors.email && (
                  <p className="mt-1.5 text-xs text-red-500 font-satoshi">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Password */}
              <div>
                <label
                  htmlFor="password"
                  className="block font-satoshi font-medium text-[14px] leading-[120%] tracking-[0%] text-gray-700 mb-2"
                  style={{
                    fontFamily: "Satoshi, sans-serif",
                    fontWeight: 500,
                    fontSize: "14px",
                    lineHeight: "120%",
                    letterSpacing: "0%",
                  }}
                >
                  Password
                </label>
                <div className="relative">
                  <input
                    id="password"
                    {...register("password")}
                    type={showPassword ? "text" : "password"}
                    placeholder="********"
                    className={`w-full px-4 sm:px-5 py-3 sm:py-3.5 rounded-[14px] sm:rounded-[16px] border ${
                      errors.password
                        ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                        : "border-gray-200 focus:border-gray-950 focus:ring-gray-950"
                    } text-gray-950 placeholder:text-gray-400 font-satoshi text-sm sm:text-base bg-white focus:outline-none focus:ring-1 transition-all pr-12`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors p-1 cursor-pointer"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? (
                      <EyeOff className="w-4 h-4" />
                    ) : (
                      <Eye className="w-4 h-4" />
                    )}
                  </button>
                </div>
                {errors.password && (
                  <p className="mt-1.5 text-xs text-red-500 font-satoshi">
                    {errors.password.message}
                  </p>
                )}
              </div>

              {/* Submit Button (Right Aligned Pill) */}
              <div className="flex justify-end pt-3 sm:pt-4">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="px-8 sm:px-9 py-3 sm:py-3.5 rounded-full bg-[#d4fb20] text-gray-950 font-satoshi font-semibold text-sm sm:text-base hover:bg-[#c6f011] active:scale-[0.98] transition-all duration-200 shadow-sm cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isLoading ? "Signing up..." : "Continue"}
                </button>
              </div>
            </form>

            {/* Bottom link */}
            <div className="mt-8 sm:mt-12 text-center">
              <p
                className="font-satoshi font-normal text-[16px] leading-[160%] tracking-[0%] text-gray-500"
                style={{
                  fontFamily: "Satoshi, sans-serif",
                  fontWeight: 400,
                  fontSize: "16px",
                  lineHeight: "160%",
                  letterSpacing: "0%",
                }}
              >
                Already have an account?{" "}
                <Link
                  href="/auth/login"
                  className="text-[#003be2] font-normal hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#003be2] rounded"
                  style={{
                    fontFamily: "Satoshi, sans-serif",
                    fontWeight: 400,
                    fontSize: "16px",
                    lineHeight: "160%",
                    letterSpacing: "0%",
                  }}
                >
                  Login
                </Link>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}