"use client";

import { useState, useEffect } from 'react';
// import internshipData from './components/Internship-data';
 
import InternshipCard from './components/InternshipCard'; 


const ITEMS_PER_PAGE = 12;

export default function InternshipListPage() {
  const [currentPage, setCurrentPage] = useState(1);

  const [internships, setInternships] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/api/internships')
      .then(res => res.json())
      .then(data => setInternships(Array.isArray(data) ? data : []));
  }, []);

  const totalPages = Math.ceil(internships.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentItems = internships.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handlePrev = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  return (
    <div className="min-h-screen bg-white px-4 py-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold text-blue-800 mb-6">Available Internships</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {currentItems.length > 0 ? (
          currentItems.map((internship) => (
            <InternshipCard key={internship._id || internship.id} data={internship} />
          ))
        ) : (
          <p className="text-gray-600">No internships available at the moment.</p>
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
