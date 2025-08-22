'use client';

import React from 'react';
import { FaGithub, FaLinkedin, FaUserCircle } from 'react-icons/fa';

const teamMembers = [
  {
    name: 'Sudip Karmakar',
    role: 'Backend Developer',
    linkedin: 'https://www.linkedin.com/in/sudip-karmakar-675629249/',
    github: 'https://github.com/Sudipkarmakar25',
  },
  {
    name: 'Sagnik Das',
    role: 'Backend Developer',
    linkedin: 'https://www.linkedin.com/in/sagnik07/',
    github: 'https://github.com/22UCS007',
  },
  {
    name: 'Rajat Debnath',
    role: 'Frontend Developer',
    linkedin: 'https://www.linkedin.com/in/rajat-debnath/',
    github: 'https://github.com/Rajat22UEE',
  },
];

export default function OurTeam() {
  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-10">
      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center text-gray-800 mb-16">
        Meet <span className="text-blue-600">Our Team</span>
      </h2>

      {/* Cards Grid */}
      <div className="max-w-6xl mx-auto grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 200}
            data-aos-duration="800"
            className="bg-white border border-gray-200 rounded-3xl p-6 sm:p-8 text-center shadow-none 
              transition-all ease-in-out duration-300 hover:-translate-y-1 
              hover:shadow-[0_0_0_4px_rgba(59,130,246,0.3)] active:translate-y-0.5"
          >
            <div className="hover:scale-105 transition-transform duration-300 ease-out">
              <FaUserCircle className="text-blue-500 mx-auto mb-5" size={80} />
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-1">
              {member.name}
            </h3>
            <p className="text-sm sm:text-base text-gray-600 mb-5 font-medium">
              {member.role}
            </p>

            <div className="flex justify-center gap-5 text-xl sm:text-2xl">
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 transition-transform transform hover:scale-110"
              >
                <FaLinkedin />
              </a>
              <a
                href={member.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 hover:text-black transition-transform transform hover:scale-110"
              >
                <FaGithub />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
