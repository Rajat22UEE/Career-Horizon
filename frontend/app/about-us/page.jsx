'use client';

import React from 'react';
import AboutCard from './components/AboutCard';
import Intro from './components/Intro';
import OurTeam from './components/OurTeam';
import Footer from '../components/Footer';

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-12 px-4">
      <AboutCard />
      <Intro />
      <OurTeam />
      <Footer />
    </div>
  );
}
