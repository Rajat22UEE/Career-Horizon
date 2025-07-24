'use client';

import React from 'react';
import { FaUserFriends, FaEye, FaBullseye } from 'react-icons/fa';

const infoCards = [
  {
    title: 'Who we are?',
    icon: <FaUserFriends className="text-white text-3xl sm:text-4xl mb-3" />,
    description:
      'CareerHorizon is a career empowerment platform connecting aspiring professionals with real job and internship opportunities along with verified HR contacts.',
    bg: 'bg-blue-800',
    delay: 0,
  },
  {
    title: 'Our Vision',
    icon: <FaEye className="text-white text-3xl sm:text-4xl mb-3" />,
    description:
      'To become India’s most trusted launchpad for careers by enabling access to meaningful work and growth opportunities for everyone.',
    bg: 'bg-purple-800',
    delay: 200,
  },
  {
    title: 'Our Mission',
    icon: <FaBullseye className="text-white text-3xl sm:text-4xl mb-3" />,
    description:
      'To bridge the gap between talent and opportunity by providing reliable resources, real-time listings, and supportive career tools.',
    bg: 'bg-red-800',
    delay: 400,
  },
];

export default function Intro() {
  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-6 md:px-10">
      {/* Section Heading */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-800 text-center mb-14">
        About <span className="text-blue-600">CareerHorizon</span>
      </h2>

      {/* Info Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
        {infoCards.map((card, index) => (
          <div
            key={index}
            data-aos="fade-up"
            data-aos-delay={card.delay}
            data-aos-duration="800"
            className={`${card.bg} text-white border border-white/10 rounded-2xl p-6 text-center 
              transition-all duration-300 ease-in-out shadow-none 
              hover:-translate-y-1 hover:shadow-[2px_5px_0_0_rgba(0,0,0,1)] 
              active:translate-y-0.5 active:shadow-none`}
          >
            <div className="flex justify-center">{card.icon}</div>
            <h3 className="text-xl sm:text-2xl font-bold mb-3">{card.title}</h3>
            <p className="text-sm sm:text-base font-medium leading-relaxed">
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
