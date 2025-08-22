"use client";
import LoginForm from "../../components/LoginForm";

export default function LoginPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="w-full max-w-md p-6 border border-gray-300 rounded-lg shadow bg-white">
        <h1 className="text-2xl font-bold text-center text-black mb-6">Admin Login</h1>
        <LoginForm />
      </div>
    </div>
  );
}
