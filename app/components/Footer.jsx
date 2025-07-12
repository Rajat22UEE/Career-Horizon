'use client';

import React from 'react';
import Link from 'next/link';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-6 mt-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">

        {/* Section 1: Brand Name + Description */}
        <div>
          <h2 className="text-2xl font-extrabold text-white mb-3">
            Career<span className="text-blue-500">Horizon</span>
          </h2>
          <p className="text-sm leading-relaxed">
            Empowering your career journey with job listings, internships, and direct HR connections — all in one place.
          </p>
        </div>

        {/* Section 2: Facilities / Navigation */}
        <div>
          <h3 className="text-xl font-bold text-white mb-3">Facilities</h3>
          <ul className="space-y-2 text-sm">
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
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <FaEnvelope className="text-blue-500 mt-1" />
              ueenath23@gmail.com
            </li>
            <li className="flex items-start gap-2">
              <FaPhone className="text-blue-500 mt-1" />
              +91 87875 82670
            </li>
            <li className="flex items-start gap-2">
              <FaMapMarkerAlt className="text-blue-500 mt-1" />
              Agartala, India
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center text-xs text-gray-500 mt-10 border-t pt-4 border-gray-700">
        © {new Date().getFullYear()} CareerHorizon. All rights reserved.
      </div>
    </footer>
  );
}
