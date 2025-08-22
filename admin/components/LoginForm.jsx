"use client";
import { useState } from "react";
import { apiFetch } from "../lib/api";
import { useAuth } from "./AuthProvider";

export default function LoginForm() {
  const { login } = useAuth();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState(null);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await apiFetch("/admins/login", {
        method: "POST",
        body: JSON.stringify(form),
      });
      login(data.token, data.admin);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <form className="flex flex-col gap-4 bg-white p-4 rounded-xl border border-gray-300 shadow-sm" onSubmit={handleSubmit}>
      <input
        name="email"
        placeholder="Email"
        type="email"
        value={form.email}
        onChange={handleChange}
        className="p-3 border border-gray-300 rounded-md text-black bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300"
      />
      <input
        name="password"
        placeholder="Password"
        type="password"
        value={form.password}
        onChange={handleChange}
        className="p-3 border border-gray-300 rounded-md text-black bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300"
      />
      {error && <p className="text-black bg-gray-100 p-2 rounded">{error}</p>}
      <button className="bg-black text-white py-2 rounded-md hover:bg-gray-800 transition shadow">
        Login
      </button>
    </form>
  );
}
