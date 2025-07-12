'use client';

import React, { useState } from 'react';
import JobData from './components/Job-data';
import JobCard from './components/JobCard';

const ITEMS_PER_PAGE = 12;

export default function JobsListPage() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(JobData.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentJobs = JobData.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handlePrev = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  return (
    <div className="min-h-screen bg-white px-4 py-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold text-blue-800 mb-6">Available Job Opportunities</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {currentJobs.length > 0 ? (
          currentJobs.map((job) => (
            <JobCard key={job.id} data={job} />
          ))
        ) : (
          <p className="text-gray-600">No job listings available at the moment.</p>
        )}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center items-center mt-8 gap-4">
        <button
          onClick={handlePrev}
          disabled={currentPage === 1}
          className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
        >
          Previous
        </button>

        <span className="text-sm text-gray-700">
          Page {currentPage} of {totalPages}
        </span>

        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
}
