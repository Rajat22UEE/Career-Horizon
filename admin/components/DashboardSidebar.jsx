"use client";
import Link from "next/link";

export default function DashboardSidebar() {
 

  return (
    <aside className="w-64 bg-white text-black min-h-screen flex flex-col border-r border-gray-200 shadow-sm">
      
      <nav className="flex-1 p-4 flex flex-col gap-3">
        <Link href="/admins" className="hover:bg-gray-100 p-2 rounded text-black">Admins</Link>
        <Link href="/hr-contacts" className="hover:bg-gray-100 p-2 rounded text-black">HR Contacts</Link>
        <Link href="/internships" className="hover:bg-gray-100 p-2 rounded text-black">Internships</Link>
        <Link href="/jobs" className="hover:bg-gray-100 p-2 rounded text-black">Jobs</Link>
      </nav>
      
    </aside>
  );
}
