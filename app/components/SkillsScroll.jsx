'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const skills = [
  'Web Development',
  'Data Science',
  'UI/UX Design',
  'Cloud Computing',
  'Cybersecurity',
  'AI & Machine Learning',
  'Mobile App Development',
  'Blockchain',
  'DevOps',
  'Embedded Systems',
  'Digital Marketing',
  'Product Management',
  'Software Testing',
  'Business Analysis',
  'Game Development',
  'Technical Writing',
  'System Design',
  'Database Management',
  
];

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.06,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

export default function SkillsScroll() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.3 });

  return (
    <div className="w-full bg-gray-50 py-16 border-y border-gray-200" ref={sectionRef}>
      <h2 className="text-center text-4xl font-extrabold text-gray-800 mb-10">
        Explore Opportunities In
      </h2>

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              className="px-6 py-4 rounded-2xl text-base font-semibold shadow-md border border-gray-300 bg-white text-gray-700 hover:text-blue-700 hover:border-blue-400 transition-all duration-300 relative overflow-hidden group"
              custom={i}
              variants={itemVariants}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
            >
              {/* Spotlight effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 opacity-0 group-hover:opacity-100 transition duration-300 blur-sm pointer-events-none" />
              {skill}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
