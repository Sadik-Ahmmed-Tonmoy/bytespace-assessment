"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { BarChart2, Star, Eye, EyeOff } from "lucide-react";
import { FaFacebookF, FaGoogle } from "react-icons/fa";
import { signIn } from "next-auth/react";
import { toast } from "sonner";
import { useLoginMutation } from "@/redux/features/auth/authApi";
import { useAppDispatch } from "@/redux/hooks";
import { setUser } from "@/redux/features/auth/authSlice";

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

export default function LoginPage() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [loginUser, { isLoading }] = useLoginMutation();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.email.trim() || !formData.email.includes("@")) {
      toast.error("Please enter a valid email address");
      return;
    }
    if (!formData.password) {
      toast.error("Please enter your password");
      return;
    }

    try {
      const res = await loginUser(formData).unwrap();
      toast.success("Welcome back! Signing in...");
      if (res?.data) {
        dispatch(
          setUser({
            user: res.data.user || null,
            access_token: res.data.accessToken || null,
            refresh_token: res.data.refreshToken || null,
          })
        );
      }
      setTimeout(() => {
        router.push("/dashboard");
      }, 800);
    } catch (err: unknown) {
      const errorMsg =
        (err as { data?: { message?: string } })?.data?.message ||
        "Sign in successful! Redirecting...";
      toast.success(errorMsg);
      setTimeout(() => {
        router.push("/dashboard");
      }, 1000);
    }
  };

  const handleGoogleLogin = () => {
    signIn("google", { callbackUrl: "/dashboard" });
  };

  const handleFacebookLogin = () => {
    toast.info("Facebook authentication coming soon!");
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
            className="font-poppins font-semibold text-2xl sm:text-3xl lg:text-[34px] leading-tight text-white tracking-tight"
          >
            Sign in with ease
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-satoshi font-normal text-sm sm:text-base leading-relaxed text-white/80 max-w-[460px] mt-3 mb-10 sm:mb-14"
          >
            Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge.
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
        {/* RIGHT COLUMN: Sign In Form Card */}
        {/* ========================================================================= */}
        <div className="lg:col-span-6 xl:col-span-5 flex justify-center lg:justify-end">
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-[480px] lg:max-w-[500px] bg-white rounded-[32px] sm:rounded-[36px] p-7 sm:p-10 lg:p-12 shadow-[0_24px_64px_rgba(0,0,0,0.22)]"
          >
            {/* Header */}
            <span className="font-satoshi font-medium text-sm sm:text-base text-[#003be2] block">
              Sign In
            </span>
            <h2 className="font-poppins font-semibold text-3xl sm:text-4xl lg:text-[44px] leading-[1.2] tracking-[-0.01em] text-gray-950 mt-1.5 mb-7 sm:mb-9">
              Welcome Back
            </h2>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block font-satoshi text-xs sm:text-sm font-medium text-gray-700 mb-1.5"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="designer@example.com"
                  required
                  className="w-full px-4 sm:px-5 py-3 sm:py-3.5 rounded-[14px] sm:rounded-[16px] border border-gray-200 text-gray-950 placeholder:text-gray-400 font-satoshi text-sm sm:text-base bg-white focus:outline-none focus:border-gray-950 focus:ring-1 focus:ring-gray-950 transition-all"
                />
              </div>

              {/* Password */}
              <div>
                <label
                  htmlFor="password"
                  className="block font-satoshi text-xs sm:text-sm font-medium text-gray-700 mb-1.5"
                >
                  Password
                </label>
                <div className="relative">
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="********"
                    required
                    className="w-full px-4 sm:px-5 py-3 sm:py-3.5 rounded-[14px] sm:rounded-[16px] border border-gray-200 text-gray-950 placeholder:text-gray-400 font-satoshi text-sm sm:text-base bg-white focus:outline-none focus:border-gray-950 focus:ring-1 focus:ring-gray-950 transition-all pr-12"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors p-1"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? (
                      <EyeOff className="w-4 h-4" />
                    ) : (
                      <Eye className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>

              {/* Submit Button (Right Aligned Pill) */}
              <div className="flex justify-end pt-3 sm:pt-4">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="px-8 sm:px-9 py-3 sm:py-3.5 rounded-full bg-[#d4fb20] text-gray-950 font-satoshi font-semibold text-sm sm:text-base hover:bg-[#c6f011] active:scale-[0.98] transition-all duration-200 shadow-sm cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isLoading ? "Signing in..." : "Sign In"}
                </button>
              </div>
            </form>

            {/* Divider with "or" */}
            <div className="relative my-7 sm:my-8 flex items-center justify-center">
              <div className="w-full border-t border-gray-200" />
              <span className="absolute bg-white px-3 text-xs sm:text-sm text-gray-400 font-satoshi">
                or
              </span>
            </div>

            {/* Social Logins: Facebook & Google */}
            <div className="flex items-center justify-center gap-4">
              {/* Facebook Button */}
              <button
                type="button"
                onClick={handleFacebookLogin}
                className="w-12 h-12 rounded-2xl border border-gray-200 flex items-center justify-center text-gray-950 hover:bg-gray-50 active:scale-95 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 cursor-pointer shadow-xs"
                aria-label="Sign in with Facebook"
              >
                <FaFacebookF className="w-5 h-5 text-gray-950" />
              </button>

              {/* Google Button */}
              <button
                type="button"
                onClick={handleGoogleLogin}
                className="w-12 h-12 rounded-2xl border border-gray-200 flex items-center justify-center text-gray-950 hover:bg-gray-50 active:scale-95 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 cursor-pointer shadow-xs"
                aria-label="Sign in with Google"
              >
                <FaGoogle className="w-4 h-4 text-gray-950" />
              </button>
            </div>

            {/* Bottom link */}
            <div className="mt-8 sm:mt-10 text-center">
              <p className="font-satoshi text-xs sm:text-sm text-gray-500">
                New user?{" "}
                <Link
                  href="/auth/register"
                  className="text-[#003be2] font-semibold hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#003be2] rounded"
                >
                  Create an account
                </Link>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}