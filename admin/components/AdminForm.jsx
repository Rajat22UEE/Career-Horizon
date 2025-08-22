"use client";

import { useState } from "react";
import { createAdmin } from "../lib/api";

export default function AdminForm({ onCreated }) {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    setErr("");
    setLoading(true);
    try {
      await createAdmin(form);
      setForm({ name: "", email: "", password: "" });
      onCreated?.();
    } catch (e2) {
      setErr(e2.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={submit} className="bg-white border border-gray-300 p-4 rounded-xl shadow-sm">
      <h3 className="font-bold text-black mb-3">Create Admin</h3>
      {err && <p className="text-black bg-gray-100 text-sm mb-2 p-2 rounded">{err}</p>}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        <input className="border border-gray-300 rounded-lg px-3 py-2 text-black bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300" placeholder="Name"
               value={form.name} onChange={(e)=>setForm({...form, name:e.target.value})} required />
        <input className="border border-gray-300 rounded-lg px-3 py-2 text-black bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300" placeholder="Email" type="email"
               value={form.email} onChange={(e)=>setForm({...form, email:e.target.value})} required />
        <input className="border border-gray-300 rounded-lg px-3 py-2 text-black bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300" placeholder="Password" type="password"
               value={form.password} onChange={(e)=>setForm({...form, password:e.target.value})} required />
      </div>
      <button disabled={loading}
        className="mt-3 px-4 py-2 rounded-lg bg-black text-white hover:bg-gray-800 disabled:opacity-60 shadow"
      >
        {loading ? "Creating..." : "Create"}
      </button>
    </form>
  );
}
