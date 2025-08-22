'use client';

import React from "react";
import Link from "next/link";
import { Briefcase, GraduationCap } from "lucide-react";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const HeroSection = () => {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 md:px-12 lg:px-24">
      <motion.div
        className="max-w-6xl mx-auto flex flex-col items-center text-center"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {/* Heading */}
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6"
          variants={itemVariants}
        >
          <span className="font-tektur block">Unlock Opportunities with</span>
          <span className="text-gray-800">Career</span>
          <span className="text-blue-600">Horizon</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          className="text-base sm:text-lg md:text-xl font-semibold text-gray-400 max-w-2xl mb-12"
          variants={itemVariants}
        >
          Discover top jobs and internships built for ambitious minds. Your
          career breakthrough starts here.
        </motion.p>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 w-full mt-4">
          {/* Job Card */}
          <motion.div variants={itemVariants}>
            <Link
              href="/jobs-list"
              className="block group relative p-6 rounded-2xl border bg-[#B9A0FF] shadow-none transition-all ease-in-out duration-300 hover:-translate-y-1 hover:shadow-[2px_5px_0_0_rgba(0,0,0,1)] active:translate-y-0.5 active:shadow-none w-full min-h-[240px]"
            >
              <div className="flex items-center gap-4 mb-3">
                <Briefcase className="text-[#144946] w-8 h-8" />
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#144946]">
                  Find Your Dream Job
                </h3>
              </div>
              <p className="text-sm sm:text-base font-semibold text-[#144946]">
                Explore curated roles from top companies and take your next big step.
              </p>
              <FaArrowRight
                className="absolute right-4 bottom-4 transition-transform transform group-hover:-rotate-45 text-[#144946]"
                size={20}
              />
            </Link>
          </motion.div>

          {/* Internship Card */}
          <motion.div variants={itemVariants}>
            <Link
              href="/internship-list"
              className="block group relative p-6 rounded-2xl border bg-[#24605A] shadow-none transition-all ease-in-out duration-300 hover:-translate-y-1 hover:shadow-[2px_5px_0_0_rgba(0,0,0,1)] active:translate-y-0.5 active:shadow-none w-full min-h-[240px]"
            >
              <div className="flex items-center gap-4 mb-3">
                <GraduationCap className="text-[#B3EFA9] w-8 h-8" />
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#B3EFA9]">
                  Launch with Internships
                </h3>
              </div>
              <p className="text-sm sm:text-base font-semibold text-[#B3EFA9]">
                Gain real-world experience and grow with hands-on industry exposure.
              </p>
              <FaArrowRight
                className="absolute right-4 bottom-4 transition-transform transform group-hover:-rotate-45 text-[#B3EFA9]"
                size={20}
              />
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
