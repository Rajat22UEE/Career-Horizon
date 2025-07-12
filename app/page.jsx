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
      {/* Scrollable Content with bottom padding to avoid overlap */}
      <div className="relative z-20 pb-[300px]">
        <HeroSection />
        <WorkCompo />
        <WhyCH />
        <SkillsScroll />
        <HRCard />
      </div>

     

      {/* Fixed Footer */}
      <div className="fixed bottom-0 left-0 w-full z-10">
        <Footer />
      </div>
    </div>
  );
}
