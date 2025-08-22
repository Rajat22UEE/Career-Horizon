'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Home,
  Info,
  Briefcase,
  GraduationCap,
  Users,
  Menu,
  X,
} from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="backdrop-blur-md bg-white/80 shadow-md px-4 h-20 font-semibold z-50 relative">
      <div className="max-w-6xl mx-auto flex justify-between items-center h-full">
        {/* Logo */}
        <div className="text-3xl font-extrabold tracking-wide">
          <span className="text-gray-800">Career</span>
          <span className="text-blue-600">Horizon</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 text-lg text-gray-700 relative">
          <NavItem icon={<Home className="w-5 h-5" />} label="Home" href="/" />
          <NavItem icon={<Info className="w-5 h-5" />} label="About Us" href="/about-us" />
          <NavItem icon={<Briefcase className="w-5 h-5" />} label="Jobs" href="/jobs-list" />
          <NavItem icon={<GraduationCap className="w-5 h-5" />} label="Internships" href="/internship-list" />
          <NavItem icon={<Users className="w-5 h-5" />} label="HR Desk" href="/hr-list" />
        </div>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={toggleMobileMenu} className="text-gray-700">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white/90 backdrop-blur-md z-40 shadow-lg">
          <div className="flex flex-col items-start gap-4 px-6 py-6 text-lg text-gray-800">
            <NavItemMobile icon={<Home className="w-5 h-5" />} label="Home" href="/" onClick={toggleMobileMenu} />
            <NavItemMobile icon={<Info className="w-5 h-5" />} label="About Us" href="/about-us" onClick={toggleMobileMenu} />
            <NavItemMobile icon={<Briefcase className="w-5 h-5" />} label="Jobs" href="/jobs-list" onClick={toggleMobileMenu} />
            <NavItemMobile icon={<GraduationCap className="w-5 h-5" />} label="Internships" href="/internship-list" onClick={toggleMobileMenu} />
            <NavItemMobile icon={<Users className="w-5 h-5" />} label="HR Desk" href="/hr-list" onClick={toggleMobileMenu} />
          </div>
        </div>
      )}
    </nav>
  );
};

// Desktop Nav Item
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

// Mobile Nav Item
const NavItemMobile = ({ icon, label, href, onClick }) => (
  <Link href={href} onClick={onClick} className="flex items-center gap-3 hover:text-blue-600 transition">
    {icon}
    {label}
  </Link>
);

export default Navbar;
