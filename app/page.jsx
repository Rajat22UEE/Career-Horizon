'use client';

import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import HRCard from './components/HR-Explore';
import SkillsScroll from './components/SkillsScroll';
import WhyCH from './components/WhyCH';
import WorkCompo from './components/WorkCompo';

export default function Home() {
  return (
    <div className="relative">
      {/* Main Content */}
      <div className="relative z-20">
        <HeroSection />
        <WorkCompo />
        <WhyCH />
        <SkillsScroll />
        <HRCard />
      </div>

      {/* Normal Footer at bottom */}
      <Footer />
    </div>
  );
}
