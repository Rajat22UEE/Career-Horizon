'use client';

import React from 'react';
import Link from 'next/link';
import { FaUserTie, FaArrowRight } from 'react-icons/fa';

export default function HRCard() {
  return (
    <div className='bg-white py-[1px]'>
      <Link
      href="/hr-list"
      className="block group relative p-8 rounded-3xl border bg-[#B9A0FF] shadow-none transition-all ease-in-out duration-300 hover:-translate-y-1 hover:shadow-[2px_5px_0_0_rgba(0,0,0,1)] active:translate-y-0.5 active:shadow-none max-w-6xl mx-auto my-20"
    >
      {/* Icon + Heading */}
      <div className="flex items-center gap-4 mb-4">
        <FaUserTie className="text-[#144946] w-10 h-10" />
        <h2 className="text-4xl font-extrabold text-[#144946] tracking-tight">
          Connect with HRs
        </h2>
      </div>

      {/* Description */}
      <p className="text-lg font-semibold text-[#144946] leading-relaxed">
        Discover verified HR contacts from top companies to accelerate your job search journey and connect directly with hiring decision-makers.
      </p>

      {/* Arrow Icon */}
      <FaArrowRight
        className="absolute right-6 bottom-6 transition-transform transform group-hover:-rotate-45 text-[#144946]"
        size={20}
      />
    </Link>
    </div>
  );
}
