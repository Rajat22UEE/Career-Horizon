'use client';

import React from 'react';
import Link from 'next/link';
import {
  Home,
  Info,
  Briefcase,
  GraduationCap,
  Users,
} from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="backdrop-blur-md bg-white/80 shadow-md px-4 h-20 font-semibold z-50 relative">
      <div className="max-w-6xl mx-auto flex justify-between items-center h-full">
        {/* Logo */}
        <div className="text-3xl font-extrabold tracking-wide">
          <span className="text-gray-800">Career</span>
          <span className="text-blue-600">Horizon</span>
        </div>

        {/* Navigation Links */}
        <div className="flex items-center gap-8 text-lg text-gray-700 relative">
          <NavItem icon={<Home className="w-5 h-5" />} label="Home" href="/" />
          <NavItem icon={<Info className="w-5 h-5" />} label="About Us" href="/about-us" />
          <NavItem icon={<Briefcase className="w-5 h-5" />} label="Jobs" href="/jobs-list" />
          <NavItem icon={<GraduationCap className="w-5 h-5" />} label="Internships" href="/internship-list" />
          <NavItem icon={<Users className="w-5 h-5" />} label="HR Desk" href="/hr-list" />
        </div>
      </div>
    </nav>
  );
};

const NavItem = ({ icon, label, href }) => (
  <Link
    href={href}
    className="group relative flex items-center gap-1 hover:text-blue-600 transition"
  >
    {icon}
    <span className="relative">
      {label}
      <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
    </span>
  </Link>
);

export default Navbar;
