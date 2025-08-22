"use client";

import React from "react";
import {
  Building2,
  CalendarDays,
  Briefcase,
  MapPin,
  BadgeIndianRupee,
  Sparkles,
  UserCheck,
} from "lucide-react";

export default function JobCard({ data }) {
  return (
    <div className="border rounded-2xl p-6 shadow-md hover:shadow-lg transition bg-white flex flex-col gap-4">
      {/* Top Section: Company and Post Date */}
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2 text-base text-gray-700 font-semibold">
          <Building2 className="w-5 h-5 text-blue-600" />
          {data.companyName}
        </div>
        <div className="flex items-center gap-1 text-sm text-gray-500">
          <CalendarDays className="w-4 h-4" />
          <span className="font-medium">Posted:</span> {data.dateOfPost}
        </div>
      </div>

      {/* Job Title */}
      <h2 className="text-xl font-bold text-blue-800">{data.jobTitle}</h2>

      {/* Job Details */}
      <div className="flex flex-wrap gap-6 text-gray-700 text-[15px]">
        <div className="flex items-center gap-2">
          <Briefcase className="w-4 h-4 text-gray-500" />
          <span className="font-medium">Type:</span> {data.jobType}
        </div>
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4 text-gray-500" />
          <span className="font-medium">Location:</span> {data.location}
        </div>
        <div className="flex items-center gap-2">
          <BadgeIndianRupee className="w-4 h-4 text-gray-500" />
          <span className="font-medium">CTC:</span> {data.salary}
        </div>
        <div className="flex items-center gap-2">
          <UserCheck className="w-4 h-4 text-gray-500" />
          <span className="font-medium">Experience:</span>{" "}
          {data.experienceRequired}+ yrs
        </div>
      </div>

      {/* Description */}
      {data.description && (
        <div className="text-[15px] text-gray-800 leading-relaxed">
          <span className="font-semibold text-gray-700">Description:</span>{" "}
          {data.description}
        </div>
      )}

      <div>
        <div className="flex items-center gap-2 font-semibold text-gray-800 text-[15px] mb-2">
          <Sparkles className="w-4 h-4 text-purple-600" />
          <span>Required Skills:</span>
        </div>
        <ul className="flex flex-wrap gap-2">
          {data.requiredSkills.map((skill, index) => (
            <li
              key={index}
              className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full font-medium shadow-sm"
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>

      {/* Apply Button */}
      <div className="mt-4">
        <button className="bg-blue-600 hover:bg-blue-700 text-white text-base font-semibold px-5 py-2 rounded-xl shadow-md transition">
          {data.applyLink && (
            <div className="">
              <a
                href={data.applyLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Apply Here
              </a>
            </div>
          )}
        </button>
      </div>
    </div>
  );
}
