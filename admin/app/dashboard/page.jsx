"use client";
import { useAuth } from "../../components/AuthProvider";
import DashboardSidebar from "../../components/DashboardSidebar";
import Header from "../../components/Header";

export default function Dashboard() {
  const { user } = useAuth();

  return (
    <div className="flex min-h-screen bg-white">
      <DashboardSidebar />
      <main className="flex-1 bg-white">
        <Header />
        <div className="p-6">
          <h1 className="text-2xl font-bold text-black">Welcome {user?.name || "Admin"}</h1>
          <p className="text-gray-500 mt-2">Choose a section from the sidebar to manage data.</p>
        </div>
      </main>
    </div>
  );
}
