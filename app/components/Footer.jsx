'use client';

import React from 'react';
import Link from 'next/link';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-10 pb-6 px-4 sm:px-6 lg:px-8 mt-12 w-full">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10">

        {/* Section 1: Brand Name + Description */}
        <div>
          <h2 className="text-2xl font-extrabold text-white mb-3">
            Career<span className="text-blue-500">Horizon</span>
          </h2>
          <p className="text-sm sm:text-base leading-relaxed break-words">
            Empowering your career journey with job listings, internships, and direct HR connections — all in one place.
          </p>
        </div>

        {/* Section 2: Facilities / Navigation */}
        <div>
          <h3 className="text-xl font-bold text-white mb-3">Facilities</h3>
          <ul className="space-y-2 text-sm sm:text-base">
            <li>
              <Link href="/jobs-list" className="hover:text-white transition">
                • Jobs
              </Link>
            </li>
            <li>
              <Link href="/internship-list" className="hover:text-white transition">
                • Internships
              </Link>
            </li>
            <li>
              <Link href="/hr-list" className="hover:text-white transition">
                • HR Desk
              </Link>
            </li>
          </ul>
        </div>

        {/* Section 3: Contact Info */}
        <div>
          <h3 className="text-xl font-bold text-white mb-3">Contact Us</h3>
          <ul className="space-y-3 text-sm sm:text-base">
            <li className="flex items-start gap-3">
              <FaEnvelope className="text-blue-500 mt-1 shrink-0" />
              <span className="break-words">ueenath23@gmail.com</span>
            </li>
            <li className="flex items-start gap-3">
              <FaPhone className="text-blue-500 mt-1 shrink-0" />
              <span>+91 87875 82670</span>
            </li>
            <li className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-blue-500 mt-1 shrink-0" />
              <span>Agartala, India</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center text-xs sm:text-sm text-gray-500 mt-10 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} CareerHorizon. All rights reserved.
      </div>
    </footer>
  );
}
