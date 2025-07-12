'use client';

import React, { useEffect, useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Bolt, Globe, Users } from 'lucide-react';
import { motion, useInView } from 'framer-motion';

const headingText = 'HOW IT WORKS';
const descriptionText =
  'Discover how Career Horizon streamlines your job and internship search journey.';

function Card({ icon, title, description, borderColor, ringColor, shadowColor, bgColor, iconColor }) {
  return (
    <div
      data-aos="fade-up"
      className={`flex items-start gap-5 p-6 min-h-[180px] rounded-2xl bg-white border ${borderColor} 
      shadow-md transition duration-300 hover:shadow-xl hover:${borderColor} hover:ring-2 ${ringColor}`}
      style={{ boxShadow: `0 0 10px ${shadowColor}` }}
    >
      <div className={`p-4 rounded-full ${bgColor} ${iconColor}`}>
        {icon}
      </div>
      <div>
        <h3 className="text-2xl font-semibold text-gray-800 mb-1">{title}</h3>
        <p className="text-base font-bold text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

export default function WorkCompo() {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.5, once: true });

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        <div className="grid md:grid-cols-2 items-start gap-12">
          {/* Left Side: Animated Text */}
          <div className="sticky top-24 self-start">
            <h2 className="text-5xl font-extrabold text-gray-800 mb-6 leading-tight">
              {headingText.split('').map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 1.5,
                    ease: 'easeOut',
                    delay: index * 0.01,
                  }}
                  className={char === ' ' ? 'inline-block w-2' : 'inline-block'}
                >
                  {char}
                </motion.span>
              ))}
            </h2>

            <p className="text-lg text-gray-600 font-medium">
              {descriptionText.split('').map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.8,
                    ease: 'easeOut',
                    delay: 0.5 + index * 0.01,
                  }}
                  className={char === ' ' ? 'inline-block w-1' : 'inline-block'}
                >
                  {char}
                </motion.span>
              ))}
            </p>
          </div>

          {/* Right Side: AOS-based Cards */}
          <div className="space-y-8">
            <Card
              icon={<Bolt className="w-7 h-7" />}
              title="Explore & Discover"
              description="Browse curated listings tailored to your interests and goals. Whether it's your dream job or the perfect internship, you'll find it here."
              borderColor="border-blue-300"
              ringColor="hover:ring-blue-300"
              shadowColor="rgba(59, 130, 246, 0.15)"
              bgColor="bg-blue-100"
              iconColor="text-blue-600"
            />
            <Card
              icon={<Globe className="w-7 h-7" />}
              title="Apply & Connect"
              description="Submit applications directly and get connected with recruiters who value talent like yours."
              borderColor="border-purple-300"
              ringColor="hover:ring-purple-300"
              shadowColor="rgba(168, 85, 247, 0.15)"
              bgColor="bg-purple-100"
              iconColor="text-purple-600"
            />
            <Card
              icon={<Users className="w-7 h-7" />}
              title="Connect People"
              description="Bridge the gap between talent and opportunity through meaningful networking."
              borderColor="border-green-300"
              ringColor="hover:ring-green-300"
              shadowColor="rgba(34, 197, 94, 0.15)"
              bgColor="bg-green-100"
              iconColor="text-green-600"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
