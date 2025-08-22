"use client";

import { useAuth } from "./AuthProvider";
import { LogOut } from "lucide-react";

export default function Header() {
  const { admin, logout } = useAuth();
  return (
    <header className="w-full bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between shadow-sm">
      <h1 className="text-xl font-bold text-black">Admin Panel</h1>
      <div className="flex items-center gap-3">
        <span className="text-sm text-gray-500">Logged in as</span>
        <span className="font-semibold text-black">{admin?.name || "Admin"}</span>
        <button
          onClick={logout}
          className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-black text-white hover:bg-gray-800 shadow"
        >
          <LogOut className="w-4 h-4" />
          Logout
        </button>
      </div>
    </header>
  );
}
