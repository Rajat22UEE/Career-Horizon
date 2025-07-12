"use client";
import React from 'react';
import HRData from './components/HR-data'; 
import HRCard from './components/HRCard';
 


export default function HRDirectoryPage() {
  return (
    <div className="min-h-screen bg-white px-4 py-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold text-blue-800 mb-6">HR Contact Directory</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {HRData.map((hr, index) => (
          <HRCard key={index} data={hr} />
        ))}
      </div>
    </div>
  );
}
