'use client';

import React, { useRef } from 'react';
import { Rocket, UserCheck, Search } from 'lucide-react';
import { motion, useInView } from 'framer-motion';

export default function WhyCH() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { amount: 0.8, once: true });

  const reasons = [
    {
      icon: <Rocket className="w-10 h-10 text-white" />,
      title: 'Fast Career Launch',
      description:
        'Kickstart your career with our curated internships and job listings tailored to your skills.',
      bg: 'bg-blue-800',
      aosDelay: '0',
    },
    {
      icon: <Search className="w-10 h-10 text-white" />,
      title: 'Smart Search Tools',
      description:
        'Use intelligent filters to find roles that match your ambitions and interests quickly.',
      bg: 'bg-emerald-800',
      aosDelay: '200',
    },
    {
      icon: <UserCheck className="w-10 h-10 text-white" />,
      title: 'Verified Opportunities',
      description:
        'All listings are verified to ensure legitimate and trusted opportunities for your growth.',
      bg: 'bg-purple-800',
      aosDelay: '400',
    },
  ];

  return (
    <div className="py-20 bg-white" ref={sectionRef}>
      {/* Heading */}
      <div className="text-center mb-14 px-6">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="text-5xl lg:text-6xl font-extrabold text-gray-800 mb-4"
        >
          WHY CHOOSE <span className="text-blue-600">CareerHorizon</span>
        </motion.h2>

        <motion.p
          className="text-xl lg:text-2xl text-gray-600 font-medium max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
        >
          Elevate your career journey with a platform built for students and early professionals.
        </motion.p>
      </div>

      {/* Cards */}
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {reasons.map((reason, index) => (
          <div
            key={index}
            data-aos="fade-up"
            data-aos-delay={reason.aosDelay}
            data-aos-duration="800"
            className={`relative p-8 min-h-[220px] rounded-3xl text-white overflow-hidden 
              ${reason.bg} 
              shadow-none transition-all ease-in-out duration-300 
              hover:-translate-y-1 hover:shadow-[2px_5px_0_0_rgba(0,0,0,1)] 
              active:translate-y-0.5 active:shadow-none`}
          >
            {/* Icon */}
            <div className="flex items-center justify-center mb-5 relative z-10">
              <div className="p-4 rounded-full bg-white/20 backdrop-blur">
                {reason.icon}
              </div>
            </div>

            {/* Title & Description */}
            <div className="relative z-10 text-center">
              <h3 className="text-2xl font-semibold mb-2">{reason.title}</h3>
              <p className="text-sm font-medium">{reason.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
