'use client';

import React from 'react';
import { Building2, Phone, Mail } from 'lucide-react';

export default function HRCard({ data }) {
  return (
    <div className="border rounded-2xl p-6 shadow-md hover:shadow-lg transition bg-white flex flex-col gap-4">
      {/* HR Name */}
      <h2 className="text-xl font-bold text-blue-800">{data.hrName}</h2>

      {/* Company */}
      <div className="flex items-center gap-2 text-gray-700 text-[15px]">
        <Building2 className="w-4 h-4 text-blue-600" />
        <span className="font-medium">Company:</span> {data.companyName}
      </div>

      {/* Contact */}
      <div className="flex items-center gap-2 text-gray-700 text-[15px]">
        <Phone className="w-4 h-4 text-green-600" />
        <span className="font-medium">Contact:</span> {data.contact}
      </div>

      {/* Email */}
      <div className="flex items-center gap-2 text-gray-700 text-[15px] break-all">
        <Mail className="w-4 h-4 text-red-600" />
        <span className="font-medium">Email:</span> <a href={`mailto:${data.email}`} className="underline text-blue-700">{data.email}</a>
      </div>
    </div>
  );
}
